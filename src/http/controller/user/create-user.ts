import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createUser(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const registerUserBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
    });

    const { name, email} =
        registerUserBodySchema.parse(request.body);

    await prisma.user.create({
        data: {
            name,
            email,
        },
    });

    return reply.status(201).send();
}

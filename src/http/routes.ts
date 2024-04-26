import {FastifyInstance} from "fastify";
import {prisma} from "@/lib/prisma";
import {createUser} from "@/http/controller/user/create-user";

export async function appRoutes(app: FastifyInstance) {
    app.get("/", async (request, reply) => {

        const response = await prisma.user.findMany();
        return { response }
    });

    app.post("/user", createUser)
}

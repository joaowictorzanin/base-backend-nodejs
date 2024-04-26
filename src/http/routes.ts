import {FastifyInstance} from "fastify";


export async function appRoutes(app: FastifyInstance) {
    app.get("/", async (request, reply) => {
        return { hello: "world" }
    });
}

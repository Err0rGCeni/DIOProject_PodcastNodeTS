import * as http from "http"

import { app } from "./app"

const PORT = process.env.PORT

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log("\x1b[36;40;1m", `Servidor iniciado na porta ${PORT}`, "\x1b[0m")
})

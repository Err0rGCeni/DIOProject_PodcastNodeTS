import * as http from "http"

import { getListEps, getFilterEps } from "./controllers/pdt-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === HttpMethod.GET) {
        console.log("\x1b[32;47m", "GET Processado.", "\x1b[0m")
        const baseUrl = req.url?.split("?")[0] ?? ""
        
        switch (baseUrl) {
            case Routes.LIST:
                await getListEps(req, res)
                break;
            case Routes.EPISODE:
                await getFilterEps(req, res)
                break;
            default:
                break;
        }

    } else {
        console.log("\x1b[31;40m", `Não é um GET.`, "\x1b[0m")
    }
}

import { IncomingMessage, ServerResponse } from 'http'
import { serviceListEps } from '../services/list-eps-service'
import { serviceFilterEps } from '../services/filter-eps-service'
import { ContentType } from '../utils/content-type'
import { PodcastTransferModel } from '../models/filter-pdt-model'

export const getListEps = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await serviceListEps()
    res.writeHead(content.statusCode, { 'Content-type': ContentType.JSON })
    res.end(JSON.stringify(content.body))
}

export const getFilterEps =  async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceFilterEps(req)

    res.writeHead(content.statusCode, {'Content-type': ContentType.JSON })
    res.end(JSON.stringify(content.body))
}

import { PodcastTransferModel } from "../models/filter-pdt-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEps = async (): Promise<PodcastTransferModel> => {
    const responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }
    
    const data = await repositoryPodcast()

    if(data.length > 0) {
        responseFormat.statusCode = StatusCode.OK        
    } else {
        responseFormat.statusCode = StatusCode.NoContent
    }
    responseFormat.body = data

    return responseFormat
}

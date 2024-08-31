import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-pdt-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEps = async (podcastName: IncomingMessage): Promise<PodcastTransferModel> => {
    const responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName.url?.split("?p=")[1] ||  ""
    const data = await repositoryPodcast(queryString);

    if(data.length > 0) {
        responseFormat.statusCode = StatusCode.OK        
    } else {
        responseFormat.statusCode = StatusCode.NoContent
    }
    responseFormat.body = data

    return responseFormat
}

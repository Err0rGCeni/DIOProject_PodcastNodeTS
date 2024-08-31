import PodcastModel from "./pdt-transfer-model";

export interface PodcastTransferModel {
    statusCode: number
    body: PodcastModel[]
}

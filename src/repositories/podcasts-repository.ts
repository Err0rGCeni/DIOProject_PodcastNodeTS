import fs from "fs"
import path from "path"

import PodcastModel from "../models/pdt-transfer-model"

const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const lang = "utf-8"
    const data = fs.readFileSync(pathData, lang)
    let jsonFile = JSON.parse(data)
    //console.log(podcastName)

    if (podcastName) {
        jsonFile = jsonFile.filter((e: PodcastModel) =>
            //console.log(e)
            e.podcastName === podcastName
        )
    }

    return jsonFile
}

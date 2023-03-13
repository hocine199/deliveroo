import {createClient} from "@sanity/client"
// //import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

const SanityClient = createClient({
    projectId: "l1mhe24l",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-03-12"
}) 

const builder = imageUrlBuilder(SanityClient)

export const urlFor = (source) => builder.image(source)

export default SanityClient;
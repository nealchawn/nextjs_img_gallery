// @ is import alias
import type { ImagesResults } from "@/models/images";
import { ImagesSchemaWithPhotos } from "@/models/images"
import env from "./env"

// Promise<ImagesResults> is the return type
// alt+z wrap down
export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
  try {
    // could be undefined, use envalid
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY
      }
    })

    if(!res.ok) throw new Error("Fetch Images Error!\n")
    
    const imagesResults: ImagesResults = await res.json()

    //note this is on the server, so you will see in the terminal, not the browser console.
    // console.log(imagesResults)

    // Parse data with Zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

    if(parsedData.total_results === 0) return undefined

    return parsedData
  } catch (e) {
    // Will show in terminal console
    if (e instanceof Error) console.log(e.stack)
  }
}
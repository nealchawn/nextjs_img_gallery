import fetchImages from "../lib/fetchImages";
import type { ImagesResults } from "@/models/images";




// rfc react functional component from es7 react snippits extension
export default async function Gallery() {
  const url = 'https://api.pexels.com/v1/curated'

  const images: ImagesResults | undefined = await fetchImages(url)

  // FE in web browser
  // console.log(images)

  // Emmet Abbreviation: h2
  // if (!images) return h2.m-4.text-2xl.font-bold, tab
  if (!images) return <h2 className="m-4 text-2xl font-bold">No images Found</h2>


  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
        {
          images.photos.map(photo => (
            <div key={photo.id} className="h-64 bg-gray-200 rounded-xl"></div>
          ))
        }
    </section>
  )
}
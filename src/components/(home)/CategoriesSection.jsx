import { CategoriesCarousel } from "./CategoriesCarousel"

export default function CategoriesSection() {
  return (
    <section className="flex items-center bg-background w-full">
      <div className="flex flex-col justify-between items-center gap-12 mx-auto px-4 py-28 container">
        <div className="flex flex-col gap-4 mx-auto text-center">
          <h2 className="font-bold text-3xl">Explore nossas categorias</h2>
          <p className="text-gray-500">Seleções pensadas para você</p>
        </div>

        <CategoriesCarousel />
      </div>
    </section>
  )
}

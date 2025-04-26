import Link from "next/link"
import { Button } from "../ui/button"

export default function HeroSection() {
  return (
    <section className="flex items-center mt-16 w-full h-[calc(100vh-4rem)]">
      <div className="flex flex-col justify-between items-center md:items-start gap-11 mx-auto px-4 py-3 container">
        <p className="font-bold text-[20px] text-center">
          Nessa estação, encontre o melhor 🔥
        </p>

        <h1 className="max-w-[500px] lg:max-w-[500px] font-bold text-5xl lg:text-8xl text-center md:text-start text-wrap">
          Coleção exclusiva para todos
        </h1>

        <Button
          className="px-10 py-4 rounded-full w-min h-auto font-bold text-[18px]"
          asChild
        >
          <Link href="#">Explorar agora</Link>
        </Button>
      </div>
    </section>
  )
}

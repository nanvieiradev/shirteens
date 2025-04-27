import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button/Index"

export default function Banner() {
  return (
    <section className="flex items-center bg-background w-full">
      <div className="flex flex-col justify-between items-center gap-12 mx-auto px-4 py-28 container">
        <div className="flex flex-col justify-between items-center md:items-start gap-10 bg-amber-600 px-6 sm:px-12 lg:px-28 py-28 rounded-4xl text-center sm:text-start container">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/shirteens_logo.svg"
                alt="Shirteens logo"
                width={40}
                height={40}
                priority
              />
              <span className="font-bold text-white text-2xl">Shirteens</span>
            </Link>

            <h1 className="max-w-[500px] font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center md:text-start">
              Oferta especial em produtos infantis
            </h1>
            <p className="max-w-[385px] font-medium text-center md:text-start">
              A moda é uma forma de autoexpressão e autonomia em um determinado
              período e local
            </p>
          </div>
          <Button
            variant="foreground"
            className="px-10 py-4 rounded-full w-min h-auto font-bold text-[18px]"
            asChild
          >
            <Link href="#">Descubra mais</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "../ui/button/Index"

export default function PromotionBanner() {
  return (
    <section className="flex items-center bg-amber-700 border-b w-full text-white">
      <div className="flex flex-col justify-between gap-12 mx-auto px-4 py-28 container">
        <div className="flex flex-col items-center md:items-start gap-8">
          <h3 className="font-bold text-2xl">Promoção da semana</h3>
          <h2 className="max-w-[500px] font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-start sm:leading-12 md:leading-14">
            Até 70% de desconto em camisetas e acessórios
          </h2>
          <Button
            className="px-10 py-4 rounded-full w-min h-min font-bold md:text-[18px] text-base"
            variant="secondary"
            asChild
          >
            <Link href="#">Todos os descontos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

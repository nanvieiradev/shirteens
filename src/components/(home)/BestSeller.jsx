import Image from "next/image"
import Rate from "../ui/rate/Index"
import { Button } from "../ui/button/Index"
import { ShoppingCart } from "lucide-react"
import { formatReview } from "@/lib/formatReview"

export default function BestSeller({
  rate,
  reviews,
  name,
  price,
  // discount,
  src,
}) {
  return (
    <div className="flex flex-col gap-6 rounded-b-xl">
      <div className="relative bg-gray-500 border rounded-t-xl aspect-square">
        <Image src={src} alt={"alt"} layout="fill" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <Rate rate={rate} />
            <span className="text-gray-500">{`(${formatReview(
              reviews
            )})`}</span>
          </div>
          <span className="font-medium sm:text-[20px] text-base">{name}</span>
          <div className="flex flex-row items-center gap-4">
            <span className="font-medium text-nowrap">{`R$ ${price}`}</span>
            <span className="text-[12px]">
              {/* {discount && `${discount}% de desconto`} */}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="mt-auto rounded-full size-10 sm:size-12">
            <ShoppingCart className="w-6 h-6" size="icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}

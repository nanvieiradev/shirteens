import { Star } from "lucide-react"

export default function Rate({ rate = 0 }) {
  return (
    <div className="flex flex-row gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          fill={index < rate ? "orange" : "gray"}
          className="w-4 sm:w-6 h-4 sm:h-6"
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

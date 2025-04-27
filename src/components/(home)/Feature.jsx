import { Badge } from "../_ui/badge/Index"

export default function Feature({ title, subtitle, badgeLabel, color }) {
  return (
    <div
      className={`flex flex-col justify-between gap-6 bg-${color} p-8 rounded-2xl text-white`}
    >
      <div className="flex flex-col gap-3">
        <span className="font-medium text-[14px]">{subtitle}</span>
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>
      <Badge
        variant="light"
        className="px-4 py-2 rounded-full font-medium text-[14px]"
      >
        {badgeLabel}
      </Badge>
    </div>
  )
}

import Feature from "./Feature"

export default function FeaturesSection() {
  const features = [
    {
      title: "Produtos de qualidade e confiabilidade",
      subtitle: "Não decepcionamos",
      badgeLabel: "100% certificado",
    },
    {
      title: "Atendimento atencioso e dedicado",
      subtitle: "Garantimos tudo",
      badgeLabel: "Suporte pronto",
    },
    {
      title: "Entrega rápida e segura",
      subtitle: "Asseguramos seu pacote",
      badgeLabel: "Por todo o Brasil",
    },
  ]

  return (
    <section className="flex items-center bg-background w-full">
      <div className="flex flex-col justify-between gap-12 mx-auto px-4 py-28 container">
        <h2 className="font-bold text-3xl">Por que comprar com a Shirteens?</h2>

        <div className="justify-between gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              badgeLabel={feature.badgeLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

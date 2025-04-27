import BestSeller from "./BestSeller"

export default function BestSellersSection() {
  const bestSellers = [
    {
      rate: 5,
      reviews: 5824992,
      name: "705 shirt black",
      price: 129,
      discount: 65,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 5,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      discount: 65,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 5,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      discount: 65,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 5,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      discount: 65,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 5,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      discount: 65,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 5,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 5,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      src: "/images/shirts/705_black.png",
    },
    {
      rate: 4,
      reviews: 11600,
      name: "705 shirt black",
      price: 129,
      src: "/images/shirts/705_black.png",
    },
  ]

  return (
    <section className="flex items-center bg-background w-full">
      <div className="flex flex-col justify-between gap-12 mx-auto px-4 py-28 container">
        <div className="flex flex-col gap-4 mx-auto text-center">
          <h2 className="font-bold text-3xl">Produtos em alta</h2>
          <p className="text-gray-500">Mais vendidos do mês</p>
        </div>

        <div className="gap-x-6 gap-y-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((bestSeller, index) => (
            <BestSeller
              key={index}
              rate={bestSeller.rate}
              reviews={bestSeller.reviews}
              name={bestSeller.name}
              price={bestSeller.price}
              discount={bestSeller.discount}
              src={bestSeller.src}
              title={bestSeller.title}
              subtitle={bestSeller.subtitle}
              badgeLabel={bestSeller.badgeLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

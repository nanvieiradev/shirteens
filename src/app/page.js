import Banner from "@/components/(home)/Banner"
import BestSellersSection from "@/components/(home)/BestSellersSection"
import CategoriesSection from "@/components/(home)/CategoriesSection"
import FeaturesSection from "@/components/(home)/FeaturesSection"
import HeroSection from "@/components/(home)/HeroSection"
import PromotionBanner from "@/components/(home)/PromotionBanner"
import Head from "next/head"

export const metadata = {
  title: "Shirteens",
  description:
    "Uma loja virtual de camisetas e acessórios criada para oferecer uma experiência de compra moderna, rápida e intuitiva.",
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Shirteens</title>
      </Head>
      <HeroSection />
      <FeaturesSection />
      <BestSellersSection />
      <PromotionBanner />
      {/* <CategoriesSection /> */}
      <Banner />
    </>
  )
}

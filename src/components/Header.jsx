"use client"

import Link from "next/link"
import { Button } from "./_ui/button/Index"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export default function Header() {
  // const {items} = useCartStore()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    // Remover o event listener quando o componente desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`z-50 fixed flex items-center w-full h-16 transition-colors ${
        scrolled ? "bg-background" : ""
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-4 py-3 container">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/shirteens_logo.svg"
            alt="Shirteens logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-bold text-2xl">Shirteens</span>
        </Link>

        {/* Navbar Links */}
        <nav className="hidden md:flex gap-12 font-medium">
          <Link href="#" className="font-bold transition-colors">
            Início
          </Link>
          <Link href="#" className="transition-colors">
            Loja
          </Link>
          <Link href="#" className="transition-colors">
            Sobre
          </Link>
          <Link href="#" className="transition-colors">
            Contato
          </Link>
        </nav>

        {/* Botões (Search, Account, Cart) */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" className="relative hover:text-foreground">
              <ShoppingCart className="w-5 h-5" />
              {/* {items.length > 0 && (
                  <span className="-top-1 -right-2 absolute flex justify-center items-center bg-accent rounded-full w-4 h-4 text-white text-xs">
                    {items.length}
                  </span>
                )} */}
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger className="sm:hidden" asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="gap-6">
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/icons/shirteens_logo.svg"
                      alt="Shirteens logo"
                      width={24}
                      height={24}
                      priority
                    />
                    <span className="font-bold text-2xl">Shirteens</span>
                  </Link>
                </SheetTitle>
                <SheetDescription asChild>
                  <nav className="sm:hidden flex flex-col gap-6 font-medium text-sm">
                    <Button asChild variant="outline">
                      <Link href="#" className="font-bold transition-colors">
                        Início
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/#" className="transition-colors">
                        Loja
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/#" className="transition-colors">
                        Sobre
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/#" className="transition-colors">
                        Contato
                      </Link>
                    </Button>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

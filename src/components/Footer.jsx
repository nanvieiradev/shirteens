import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button/Index"

export default function Footer() {
  return (
    <footer className="flex items-center bg-background w-full">
      <div className="flex flex-col justify-between items-center mx-auto px-4 pt-20 container">
        <div className="justify-between gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/shirteens_logo.svg"
                alt="Shirteens logo"
                width={40}
                height={40}
                priority
              />
              <span className="font-bold text-2xl">Shirteens</span>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-[20px]">Contato</h4>
                <ul className="flex flex-col gap-1">
                  <li>
                    <strong className="text-secondary-foreground">
                      Endereço:{" "}
                    </strong>
                    <span className="font-medium text-muted-foreground">
                      562 Wellington Road
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground">
                      Telefone:{" "}
                    </strong>
                    <span className="font-medium text-muted-foreground">
                      0800 123 4567
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground">
                      Horário:{" "}
                    </strong>
                    <span className="font-medium text-muted-foreground">
                      10:00 - 18:00, Seg - Sáb
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-[20px]">Siga-nos</h4>
                <ul className="flex flex-row items-center gap-3">
                  <Link href="#">
                    <Image
                      src="/icons/instagram_logo.png"
                      alt="Instagram Logo"
                      width={21}
                      height={29}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/icons/facebook_logo.png"
                      alt="Facebook Logo"
                      width={10}
                      height={24}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/icons/x_logo.png"
                      alt="X Logo"
                      width={20}
                      height={24}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/icons/pinterest_logo.png"
                      alt="Pinterest Logo"
                      width={15}
                      height={24}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/icons/youtube_logo.png"
                      alt="YouTube Logo"
                      width={21}
                      height={24}
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[20px]">Sobre</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Informação de entrega
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[20px]">Minha conta</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Entrar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Ver carrinho
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Minha Lista de Desejos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Rastrear meu pedido
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  Ajuda
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[20px]">Instalar App</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col justify-between gap-5">
                <span className="font-medium text-muted-foreground">
                  Da App Store ou Google Play
                </span>
                <div className="gap-2 grid grid-cols-2 w-full max-w-[334px]">
                  <Button
                    variant="outline"
                    className="flex flex-row gap-2 hover:bg-primary px-7 border rounded-[6px] w-full h-14 hover:text-white"
                    asChild
                  >
                    <Link href="#">
                      <Image
                        src="/icons/apple_logo.svg"
                        alt="Apple Logo"
                        width={20}
                        height={24}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-[12px]">
                          Baixar na
                        </span>
                        <strong>App Store</strong>
                      </div>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex flex-row gap-2 hover:bg-primary px-7 border rounded-[6px] w-full h-14 hover:text-white"
                    asChild
                  >
                    <Link href="#">
                      <Image
                        src="/icons/google_play_logo.png"
                        alt="Google Play Logo"
                        width={28}
                        height={28}
                      />
                      <div className="flex flex-col">
                        <span>Google Play</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </li>
              <li className="flex flex-col gap-5">
                <span className="font-medium text-muted-foreground">
                  Portais de Pagamento Seguros
                </span>
                <div className="flex flex-row justify-between gap-1 max-w-[400px]">
                  <Image
                    src="/icons/visa_inc_logo.svg"
                    alt="Visa Logo"
                    height={24}
                    width={36}
                  />
                  <Image
                    src="/icons/mastercard_inc_logo.svg"
                    alt="Mastercard Logo"
                    height={24}
                    width={36}
                  />
                  <Image
                    src="/icons/hipercard_logo.png"
                    alt="Hipercard Logo"
                    height={24}
                    width={48}
                  />
                  <Image
                    src="/icons/mercado_pago_logo.png"
                    alt="Mercado Pago Logo"
                    height={24}
                    width={68}
                  />
                  <Image
                    src="/icons/paypal_logo.png"
                    alt="PayPal Logo"
                    height={100}
                    width={84}
                    className="xl:w-24"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span className="py-5 font-bold">
          © 2025. Shirteens - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}

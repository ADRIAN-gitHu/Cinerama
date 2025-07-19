import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <img alt="" class="h-11" src={assets.logo} />
                    <p className="mt-6 text-sm">
                        En Cinerama buscamos ser la mejor opción de entretenimiento fortaleciendo nuestro liderazgo en la industria cinematográfica a nivel nacional, ofreciendo diversión, innovación y un servicio estelar. Próximamente disponible en:
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} alt="google play" className="h-9 w-auto" />
                        <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Cinerama</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/movies">Peliculas</a></li>
                            <li><a href="#">Cines</a></li>
                            <li><a href="#">Lanzamientos</a></li>
                            <li><a href="/information">Nosotros</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Contáctanos</h2>
                        <div className="text-sm space-y-2">
                            <p>+51-234-567</p>
                            <p>cinerama@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://prebuiltui.com">Cinerama</a>. Todos los derechos reservados.
            </p>
        </footer>
  )
}

export default Footer
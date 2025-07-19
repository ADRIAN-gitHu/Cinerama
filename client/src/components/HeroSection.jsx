import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

import React from 'react'

const HeroSection = () => {
    
    const navigate= useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.jpg")] bg-cover bg-center h-screen'>
        <h1 className='text-5x1 md:text-[70px] md:leading-18 font-semibold max-w-110'>Jurassic World:<br/>El Renacer</h1>
        <div className='flex items-center gap-4 text-gray-300'>
            <span>Acción | Aventura | Ficción</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/>2025
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/>2h 13m
            </div>
        </div>
        <p className='max-w-md text-gray-300'>Años después de Jurassic World: Dominion, tres dinosaurios podrían salvar a la humanidad. Zora Bennett lidera una misión secreta para obtener su ADN, pero todo se complica al quedar atrapados en una isla prohibida junto a una familia civil.</p>
        <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer text-white'>
            Explorar Películas
            <ArrowRight className='w-5 h-5'/>
        </button>
    </div>
  )
}

export default HeroSection
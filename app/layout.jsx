import React from 'react'
import Navbar from '../components/Navbar'
import "./globals.css"
import { orbitron, exo2 } from './fonts'


export const metadata = {
    title:{
        default: 'Indie Gamer',
        template:'%s | Indie Gamer'
    },

  }

const Layout = ({ children }) => {
    return (
        <html lang='en' className={`${orbitron.variable} ${exo2.variable}`}>
            <body className=' flex flex-col min-h-screen px-4 py-3 bg-orange-50' suppressHydrationWarning={true}>
                <header>
                    <Navbar />
                </header>
                <main className=' grow py-3'>
                    {children}
                </main>
                <footer className=' text-slate-500 border-t py-3 text-center text-xs'>
                    Game data and images courtesy
                    of{" "}<a href="https://rawg.io/" target="_blank" className=' text-orange-800 hover:underline'>RAWG</a>
                </footer>
            </body>
        </html>
    )
}

export default Layout
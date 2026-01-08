import { NavLink } from 'react-router'
import logo from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger-menu.svg'
import ButtonLink from './ButtonLink'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <motion.header className='flex sticky top-0 text-xl md:text-lg items-center justify-between p-6 lg:px-12 lg:py-4 xl:px-24 2xl:px-48 border-b border-gray-300 bg-offwhite-warm z-20'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
        >
            <NavLink to={'/'}>
                <img src={logo} alt="Brand Logo" />
            </NavLink>
            <nav className={`max-md:absolute max-md:top-full max-md:inset-x-6 max-md:bg-white md:block max-sm:px-4 max-md:px-8 max-md:py-6 max-md:rounded-lg max-md:shadow-xl ${isMenuOpen ? 'max-md:block' : 'max-md:hidden'}`}>
                <ul className="flex flex-col text-slate-dark font-semibold max-md:gap-y-3 md:flex-row md:gap-x-6 lg:gap-x-10">
                    <li><NavLink to={'/'} onClick={toggleMenu} className="navlink">Home</NavLink></li>
                    <li><NavLink to={'/about'} onClick={toggleMenu} className="navlink">About</NavLink></li>
                    <li><NavLink to={'/recipes'} onClick={toggleMenu} className="navlink">Recipes</NavLink></li>
                    <li className="md:hidden"><ButtonLink route={'/recipes'} onClick={toggleMenu} text={'Browse Recipes'} className='rounded-lg' /></li>
                </ul>
            </nav>
            <button className={`bg-mint-light px-2.5 cursor-pointer ${isMenuOpen ? 'border-green-deep' : 'border-transparent'} py-2 border-2 rounded-xs md:hidden`} onClick={toggleMenu}><img src={hamburgerIcon} alt="Hamburger Icon For Opening Menu" /></button>
            <ButtonLink text={'Browse Recipes'} route={'/recipes'} className='px-6 rounded-md max-md:hidden' />
        </motion.header>
    )
}
export default Header
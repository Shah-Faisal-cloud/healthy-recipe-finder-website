import ButtonLink from "./ButtonLInk"
import imagePatternFork from '../assets/images/pattern-fork.svg'
import imagePatternKnife from '../assets/images/pattern-knife.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconBluesky from '../assets/images/icon-bluesky.svg'
import iconTiktok from '../assets/images/icon-tiktok.svg'
const Footer = () => {
    return (
        <footer className="section-padding">
            <div className="bg-mint-light/60 flex flex-col items-center px-4 py-12 md:py-20 rounded-xl gap-y-4 md:gap-y-5 overflow-hidden relative">
                <h2 className="text-center leading-10 z-10">Ready To Cook Smarter?</h2>
                <p className="font-semibold text-xl text-center z-10">Hit the button, pick a recipe, and get dinner on the table-fast.</p>
                <ButtonLink text={'Browse Recipes'} route={'/recipes'} className="px-6 rounded-lg text-lg"/>
                <img src={imagePatternKnife} alt="" className="absolute right-1 -top-12 w-44 max-md:hidden"/>
                <img src={imagePatternFork} alt="" className="absolute -left-12 -bottom-12 w-44 max-md:hidden"/>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-y-4 items-center my-8">
                <p className="order-1 md:order-0 font-semibold text-green-deep">All rights reserved © Shah Faisal Cloud</p>
                <div className="flex gap-x-6">
                    <a href="#"><img src={iconInstagram} alt="" /></a>
                    <a href="#"><img src={iconBluesky} alt="" /></a>
                    <a href="#"><img src={iconTiktok} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
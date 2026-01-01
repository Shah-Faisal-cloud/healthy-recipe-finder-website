import iconMinimumFuss from '../assets/images/icon-minimum-fuss.svg'
import iconSearchInSeconds from '../assets/images/icon-search-in-seconds.svg'
import iconWholeFood from '../assets/images/icon-whole-food-recipes.svg'
import heroDesktop from '../assets/images/image-home-hero-large.webp'
import heroMobile from '../assets/images/image-home-hero-small.webp'
import imgHomeLifeDesktop from '../assets/images/image-home-real-life-large.webp'
import imgHomeLifeMobile from '../assets/images/image-home-real-life-small.webp'
import imgPattern from '../assets/images/pattern-squiggle-1.svg'
import ButtonLink from '../components/ButtonLInk'
import ContentBlock from '../components/ContentBlock'
import ContentWithImage from '../components/ContentWithImage'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <main className='w-full '>
            <motion.section className='relative'
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                <div className='section-padding flex flex-col gap-y-8'>
                    <ContentBlock
                        classname='items-start md:items-center'
                        paraClasses={'max-w-[600px] md:text-center'}
                        level={'h1'}
                        title={
                            <>
                                <span className='muted'>Healthy</span> Meals, Zero Fuss
                            </>
                        }
                        description='Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.'
                        bottomElement={
                            <ButtonLink text={'Start Exploring'} route={'/recipes'} className={'px-6 rounded-md md:text-lg'} />
                        }
                    />
                    <div className="rounded-lg border-5 md:border-10 border-white">
                        <picture>
                            <source media='(min-width: 768px)' srcSet={heroDesktop} />
                            <img src={heroMobile} alt="Hero Image" className='rounded-lg' />
                        </picture>
                    </div>
                </div>
                <img src={imgPattern} alt="" className='absolute bottom-10 md:bottom-16 lg:bottom-24 -z-10 w-full' />
            </motion.section>
            <section className="section-padding flex flex-col gap-y-8 lg:gap-y-12">
                <h2 className="text-center">What You'll Get</h2>
                <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-8 items-start">
                    {[
                        {
                            image: iconWholeFood,
                            title: 'Food Recipes',
                            description: 'Each dish uses everyday, unprocessed ingredients.'
                        },
                        {
                            image: iconMinimumFuss,
                            title: 'Minimum Fuss',
                            description: 'All recipes are designed to make eating healthy quick and easy.'
                        },
                        {
                            image: iconSearchInSeconds,
                            title: 'Search In Seconds',
                            description: 'Filter by name or ingredient and jump straight to the recipe you need.'
                        }
                    ].map((element, index) => {
                        return (
                            <ContentBlock
                                key={index}
                                topElement={
                                    <>
                                        <div className="border border-gray-200 w-12 h-12 rounded-xl flex items-center justify-center bg-white">
                                            <img src={element.image} alt="icons" />
                                        </div>
                                    </>
                                }
                                level={'h3'}
                                title={element.title}
                                description={element.description}
                                classname='flex-1 md:max-w-[400px]'
                            />
                        )
                    })}
                </div>
                <hr className='mt-4' />
            </section>
            <ContentWithImage
                level={'h2'}
                title={'Built For Real Life'}
                description={
                    <>
                        Cooking shouldn't be complicated. These recipes come in under of active time, fit busy schedules, and taste good enough to repeat.
                        <span className='muted font-bold'> 30 minutes.</span><br /><br />
                        Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
                    </>
                }
                imgDesktop={imgHomeLifeDesktop}
                imgMobile={imgHomeLifeMobile}
            />
        </main>
    )
}
export default Home
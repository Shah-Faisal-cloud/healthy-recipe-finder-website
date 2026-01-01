import iconServings from '../assets/images/icon-servings.svg'
import iconPrepTime from '../assets/images/icon-prep-time.svg'
import iconCookTime from '../assets/images/icon-cook-time.svg'
import ButtonLink from './ButtonLInk'
const Card = ({ element }) => {
    return (
        <div className='p-2 bg-white rounded-lg shadow-xl'>
            <div className='rounded-lg overflow-hidden'>
                <picture>
                    <source media="(min-width: 550px)" srcSet={`/images/${element.image.large}`} />
                    <img src={`/images/${element.image.small}`} alt="" className='object-cover' />
                </picture>
            </div>
            <div className='mt-4 flex flex-col gap-y-4'>
                <h4 className='text-xl font-bold text-green-deep truncate'>{element.title}</h4>
                <p className='font-semibold line-clamp-2'>{element.overview}</p>
                <div className='flex flex-wrap gap-x-8 gap-y-2 text-green-deep'>
                    <div className='flex gap-x-2'>
                        <img src={iconServings} alt="" className='object-contain' />
                        <span>Servings: {element.servings}</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <img src={iconPrepTime} alt="" className='object-contain' />
                        <span>Prep: {element.prepMinutes} Minutes</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <img src={iconCookTime} alt="" className='object-contain' />
                        <span>Cook: {element.cookTime} Minutes</span>
                    </div>
                </div>
                <ButtonLink text={'View Recipe'} route={`/recipes/${element.slug}`} className='rounded-full' />
            </div>
        </div>
    )
}

export default Card
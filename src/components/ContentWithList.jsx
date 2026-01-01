import iconBullet from '../assets/images/icon-bullet-point.svg'
const ContentWithList = ({ title, array }) => {
    return (
        <section className='flex flex-col lg:flex-row section-padding gap-y-10 lg:gap-x-6 xl:gap-x-12 2xl:gap-x-24 border-b-2 border-green-muted/25 pb-16'>
            <div className='flex-[1.5]'>
                <h2>{title}</h2>
            </div>
            <div className='flex-[2.5]'>
                <ul className='flex flex-col gap-y-6'>
                    {array.map((element, index) => {
                        return (
                            <li key={index} className='flex items-start gap-x-4'>
                                <img src={iconBullet} alt="Arrow Icon" />
                                <div className="flex flex-col gap-y-2">
                                    <h4 className='text-2xl font-bold text-green-deep'>{element.title}</h4>
                                    <p className='text-lg lg:text-xl'>{element.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
export default ContentWithList
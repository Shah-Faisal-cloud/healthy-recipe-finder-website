import iconBullet from '../assets/images/icon-bullet-point.svg'
const List = ({ title, list }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul className='flex flex-col gap-y-2 text-xl mt-2'>
                {list.map((element, index) => {
                    return (
                        <li className='flex gap-x-3 items-center text-green-muted' key={index}>
                            <img src={iconBullet} alt="" />
                            <p>{ element }</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List
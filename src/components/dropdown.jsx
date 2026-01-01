import iconChevronDown from '../assets/images/icon-chevron-down.svg'
import { useRef, useEffect } from "react"

const Dropdown = ({ buttonText, array, amIOpen, onClick, closeDropdown, maxTime, setMaxTime}) => {

    const dropdown = useRef(null)

    const handleOutsideClicks = (e) => {
        if (dropdown.current && !dropdown.current.contains(e.target)) {
            closeDropdown()
        }
    }

    useEffect(() => {
        if (amIOpen) {
            document.addEventListener('click', handleOutsideClicks)
        }
        return () => {
            document.removeEventListener('click', handleOutsideClicks)
        }
    }, [amIOpen])


    return (
        <div className='relative' ref={dropdown}>
            <button className={`bg-white flex gap-x-4 w-full px-5 border-2 cursor-pointer ${amIOpen ? 'border-green-deep' : 'border-white'} py-2 text-green-deep font-semibold justify-center text-xl items-center rounded-lg`} onClick={onClick}>
                {buttonText}
                <img src={iconChevronDown} alt="Chevron Down Icon" className='object-contain' />
            </button>
            {amIOpen && <ul className='p-5 bg-white absolute w-60 top-full rounded-lg mt-2 z-20 text-lg text-green-deep flex flex-col gap-y-3'>
                {array.map((element, index) => {
                    const id = `option-${index + 1}`
                    return (
                        <li key={index} className='flex gap-x-3 items-center'>
                            <input type="radio" name="dropdown-option" id={id} className='appearance-none cursor-pointer peer w-5 h-5 border-2 p-2 shadow-[inset_0_0_0_3px_white] border-gray-400 rounded-full checked:border-green-muted checked:bg-green-muted' checked={maxTime === element} onChange={() => setMaxTime(element)}/>
                            <label htmlFor={id} className=' cursor-pointer'>{`${element} minutes`}</label>
                        </li>
                    )
                })}
                <li>
                    <button className='cursor-pointer' onClick={() => setMaxTime(Infinity)}>Clear</button>
                </li>
            </ul>}
        </div>
    )
}
export default Dropdown
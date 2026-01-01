import ContentBlock from "../components/ContentBlock"
import Dropdown from "../components/dropdown"
import iconSearch from '../assets/images/icon-search.svg'
import { useState } from "react"
import Card from "../components/Card"
import data from '../assets/data.json'

const Recipes = () => {
    const [openedDropdown, setOpenedDropdown] = useState(null)

    const toggleDropdown = (dropdown) => {
        if (openedDropdown === dropdown) {
            setOpenedDropdown(null)
        } else {
            setOpenedDropdown(dropdown)
        }
    }


    const [maxPrepTime, setMaxPrepTime] = useState(Infinity)
    const [maxCookTime, setMaxCookTime] = useState(Infinity)
    const [search, setSearch] = useState("")

    const filteredData = data.filter((item) => {
        return item.prepMinutes <= maxPrepTime && item.cookMinutes <= maxCookTime
    }).filter((item) => {
        return item.title.toLowerCase().includes(search)
    })

    return (
        <main>
            <section className="section-padding">
            <ContentBlock 
                level={'h2'}
                title={'Explore Our Simple, Healthy Recipes'}
                description={'Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.'}
                paraClasses={'max-w-[700px] sm:text-center'}
                classname="sm:items-center"
                
            />
            </section>
            <section className="section-padding">
                <div className="flex flex-col gap-y-5 md:flex-row md:justify-between">
                    <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-3 sm:shrink-0">
                        <Dropdown 
                            buttonText={'Max Prep Time'}
                            array={[0, 5, 10]}
                            amIOpen={openedDropdown === 'prepTime'}
                            onClick={() => toggleDropdown('prepTime')}
                            closeDropdown={() => setOpenedDropdown(null)}
                            maxTime={maxPrepTime}
                            setMaxTime={setMaxPrepTime}
                            />
                        <Dropdown 
                            buttonText={'Max Cook Time'}
                            array={[0, 5, 10, 15, 20]} 
                            amIOpen={openedDropdown === 'cookTime'}
                            onClick={() => toggleDropdown('cookTime')}
                            closeDropdown={() => setOpenedDropdown(null)}
                            maxTime={maxCookTime}
                            setMaxTime={setMaxCookTime}
                        />
                    </div>
                    <div className="flex relative items-center md:grow md:ml-4 md:max-w-[325px]">
                        <img src={iconSearch} alt="Icon For Search" className="object-contain absolute top-1/2 -translate-y-1/2 left-3"/>
                        <input type="text" placeholder="Search by name or ingredient..." className="bg-white py-2 w-full pl-10 rounded-lg border-2 border-white focus:border-green-deep outline-none placeholder:text-lg placeholder:font-semibold text-lg font-semibold textmute" onChange={e => setSearch(e.target.value.toLowerCase())}/>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredData.map((element, index) => {
                        return (
                            <Card element={element} key={index}/>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
export default Recipes
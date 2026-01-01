import { Link, useParams } from "react-router"
import ContentBlock from "../components/ContentBlock"
import iconServings from '../assets/images/icon-servings.svg'
import iconPrepTime from '../assets/images/icon-prep-time.svg'
import iconCookTime from '../assets/images/icon-cook-time.svg'
import List from "../components/List"
import data from '../assets/data.json'
import Card from "../components/Card"

const DetailedRecipe = () => {
    const { slug } = useParams();
    const currentRecipe = data.find((item) => {
        return item.slug === slug
    })

    const recipesExcludingCurrent = data.filter((item) => {
        return item !== currentRecipe
    })

    const suggestedRecipes = recipesExcludingCurrent.slice(0, 3);

    return (
        <main className="section-padding">
            <section className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12 border-b-2 border-green-muted/25 pb-12">
                <div className="md:flex-1">
                    <p className="text-lg font-semibold">
                        <Link to={'/recipes'} className="text-green-muted/75">Recipes / </Link>
                        <span className="text-green-deep">{recipe.title}</span>
                    </p>
                    <div className="rounded-lg overflow-hidden mt-4">
                        <picture>
                        <source media="(min-width: 525px)" srcSet={`/images/${recipe.image.large}`} />
                        <img src={`/images/${recipe.image.small}`} alt={`${recipe.title} image`} />
                    </picture>
                    </div>
                </div>
                <div className="md:flex-1">
                    <ContentBlock 
                        level={'h2'}
                        title={recipe.title}
                        description={recipe.overview}
                        bottomElement={
                            <div className="flex flex-wrap gap-x-8 gap-y-3  text-green-deep text-lg">
                                <div className="flex gap-x-2">
                                    <img src={iconServings} alt="" className='object-contain' />
                                    <span>Servings: {recipe.servings}</span>
                                </div>
                                <div className="flex gap-x-2">
                                    <img src={iconPrepTime} alt="" className='object-contain' />
                                    <span>Prep: {recipe.prepMinutes} Minutes</span>
                                </div>
                                <div className="flex gap-x-2">
                                    <img src={iconCookTime} alt="" className='object-contain' />
                                    <span>Cook: {recipe.cookMinutes} Minutes</span>
                                </div>
                            </div>
                        }
                    />
                    <div className="flex flex-col gap-y-4 mt-8">
                        <List title={'Ingredients'} list={recipe.ingredients}/>
                        <List title={'Instructions'} list={recipe.instructions}/>
                    </div>
                </div>
            </section>
            <section className="mt-6 md:mt-12">
                <h3>More Recipes</h3>
                <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {suggestedRecipes.map((element, index) => {
                            return (
                                <Card element={element} key={index}/>
                            )
                        })}
                </div>
            </section>
        </main>
    )
}
export default DetailedRecipe
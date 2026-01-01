import ContentWithImage from "../components/ContentWithImage"
import imgAboutMissionDesktop from '../assets/images/image-about-our-mission-large.webp'
import imgAboutMissionMobile from '../assets/images/image-about-our-mission-small.webp'
import ContentWithList from "../components/ContentWithList"
import imgBeyondPlateDesktop from '../assets/images/image-about-beyond-the-plate-large.webp'
import imgBeyondPlateMobile from '../assets/images/image-about-beyond-the-plate-small.webp'

const About = () => {
    return (
        <main>
            <ContentWithImage 
                level={'h2'}
                title={'Help More People Keep Nourishing Meals, More Often.'}
                description={
                    <>
                        Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.
                        <br /><br />
                        We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps
                    </>
                }
                topElement={
                    <>
                        <span className="text-xl font-bold text-green-deep bg-orange-muted w-fit px-2 py-0.5 rounded-md">Our Mission</span>
                    </>
                }
                classname="pb-20 border-b-2 border-green-muted/25"
                imgDesktop={imgAboutMissionDesktop}
                imgMobile={imgAboutMissionMobile}
            />
            <ContentWithList 
            title={'Why We Exist'}
            array={
                [
                    {
                        title: 'Cut through the noise.',
                        description: 'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.'
                    },
                    {
                        title: 'Empower home kitches.',
                        description: 'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
                    },
                    {
                        title: 'Make healthy look good.',
                        description: 'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.'
                    }    
                ]
            } 
            />

            <ContentWithList 
                title={'Our Food Philosphy'}
                array={
                    [
                        {
                            title: 'Whole ingredients first.',
                            description: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.'
                        },
                        {
                            title: 'Flavor without compromise.',
                            description: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.'
                        },
                        {
                            title: 'Respect for time.',
                            description: 'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful'
                        },
                        {
                            title: 'Sustainable choices.',
                            description: 'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.'
                        }
                    ]
                }
            />
            <ContentWithImage 
                level={'h2'}
                title={'Beyond The Plate'}
                description={
                    <>
                        We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
                        <ul className="list-disc list-outside pl-6 mt-3">
                            <li>Encourage family dinners and social cookings.</li>
                            <li>Reduce reliance on single-use packaging and delivery waste.</li>
                            <li>Spark curiosity about seasonal produce and local agriculture.</li>
                        </ul>
                    </>
                }
                imgDesktop={imgBeyondPlateDesktop}
                imgMobile={imgBeyondPlateMobile}
            />
        </main>
    )
}
export default About
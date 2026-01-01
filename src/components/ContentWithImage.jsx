import ContentBlock from "./ContentBlock"

const ContentWithImage = ({
    level,
    title,
    description,
    topElement,
    bottomElement,
    classname = '',
    imgDesktop,
    imgMobile
}) => {
    return (
        <section className={`section-padding flex max-md:gap-y-6 md:gap-y-12 flex-col lg:flex-row lg:gap-x-8 xl:gap-x-16 ${classname}`}>
            <ContentBlock
                level={level}
                title={title}
                description={description}
                topElement={topElement}
                bottomElement={bottomElement}
                classname="flex-1"
            />

            <div className="flex-1">
            <picture>
                <source media="(min-width: 768px)" srcSet={imgDesktop} />
                <img src={imgMobile} alt="" className="rounded-xl"/>
            </picture>
            </div>
        </section>
    )
}
export default ContentWithImage
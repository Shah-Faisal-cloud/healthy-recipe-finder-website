import { motion } from "framer-motion";
const ContentBlock = ({
    level,
    title,
    description,
    topElement,
    bottomElement,
    classname = '',
    paraClasses
}) => {
    const Tag = level;
    const MotionTag = motion(Tag)
    return (
        <div className={`flex flex-col gap-y-4 justify-center ${classname}`}>
            {topElement && topElement}
            <MotionTag className="text-green-deep"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
            >{title}</MotionTag>
            <motion.p className={`font-medium text-xl ${paraClasses}`}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
            >{description}</motion.p>
            {bottomElement && bottomElement}
        </div>
    )
}
export default ContentBlock
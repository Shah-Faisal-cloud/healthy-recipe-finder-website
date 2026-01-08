import { Link } from "react-router"
import { motion } from "framer-motion"

const MotionLink = motion.create(Link);

const ButtonLink = ({ text, route, className = '' }) => {
    return (
        <MotionLink to={route} className={`flex justify-center bg-green-deep text-white py-3 font-bold hover:bg-green-muted transition-colors duration-200 ease-linear ${className}`}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >{text}</MotionLink>
    )
}
export default ButtonLink
import { motion } from "framer-motion"
const isMobile = typeof window !=='undefined' ? window.innerWidth < 768 : null

const Variants = !isMobile? {
    an1: {
        x:-300,
        transition: {
            duration: 3
        }
    },
    an2: {
        x:-300,
        transition: {
            duration: 3,
            delay: 1
        }
    },
    an3: {
        x:100,
        transition: {
            duration: 3,
            delay: 2
        }
    }
} : {}

export default function Contact() {
  return (
    <>
        <div className=" flex justify-center h-screen">
            <motion.div  className=" text-base md:text-xl lg:text-4xl" >
                <p className="lg:text-left" >I</p>
                <motion.p variants={Variants} whileInView="an1" >Am 20 years old</motion.p>
                <motion.p variants={Variants} whileInView="an2" >Live in Lome, Togo</motion.p>
                <motion.p variants={Variants} whileInView="an3">Am currently pursuing a software engineering degree</motion.p>
            </motion.div>
            <motion.div>

            </motion.div>
        </div>
    </>
  )
}

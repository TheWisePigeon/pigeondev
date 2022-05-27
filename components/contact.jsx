import { motion } from "framer-motion"
const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : null

const Variants = !isMobile ? {
    an1: {
        x: -300,
        transition: {
            duration: 3
        }
    },
    an2: {
        x: -300,
        transition: {
            duration: 3,
            delay: 1
        }
    },
    an3: {
        x: 100,
        transition: {
            duration: 3,
            delay: 2
        }
    },

} : {
    an1: {
        y: -110,
        transition: {
            duration: 3
        }
    },
    an2: {
        y: -110,
        transition: {
            duration: 3,
            delay: 1
        }
    },
    an3: {
        y: -110,
        transition: {
            duration: 3,
            delay: 2
        }
    },
}

const skillsVariant = {
    an4: {
        width: "30%",
        transition: {
            duration: 3,
        }
    }
}

const skills = [
    {
        name: "React",
        value: "80"
    },
    {
        name: "Vue",
        value: "85"
    },
    {
        name: "Svelte",
        value: "60"
    },
    {
        name: "Express",
        value: "90"
    },
    {
        name: "Flask",
        value: "80"
    },
    {
        name: "MongoDB",
        value: "90"
    },
    {
        name: "PostgreSQL",
        value: "60"
    },
    {
        name: "Firebase",
        value: "70"
    },
    {
        name: "Flutter",
        value: "85"
    },
    {
        name: "ElectronJs",
        value: "60"
    },
    {
        name: "Tauri",
        value: "55"
    },
]

export default function Contact() {
    return (
        <>
            <div className=" flex justify-center pb-40">
                <motion.div className=" text-base md:text-xl lg:text-4xl" >
                    <p className="lg:text-left" >I</p>
                    <motion.p variants={Variants} whileInView="an1" >Am 20 years old</motion.p>
                    <motion.p variants={Variants} whileInView="an2" >Live in Lome, Togo</motion.p>
                    <motion.p variants={Variants} whileInView="an3">Am currently pursuing a software engineering degree</motion.p>
                </motion.div>
            </div>
            <p className="" >My skills</p>
            {
                skills.map(
                    skill => {
                        return (
                            <div key={skill.name} className="p-3 " >
                                <div className=" flex items-center ">
                                    <div className=" text-base  " >
                                        <div className=" w-screen overflow-hidden rounded shadow-inner bg-transparent ">
                                            <motion.div className=" bg-gradient-to-l from-amber-200 via-violet-600 to-sky-900" variants={skillsVariant} whileInView={{ width: `${skill.value}%` }} transition={{ duration:3}}  >
                                                <p className=" text-left">{skill.name}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </>
    )
}

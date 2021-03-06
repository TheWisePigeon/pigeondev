import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function Loader({ position }) {
    const mesh = useRef();
   
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
     <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'#333'} />
     </mesh>
    );
   }

const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : null
const Model = () => {
    const model = React.useRef()
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        model.current.rotation.y = a;

    });
    const gltf = useLoader(GLTFLoader, "./pigeon2.gltf")

    return (
        <>
            <primitive ref={model} object={gltf.scene} scale={2} position={[0, -1, 0]} />
        </>
    )
}

const textVariants = !isMobile ? {
    animate: {
        x: 100,
        y: 100,
        transition: {
            duration: 2
        }
    },
    animate2: {
        x: -100,
        y: -100,
        transition: {
            duration: 2
        }
    },

} : {}

export default function About() {
    return (
        <>
            <div>
                <motion.div className=" flex justify-center" variants={textVariants} whileInView="animate" >
                    <p className="text-center text-3xl">Hi, I am Joseph <br /> a.k.a <br /> <a className=" pLink" href="https://github.com/TheWisePigeon">TheWisePigeon</a></p>
                </motion.div>
            </div>
            <div className=" flex justify-center items-center h-screen ">
                <div className=' w-96 h-96 '>
                    <div className=' h-48 md:h-60 lg:h-96 '>
                        {
                            <Canvas>
                                <Suspense fallback={<Loader />} >
                                    <Model />
                                    <OrbitControls />
                                    <Environment preset='sunset' />
                                </Suspense>
                            </Canvas>
                        }
                    </div>
                    <motion.p className='text-center text-4xl ' variants={textVariants} whileInView="animate2" >
                        Welcome to my portfolio
                    </motion.p>
                </div>

            </div>

        </>

    )
}

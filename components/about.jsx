import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
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



export default function About() {
    return (
        <>
            <div>
                <motion.div className=" flex justify-center" animate={{ x: 50, y:10 }} transition={{ duration: 1 }} >
                    <p className="text-center text-3xl">Hi, I am Joseph <br /> a.k.a <br /> <a className=" pLink" href="https://github.com/TheWisePigeon">TheWisePigeon</a></p>
                </motion.div>
            </div>
            <div className=" flex justify-center items-center h-screen ">
                <div className=' w-96 h-96 '>
                    <div className=' h-96 '>
                        <Canvas>
                            <Suspense fallback={null} >
                                <Model />
                                <OrbitControls />
                                <Environment preset='sunset' />
                            </Suspense>
                        </Canvas>
                    </div>
                    <motion.p className='text-center text-4xl ' animate={{ x: -50, y:-20 }} transition={{ duration: 1 }} >
                        Welcome to my portfolio
                    </motion.p>
                </div>

            </div>

        </>

    )
}

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
            <primitive ref={model} object={gltf.scene} scale={1.5} />
        </>
    )
}



export default function About() {
    return (
        <>
            <div className=" bg-black grid place-items-center h-screen  text-white">
                <div className=' w-96 h-96'>
                    <Canvas>
                        <Suspense fallback={null} >
                            <Model />
                            <OrbitControls />
                            <Environment preset='sunset' />
                        </Suspense>
                    </Canvas>
                    <motion.p className='text-center text-4xl'>
                        Hi, and welcome to my portfolio :)
                    </motion.p>
                </div>

            </div>

        </>

    )
}

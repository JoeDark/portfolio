import { WaveMaterial } from './shaders/test/WaveMaterial.jsx'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Center } from '@react-three/drei';


export default function TestWrapper() {


    const refTest = useRef()

    console.log(refTest);

    const { width, height } = useThree((state) => state.viewport)
    useFrame((state, delta) => (refTest.current.time += delta))

    return <>
        <Center>
            <mesh scale={[2, 2, 1]}>
                <planeGeometry />
                <waveMaterial ref={refTest} key={WaveMaterial.key} toneMapped={true} colorStart={'#505050'} colorEnd={'black'} />
            </mesh>
        </Center>
    </>
}







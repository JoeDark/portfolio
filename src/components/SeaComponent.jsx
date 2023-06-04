import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { SeaMaterial } from '../shaders/water/SeaMaterial';
import * as THREE from 'three'


export default function SeaComponent() {

    const seaRef = useRef()

    //const { width, height } = useThree((state) => state.viewport)
    useFrame((state, delta) => (seaRef.current.uTime += delta))

    //rotationX={-Math.PI * 0.5}
    return <>

        <mesh rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[2, 4, 512*2, 512*2]}
                />
            <seaMaterial ref={seaRef} key={SeaMaterial.key} toneMapped={true} colorEnd={'black'} />
        </mesh>
    </>
}
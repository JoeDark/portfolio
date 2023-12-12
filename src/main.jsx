import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import SeaComponent from './components/SeaComponent.jsx'
import { OrbitControls } from '@react-three/drei'
// import {EffectComposer} from '@react-three/postprocessing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas className='webgl'
      camera={{ position: [1.2, .23, 0] }}
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1' }}>
        <OrbitControls/>
      <SeaComponent />
    </Canvas>
    <App />
  </React.StrictMode>,
)

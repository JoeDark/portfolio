import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Canvas } from '@react-three/fiber'
import SeaComponent from './components/SeaComponent.jsx'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
      <Container fluid style={{display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <div className='frosted-glass-container' style={{ position: 'absolute', top: '20%', pointerEvents: 'auto' }}>
          <h1 >Joseph Dark</h1>
        </div>
        <div className='frosted-glass-container' style={{ position: 'absolute', top: '50%', pointerEvents: 'auto' }}>
          <h2 className='col mb-2'>Full-Stack software developer, Tech curious</h2>
          <h3 className='col mb-2'>Find out what is happening beneath the torrent...</h3>
          <div className='col' style={{ display: 'flex', justifyContent: 'space-evenly'}} > 
          <Button className="buttonSpace" variant="primary" target="_blank" href="https://github.com/JoeDark"> GitHub</Button>
          <Button className="buttonSpace" variant="primary" target="_blank" href="https://www.linkedin.com/in/joseph-dark/">Linkedin</Button>
          </div>
        </div>
      </Container>

      <Canvas className='webgl'
      camera={{ position: [1.2, .23, 0] }}
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1' }}>
        <OrbitControls/>
      <SeaComponent />
    </Canvas>

    </>
  )
}

export default App


{/* <div className='mainText bordered'>
      
<Card style={{ background: '#00000000', width: '18rem', borderRadius: '25px', borderColor: 'rgba(0, 0, 0, 0)' }}>
<Card.Body>
<Card.Title style={{fontSize: '1.75rem', color: 'blueviolet'}}><strong><u>Joseph Dark</u></strong></Card.Title>
<Card.Text style={{ color: 'blueviolet'}}>Find out what is happening beneath the torrent...</Card.Text>
<Button className="buttonSpace" variant="primary" target="_blank" href="https://github.com/JoeDark">GitHub</Button>
<Button className="buttonSpace" variant="primary" target="_blank" href="https://www.linkedin.com/in/joseph-dark/">Linkedin</Button>
</Card.Body>
</Card>       
</div> */}

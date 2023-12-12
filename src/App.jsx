//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container fluid style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div className='frosted-glass-container' style={{ position: 'absolute', top: '20%', pointerEvents: 'auto' }}>
          <h1 >Joseph Dark</h1>
        </div>
        <div className='frosted-glass-container' style={{ position: 'absolute', top: '50%', pointerEvents: 'auto' }}>
          <h2>Full-Stack software developer, Tech curious</h2>
          <h3>Find out what is happening beneath the torrent...</h3>
          <div> 
          <Button className="buttonSpace" variant="primary" target="_blank" href="https://github.com/JoeDark">GitHub</Button>
          <Button className="buttonSpace" variant="primary" target="_blank" href="https://www.linkedin.com/in/joseph-dark/">Linkedin</Button>
          </div>
        </div>
      </Container>


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

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className='mainText bordered'>

        <Card style={{ background: '#00000000', width: '18rem', borderRadius: '25px', borderColor: 'rgba(0, 0, 0, 0)' }}>
      <Card.Body>
        <Card.Title style={{fontSize: '1.75rem', color: 'blueviolet'}}><strong><u>Joseph Dark</u></strong></Card.Title>
        <Card.Text style={{ color: 'blueviolet'}}>Find out what is happening beneath the torrent...</Card.Text>
        <Button className="buttonSpace" variant="primary" href="https://github.com/JoeDark">GitHub</Button>
        <Button className="buttonSpace" variant="primary" href="https://www.linkedin.com/in/joseph-dark/">Linkedin</Button>
      </Card.Body>
    </Card>       
      </div>
    </>
  )
}

export default App

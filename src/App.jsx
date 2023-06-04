//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const ghub = './assets/github.svg'
  const linkedIn = './assets/linkedin.svg'

  return (
    <>
      <div className='mainText bordered'>
        <h1 className='headerText'>Joseph Dark</h1>
        <h3 className='bodyText'>Find out what is happening beneath the torrent...</h3>
        <div className='iconRow'>
          <a className='links' href='https://github.com/JoeDark'><img src={ghub} height={'50px'} width={'50px'} alt='Github icon' /></a>
          <br />
          <a className='links' href='https://www.linkedin.com/in/joseph-dark/'><img src={linkedIn} height={'50px'} width={'50px'} alt='LinkedIn icon' /></a>
        </div>
      </div>
    </>
  )
}

export default App

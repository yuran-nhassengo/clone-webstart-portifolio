
import './App.css'
import { About } from './components/about'
import { Brands } from './components/brands/brands'
import { Header } from './components/header'
import { Hero } from './components/hero/hero'
import { Skills } from './components/skills'



function App() {
  

  return (
    <>
   <Header/>
   <Hero/>
   <Brands/>
   <About/>
   <Skills/>
   <div style={{height: '2000px'}}></div>
    </>
  )
}

export default App

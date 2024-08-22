
import './App.css'
import { About } from './components/about'
import { Brands } from './components/brands/brands'
import { Header } from './components/header'
import { Hero } from './components/hero/hero'



function App() {
  

  return (
    <>
   <Header/>
   <Hero/>
   <Brands/>
   <About/>
   <div style={{height: '2000px'}}></div>
    </>
  )
}

export default App

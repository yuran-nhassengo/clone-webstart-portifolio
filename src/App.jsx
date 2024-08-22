
import './App.css'
import { Brands } from './components/brands/brands'
import { Header } from './components/header'
import { Hero } from './components/hero/hero'



function App() {
  

  return (
    <>
   <Header/>
   <Hero/>
   <Brands/>
   <div style={{height: '2000px'}}></div>
    </>
  )
}

export default App

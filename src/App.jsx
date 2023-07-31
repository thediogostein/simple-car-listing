import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import CarList from "./components/CarList/CarList"
import Footer from './components/Footer/Footer'
import './global.css'

function App() {
  
  return (
    <>
    
      <Header/>
      <main>
        <Hero />
         <CarList/>
      </main>
      <Footer /> 
    </>
  )
}

export default App

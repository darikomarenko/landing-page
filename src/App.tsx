import Promo from '../src/components/Promo/index'
import Sites from '../src/components/Sites/index'
import Prices from '../src/components/Prices'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Modal from './components/Modal'

function App() {

  return (
    <>
    <Navbar/>
    <Promo/>
    <Sites/>
    <Prices/>
    <Reviews/>
    <Footer/>
    <Modal open={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    </>
  )
}

export default App

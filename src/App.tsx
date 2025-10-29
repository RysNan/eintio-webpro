import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const App = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Jumbotron />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
    </div>
  )
}

export default App
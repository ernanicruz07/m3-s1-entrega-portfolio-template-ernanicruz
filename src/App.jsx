import './styles/reset.css'
import './styles/globalStyles.css'

import { Header } from './components/Header'
import { Introduction } from './components/Sections/Introduction'
import { AboutMe } from './components/Sections/Aboutme'
import { TechnologiesSection } from './components/Sections/technologies'
import { ProjectsSection } from './components/Sections/Projects'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div className='conteiner'>
        <Header />
        <Introduction />
        <AboutMe />
        <TechnologiesSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  )
}

export default App

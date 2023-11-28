import React from 'react'

import Navbar from './navbar.jsx'
import Jumbotron from './jumbotron.jsx'
import { Footer } from './footer.jsx'
import BootstrapCard from './cards.jsx'

const Home = () => {
  return (
    <div className='contianer-fluid mx-auto'>
    <Navbar />
    <div className='container'>
      <Jumbotron />
      <div className='row g-4 mx-auto'>
        <BootstrapCard title={"Hello World"}/>
		<BootstrapCard title={"Another Card"}/>
		<BootstrapCard title={"One Component"}/>
		<BootstrapCard title={"Many Cards"}/>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home


  


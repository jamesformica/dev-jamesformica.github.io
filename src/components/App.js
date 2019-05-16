import React, { Fragment } from 'react'

import About from './About'
import Header from './Header'
import Footer from './Footer'
import Videos from './Videos'
import Projects from './Projects'

const App = () => (
  <Fragment>
    <Header />
    <About />
    <Videos />
    <Projects />
    <Footer />
  </Fragment>
)

export default App

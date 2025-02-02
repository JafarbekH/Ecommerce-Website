import React from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import Services from '../services/Services'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'

const Home = () => {

  const year = new Date().getFullYear()

  return <Helmet title="Home">
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className='hero__subtitle'>Trending product in {year}</p>
              <h2>Make Your Interior Minimalistic & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque eius illum exercitationem consequuntur quos tempore nemo voluptates. Minus, illum!</p>

              <motion.button whileTap={{ scale: 1.2 }} className='shop__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>          
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services /> 

    <section className="trending__products">
      
    </section>
  </Helmet>
}

export default Home
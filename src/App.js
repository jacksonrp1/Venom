import './App.css'
import video from './img/video-venom2.mp4'
import eye from './img/venom-eye.png'
import venomLogo from './img/Venom_Let_There_Be_Carnage_logo.jpg.webp.png'
import venomBody from './img/venom-2.png'
import xBox from './img/x-box-logo.png'
import playStation from './img/playstation-logo.png'
import marvel from './img/marvel-logo.png'
import { motion } from 'framer-motion'
import {
  FiAlignJustify,
  FiInstagram,
  FiYoutube,
  FiTwitter
} from 'react-icons/fi'
import Tilty from 'react-tilty'

function App() {
  return (
    <motion.div className="body">
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 2000, opacity: 0 }}
        transition={{ duration: 0.8, delay: 3, duration: 2 }}
        className="logo"
      >
        <img src={eye} alt="" />
      </motion.div>
      <div className="video">
        <div className="background-top-bottom"></div>
        <div className="background-left-rigth"></div>
        <video autoPlay={true} muted loop type="video/mp4">
          <source src={video} />
        </video>
      </div>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 3.8 }}
        className="header"
      >
        <FiAlignJustify className="hamb" size={30} color={'#fff'} />
        <nav className="navigation">
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#inicio">História</a>
            </li>
            <li>
              <a href="#inicio">Trailer</a>
            </li>
          </ul>
        </nav>
        <motion.div className="logo-home">
          <img src={eye} alt="" />
        </motion.div>
        <motion.div className="social">
          <a href="#inicio">
            <FiInstagram size={20} />
          </a>
          <a href="#inicio">
            <FiYoutube size={20} />
          </a>
          <a href="#inicio">
            <FiTwitter size={20} />
          </a>
        </motion.div>
      </motion.header>
      <main id="inicio" className="container">
        <section className="flex">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="home-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="img-logoHome"
            >
              <img src={venomLogo} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="textHome"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aliquid repellendus deleniti! Praesentium id delectus
                accusamus maiores minima tempore, minus, laboriosam excepturi
                molestias corrupti dignissimos animi nulla neque in nisi.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="buttonHome"
            >
              <a href="#inicio">Watch The Trailer</a>
              <a href="#inicio">Pre-Order now</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="iconMarv"
            >
              <span>
                <img src={xBox} alt="" />
              </span>
              <span>
                <img src={playStation} alt="" />
              </span>
              <span>
                <img src={marvel} alt="" />
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="home-right"
          >
            <Tilty perspective={1000} speed={900}>
              <img className="js-hover" src={venomBody} alt="" />
            </Tilty>
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}

export default App

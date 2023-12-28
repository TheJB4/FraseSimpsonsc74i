import 'bootstrap/dist/css/bootstrap.min.css';
import logoSimpson from './assets/logoSimpson.png'
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import FraseComponent from './Components/FraseComponent';
import Button from 'react-bootstrap/Button';

function App() {
  let [personaje, setPersonaje] = useState({})
  let [loading,setLoading] = useState(false)

  let fetchinData = () => {
    setPersonaje({})
    setLoading(true)
      fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
          .then(res => res.json())
          .then(data => {
            setLoading(false)
            return setPersonaje(data[0])
          })
          .catch(err => console.log(err))
  }



  return (
    <Container className='d-flex justify-content-center flex-column align-items-center'>
      <img src={logoSimpson} alt="logoSimpson" width={200} className='logo mb-2' />

      <div className='d-flex flex-column'>
        {loading && <h1>Cargando...</h1>}
        {personaje && <FraseComponent personaje={personaje}></FraseComponent>}
      </div>
      <Button variant="warning" onClick={fetchinData} className='mt-2'>Obtener frase</Button>
    </Container>
  )
}

export default App

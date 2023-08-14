import React from 'react'
import './home.css'
import publics  from '../../assets/public.png';

const Home = () => {
  return (
    <div className='home-container'>
        <div className="container ">
            <div className="row main-container">
                <div className="col-md-7">
                    <h1 className='main-text'>La literatura no es otra cosa</h1>
                    <h4 className='second-text'>que un sueño dirigido. – Jorge Luis Borges.</h4>
                    <p className='mt-3'>La mayoría de los adultos tenemos muy clara la importancia de 
                        animar a la lectura en los niños y las niñas. Se trata de un hábito
                        muy enriquecedor, tanto para su vocabulario como para su imaginación,
                        su capacidad de atención y memoria e incluso su inteligencia emocional.
                    </p>
                    <div className="explore">
                        <button className="btn explore-button" type="submit">Explorar</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="box">
                        <img src={publics} alt="logo.png" className='home-img mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
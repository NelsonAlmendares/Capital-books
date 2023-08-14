import React from 'react';
import Typography from '@mui/material/Typography';
import CardDynamic from './CardDynamic';

import './dynamic.css';

const Dynamic = () => {
  return (
    <div className="content">
        <div className="container">
        <h4 className='title-dynamic'>Dinámicas</h4>
            <div className="row dynamic-card">
                <div className="col-md-6 left">
                <Typography gutterBottom variant="h1" component="div">
                    <h2 className='title-cards'>Sección de Lectura semanal</h2>
                </Typography>
                    <p>La mayoría de adultos tenemos muy clara la importancia de los 
                        beneficios de tener una lectura constante, es por eso que se ha creado
                        una serie de colecciones con las cuales se pueden dar un respiro al 
                        alma con todos los versos de los mejores escritores de todos los géneros
                    </p>
                </div>
                <div className="col-md-6 right">
                    <CardDynamic/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dynamic
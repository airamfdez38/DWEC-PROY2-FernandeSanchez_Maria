import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import './Portfolio.css'
import image_pro from './../../images/background.jpg'

const Portfolio = ({ id, changeColor}) => {
    const classes = useStyles();
    return (
        // colorSetted sóloo se aplicará si según el id recibido por los props es verdadero
        <div className={`${classes.section} ${changeColor && classes.colorSetted}`}id={id}>
           
           <Grid container direction="column" >
                <Grid item container direction="column" xs={12} >
                    <h1 className="center-align">Proyectos</h1>
                </Grid>
            </Grid>
            <hr></hr>
            <Grid container direction="row" className='grid_container' xs={6}>
                <h2>Proyecto 1. Maquetación y desarrollo de una aplicación web</h2>
                <a href="https://airamfdez38.github.io/DWEC-PROY1-FernandezSanchez_Maria/" target='_blank' rel="noopener noreferrer"><img src={image_pro} alt='imagen proyecto 1'/></a>
            </Grid>
            
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: '100vh'

    },
    colorSetted:{
        background: '#e6e8e3',
        color: 'white'
    }
}))

export default Portfolio

import React from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import ProgressBar from './ProgressBar';
import './Skills.css'

const Skills = ({ id, changeColor}) => {
    const classes = useStyles();
    return (
        // colorSetted sóloo se aplicará si según el id recibido por los props es verdadero
        <div className={`${classes.section} ${changeColor && classes.colorSetted}`}id={id}>
            <Grid container direction="column" >
                <Grid item  direction="column" xs={12} >
                    <h3 className="center-align">Tecnologías</h3>
                </Grid>
            </Grid>
            <hr></hr>
            <div className='tech_table'>
                <div className='table_1'>
                    <h4>HTML <ProgressBar done="80"/></h4>
                    <h4>CSS <ProgressBar done="70"/></h4>
                    <h4>JS <ProgressBar done="70"/></h4>
                    <h4>Sass <ProgressBar done="60"/></h4>
                    <h4>React <ProgressBar done="70"/></h4>
                </div>
                <div className='table_2'>
                    <h4>PYTHON <ProgressBar done="70"/></h4>
                    <h4>JAVA <ProgressBar done="80"/></h4>
                    <h4>LARAVEL <ProgressBar done="60"/></h4>
                    <h4>FLASK <ProgressBar done="60"/></h4>
                    <h4>DOCKER <ProgressBar done="70"/></h4>
                </div>
            </div>
        </div>
    )
}
/*Configuración inicial para dar estilos con los hooks a los diferentes componentes.
  Importo makeStyles de material-ui/core (CTRL + space sobre makeStyles para que se importe automáticamente)
  Dentro de const useStyles declaro las clases que seran objetos que contengan las propiedades y valores  
  Este snippet lo copio en todos los contenedores para darle a cada uno sus estilos*/
const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: '100vh'

    },
    colorSetted:{
        background: '#e6e8e3',
        color: 'white'
    }
}))

export default Skills

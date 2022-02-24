import React from 'react';
import { makeStyles, Grid} from '@material-ui/core';
import '../About/About.css'
import image from './../../images/avatar.jpeg'


const About = ({ id, changeColor}) => {
  const classes = useStyles();
  return (
    // colorSetted sóloo se aplicará si según el id recibido por los props es verdadero
    <div className={`${classes.section} ${changeColor && classes.colorSetted}`}id={id}>
       
            <Grid container direction="column" >
                <Grid container direction="column" xs={12} >
                    <h3 className="center-align">Perfil</h3>
                </Grid>
            </Grid>
            <hr></hr>
            <Grid container direction="row" xs={12} className={classes.item}></Grid>
            <Grid container direction="column" className='grid_container'>
            
              <Grid item  direction="column" xs={12} md={3} >
                <h3 className='single_grid_title'>Sobre mí</h3>
                <p className='single_grid_text'>Me considero una persona muy proactiva, en constante formación y con gran capacidad de adaptación a nuevos equipos y dinámicas de trabajo </p>   
                <p className='single_grid_text'></p>
                <p className='single_grid_text'></p>
              </Grid> 
            
              <Grid item  direction="column" xs={12} md={4}>
                <img src={image} className='profile_img' alt="foto de perfil"/>
              </Grid>
              
              <Grid item  direction="column" xs={12} md={5} className={classes.info}>
                <h3 className='single_grid_title'>Información</h3>
                <label>Nombre:</label>
                <p className='single_grid_text'>María Fernández</p>
                <label>Edad:</label>
                <p className='single_grid_text'>41 años</p>
                <label>Dirección:</label>
                <p className='single_grid_text'>Cádiz</p>
              </Grid>  

            </Grid>
          
      
    </div>
    
  )
}
/*Configuración inicial para dar estilos con los hooks a los diferentes componentes.
  Importo makeStyles de material-ui/core (CTRL + space sobre makeStyles para que se importe automáticamente)
  Dentro de const useStyles declaro las clases que seran objetos que contengan las propiedades y valores  
  Este snippet lo copio en todos los contenedores para darle a cada uno sus estilos*/
const useStyles = makeStyles((theme) => ({
    section:{
        minHeight: '100vh',
    },
    colorSetted:{
        background: '#e6e8e3',
        color: 'white'
    },
    item:{
      height:'5vh'
    },
    info:{
      marginTop:'5vh'
    }
}))

export default About

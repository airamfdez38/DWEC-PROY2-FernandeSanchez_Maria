import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import './Footer.css'

const Footer = ({id, changeColor}) => {
    const classes = useStyles();
  
    return (
        // colorSetted sóloo se aplicará si según el id recibido por los props es verdadero
        <div className={`${classes.section} ${changeColor && classes.colorSetted}`}id={id}>
        {/**División de la pantalla en secciones. Grid en material ui equivale a Card en Bootstrap */}
            <Grid container direction="column" >
                <Grid item container direction="column" xs={12} >
                    <h3 className="center-align">Contacto</h3>
                </Grid>
            </Grid>
            <hr></hr>
            <Grid container direction="row" className='contact_container'>
                <Grid item  direction="column" xs={12} md={4}>
                    <div className='info_group'>
                        <ContactPhoneIcon /> 
                         <p>María Fernández </p>
                    </div>
                </Grid>
                <Grid item  direction="column" xs={12} md={4}>
                    <div className='info_group'>
                        <ContactPhoneIcon /> 
                        <p>625 91 01 36</p>
                    </div>
                </Grid>
                <Grid item  direction="column" xs={12} md={4}>
                    <div className='info_group'>
                        <ContactPhoneIcon /> 
                        <p>airamfdezs@gmail.com</p>
                    </div>
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
        minHeight: '100vh'

    },
    colorSetted:{
        background: '#e6e8e3',
        color: 'grey'
    },
    section_content:{
        maxWidth: '80vw',
        margin: '0 auto'
    }
}))

export default Footer

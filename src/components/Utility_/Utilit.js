import React from 'react';

import image_pro from './../../images/tic_tac_toe.jpeg'
import { makeStyles, Grid} from '@material-ui/core';

const Utilit = ({ id, changeColor}) => {
  const classes = useStyles();

  return (
    // colorSetted sóloo se aplicará si según el id recibido por los props es verdadero
    <div className={`${classes.section} ${changeColor && classes.colorSetted}`}id={id}>
           
    <Grid container direction="column" >
         <Grid item container direction="column" xs={12} >
             <h1 className="center-align">Tic tac toe</h1>
         </Grid>
     </Grid>
     <hr></hr>
     <Grid container direction="column" className='grid_container' xs={4}>
        
         <a href="https://airamfdez38.github.io/tictactoe/" target='_blank' rel="noopener noreferrer"><img src={image_pro} alt='imagen proyecto 1'/></a>
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
      alignContent: 'center'

  },
  colorSetted:{
      background: '#e6e8e3',
      color: 'white'
  },
 

}))
export default Utilit

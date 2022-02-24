import React  from 'react';
import { makeStyles, Typography, Grid} from '@material-ui/core';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import './Education.css'

const Education = ({ id, changeColor}) => {
    const classes = useStyles();
    return (
        // colorSetted sóloo se aplicará si según el id recibido por los props es verdadero
        <div className={`${classes.section} ${changeColor && classes.colorSetted}`}id={id}>
            
            <Grid item container direction="column" xs={12} >
                <h3 className="center-align">Formación</h3>
            </Grid>
            
            <hr></hr>
            <Timeline position="alternate">
           
                <TimelineItem>
                    <TimelineOppositeContent 
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                    2019
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                    <TimelineConnector />
                
                    <TimelineConnector />
                    </TimelineSeparator>
                    
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography 
                            variant="h6"
                            component="span" 
                            className='text'
                        >
                        Grado Superior Desarrollo Aplicaciones Web
                        </Typography>
                        <Typography className='text'>
                            IES. Rafael Alberti
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                    2002
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" className='text'>
                            Ingeniería Naútica. Navegación y Transporte Marítimo
                        </Typography>
                        <Typography className='text'>Universidad de Cádiz</Typography>
                    </TimelineContent>
                </TimelineItem>
               
            </Timeline>
            <hr></hr>
            <Grid container direction="row" className='grid_container'>
             
                <h3 className="center-align">Certificados</h3>
                
            </Grid>
            <Grid container direction='row' xs={12}>
                <Grid item  direction="column" xs={12} md={4} >
                    <h3 className='single_grid_title text' >JavaScript Básico</h3>
                
                </Grid> 
            
                <Grid item  direction="column" xs={12} md={4}>
                    <h3 className='single_grid_title text'>JavaScript Intermedio</h3>
                </Grid>
                
                <Grid item  direction="column" xs={12} md={4}>
                    <h3 className='single_grid_title text'>Docker para desarrolladores</h3>
                
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
        color: 'white'
    },
    certText:{
        color: '#64B61A',
        margin: 'auto',
        marginTop: 0

    },
    p:{
        color: 'grey',
        marginTop: -40
    }

}))

export default Education

import React from 'react';

// Importando librerias
import { AppBar, makeStyles, Toolbar, List, IconButton, Drawer, Divider, ListItem, ListItemIcon} from '@material-ui/core';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import SchoolIcon from '@material-ui/icons/SchoolTwoTone'
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone'
import BuildTwoTone from '@material-ui/icons/BuildTwoTone'
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined'
import {Link} from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import CancelIcon from '@material-ui/icons/Cancel'


//Array formado por varios objetos, uno para cada componente. Cada objeto esta conformado por 3 claves:valor

const links = [
    {
        id: 'about', // Necesario para linkear cada elemento del menú con su sección
        text: 'Mi perfil', // Texto de cada uno de los enlaces
        icon: <InfoTwoToneIcon fontSize='large'/> // Iconos de material-ui/icons para el menu lateral
    },
    {
        id: 'education',
         text: 'Formación',
        icon: <SchoolIcon fontSize='large'/>
    },
    {
        id: 'skills',
        text: 'Tecnologías',
        icon: <EmojiObjectsTwoToneIcon fontSize='large'/>
    },
    {
        id: 'projects',
        text: 'Mis proyectos',
        icon: <BuildTwoTone fontSize='large'/>
    },
    {
        id: 'utility',
        text: 'Utility',
        icon: <ContactMailOutlinedIcon fontSize='large'/>
    },
    {
        id: 'contact',
        text: 'Contacto',
        icon: <ContactMailOutlinedIcon fontSize='large'/>
    }
]


const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
        {/*Creación  menú horizontal
            AppBar => Contenedor del menú de navegación
            ToolBar => Menú en sí. Lo que en HTML es un ul */}
        <AppBar position='sticky' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <List className={classes.menu}>
                    {//Creación de manera dinámica del menú horzontal
                        links.map(({id, text}, index) => (
                            <Link key={index} to={id} spy={true} activeClass='active' smooth={true} duration={500} offset={-40}>{text}</Link>
                        ))
                    }
                </List>
                {/* Botón para menú lateral. Aparecerá en pantallas más pequeñas*/}
                <IconButton edge='end' className={classes.menu_btn} onClick={() => setOpen(!open)}>
                    <MenuIcon fontSize='large'/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>{/*Evento onClose que al presionar el botón cambia el estado de open a false */}
            <IconButton  onClick={() => setOpen(false )}> {/**Evento onClick que al presionarlo convierte setOpen a falso */}
                <CancelIcon />
            </IconButton>
            <Divider />
            {
                //Creación menú vertical.
                links.map(({id, text, icon}, index) => (
                    <Link
                        className={classes.sideNav}
                        key={index}
                        to={id} 
                        spy={true} 
                        activeClass='active' 
                        smooth={true} 
                        duration={500} 
                        offset={-70}>
                        <ListItem component={"h5"}> {/**Componente de Material-ui para crear el menú con su icono y texto correspondiente */}
                            <span>
                            <ListItemIcon> {/**Componente de Material-ui que va a recoger el icono */}
                            {icon}
                            </ListItemIcon>
                            </span>{text}
                        </ListItem>
                    </Link>
                ))
            }
            
        </Drawer>
        
        </>
    )
}

/*Configuración inicial para dar estilos con los hooks a los diferentes componentes.
  Importo makeStyles de material-ui/core (CTRL + space sobre makeStyles para que se importe automáticamente)
  Dentro de const useStyles declaro las clases que seran objetos que contengan las propiedades y valores  
  Este snippet lo copio en todos los contenedores para darle a cada uno sus estilos*/
const useStyles = makeStyles((theme) => ({
    root:{
        background: '#fafafa',
        top: 0,
        left: 0,
        right: 0,
        minHeight: '9vh'
       
    },
    toolbar:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    menu:{
        [theme.breakpoints.down('sm')]:{ // En pantallas más pequeñas que small el menu horizontal desaparece
            display: 'none'
        },
        '& a':{
            color:'#333',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            marginLeft: theme.spacing(3)
        },
        '& a:hover':{
           color:'#64B61A',
           cursor: 'pointer' 
        }

    },
    menu_btn:{
        display:'none',
        [theme.breakpoints.down('sm')]://En pantallas menores que small aparece el botón del menú lateral
        {
            display:'block',
            color:'#64B61A',
            position: 'absolute',
            top: 0,
            right: 10
        }
           
    },
    sideNav:{
        width: "20%",
        [theme.breakpoints.down("sm")]:{
           
            width: "50%",
        },
        "& h5":{
            margin: theme.spacing(10, 0, 0, 0),
            fontSize: "1.4rem",
            color:"#333",
            fontWeight: "bold"
        }


    }
    
  })) 



export default Header

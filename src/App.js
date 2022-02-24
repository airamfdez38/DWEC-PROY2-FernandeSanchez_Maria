import React from 'react';
/*Importando librerias*/
import { makeStyles} from '@material-ui/core';
/*Importando componentes */
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Utilit from "./components/Utility_/Utilit";

function App() {
  
  const classes = useStyles()
  return (
    <div className={classes.root}>
       {/*Les asigno el prop id para realizar el smooth scrolling con react-scroll y la función changeColor a True o False de 
      manera alternativa para que vaya cambiando el background de las diferentes secciones de la SPA */}
      <Header/>
      <About id="about" changeColor={false}/>
      <Education id="education" changeColor={true}/>
      <Skills  id="skills" changeColor={false}/>
      <Portfolio  id="projects" changeColor={true}/>
      <Utilit id="utility" changeColor={false} />
      <Footer id="contact" changeColor={true}/>

    </div>
  );
}
/*Configuración inicial para dar estilos con los hooks a los diferentes componentes.
  Importo makeStyles de material-ui/core (CTRL + space sobre makeStyles para que se importe automáticamente)
  Dentro de const useStyles declaro las clases que seran objetos que contengan las propiedades y valores  
  Este snippet lo copio en todos los contenedores para darle a cada uno sus estilos*/

  const useStyles = makeStyles((theme) => ({  
    
    root:{
      
    }
  }))

export default App;

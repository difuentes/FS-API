import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//componentes
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'

//import cliente axios
import clienteAxios from './config/axios';

function App() {


  //State de la APP
  const[citas,guardarCitas]= useState([]);
  const [consultar,guardarConsultar] = useState(true);
  //useEffect
  useEffect(()=>{
    if(consultar) {
      const cosultarAPI=()=>{
        clienteAxios.get('/pacientes')
        .then(respuesta=>{ 
          guardarCitas(respuesta.data)

          //desabilitar consulta 
          guardarConsultar(false);
        })
        .catch(error=>{console.log(error)})
      }
      cosultarAPI();
    }else{

    }
  },[consultar])

  return (

    <Router>
      <Switch>
        <Route
          exact path="/"
          component={()=><Pacientes citas={citas}/>}
         
        />
         <Route
          exact path="/nuevaCita"
          component={()=><NuevaCita  guardarConsultar={guardarConsultar}/>}
         />
        <Route
          exact path="/cita/:id"
          render={(props)=>{ 
            const cita = citas.filter(cita => cita._id === props.match.params.id)
             return(
                <Cita
                  cita={cita[0]}
                  guardarConsultar={guardarConsultar}
                />
             )
          }}
         /> 
      </Switch>
    </Router>
  );
}

export default App;

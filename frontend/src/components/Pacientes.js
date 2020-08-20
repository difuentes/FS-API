import React ,{ Fragment } from "react";
import {Link} from "react-router-dom";


const Pacientes = ({citas}) => {

    if(citas.length === 0)return null;
    console.log(citas)

    return (  
        <Fragment>
            <h1 className="my-5 titulo-page">Administrador de Pacientes</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                        <div className="col-12 mb-5 d-flex justify-content-center">
                                <Link className="btn btn-primary text-uppercase py-2 px-5" to={'/NuevaCita'}>Crear Cita</Link>
                        </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                             {citas.map( cita => (
                                 <Link to={`/cita/${cita._id}`} key={cita._id} className="py-5 list-group-item list-group-item-action flex-colum aling-items-start"> 
                                       <div className="">
                                                <h2 className="mb-3">Datos del Dueño</h2>
                                                <div className="contacto py-3">
                                                    <h2>Nombre Dueño : <span className="text-black">{cita.propietario}</span></h2>
                                                    <h2>Telefono: <span className="text-black">{cita.telefono }</span></h2>
                                                </div>
                                        </div>
                                       <div className="">
                                            <h2 className="mb-3">Datos Atencion</h2>
                                            <div className="d-flex w-100 justify-content-between mb-4">
                                                <h2 className="mb-3">Nombre Mascota :<span className="text-black"> {cita.nombre}</span></h2>
                                                <h2 >Fecha Atencion: <span className="text-black">   {cita.fecha}  -  {cita.hora}</span></h2>
                                            </div> 
                                        </div>      
                                          
                                                
                                 </Link>
                                
                                ))
                            }
                    </div>
                </div>

            </div>
        </Fragment>
        
    );
}
 
export default Pacientes;
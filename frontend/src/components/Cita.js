import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = (props) => {
   
    if(!props.cita){
        props.history.push('/');
        return null;
    }

    // elimiarcita 
    const eliminarCita =(id) =>{ 
       

            Swal.fire({
                title: '¿Estas Seguro ?',
                text: "Una cita eliminada no se puede recuperar",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'si, eliminar',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.value) {
                    //alerta de eliminar
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  //Eliminando de la BD
                  clienteAxios.delete(`/pacientes/${id}`)
                  .then(respuesta =>{
                          props.guardarConsultar(true);
                          props.history.push('/');
                      })
                      .catch(error =>{
                          console.log(error)
                      }) 
                }
              })


    }   
   

    return (  
        <Fragment>
            <h1 className="my-5">Nombre Mascota : <span className="text-white">{props.cita.nombre}</span>  </h1>
                <div className="row">
                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <Link className="btn btn-primary text-uppercase py-2 px-5" to={'/'}>Volver</Link>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <div className="list-group">
                                <div className="p-5 list-group-item list-group-action flex-colum align-items-center">
                                      <div className="">
                                                <h2 className="mb-3">Datos del Dueño</h2>
                                                <div className="contacto py-3">
                                                    <h2>Nombre Dueño : <span className="text-black">{props.cita.propietario}</span></h2>
                                                    <h2>Telefono: <span className="text-black">{props.cita.telefono }</span></h2>
                                                </div>
                                        </div>
                                       <div className="">
                                            <h2 className="mb-3">Datos Atencion</h2>
                                            <div className="d-flex w-100 justify-content-between mb-4">
                                                <h2 >Fecha Atencion: <span className="text-black">  {props.cita.fecha}  -  {props.cita.hora}</span></h2>
                                            </div> 
                                        </div>     
                                        <div>
                                            <button
                                             type="button" 
                                             className="btn btn-danger btn-block text-upercase py-2 px-5 font-weight-bold"
                                             onClick={()=> eliminarCita(props.cita._id)}
                                             >
                                                eliminar
                                            </button>
                                        </div>

                                </div>
                            </div>

                        </div>
                </div>

        </Fragment>
         
    );
}
 
export default  withRouter( Cita);
import { Link } from 'react-router-dom';
import '../../assets/css/registro.css';
import { FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import * as BsIcons from 'react-icons/bs';

const Users = () => {

    const rol0 = () => { document.getElementById('rol').value = 0; }
    const rol1 = () => { document.getElementById('rol').value = 1; }
    const rol2 = () => { document.getElementById('rol').value = 2; }

    return(
    <>
        <main id="main" className="main">
            <div className='row'>
                    <div className='col-lg-2'>
                        <button className='btn btn-inside-page' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal"><FaUserAlt /> Nuevo Usuario</button>
                    </div>
            </div><br/>

            <table className="table table-bordered table-striped table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Institución</th>
                        <th>Estatus</th>
                        <th>Rol</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Edson de Jesus Uribe Ayala</td>
                        <td>edsonayalaju@gmail.com</td>
                        <td>CIATEJ</td>
                        <td>Activo</td>
                        <td>Administrador</td>
                        <td style={{width:'150px'}}>
                           <button className="btn btn-sm btn-warning"><BsIcons.BsFillPencilFill/></button>&nbsp;
                           <button className="btn btn-sm btn-danger"><BsIcons.BsFillTrashFill/></button>
                        </td>
                    </tr> 
                </tbody>
            </table>
            

        </main>


            {/* Modal alta de usuario */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">Alta de Usuario</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <form className="text-center form-register">                                
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <div className='input-group'>
                                        <span className="input-group-text"><FaUserAlt /></span>
                                        <input required type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <div className='input-group'>
                                        <span className="input-group-text"><GrMail /></span>
                                        <input required type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Institución</label>
                                    <div className='input-group'>
                                        <input required type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo de cuenta</label>
                                    <div className='input-group'>
                                    <select className="form-select" required>
                                        <option selected disabled="disabled">Seleccióna</option>
                                        <option value="Administrador" onClick={rol0}>Administrador</option>
                                        <option value="Tutor" onClick={rol1}>Tutor</option>
                                        <option value="Usuario" onClick={rol2}>Usuario</option>
                                    </select>&nbsp;
                                    <input type="text" className="form-control" id='rol' disabled="disabled" placeholder='No. Rol' />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Estatus de la cuenta</label>
                                    <div className='input-group'>
                                    <select className="form-select" required>
                                        <option selected disabled="disabled">Seleccióna</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña</label>
                                    <div className='input-group'>
                                        <span className="input-group-text"><FaLock /></span>
                                        <input required type="password" className="form-control" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                <button className="btn btn-primary btn-registro" type="submit" >Registrar</button>
                                </div>
                        </form>
                </div>
                </div>
            </div>
            </div>
    </>
    );
}

export default Users;
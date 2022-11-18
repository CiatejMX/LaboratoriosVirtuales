import Logo from '../../assets/img/logo-ciatej.png'; 
import { Link } from 'react-router-dom';
import '../../assets/css/registro.css';
import '../../assets/css/particles.css';
import { FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../../assets/particles/particles';

const Registro = () => {

    const particlesInit = async (main) => {
        await loadSlim(main);
      };

        return(
                <>
                    <Particles id="particles-js" init={particlesInit} options={particlesConfig} />
                    <div id="section-registro">
                            <form className="text-center form-register">
                            <img src={Logo} className="logo-log mb-4" alt="logo" />
                                
                                <div className="mb-3">
                                    <label className="form-label input-name">Nombre</label>
                                    <div className='input-group'>
                                        <span className="input-group-text"><FaUserAlt /></span>
                                        <input required type="text" className="form-control input-login" id='Nombre' name="nombre" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label login-email">Email</label>
                                    <div className='input-group'>
                                        <span className="input-group-text"><GrMail /></span>
                                        <input required type="email" className="form-control input-login" id="Email" name="email"/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" id="form-label-pass">Contraseña</label>
                                    <div className='input-group'>
                                        <span className="input-group-text"><FaLock /></span>
                                        <input required type="password" className="form-control input-login" id="Password" name="password" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                <button className="btn btn-primary btn-login" type="submit" >Registrarme</button>
                                </div>
                                <div className="mt-4">
                                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                                    ¿Ya tienes una cuenta?&nbsp;
                                    <Link to="/" className="text-sm text-blue-500 underline hover:text-blue-700">
                                        <b>Inicia sesión</b>
                                    </Link>
                                </span>
                                </div>
                            </form>
                    </div>
                </>
        );
    }

export default Registro;
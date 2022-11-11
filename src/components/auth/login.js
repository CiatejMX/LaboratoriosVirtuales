import React from "react";
import Logo from "../../assets/img/logo-ciatej.jpg";
import { Link } from "react-router-dom";
import '../../assets/css/login.css';
import '../../assets/css/particles.css';
import { FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../../assets/particles/particles';

const Login = () => {

    const particlesInit = async (main) => {
        await loadSlim(main);
      };

        return(
        <>
            <Particles id="particles-js" init={particlesInit} options={particlesConfig} />
            <div id="section-login">
                        <form className="text-center form-login">
                            <img src={Logo} className="logo-log mb-4" alt="logo" />
                            <div className="mb-3">
                                <label className="form-label login-label">Correo electrónico</label>
                                <div className="input-group">
                                    <span className="input-group-text"><GrMail /></span>
                                    <input type="email" className="form-control input-login"  id="Email" name="email" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" id="form-label-pass">Contraseña</label>
                                <div className="input-group">
								    <span className="input-group-text"><FaLock /></span>
                                    <input type="password" className="form-control input-login" id="Password" name="password" required/>
							    </div>
                            </div>
                            <div className="mb-3">
                                <Link type="submit" className="btn btn-primary btn-login" to='/dashboard'> Login </Link>
                            </div>
                            <div className="mb-3 text-center">
                                <p>No tienes una cuenta?  <Link className="register" type="button" to='/registro'>Crear cuenta</Link></p>
                            </div>
                            <div className="mb-3 text-center">
                            &copy; <a href="https://ciatej.mx/" target="_blank" className="register">CIATEJ</a>
                            </div>
                        </form>
                </div>
            </>
        );
    }
    
export default Login;
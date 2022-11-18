import { Link, useNavigate } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as CiIcons from 'react-icons/ci';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import '../../assets/css/sidebarnav.css';
import Logo from '../../assets/img/logo-ciatej.png';
import LabVirt from '../../assets/img/Logo Red Laboratorios Virtuales.png';

const Sidebarnav = () => {

        function showSidebar (){
            alert('Show & Hide Sidebar');
        }

        return(
        <>
                   <div>
                        
                   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="container-fluid">
                        <a style={{fontSize: '20px', textDecoration: 'none', color: '#000' }}><img src={Logo} style={{width: '90px', height: '40px'}} />
                        &nbsp; <img src={LabVirt} style={{width: '150px', height: '50px', marginLeft:'1em'}} />  <GiIcons.GiHamburgerMenu className="menu-toggle" onClick={showSidebar}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <AiIcons.AiOutlineArrowDown /> </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <Link className="btn sedes-nav" to="/normalistas"> Normalistas </Link>
                                <Link className="btn sedes-nav" to="/zapopan"> Zapopan </Link> 
                                <Link className="btn sedes-nav" to="/sureste"> Sureste </Link>  
                                <Link className="btn sedes-nav" to="/noreste"> Noreste</Link> 
                            </ul>
                            <form className="d-flex">
                                <Link className="btn logout" to="/"><MdIcons.MdLogout /> Cerrar Sesión</Link>
                            </form>
                            </div>
                        </div>
                    </nav>    

                        <div className="sidebar">
                            <ul>
                                {/* PRINCIPAL */}
                                <li className='drop'><Link to="/dashboard" className='btn dropd'><AiIcons.AiOutlineHome />  &nbsp; PRINCIPAL</Link></li>
                                <hr style={{color:'#fff', padding:'2px'}} />

                                {/* NORMALISTAS */}
                                <li className='drop'>
                                <Link className='btn dropd' to="/normalistas"><BsIcons.BsBuilding style={{color:'#fff', fontWeight: 'bold'}}  /> &nbsp; NORMALISTAS </Link> 
                           
                                 <ul className='uldrop'>
                                    <li className='drop'>
                                    <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; Posgrado </Link> 
                                    </li>                

                                    <li className='drop'>
                                    <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Biotecnología Médica y Fa.</Link> 
                                    </li>

                                    <li className='drop'>
                                    <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; Tecnología Ambiental</Link> 
                                    </li>

                                    <li className='drop'>
                                    <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; Tecnología Alimentaria</Link> 
                                    </li>

                                    <li className='drop'>
                                    <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; USAM</Link> 
                                    </li>
                                
                                </ul>
                                </li>
                                <hr style={{color:'#fff', padding:'2px'}} />



                                {/* ZAPOPAN */}
                                <li className='drop'>
                                <Link className='btn dropd' to="/zapopan"><BsIcons.BsBuilding style={{color:'#fff', fontWeight: 'bold'}}  /> &nbsp; ZAPOPAN </Link> 
                           
                                 <ul className='uldrop'>
                                <li className='drop'>
                                    <Link to="/zapopan/posgrado" className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; Posgrado </Link> 
                                </li>

                                <li className='drop'>
                                <Link className='btn dropd' to="/zapopan/biotecnología-industrial"><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Biotecnología Industrial</Link> 
                                </li>

                                <li className='drop'>
                                <Link className='btn dropd' to="/zapopan/tecnología-alimentaria"><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; Tecnología Alimentaria</Link> 
                                </li>
                                
                                <li className='drop'>
                                <Link className='btn dropd' to="/zapopan/biotecnología-vegetal"><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}}  /> &nbsp; Biotecnología Vegetal</Link> 
                                </li>

                                 </ul>
                                </li>
                                <hr style={{color:'#fff', padding:'2px'}} />


                                {/* SURESTE */}
                                <li className='drop'>
                                <Link className='btn dropd' to="/sureste"><BsIcons.BsBuilding style={{color:'#fff', fontWeight: 'bold'}}  /> &nbsp; SURESTE </Link> 
        
                                    <ul className='uldrop'>     

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Bioprocesos</Link> 
                                        </li>

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Biotecnología Vegetal</Link> 
                                        </li>

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Tecnología Alimentaria</Link> 
                                        </li>
                                    </ul>

                                </li>
                                <hr style={{color:'#fff', padding:'2px'}} />


                                {/* NORESTE */}
                                <li className='drop'>
                                <Link className='btn dropd' to="/noreste"><BsIcons.BsBuilding style={{color:'#fff', fontWeight: 'bold'}}  /> &nbsp; NORESTE </Link> 
        
                                    <ul className='uldrop'>   

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Posgrado</Link> 
                                        </li>
                                                                 
                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Biotecnología Médica y Fa.</Link> 
                                        </li>

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Tecnología Alimentaria</Link> 
                                        </li>
                                        
                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Biotecnología Vegetal</Link> 
                                        </li>

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; Tecnología Ambiental</Link> 
                                        </li>

                                        <li className='drop'>
                                          <Link className='btn dropd'><GiIcons.GiAtom style={{color:'#fff', fontWeight: 'bold', fontSize: '18px'}} /> &nbsp; USAM</Link> 
                                        </li>

                                    </ul>
                                </li>
                                <hr style={{color:'#fff', padding:'2px'}} />

                                {/* USUARIOS */}
                                <li className='drop'><Link to="/usuarios" className='btn dropd'><FiIcons.FiUsers/> &nbsp; CONTROL DE USUARIOS</Link></li>
                            </ul>
                        </div>        
                    </div>
        </>
        );
    }
    
export default Sidebarnav;
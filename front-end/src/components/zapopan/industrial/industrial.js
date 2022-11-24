import { Link } from 'react-router-dom';
import ImgIndustrial from '../../../assets/img/INDUSTRIAL.png';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';
import * as GiIcons from 'react-icons/gi';

const BioIndustrialZap = () => {

        return(
        <>
        <main id="main" className="main">

                <div className='row'>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="/zapopan/biotecnología-industrial/equipos-insignia"><MdIcons.MdOndemandVideo style={{fontSize:'25px'}}/> Equipos Insignia</Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="/zapopan/biotecnología-industrial/bioreactores"><GiIcons.GiReactor style={{fontSize:'25px'}}/> Bioreactores</Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="#"><TiIcons.TiVideoOutline style={{fontSize:'25px'}}/> Cámara</Link>
                    </div>
                </div><br/>

               <div className='row'>
                    <div className='col-lg-12'>
                        <img src={ImgIndustrial} style={{width:'100%'}}/>
                    </div>
               </div><br></br>

                <div className="row">   
                    <div className="col-md-12">
                    <div className="card card-chart">
                        <div className="card-header">
                        <h5 className="card-title">Planta piloto Biotecnología Industrial</h5>
                        </div>
                        <div className="card-body">
                            <iframe className='video-info' src="https://www.youtube.com/embed/4JROYHMBchI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <div className="card-footer">
                        <div className="card-stats">
                            <BsIcons.BsCheckLg /> Recorrido virtual del interior de la planta piloto de la unidad de Biotecnología Industrial 
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
         </main>
        </>
        );
    }
    
export default BioIndustrialZap;
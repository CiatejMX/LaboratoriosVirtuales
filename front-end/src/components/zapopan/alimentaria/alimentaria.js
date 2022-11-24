import { Link } from 'react-router-dom';
import ImgTecAlim from '../../../assets/img/ALIMENTARIA.png';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import * as BsIcons from 'react-icons/bs';

const TecAlimentariaZap = () => {

        return(
        <>
        <main id="main" className="main">

                <div className='row'>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="/zapopan/tecnología-alimentaria/videos"><FaIcons.FaPhotoVideo  style={{fontSize:'25px'}}/> Videos</Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="/zapopan/tecnología-alimentaria/camara"><TiIcons.TiVideoOutline style={{fontSize:'25px'}}/> Cámara</Link>
                    </div>
                </div><br/>

               <div className='row'>
                    <div className='col-lg-12'>
                        <img src={ImgTecAlim} style={{width:'100%'}}/>
                    </div>
               </div><br/>

               <div className="row">   
                    <div className="col-md-12">
                    <div className="card card-chart">
                        <div className="card-header">
                        <h5 className="card-title">Planta piloto Tecnología Alimentaria</h5>
                        </div>
                        <div className="card-body">
                            <iframe className='video-info' src="https://www.youtube.com/embed/jq5fidTNMb8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <div className="card-footer">                        
                        <div className="card-stats">
                            <BsIcons.BsCheckLg /> Recorrido virtual del interior de la planta piloto de la unidad de Tecnología Alimentaria
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

         </main>
        </>
        );
    }
    
export default TecAlimentariaZap;
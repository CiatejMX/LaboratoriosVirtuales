import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';

const VideosAlimZap = () => {

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

        <div className="row">   
            <div className="col-md-12">
            <div className="card card-chart">
                <div className="card-header">
                <h5 className="card-title">Planta piloto Tecnología Alimentaria</h5>
                <p className="card-category">Lagarde </p>
                </div>
                <div className="card-body">
                <iframe className='video-info' src="https://www.youtube.com/embed/OLWxfp2dI4Q" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="card-footer">                
                <div className="card-stats">
                    <BsIcons.BsCheckLg /> vide que muestra el autoclave Lagarde ubicado en la planta piloto de Tecnología Alimentaria. 
                </div>
                </div>
            </div>
            </div>
        </div><br/>

        <div className="row">   
            <div className="col-md-12">
            <div className="card card-chart">
                <div className="card-header">
                <h5 className="card-title">Planta piloto Tecnología Alimentaria</h5>
                <p className="card-category">Extracción de fluidos super críticos</p>
                </div>
                <div className="card-body">
                <iframe className='video-info' src="https://www.youtube.com/embed/TE8k-q5e5CE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="card-footer">                
                <div className="card-stats">
                    <BsIcons.BsCheckLg /> Video que muestra el sistema de extracción de fluidos super críticos ubicado en la planta piloto de Tecnología Alimentaria.
                </div>
                </div>
            </div>
            </div>
        </div>
  

         </main>
        </>
        );
    }
    
export default VideosAlimZap;
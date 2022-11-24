import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import * as BsIcons from 'react-icons/bs';

const CamAlimZap = () => {

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
                        <h5 className="card-title">Planta Piloto Tecnología Alimentaria</h5>                        
                        </div>
                        <div className="card-body">
                            <img src="http://{{url}}/zm/cgi-bin/nph-zms?scale=50&width=640p&height=480px&mode=jpeg&maxfps=5&buffer=1000&&monitor=2&user=labmonitor&pass=labmonitor" />
                        </div>
                        <div className="card-footer">                        
                        <div className="card-stats">
                            <BsIcons.BsCheckLg />Transmisión en tiempo real de la camara 1 instalada en la planta piloto de Tecnología Alimentaria, vista hacia el área de destilación, molienda y el difusor.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

         </main>
        </>
        );
    }
    
export default CamAlimZap;
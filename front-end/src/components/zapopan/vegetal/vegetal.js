import { Link } from 'react-router-dom';
import ImgBioVeg from '../../../assets/img/VEGETAL.png';
import * as BsIcons from 'react-icons/bs';
import * as TiIcons from 'react-icons/ti';

const BioVegetalZap = () => {

        return(
        <>
        <main id="main" className="main">

                <div className='row'>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="/zapopan/biotecnología-vegetal/camara"><TiIcons.TiVideoOutline style={{fontSize:'25px'}}/> Cámara</Link>
                    </div>
                </div><br/>

               <div className='row'>
                    <div className='col-lg-12'>
                        <img src={ImgBioVeg} style={{width:'100%'}}/>
                    </div>
               </div><br/>

               <div className="col-md-12">
                    <div className="card card-chart">
                    <div className="card-header">
                        <h5 className="card-title">Invernadero Automatizado </h5>
                    </div>
                    <div className="card-body">
                        <iframe className='video-info' src="https://www.youtube.com/embed/YSs-Ee_C_KY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <div className="card-footer">
                        <div className="card-stats">
                            <BsIcons.BsCheckLg /> Video que muestra el sistema atomatizado de un invernadero perteneciente al área de Biotecnología Vegetal
                        </div>
                    </div>
                    </div>
                </div>

         </main>
        </>
        );
    }
    
export default BioVegetalZap;
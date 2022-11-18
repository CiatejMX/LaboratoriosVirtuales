import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';
import * as GiIcons from 'react-icons/gi';

const EquiposInsigniaZap = () => {

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
            
        <div className="row">   
            <div className="col-md-12">
            <div className="card card-chart">
                <div className="card-header">
                <h5 className="card-title">Laboratorio de análisis</h5>
                <p className="card-category">Espectrómetro de masas</p>
                </div>
                <div className="card-body">
                <iframe className="video-info" src="https://www.youtube.com/embed/McyaWO1Jy24" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="card-footer">
                <div className="card-stats">
                    <BsIcons.BsCheckLg /> Video que Muestra el equipo espectrometro de masas ubicado en el edificio de Biotecnología Industrial
                </div>
                </div>
            </div>
            </div>
        </div><br/>

        <div className="row">   
            <div className="col-md-12">
            <div className="card card-chart">
                <div className="card-header">
                <h5 className="card-title">Laboratorio de Fermentacíon de Medio Solido</h5>
                <p className="card-category">Fermentación en medio sólido</p>
                </div>
                <div className="card-body">
                <iframe className="video-info" src="https://www.youtube.com/embed/7nzmV30vZ9Y" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="card-footer">
                <div className="card-stats">
                    <BsIcons.BsCheckLg /> Video que muestra los equipos instalados en el Laboratorio de Fermentacíon de Medio Solido ubicado en el exterior del edificio de Biotecnológia Industrial
                </div>
                </div>
            </div>
            </div>
        </div><br/>
        
        <div className="row">   
            <div className="col-md-12">
            <div className="card card-chart">
                <div className="card-header">
                <h5 className="card-title">Laboratorio de Biocatalisis</h5>
                <p className="card-category">Raman portátil</p>
                </div>
                <div className="card-body">
                <iframe className="video-info" src="https://www.youtube.com/embed/sX0Lc9k-010" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="card-footer">
                <div className="card-stats">
                    <BsIcons.BsCheckLg /> Video que muestra el sistema portátil de detección Raman ubicado en el laboratorio de Biocatálisis ubicado en el edificio de Biotecnología industrial
                </div>
                </div>
            </div>
            </div>
        </div><br/>

        <div className="row">   
            <div className="col-md-12">
            <div className="card card-chart">
                <div className="card-header">
                <h5 className="card-title">Planta piloto Biotecnologia Industrial</h5>
                <p className="card-category">Biorreactor nivel piloto</p>
                </div>
                <div className="card-body">
                <iframe className="video-info" src="https://www.youtube.com/embed/EzcI9gCDO4o" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="card-footer">
                <div className="card-stats">
                    <BsIcons.BsCheckLg /> Video que muestra el fermentador de 140 L a nivel piloto ubicado en la planta piloto de Biotecnología Industrial
                </div>
                </div>
            </div>
            </div>
        </div>
               
         </main>
        </>
        );
    }
    
export default EquiposInsigniaZap;
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';
import * as GiIcons from 'react-icons/gi';

const BioreactoresZap = () => {

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
                </div>

         </main>
        </>
        );
    }
    
export default BioreactoresZap;
import { Link } from 'react-router-dom';
import ImgPosgrado from '../../../assets/img/POSGRADO.png';
import * as VscIcons from 'react-icons/vsc';
import * as TiIcons from 'react-icons/ti';

const PosgradoZap = () => {

        return(
        <>
        <main id="main" className="main">

                <div className='row'>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="#"><VscIcons.VscRemoteExplorer style={{fontSize:'25px'}}/> Labster</Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="#"><VscIcons.VscRemoteExplorer style={{fontSize:'25px'}}/> Pymol</Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link className='btn btn-inside-page' to="#"><TiIcons.TiVideoOutline style={{fontSize:'25px'}}/> Cámara</Link>
                    </div>
                </div><br/>

               <div className='row'>
                    <div className='col-lg-12'>
                        <img src={ImgPosgrado} style={{width:'100%'}}/>
                    </div>
               </div>

         </main>
        </>
        );
    }
    
export default PosgradoZap;
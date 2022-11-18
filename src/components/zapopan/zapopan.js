import { Link } from 'react-router-dom';
import ZapopanImg from '../../assets/img/ACCamera_2.png';
import Conacyt from '../../assets/img/logo_conacyt_.png';
import Logo from '../../assets/img/logo-ciatej.png';

const Zapopan = () => {

        return(
        <>
        <main id="main" className="main">
                
                <div className="row text-center">
                    <div className="col-sm" >
                      <a href='https://ciatej.mx/' target="_blank"> <img src={Conacyt} style={{width:'350px', height:'70px'}} /></a>
                     </div>
                     <div className="col-sm" >
                        <h3 className="card-title text-center mb-5 "> Laboratorios Virtuales CIATEJ Zapopan</h3>
                     </div>
                     <div className="col-sm" >
                        <a href='https://ciatej.mx/' target="_blank"> <img src={Logo} style={{width:'auto', height:'50px'}} /></a>
                     </div>
                 </div>

                <div className='row'>
                <div className='col-lg-12'>
                    <img style={{width:'921px'}} src={ZapopanImg} useMap="#image-map"/>
                    <map name="image-map">
                    <Link to='/zapopan/biotecnología-industrial'><area shape="poly" coords="194, 151, 338, 188, 387, 275, 82, 421, -59, 213" title="Biotecnología Industrial" /></Link>
                    <Link to='/zapopan/tecnología-alimentaria'><area shape="poly" coords="244, 132, 443, 95, 631, 121, 544, 171, 412, 231"  title="Tecnología Alimentaria" /></Link>
                    <Link to='/zapopan/biotecnología-vegetal'><area shape="poly" coords="649, 134, 852, 175, 787, 308, 560, 248, 445, 257" title="Biotecnología Vegetal" /></Link>
                    <Link to='/zapopan/posgrado'><area shape="poly" coords="467, 311, 563, 251, 736, 298, 665, 507, 464, 413"  title="Posgrado" /> </Link>   
                    </map>
                </div>
                </div><br/>

                <div className="row">   
                <div className="col-md-12">
                <div className="card card-chart">
                    <div className="card-header">
                        <h5 className="card-title">Video Intro</h5>
                    </div>
                    <div className="card-body">
                        <iframe className='video-info' src="https://www.youtube.com/embed/u1zIzpPMyt0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    </div>
                </div>
                </div>
         </main>
        </>
        );
    }
    
export default Zapopan;
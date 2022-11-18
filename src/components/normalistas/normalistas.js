import Conacyt from '../../assets/img/logo_conacyt_.png';
import Logo from '../../assets/img/logo-ciatej.png';

const Normalistas = () => {

        return(
        <>
            <main id="main" className="main">
            <div className="row text-center">
                    <div className="col-sm" >
                      <a href='https://ciatej.mx/' target="_blank"> <img src={Conacyt} style={{width:'350px', height:'70px'}} title="Sitio WEB CIATEJ"/></a>
                     </div>
                     <div className="col-sm" >
                        <h3 className="card-title text-center mb-5 "> Laboratorios Virtuales CIATEJ Normalistas</h3>
                     </div>
                     <div className="col-sm" >
                        <a href='https://ciatej.mx/' target="_blank"> <img src={Logo} style={{width:'auto', height:'50px'}} title="Sitio WEB CIATEJ"/></a>
                     </div>
                 </div>
            </main>
        </>
        );
    }
    
export default Normalistas;
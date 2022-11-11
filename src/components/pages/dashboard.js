import '../../assets/css/dashboard.css';
import '../../assets/css/particles.css';
import { Link } from "react-router-dom";
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../../assets/particles/particles';

const Dashboard = () => {

    const particlesInit = async (main) => {
        await loadSlim(main);
      };

        return(
        <>
            <Particles id="particles-js-dash" init={particlesInit} options={particlesConfig} />
            <div id='section-sedes'>
                <div className="row">
                    <div className="col-lg-6">
                        <Link className="btn btn-dashboard" id='normalistas' to='/sede/normalistas'>NOMALISTAS</Link>
                    </div>
                    <div className="col-lg-6">
                        <Link className="btn btn-dashboard" id='zapopan' to='/sede/zapopan'>ZAPOPAN</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Link className="btn btn-dashboard" id='merida' to='/sede/merida'>MERIDA</Link>
                    </div>
                    <div className="col-lg-6">
                        <Link className="btn btn-dashboard" id='monterrey' to='/sede/monterrey'>MONTERREY</Link>
                    </div>
                </div>     
                </div>   
            </>
        );
    }
    
export default Dashboard;
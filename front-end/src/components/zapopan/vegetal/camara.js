import * as BsIcons from 'react-icons/bs';

const CamVegetalZap = () => {

        return(
        <>
        <main id="main" className="main">
               
            <div className="row">   
            <div className="col-md-12">
                <div className="card card-chart">
                <div className="card-header">
                    <h5 className="card-title">Cámara Biotecnología Vegetal</h5>
                </div>
                <div className="card-body">
                    <img src="http://{{url}}/zm/cgi-bin/nph-zms?scale=50&width=640p&height=480px&mode=jpeg&maxfps=5&buffer=1000&&monitor=5&user=labmonitor&pass=labmonitor" />
                </div>
                <div className="card-footer">
                    <div className="card-stats">
                        <BsIcons.BsCheckLg /> Transmisión en tiempo real de la camara instalada en invernaderos.
                    </div>
                </div>
                </div>
            </div>
            </div>

         </main>
        </>
        );
    }
    
export default CamVegetalZap;
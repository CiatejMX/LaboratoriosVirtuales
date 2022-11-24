import express from 'express';
import cors from 'cors';

import conx from "./database/db.js";
// import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use('/ConsejoEditorial', router);


try {
    await conx.authenticate();
    console.log('Conectado a la base de datos!')
} catch (error) {
    console.log(`El error de conexión es: ${error}` )
}

//Para eliminar la cache 
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

app.listen(8020, ()=>{
    console.log('Server UP running in http://localhost:8020/')
})
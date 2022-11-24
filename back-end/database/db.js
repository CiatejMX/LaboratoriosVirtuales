import { Sequelize } from 'sequelize';

const conx = new Sequelize('lab_virtuales_ciatej', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default conx;
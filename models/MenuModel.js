import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const MenuList = db.define('menu', {
    nama_barang:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    satuan:{
        type: DataTypes.ENUM,
        values: ['kg','pcs','liter','gram'],   
        allowNull: false,
    }
})

export default MenuList;

(async () => {
    await db.sync();
})()
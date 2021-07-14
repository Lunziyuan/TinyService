import mysql from 'mysql';
import DBConfig from './DBConfig.js';

const pool = mysql.createPool({
  connectionLimit: 10,
  ...DBConfig.mysql
});

export default pool;

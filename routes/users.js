import express from 'express';
import pool from '../database/pool.js';
import { responseJSON } from '../utils/response.js';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource 123');
  const params = req.query || req.params;

  pool.query('SELECT * FROM users', function (err, result) {
    if (err) {
      console.log(err);
    }
    responseJSON(res, result);
  });
});

export default router;

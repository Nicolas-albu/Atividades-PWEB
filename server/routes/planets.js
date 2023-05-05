import express from 'express';
import { data_planets } from '../utils/data_planets.js';

export const route_planets = express.Router();

route_planets.get('/planetas', (req, res) => {
    res.render('index_planets', {datas: data_planets});
});
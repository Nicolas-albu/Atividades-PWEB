import express from 'express';
import { route_planets } from './routes/planets.js';

const app = express();
app.use(route_planets);

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3001);
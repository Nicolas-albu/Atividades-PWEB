import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes.js';

const app = express();

// Configurations
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(bookRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

export default app;
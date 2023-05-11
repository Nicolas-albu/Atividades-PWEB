import bookRoutes from './routes.js';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

// Configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bookRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');

export default app;
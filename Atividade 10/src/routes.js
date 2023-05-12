import { bookSearch, parameters, bookData, nextId } from './utils.js';
import express from 'express';

const bookRoutes = express.Router();

// SELECT CRUD PAGE
bookRoutes.get('/', (req, res) => {
    let options = [
        { type: 'createBook', name: 'Adicionar livro' },
        { type: 'updateBook', name: 'Atualizar livro' },
        { type: 'deleteBook', name: 'Deletar livro' },
        { type: 'listBook', name: 'Listar livros' },
    ];

    res.status(200).render('index', { ...parameters, isSelectCrud: true, options });
});

// REDIRECTION ROUTE
bookRoutes.post('/redirection/', (req, res) => {
    const operationCrud = req.body.selectCrud;
    let host =  operationCrud == 'listBook' ? '/livros' : `/livros/${operationCrud}`;

    res.redirect(host);
});

// CREATE PAGE
bookRoutes.get('/livros/createBook', (req, res) => {
    res.status(200).render('index', { ...parameters, isCreateBook: true });
});

// READ PAGE
bookRoutes.get('/livros', (req, res) => {
    res.status(200).render('index', { ...parameters, isListBooks: true, getBooks: bookData });
});

// UPDATE PAGE
bookRoutes.get('/livros/updateBook', (req, res) => {
    res.status(200).render('index', { ...parameters, isUpdateBook: true });
});

// DELETE PAGE
bookRoutes.get('/livros/deleteBook', (req, res) => {
    res.status(200).render('index', { ...parameters, isDeleteBook: true, getBooks: bookData });
});

// CREATE ROUTE
bookRoutes.post('/livros/createBook/:title', (req, res) => {
    bookData.push({ id: nextId(), title:  req.params.title });
    
    res.send();
});

// READ ROUTE
bookRoutes.get('/livros/:id', (req, res) => {
    let index = bookSearch(req.params.id);

    res.json(bookData[index]);
});

// UPDATE ROUTE
bookRoutes.put('/livros/updateBook/:id/:title', (req, res) => {
    let index = bookSearch(req.params.id);
    bookData[index].title = req.params.title;
    // bookData[index].title = req.body.title;
    
    res.send();
});

// DELETE ROUTE
bookRoutes.delete('/livros/deleteBook/:id', (req, res) => {
    let index = bookSearch(req.params.id);
    bookData.splice(index, 1);

    res.send();
});


export default bookRoutes;
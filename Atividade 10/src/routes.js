import { bookSearch, parameters, bookData, nextId } from './utils.js';
import express from 'express';

const bookRoutes = express.Router();

// SELECT CRUD
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
    let host =  operationCrud == 'listBook' ? `/livros` : `/livros/${operationCrud}`;

    res.redirect(host);
});

// READ
bookRoutes.get('/livros', (req, res) => {
    res.status(200).render('index', { ...parameters, isListBooks: true, getBooks: bookData });
});

bookRoutes.get('/livros/:id', (req, res) => {
    let index = bookSearch(req.params.id);

    res.json(bookData[index]);
});

// UPDATE
bookRoutes.get('/livros/updateBook', (req, res) => {
    res.status(200).render('index', { ...parameters, isUpdateBook: true });
});

bookRoutes.put('/livros/updateBook/:id', (req, res) => {
    let index = bookSearch(req.params.id);
    bookData[index].title = req.body.title;
    
    res.json(bookData);
});

// CREATE
bookRoutes.get('/livros/createBook', (req, res) => {
    console.log({ ...parameters, isCreateBook: true });
    res.status(200).render('test', { ...parameters, isCreateBook: true });
});

bookRoutes.post('/livros/createBook/:title', (req, res) => {
    bookData.push({ id: nextId(), title: req.params.title });
    
    res.json(bookData);
});

// DELETE
bookRoutes.get('/livros/deleteBook', (req, res) => {
    res.status(200).render('index', { ...parameters, isDeleteBook: true });
});

bookRoutes.delete('/livros/deleteBook/:id', (req, res) => {
    let index = bookSearch(req.params.id);
    bookData.pop(bookData[index]);

    res.json(bookData);
});


export default bookRoutes;
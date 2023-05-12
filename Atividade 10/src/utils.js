// Lista de objetos que simula o nosso BD
const bookData = [
    {id: 1, title: 'Senhor dos Aneis'},
    {id: 2, title: 'O Hobiit'},
];

const nextId = () => {
    let max = 0;
    bookData.forEach(book => {
        if (book.id > max) {
            max = book.id;
        }
    });

    return ++max;
};

const bookSearch = (id) => {
    return bookData.findIndex(book => book.id == id);
};

const parameters = {
    isSelectCrud: null,
    isCreateBook: null,
    isListBooks: null,
    isUpdateBook: null,
    isDeleteBook: null,
};


export {
    bookSearch,
    parameters,
    bookData,
    nextId,
};
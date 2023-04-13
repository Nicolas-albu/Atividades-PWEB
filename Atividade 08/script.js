
const buttonAddRow = () => {
    let fieldCategory = document.getElementById('select-category');
    let fieldPrice = document.getElementById('field-value');
    let fieldDate = document.getElementById('field-date');

    if(fieldCategory.checkValidity() && fieldDate.checkValidity() && fieldPrice.checkValidity()) {
        const table = document.getElementById('bank-table');
        fieldCategory = fieldCategory.value;
        fieldPrice = fieldPrice.value;
        fieldDate = fieldDate.value;        
    
        const newRow = document.createElement('tr');
        const newCategoryCell = document.createElement('td');
        const newDateCell = document.createElement('td');
        const newPriceCell = document.createElement('td');
        
        newCategoryCell.textContent = fieldCategory;
        newDateCell.textContent = fieldDate;
        newPriceCell.textContent = fieldPrice;
        
        newRow.appendChild(newCategoryCell);
        newRow.appendChild(newDateCell);
        newRow.appendChild(newPriceCell);
        table.appendChild(newRow);
    }
};
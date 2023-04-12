
const js_add_rows = () => {
    const rowsField = document.getElementById('txtNumRows');

    if (rowsField.checkValidity()) {
        const table = document.getElementById('sampleTable');
        const numberOfRows = rowsField.value;
    
        for (let index = 0; index < numberOfRows; index++) {
            const row = document.createElement('tr');
            const primaryCell = document.createElement('td');
            const secondCell = document.createElement('td');
            primaryCell.textContent = `Row${index+1} cell${index+1}`;
            secondCell.textContent = `Row${index+1} cell${index+1}`;
            row.appendChild(primaryCell);
            row.appendChild(secondCell);
            table.appendChild(row);
        }

    }
};
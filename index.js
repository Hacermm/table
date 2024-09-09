const people = [
    { ad: "Həcər", soyad: "Məmmədzadə" },
    { ad: "Günay", soyad: "Cəfiyeva" },
    { ad: "Fidan", soyad: "Məmmədova" },
    { ad: "Kənan", soyad: "Bağırov" },
    { ad: "İbrahim", soyad: "Rzayev" },
    { ad: "Ruslan", soyad: "Mehdiyev" },
    
];



let idCounter = 1;  
let index = 0;      
let rowCount = 0;  
const maxRows = 6; 

function addRow() {
    if (rowCount >= maxRows) {
        clearInterval(intervalId);
        return;
    }

    const tableBody = document.querySelector('#table tbody');
    const person = people[index % people.length]; 

 
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = idCounter;
    row.appendChild(idCell);

    const adCell = document.createElement('td');
    adCell.textContent = person.ad;
    row.appendChild(adCell);

    const soyadCell = document.createElement('td');
    soyadCell.textContent = person.soyad;
    row.appendChild(soyadCell);

    tableBody.appendChild(row);

   
    idCounter++;
    index = (index + 1) % people.length; 
    rowCount++;
}

const intervalId = setInterval(addRow, 2000);

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    if (age >= 18) {
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = firstName;
        newRow.insertCell(1).innerText = lastName;
        newRow.insertCell(2).innerText = age;

        const data = { firstName, lastName, age };
        let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
        dataList.push(data);
        localStorage.setItem('dataList', JSON.stringify(dataList));
    } else {
        alert('Age must be 18 or older.');
    }
});

window.onload = function() {
    const dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    dataList.forEach(data => {
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = data.firstName;
        newRow.insertCell(1).innerText = data.lastName;
        newRow.insertCell(2).innerText = data.age;
    });
}

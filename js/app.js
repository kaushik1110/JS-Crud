var selectedRow = null;

function onFormSubmit() {
    var formData = readFromData();
    if (selectedRow == null) {
        insertNerRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFromData() {
    var formData = {};
    formData["enNo"] = document.getElementById("enNo").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["moNo"] = document.getElementById("moNo").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let other = document.getElementById("other");

    var gender = document.getElementById('gender').value;

    if (male.checked) {
        formData["gender"] = "male"
    }
    if (female.checked) {
        formData["gender"] = "female"
    }
    if (other.checked) {
        formData["gender"] = "other"
    }

    formData["address"] = document.getElementById("address").value;
    return formData;

}

function insertNerRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.enNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.moNo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.address;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `
    <input type="submit" value="Edit" class="btn btn-success" onClick="onEdit(this)">
    <input type="submit" value="Delete" class="btn btn-danger" onClick="onDelete(this)">`;
}

function resetForm() {
    document.getElementById("enNo").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("moNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("enNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("moNo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    var gender = document.getElementById('gender').value;

    if (selectedRow.cells[5].innerHTML === "male") {
        document.getElementById("male").checked = true;
    }
    if (selectedRow.cells[5].innerHTML === "female") {
        document.getElementById("female").checked = true;
    }
    if (selectedRow.cells[5].innerHTML === "other") {
        document.getElementById("other").checked = true;
    }
    
    document.getElementById("address").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.enNo;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.moNo;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.gender;
    selectedRow.cells[6].innerHTML = formData.address;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
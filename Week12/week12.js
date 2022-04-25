$( function() {

    let contacts = [];
    let runCheck = false;
        if ( runCheck != true ) {
        $.ajax({url:'https://randomuser.me/api/?results=25&nat=us&inc=name,phone,email,dob'}).done((data) => { 
            for (let item of data.results) {
                contacts.push(item)
            }
            createTable(contacts);
        }) 
        runCheck = true;
    }
    
    function createTable(data) {
        let tBody = document.getElementById('t-body');
        tBody.innerHTML = ""
        for ( let i = 0; i < data.length; i++ ) {
            let row = tBody.insertRow(0);
            let name = row.insertCell(0);
            let phone = row.insertCell(1);
            let email = row.insertCell(2);
            let dob = row.insertCell(3);
            let addButtons = row.insertCell(4);
    
            row.setAttribute('id', i);
    
            name.innerHTML = `${data[i].name.first} ${data[i].name.last}`
            phone.innerHTML = data[i].phone;
            email.innerHTML = data[i].email;
            dob.innerHTML = data[i].dob.age;
    
            addButtons.innerHTML = `
                <button type="button" class="btn btn-info">Update Row</button><button type="button" class="btn btn-secondary">Delete Row</button>
            `
            let deleteButton = document.querySelector('.btn-secondary');
            deleteButton.addEventListener('click', (evt) => {
                let id = evt.target.parentElement.parentElement.getAttribute('id');
                contacts.splice(id, 1);
                createTable(contacts);
            });
        }
    }

    let addContact = document.getElementById('add-contact');
    addContact.addEventListener('click', (evt) => {
        let contactName = document.getElementById('contact-name').value;
        let phoneNmber = document.getElementById('phone-number').value;
        let emailAddress = document.getElementById('email').value;
        let contactAge = document.getElementById('age').value;
        let tBody = document.getElementById('t-body');
        let row = tBody.insertRow(0);
        let name = row.insertCell(0);
        let phone = row.insertCell(1);
        let email = row.insertCell(2);
        let age = row.insertCell(3);
        let addButtons = row.insertCell(4);

        row.setAttribute('id', contacts.length);

        name.innerHTML = contactName;
        phone.innerHTML = phoneNmber;
        email.innerHTML = emailAddress;
        age.innerHTML = contactAge;

        contacts.push(row);
        addButtons.innerHTML = `
            <button type="button" class="btn btn-info">Update Row</button><button type="button" class="btn btn-secondary">Delete Row</button>
        `
        let updateButton = document.querySelector('.btn-info');
        updateButton.addEventListener('click', (evt) => {
            let contactName = document.getElementById('contact-name');
            let phoneNmber = document.getElementById('phone-number');
            let emailAddress = document.getElementById('email');
            let contactAge = document.getElementById('age');
            let tBody = document.getElementById('t-body');
            let row = tBody.insertRow(0);
            row.setAttribute('id', contacts.length);

            name.innerHTML = contactName.value;
            phone.innerHTML = phoneNmber.value;
            email.innerHTML = emailAddress.value;
            age.innerHTML = contactAge.value;
        });
        
        contacts.push(row);
        let deleteButton = document.querySelector('.btn-secondary');
        deleteButton.addEventListener('click', (evt) => {
            let id = evt.target.parentElement.parentElement.getAttribute('id');
            contacts.splice(id, 1);
            createTable(contacts);
        });
    })
})
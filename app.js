// Show/Hide Forms
function showCreateUserForm() {
    document.getElementById('create-user-form').style.display = 'block';
    document.getElementById('search-user-form').style.display = 'none';
    document.getElementById('update-user-form').style.display = 'none';
}

function showSearchUserForm() {
    document.getElementById('create-user-form').style.display = 'none';
    document.getElementById('search-user-form').style.display = 'block';
    document.getElementById('update-user-form').style.display = 'none';
}

function showUpdateUserForm() {
    document.getElementById('create-user-form').style.display = 'none';
    document.getElementById('search-user-form').style.display = 'none';
    document.getElementById('update-user-form').style.display = 'block';
    document.getElementById('user-details').style.display = 'none';
}

// Function to create a new user
function createUser() {
    const user = {
        name: document.getElementById('create-name').value,
        username: document.getElementById('create-username').value,
        password: document.getElementById('create-password').value,
        age: parseInt(document.getElementById('create-age').value, 10),
        gender: document.getElementById('create-gender').value,
        country: document.getElementById('create-country').value,
        state: document.getElementById('create-state').value,
        city: document.getElementById('create-city').value,
        postcode: parseInt(document.getElementById('create-postcode').value, 10),
        father: document.getElementById('create-father').value,
        mother: document.getElementById('create-mother').value,
        dateOfBirth: document.getElementById('create-dateOfBirth').value
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("User created successfully!");
}

// Function to search for a user by credentials
function searchUser() {
    const username = document.getElementById('search-username').value;
    const password = document.getElementById('search-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let user of users) {
        if (user.username === username && user.password === password) {
            alert("Access granted!\n\n" +
                  `Name: ${user.name}\n` +
                  `Age: ${user.age}\n` +
                  `Gender: ${user.gender}\n` +
                  `Country: ${user.country}\n` +
                  `State: ${user.state}\n` +
                  `City: ${user.city}\n` +
                  `Postcode: ${user.postcode}\n` +
                  `Father's Name: ${user.father}\n` +
                  `Mother's Name: ${user.mother}\n` +
                  `Date of Birth: ${user.dateOfBirth}`);
            return;
        }
    }
    alert("Access denied.");
}

// Function to load user details for updating
function getUserForUpdate() {
    const username = document.getElementById('update-username').value;
    const password = document.getElementById('update-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let user of users) {
        if (user.username === username && user.password === password) {
            document.getElementById('update-name').value = user.name;
            document.getElementById('update-new-password').value = user.password;
            document.getElementById('update-age').value = user.age;
            document.getElementById('update-gender').value = user.gender;
            document.getElementById('update-country').value = user.country;
            document.getElementById('update-state').value = user.state;
            document.getElementById('update-city').value = user.city;
            document.getElementById('update-postcode').value = user.postcode;
            document.getElementById('update-father').value = user.father;
            document.getElementById('update-mother').value = user.mother;
            document.getElementById('update-dateOfBirth').value = user.dateOfBirth;
            
            document.getElementById('user-details').style.display = 'block';
            return;
        }
    }
    alert("Access denied.");
}

// Function to update user details
function updateUserDetails() {
    const username = document.getElementById('update-username').value;
    const newName = document.getElementById('update-name').value;
    const newPassword = document.getElementById('update-new-password').value;
    const newAge = parseInt(document.getElementById('update-age').value, 10);
    const newGender = document.getElementById('update-gender').value;
    const newCountry = document.getElementById('update-country').value;
    const newState = document.getElementById('update-state').value;
    const newCity = document.getElementById('update-city').value;
    const newPostcode = parseInt(document.getElementById('update-postcode').value, 10);
    const newFather = document.getElementById('update-father').value;
    const newMother = document.getElementById('update-mother').value;
    const newDateOfBirth = document.getElementById('update-dateOfBirth').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(user => {
        if (user.username === username) {
            return {
                name: newName,
                username: username,
                password: newPassword,
                age: newAge,
                gender: newGender,
                country: newCountry,
                state: newState,
                city: newCity,
                postcode: newPostcode,
                father: newFather,
                mother: newMother,
                dateOfBirth: newDateOfBirth
            };
        }
        return user;
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    alert("User details updated successfully!");
}

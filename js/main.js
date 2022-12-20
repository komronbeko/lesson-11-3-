let __form = document.querySelector(".form");
let __result = document.querySelector(".result");


let nameInput = document.createElement("input");
let nameSpan = document.createElement("span");
let SecnameInput = document.createElement("input");
let SecnameSpan = document.createElement("span");
let emailInput = document.createElement("input");
let emailSpan = document.createElement("span");
let paswordInput = document.createElement("input");
let paswordSpan = document.createElement("span");
let btn = document.createElement("button");


/////////////////////////////
/////////////////////////////

nameInput.id = "nameInput";
nameInput.type = "text";
nameInput.className = "nameInput";
nameInput.placeholder = "First Name";
nameInput.required = "true";


nameSpan.id = "nameWarning";
nameSpan.className = "nameWarning nameWarning-visible";
nameSpan.textContent = "Must be more than 4 characters";

SecnameInput.id = "SecnameInput";
SecnameInput.type = "text";
SecnameInput.className = "SecnameInput";
SecnameInput.placeholder = "Second Name";
SecnameInput.required = "true";

SecnameSpan.id = "SecnameWarning";
SecnameSpan.className = "SecnameWarning SecnameWarning-visible";
SecnameSpan.textContent = "Must be more than 4 characters";

emailInput.id = "emailInput";
emailInput.type = "email";
emailInput.className = "emailInput";
emailInput.placeholder = "Your Email";
emailInput.required = "true";

emailSpan.id = "emailWarning";
emailSpan.className = "emailWarning emailWarning-visible";
emailSpan.textContent = "Must be more than 8 characters";

paswordInput.id = "paswordInput";
paswordInput.type = "password";
paswordInput.className = "paswordInput";
paswordInput.placeholder = "Your Pasword";
paswordInput.required = "true";

paswordSpan.id = "paswordWarning";
paswordSpan.className = "paswordWarning paswordWarning-visible";
paswordSpan.textContent = "Must be more than 8 characters";

btn.id = "btn";
btn.className = "btn";
btn.type = "submit";
btn.textContent = "Start Your Free Trial"

__form.append(nameInput);
__form.append(nameSpan);
__form.append(SecnameInput);
__form.append(SecnameSpan);
__form.append(emailInput);
__form.append(emailSpan);
__form.append(paswordInput);
__form.append(paswordSpan);
__form.append(btn);

////////////////////////////
////////////////////////////

let __nameWarning = document.querySelector(".nameWarning");
let __SecnameWarning = document.querySelector(".SecnameWarning");
let __emailWarning = document.querySelector(".emailWarning");
let __paswordWarning = document.querySelector(".paswordWarning");

///////////////////////////////
/////////////////////////////////

nameInput.addEventListener("input", function (e) {
    let nameValue = e.target.value;
    if (nameValue.length < 4){
        __nameWarning.classList.remove("nameWarning-visible")
    } 
    else if (nameValue.length >= 4) {
        __nameWarning.classList.add("nameWarning-visible")
    }
})

SecnameInput.addEventListener("input", function (e) {
    let SecnameValue = e.target.value;
    if (SecnameValue.length < 4){
        __SecnameWarning.classList.remove("SecnameWarning-visible")
    } 
    else if (SecnameValue.length >= 4) {
        __SecnameWarning.classList.add("SecnameWarning-visible")
    }
})

emailInput.addEventListener("input", function (e) {
    let emailValue = e.target.value;
    if (emailValue.length < 8){
        __emailWarning.classList.remove("emailWarning-visible")
    } 
    else if (emailValue.length >= 8) {
        __emailWarning.classList.add("emailWarning-visible")
    }
})

paswordInput.addEventListener("input", function (e) {
    let paswordValue = e.target.value;
    if (paswordValue.length < 6){
        __paswordWarning.classList.remove("paswordWarning-visible")
    } 
    else if (paswordValue.length >= 6) {
        __paswordWarning.classList.add("paswordWarning-visible")
    }
});

/////////////////////////////
////////////////////////////



let clients = [];

function handleSubmit(e) {
  e.preventDefault();

  let client = {
    firstName: nameInput.value,
    lastName: SecnameInput.value,
    mail: emailInput.value,
    password: paswordInput.valuet,
  };

  clients.push(client);

  nameInput.value = "";
  SecnameInput.value = "";
  emailInput.value = "";
  paswordInput.value = "";

  console.log(clients);

  renderClients();
}

__form.addEventListener("submit", handleSubmit);

function renderClients() {
  __result.innerHTML = null;
  for (let i = 0; i < clients.length; i++) {
    let item = document.createElement("li");
    item.className = "item";
    let fName = document.createElement("p");
    fName.className = "fName";
    fName.textContent = clients[i].firstName;
    item.append(fName);

    let LName = document.createElement("p");
    LName.className = "LName";
    LName.textContent = clients[i].lastName;
    item.append(LName);

    let userEmail = document.createElement("span");
    userEmail.className = "userEmail";
    userEmail.textContent = clients[i].mail;
    item.append(userEmail);

    __result.append(item);
  }
}

// let users = [];

// function manageSubmit(e) {
//     e.preventDefault();

//     let user = {
//         name: nameInput.value,
//         Secname: SecnameInput.value,
//         Email: emailInput.value,
//         pasword: paswordInput.value,
//     };

//     users.push(user);

//     SecnameInput.value = "";
//     emailInput.value = "";
//     paswordInput.value = "";

//     renderUsers()

//     console.log(users)

// }

// __form.addEventListener("submit", manageSubmit);


// //////////////
// /////////////////

// function renderUsers() {
//     for(i = 0; i < users.length; i++);

//     let item = document.createElement("li");
//     item.className = "Item";

//     let UserName = document.createElement("h3");
//     UserName.className = "User-name";
//     UserName.textContent = users[i].name;
//     item.append(UserName);

//     let UserSecname = document.createElement("p");
//     UserSecname.classList = "User-secname";
//     UserSecname.textContent = users[i].Secname;
//     item.append(UserSecname);

//     let UserEmail = document.createElement("p");
//     UserEmail.classList = "User-email";
//     UserEmail.textContent = users[i].Email;
//     item.append(UserEmail);

//     let Userpasword = document.createElement("span");
//     Userpasword.classList = "User-pasword";
//     Userpasword.textContent = users[i].pasword;
//     item.append(Userpasword);




//     __result.append(item);

// }
const getBtn = document.getElementById("getBtn");
const get404Btn = document.getElementById("get404Btn");
const get200Btn = document.getElementById("get200Btn");
const postBtn = document.getElementById("postBtn");

const estadoRequest = document.getElementById("estadoRequest")
const imgResponse = document.getElementById("imgResponse")

const responseData = document.getElementById("responseData");

function httpRequest(metodo, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(metodo, url);
    xhr.onload = function() {
        console.log(xhr.readyState);
        let responseData = xhr.response;
        console.log(responseData);
    }
    xhr.onreadystatechange = function() {
        if (xhr.status == 4) {
            estadoRequest.innerHTML = "yay!"
            imgResponse.src = "";

            populateData(responseData);
        }
        if (xhr.status == 404) {
            imgResponse.style.display = "block";
            imgResponse.src = "https://media3.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=ecf05e47ekr5dyduita6ri0brh3grn8lsxe3ifir37fj13l1&rid=giphy.gif&ct=g";
            estadoRequest.innerHTML = "Oops!";
        }
    }
    xhr.send();
}

function populateData(datos) {

    for (let i = 0; i < datos.length; i++) {
        console.log(datos[i]);
        let newUserDiv = document.createElement("div");
        let userNameTag = document.createElement("p");
        let userEmail = document.createElement("p");
        let imgTag = document.createElement("img");


        userEmail.classList.add("email");
        userNameTag.classList.add("nombre");
        newUserDiv.classList.add("response");
        imgTag.classList.add("avatar");



        newUserDiv.appendChild(userNameTag);
        newUserDiv.appendChild(userEmail);
        newUserDiv.appendChild(imgTag);

        responseData.appendChild(newUserDiv);
    }
}

function getData() {
    httpRequest("GET", "https://reqres.in/api/users?page=2");
}

function get404() {
    httpRequest("GET", "https://reqres.in/api/users/23")
}

function get200() {
    httpRequest("GET", "https://reqres.in/api/users/12")
}

function postData() {
    httpRequest("POST", "https://reqres.in/api/users", {
        name: "morpheus",
        job: "leader"
    })
}

getBtn.addEventListener("click", getData);
get404Btn.addEventListener("click", get404);
get200Btn.addEventListener("click", get200);
postBtn.addEventListener("click", postData);
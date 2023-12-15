let id = new URLSearchParams(window.location.search).get("id");
let info = document.querySelector(".inform");

network.getById(id)
.then(data => {
    info.innerHTML += `
        <h3>Mehsulun adi:</h3> <p> ${data.name} </p>
        <h3>Mehsulun qiymeti:</h3> <p>${data.unitPrice}</p>
        <h3>Stokda var:</h3> <p> ${data.unitsInStock}</p>
        <h3>Qablasdirmada: </h3><p>${data.quantityPerUnit}</p>
    `
})


let btn =document.querySelector("#btn");


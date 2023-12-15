let id = new URLSearchParams(window.location.search).get("id");
let table2 = document.querySelector("#table2");
let spinner = document.querySelector(".spinner");
let spinner2 = document.querySelector(".spinner2");
let done = document.querySelector(".done");
let error = document.querySelector(".error");


network.getById(id)
.then(element=>{
  spinner2.style.display = "none";
    table2.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td><input type="text" id='name' value="${element.name}"></td>
            <td><input type="text" id='price' value="${element.unitPrice}"></td>
            <td><input type="text" id='stock' value="${element.unitsInStock}"></td>
            <td> <button id="btn3" class='buttons'>Save</button></td>
          </tr>
        `;

    let btn3 = document.querySelector("#btn3");
    let nameInp = document.querySelector("#name");
    let priceInp = document.querySelector("#price");
    let stockInp = document.querySelector("#stock");

    btn3.addEventListener("click", () => {
      if (priceInp.value && stockInp.value && nameInp.value) {
        error.style.display = 'none'
        spinner.style.display = "flex";

        let body = {
          name: nameInp.value,
          unitPrice: priceInp.value,
          unitsInStock: stockInp.value,
        }
        network.update(id, body)
          .then((data) => {
            setTimeout(() => {
              window.location = "../index.html";
            }, 3000);
            spinner.style.display = "none";
            done.innerHTML += `ID nömrəsi : ${data.id}`;
            done.style.display = "flex";
          });
      }else{
            error.style.display = 'flex'
      }
    });
})


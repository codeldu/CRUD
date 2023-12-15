let btn = document.querySelector("#addNewProduct");
let nameInp = document.querySelector("#name");
let priceInp = document.querySelector("#price");
let stockInp = document.querySelector("#stock");
let spinner = document.querySelector(".spinner");
let done = document.querySelector(".done");
let error = document.querySelector(".error");

btn.addEventListener("click", () => {
  if (priceInp.value && stockInp.value && nameInp.value) {
    error.style.display = 'none';
    spinner.style.display = "flex";
    const body = {
      name : nameInp.value,
      unitPrice : priceInp.value,
      unitsInStock : stockInp.value
    }

    network.add(body)
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

let table = document.querySelector("#table1");
let input = document.querySelector("input");
let addBtn = document.querySelector('#add');
let spinner =document.querySelector('.spinner');

const deleteItem = (id) => {
  axios.delete('https://northwind.vercel.app/api/products/'+id)
  .then(res=>{
    console.log(res.data);
    alert(`${id} nömrəli məhsul uğurla silindi`)
    window.location.reload();
  })
}

fetch("https://northwind.vercel.app/api/products")
  .then(res => res.json())
  .then(data => {

    spinner.style.display= 'none';
    data.forEach(element => {
      table.innerHTML += `<tr>
        <td>${element.id}</td>
        <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
        <td>${element.unitPrice}</td>
        <td>${element.unitsInStock}</td>
        <td><button class='buttons' onClick='deleteItem(${element.id})'>Delete</button></td>
        <td><button class='buttons' ><a href="./update.html?id=${element.id}">Update</a></button></td>
      </tr>`
    })
    input.addEventListener("input", (e) => {
      let filter = data.filter((el) => {
        return el.name.toLowerCase().startsWith(e.target.value)
      })
      table.innerHTML = ` <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>PRICE</th>
      <th>STOCK</th>
    </tr>`;
      filter.forEach(element => {
        table.innerHTML += `<tr>
        <td>${element.id}</td>
        <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
        <td>${element.unitPrice}</td>
        <td>${element.unitsInStock}</td>
        <td><button class="buttons" onClick='deleteItem(${element.id})'>Delete</button></td>
        <td><button class="buttons"><a href="./update.html?id=${element.id}">Update</a></button></td>
      </tr>`
      })
    })
  })

addBtn.addEventListener('click', ()=>{
  window.location ='./add.html'
})
function newElement(element){
    return document.createElement(element)
}
function appendElement(parent, elem){
    return parent.appendChild(elem)
}
const product= document.getElementById("products")
fetch('http://localhost:5000/products')
.then(response=> response.json())
.then(data => {
     return data.map(item =>{
         let items = newElement('li')
         items.innerHTML = item.name
         appendElement(product, items)
     })
    })
.catch(err =>{
    console.log(err)
})
function newElement(element){
    return document.createElement(element)
}
function appendElement(parent, elem){
    return parent.appendChild(elem)
}
const fruits= document.getElementById("fruList")
fetch('http://localhost:5000/products/fruits')
.then(response=> response.json())
.then(data => {
     return data.map(item =>{
         let items = newElement('li')
         items.innerHTML = item.name
         appendElement(fruits, items)
     })
    })
.catch(err =>{
    console.log(err)
})
function newElement(element){
    return document.createElement(element)
}
function appendElement(parent, elem){
    return parent.appendChild(elem)
}
const vegetables= document.getElementById("vegList")
fetch('http://localhost:5000/products/vegetables')
.then(response=> response.json())
.then(data => {
     return data.map(item =>{
         let items = newElement('li')
         items.innerHTML = item.name
         appendElement(vegetables, items)
     })
    })
.catch(err =>{
    console.log(err)
})
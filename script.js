let NameInput = document.getElementById("floatingName");
let PriceInput = document.getElementById("floatingPrice");
let CategoryInput = document.getElementById("floatingCategory");
let QuantityInput = document.getElementById("floatingQuantity");
let table = document.getElementById("tableBody")
let products =[]
let button = document.getElementById("updateButton")
let addbtn = document.getElementById("addButton")
let updateid = 0
button.style.display ="none";


function dark(){
    document.body.classList.toggle("dark")
}


function add(){
    if (NameInput.value =='' || PriceInput.value =='' || CategoryInput.value =='' || QuantityInput.value ==''){
        alert('please fill in all the fields')
    }else{
        let product ={
            Name:NameInput.value,
            Price:PriceInput.value,
            Category:CategoryInput.value,
            Quantity:QuantityInput.value
        }
        products.push(product)
        show()
        clear()
        
        
        
    }
}




function show(){ 
    table.innerHTML=""
    products.forEach((product ,index)=>{
        table.innerHTML+=` <tr>
            <td>${product.Name} </td>
            <td>${product.Price} LE</td>
            <td>${product.Category}</td>
            <td>${product.Quantity} </td>
            <td><button type="button" class="btn btn-danger" onclick="del(${index})">delete</button>
                <button type="button" class="btn btn-success" onclick="update(${index})">Update</button>

            </td>
          </tr>
        `

    })
    

}
function clear(){
    NameInput.value=''
    PriceInput.value=''
    CategoryInput.value=''
    QuantityInput.value=''

}
function del(index){
    products.splice(index,1)

    show()
}

function update(index){
    button.style.display ="block";
    addbtn.style.display ="none";
    NameInput.value = products[index].Name;    
    PriceInput.value = products[index].Price;    
    CategoryInput.value = products[index].Category;    
    QuantityInput.value = products[index].Quantity;
    updateid = index
    scroll({
        top:0,
        behavior:"smooth"
    })
}
function Buttonupdate(){
    products[updateid] ={
        Name:NameInput.value,
        Price:PriceInput.value,
        Category:CategoryInput.value,
        Quantity:QuantityInput.value
    }
    show()
    button.style.display ="none";
    addbtn.style.display ="block";
    clear()
}
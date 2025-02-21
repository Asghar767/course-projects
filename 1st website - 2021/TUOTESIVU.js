
//When you click on a link for an order in "page_search.html", the orderid will show up in the "url" variable below.
let url = location.search.slice(9);
console.log(url);


//All orders are in localStorage under the "orders" key.
let orders = JSON.parse(localStorage.getItem("orders"));

//Storing the correct order under the "order" key in localStorage.
setData();
function setData() {
    for (i = 0; i < orders.length; i++) {
        let order = orders[i];

        if (order.orderid == url) {
            console.log(order);
            localStorage.setItem("order", JSON.stringify(order));
        }
    }
}

//Now the properties are easily accessible, for example info.orderid or info.customer etc.
let info = JSON.parse(localStorage.getItem("order"));

displayData();
function displayData() {
    console.log(info.customer);
}

//I've added a new "collected" property for all orders in "page_search.html". With the two functions below the value can be changed to "Yes" or "No" :)
function collected() {
    for (i = 0; i < orders.length; i++) {
        let order = orders[i];

        if (order.orderid == url) {
            order.collected = "Yes";
            localStorage.setItem("orders", JSON.stringify(orders));
        }
    }
}

function notCollected() {
    for (i = 0; i < orders.length; i++) {
        let order = orders[i];

        if (order.orderid == url) {
            order.collected = "No";
            localStorage.setItem("orders", JSON.stringify(orders));
        }
    }
}



////////////////////////////////////////////////////////////
// orderid	customerid	customer	invaddr	delivaddr	deliverydate	respsalesperson	comment	totalprice

// vars

let productlist = info["products"]








/// elements
let mytable = document.getElementById("mytable")
let mytable2 = document.getElementById("mytable2")
let mytable3 = document.getElementById("mytable3")
let t2 = document.getElementById("t2")


// localstorage localStorage.getItem("orders")   9 

// info {}, url 515


//console.log(localStorage.getItem("orders"))
// fetch

/// adding stuff to first table 
     
mytable2.getElementsByTagName("td")[0].innerHTML = info["orderid"]
mytable2.getElementsByTagName("td")[1].innerHTML = info["customerid"]
mytable2.getElementsByTagName("td")[2].innerHTML = info["customer"]

mytable2.getElementsByTagName("td")[3].innerHTML = info["invaddr"]
mytable2.getElementsByTagName("td")[4].innerHTML = info["delivaddr"]
mytable2.getElementsByTagName("td")[5].innerHTML = info["deliverydate"]

mytable2.getElementsByTagName("td")[6].innerHTML = info["respsalesperson"]
mytable2.getElementsByTagName("td")[7].innerHTML = info["comment"]
mytable2.getElementsByTagName("td")[8].innerHTML = info["totalprice"]



//p(mytable2.getElementsByTagName("td")[0])


/// adding stuff to first table 

p("--------")


let w = 1

// products
productlist.forEach(e => {

    
    
    let mycell;

    w2 = 0
    // product elements
    Object.values(e).forEach(element => {

        if(w2 == 0){

            mycell = "<td>" + element + "</td>"

        }

        if(w2 != 0){

            mycell += "<td>" + element + "</td>"

        }
        
        
        //mycell += "<td>" + element + "</td>"
        
        w2 += 1
    });

    let myrow = "<tr>" + mycell +"</tr>"

    
    t2.innerHTML += myrow
    

    w += 1
    
});




////////////////////////////////////////////////
console.log(localStorage.getItem("orders"))

let mymem = document.getElementById("mp")
let m = document.getElementById("m")



//
//m.innerHTML = localStorage.getItem(url)
mp.value = localStorage.getItem(url)

function memo(){


    console.log(url)

    localStorage.setItem(url, mp.value)

    //m.innerHTML = localStorage.getItem(url)
    mp.value = localStorage.getItem(url)
    

}


function p(x){

    console.log(x)

}


function rand() {
    return Math.floor(Math.random() * 10000);
  }

  function printPage() {
    window.print();
  }
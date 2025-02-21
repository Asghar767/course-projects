


fetchData();

function fetchData() {
    fetch('projekti.json')
        .then(x => x.json())
        .then(y => setData(y));
}
function setData(orders) {
    if (localStorage.getItem("orders") == null) {
        for (i = 0; i < orders.length; i++) {
            let order = orders[i];
            order.keratty = "No";
        }
        localStorage.setItem("orders", JSON.stringify(orders));
        showTable(JSON.parse(localStorage.getItem("orders")));
        } else {
            let storedOrders = JSON.parse(localStorage.getItem("orders"));

            for (i = 0; i < orders.length; i++) {
                let order = orders[i];
                let storedOrder = storedOrders[i];

                if (order.orderid != storedOrder.orderid) {
                    order.keratty = "No";
                    storedOrders.push(order);
                }
            }
            localStorage.setItem("orders", JSON.stringify(storedOrders));
            showTable(JSON.parse(localStorage.getItem("orders")));
        }
}
function showTable(orders) {
    
    let searchResults = "";

     
        for (i = 0; i < orders.length; i++) {
            let order = orders[i];

            if (order.keratty == "Yes") {
                searchResults += "<tr style=\"background-color: green; color: white\"><td><a href=\"TUOTESIVU.html?orderid=" + order.orderid + "\">" + order.orderid + "</a></td><td>" + order.customerid + "</td><td>" + order.customer + "</td><td>" + order.deliverydate + "</td><td>" + order.comment + "</td><td>" + order.keratty + "</td></tr>";
            } else {
                searchResults += "<tr><td><a href=\"TUOTESIVU.html?orderid=" + order.orderid + "\">" + order.orderid + "</a></td><td>" + order.customerid + "</td><td>" + order.customer + "</td><td>" + order.deliverydate + "</td><td>" + order.comment + "</td><td>" + order.keratty + "</td></tr>";
            }
        }
        document.getElementById("searchresults").innerHTML = "<tr><th>" + "Order ID" + "</th><th>" + "Customer ID" + "</th><th>" + "Customer name" + "</th><th>" + "Delivery date" + "</th><th>" + "Comment" + "</th><th>" + "keratty" + "</th></tr>" + searchResults;
    }
function search() {
    let input = document.getElementById("search").value.toUpperCase();
    let tr = document.getElementById("searchresults").getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let orderID = tr[i].getElementsByTagName("td")[0];
        let customerID = tr[i].getElementsByTagName("td")[1];
        let customerName = tr[i].getElementsByTagName("td")[2];
        let deliveryDate = tr[i].getElementsByTagName("td")[3];
        let commment = tr[i].getElementsByTagName("td")[4];

        if (orderID || customerID || customerName || deliveryDate || commment) {
            let orderIDValue = orderID.textContent || orderID.innerText;
            let customerIDValue = customerID.textContent || customerID.innerText;
            let customerNameValue = customerName.textContent || customerName.innerText;
            let deliveryDateValue = deliveryDate.textContent || deliveryDate.innerText;
            let commmentValue = commment.textContent || commment.innerText;

            if (orderIDValue.toUpperCase().indexOf(input) > -1 || customerIDValue.toUpperCase().indexOf(input) > -1 || customerNameValue.toUpperCase().indexOf(input) > -1 || deliveryDateValue.toUpperCase().indexOf(input) > -1 || commmentValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function checkBox() {
    showTable(JSON.parse(localStorage.getItem("orders")));
}

function logOut() {
    localStorage.removeItem("login");
    location.href = "LOGIN.html";
}
let qnt = prompt("Quantity of products");
let sum = 0;

for (let i = 1; i <= parseInt(qnt); i++) {
    let item_price = prompt("Product "+ i + "price");
    sum += parseInt(item_price);
    document.getElementById("PriceList").innerHTML += `
        <p>Product ${i}: ${item_price} baht</p>
    `;
    document.getElementById("result").innerHTML = "Total price: " + sum + " baht";
} 


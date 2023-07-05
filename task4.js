// write a class to calculate the uber price.


class uberprice {
    constructor (city, price, customerName) {
        this.city = city;
        this.price = price;
        this.customerName  = customerName;

    }
        getpriceCity(){
            return "price for the City is " +  this.price;
        }

}

let coimbatore = new uberprice( "coimbatore", 400, "customer1");
let tirupur = new uberprice( "tirupur", 750, "customer2");

console.log(coimbatore.getpriceCity()); // 400
console.log(tirupur.getpriceCity()); // 750
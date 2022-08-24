// Ex 1

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  toText() {
    console.log(this.name, this.price, (this.price - (this.price / 1.16)));
  }
  containedVAT() {
    console.log(this.price / 1.16);
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)


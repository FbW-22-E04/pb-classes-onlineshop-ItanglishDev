// Ex 1

class Product {

  constructor(name, price) {

    this.name = name
    this.price = price
  }

  toText() {
    console.log(this.name, this.price, (this.price - (this.price / 1.16).toFixed(2)));
  }

  containedVAT() {
    console.log(this.price / 1.16);
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)

// Ex 2

class Cart {

  constructor() {
    this.products = []
  }

  addProduct(shoppedProduct) {

    if (shoppedProduct instanceof Product) {

      this.products.push(shoppedProduct)
      return `Total products ${this.products.length}`;
    }
    console.log(shoppedProduct, "is not available in the shop");
  }

  getProductInfoCart() {
    toText()
  }

  toText() {
    console.log(this.products);
  }

  getTotalItemsPrice() {
    this.products.shoppedProduct.forEach(item => item + this.products.shoppedProduct[price])
    console.log(item.toString());
  }
}
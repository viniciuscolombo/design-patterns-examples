class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class OrderItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getSubtotal() {
      return this.product.price * this.quantity;
    }
  }
  
  class Order {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.getSubtotal(), 0);
    }
  }
  
  const mouse = new Product("Mouse Gamer", 150.0);
  const teclado = new Product("Teclado Mecânico", 300.0);
  
  const item1 = new OrderItem(mouse, 2); 
  const item2 = new OrderItem(teclado, 1); 
  
  const myOrder = new Order();
  myOrder.addItem(item1);
  myOrder.addItem(item2);
  
  console.log(`Total do Pedido: R$ ${myOrder.getTotal().toFixed(2)}`);
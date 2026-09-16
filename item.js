const items = require("./fakeDb");

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    // add to current exist arr

    items.push(this);
  }

  static findAll() {
    return items;
  }

  //  update found item w/matching name to data
  static update(name, data) {
    let foundItem = items.find(name);
  }
}

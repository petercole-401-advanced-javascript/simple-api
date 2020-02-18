
class Category {
  constructor(id, name, displayName, description){
    this._id = id;
    this.name = name;
    this.display_name = displayName;
    this.description = description;
  }
}

class Product {
  constructor(id, category, name, displayName, description){
    this._id = id;
    this.category = category;
    this.name = name;
    this.display_name = displayName;
    this.description = description;
  }
}

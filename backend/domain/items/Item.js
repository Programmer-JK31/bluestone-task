class Item {
    constructor({ id, value }) {
      this._id = id;
      this._value = value;
    }
  
    get id() { return this._id; }
    get getCount() { return this._value; }

    setCount(ct){
        this._value = ct;
    }

    toJSON() {
      return {
        id: this._id,
        value: this._value
      };
    }
}
  
module.exports = Item;
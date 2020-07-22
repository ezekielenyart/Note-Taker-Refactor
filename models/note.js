const orm = require("../config/orm.js");

class Notes {
  getAllNotes() {
    return orm.selectAll
  }
  addNote(values) {
    return orm.create("storenotes", ['title', 'text'], values)
  }
  remove(value){
    return orm.delete("stores", 'id', value)
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = new Notes();
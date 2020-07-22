const orm = require("../config/orm.js");

class Notes {
  getAllNotes() {
    return orm.selectAll()
  }
  addNote(values) {
    return orm.create(values)
  }
  remove(values){
    return orm.delete("notes", 'id', values)
  }
};

// Export the database functions for the controller (notesController.js).
module.exports = new Notes();
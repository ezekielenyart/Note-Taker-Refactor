var connection = require("./connection.js");
var ORM = {
  selectAll() {
    const queryString = 'SELECT * FROM notes';
    return connection.query(queryString);
  },
  // create(table, columns, values) {
  //   const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES ?? 'vals')})`;
  //   return this.connection.query(queryString, [table, ...values])
  // }


  create(values){
    const queryString = 'INSERT into notes (title,text) value (?,?)'
    return connection.query(queryString,[...values])
},

  delete(table, cols, value) {
    const queryString = 'DELETE FROM ?? WHERE ?? = ?';
    return connection.query(queryString, [table, cols, value])
  }
  
}

module.exports = ORM;
// connection.query("SELECT * FROM notes").then(res => console.log(res))

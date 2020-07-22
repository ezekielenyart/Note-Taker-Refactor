var connection = require("./connection.js");
class ORM {
  constructor(connection) {
    this.connection = connection
  }
  selectAll(table) {
    const queryString = 'SELECT * from ??'
    return this.connection.query(queryString, [table])
  }
  create(table, columns, values) {
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;
    return this.connection.query(queryString, [table, ...values])
  }

  delete(table, cols, value) {
    const queryString = 'DELETE FROM ?? WHERE ??=?';
    return this.connection.query(queryString, [table, cols, value])
  }
};

module.exports = new ORM(connection);
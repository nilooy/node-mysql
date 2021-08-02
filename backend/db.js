const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fyon-node-mysql",
});

const createTable = ({ name, cols, callback }) => {
  connection.query(
    `
        CREATE TABLE IF NOT EXISTS ${name} (
        id int NOT NULL AUTO_INCREMENT,
        ${cols.toString()},
        PRIMARY KEY (id)
    ); 
    `,
    callback
  );

  console.log(`@=> ${name} table has been created`);
};

const insert = ({ name, cols, values, callback }) => {

    connection.query(
    `
    INSERT INTO ${name}(${cols.toString()}) VALUES (
        ${JSON.stringify(values).replace('[', '').replace(']', '')}
    ) 
    `,
    callback
  );   

  console.log(`Inserted into ${name}`);
};

const find = ({ name, cols, cond, callback }) => {

  connection.query(
  `
  SELECT ${cols.toString()} FROM ${name} ${cond ? `WHERE ${cond}`: '' }
  `,
  callback
);   
};


module.exports = { connection, createTable, insert, find };

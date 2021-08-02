// create the tables when our app starts to make sure we have the tables where we can store, read or do other operations on those tables

const { connection, createTable, insert, find } = require("./db");
const faker = require("faker");

exports.startup = () => {
  createTable({
    name: "teachers",
    cols: ["name varchar(250)", "school varchar(300)"],
  });

  createTable({
    name: "students",
    cols: ["name varchar(250)", "class int(10)", "school varchar(300)"],
  });

  createTable({
    name: "schools",
    cols: ["name varchar(250)", "city varchar(200)", "postcode int(6)"],
  });
  find({
    name: "schools",
    cols: "COUNT(*) as total",
    callback: (err, rows) => {
      if (err) console.log({ err });
      // if we don't have any data on schools table, we will insert 100 fake data
      if (rows[0].total === 0) {
        for (let i = 0; i < 100; i++) {
          insert({
            name: "schools",
            cols: ["name", "city", "postcode"],
            values: [
              faker.company.companyName(),
              faker.address.cityName(),
              faker.address.zipCode(),
            ],
          });
        }
        console.log("seed data schools");
      }
    },
  });
};

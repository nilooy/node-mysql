const { find, insert } = require("../../db")

const getSchool = (req, res) => {
    find({
        name: 'schools',
        cols: '*',
        callback: (err, rows) => {
            console.log({err, rows});
            res.json(rows)
        }
    })
}

const createSchool = (req, res) => {

    const {name, city, postcode} = req.body

    insert({
        name: 'schools',
        cols: [ 'name', 'city', 'postcode'],
        values: [
            name, city, postcode
        ],
        callback: (err, rows) => {
            if(err) {
                console.log({err})
                res.status(400).json(err)
            }

            res.json(rows)
        }
    })
}

module.exports = {getSchool, createSchool}
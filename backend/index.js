const express = require('express');
const teacherRoutes = require('./services/teachers/routes')
const schoolRoutes = require('./services/schools/routes')
const {startup} = require('./startup')

const app = express();

const PORT = 5050
 
// middlewares
app.use(express.json())

// API Endpoints
app.use(teacherRoutes)
app.use(schoolRoutes)

app.listen(PORT, ()=> {
    console.log(`@=> Server is up and running on http://localhost:${PORT}`)

    startup()
})
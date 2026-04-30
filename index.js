const express = require('express');
const cors = require('cors');
const { adminRoutes } = require('./App/routes/adminRoutes');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/admin', adminRoutes); // admin routes

app.get('/', (req, res) => {
    res.send("Server Running 🚀");
});


//server start
let PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
    console.log(`Server Start http://localhost:${PORT}/`)
})
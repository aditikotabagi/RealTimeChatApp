const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoute = require("./routes/authRoute");

const PORT = process.env.PORT || process.env.API_PORT;
const app = express();
app.use(express.json());
app.use(cors());

// register the routes
app.use('/api/auth', authRoute);
const server = http.createServer(app);
/*
server.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);

});
*/
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        server.listen(PORT, () =>{
            console.log(`Server is listening on ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('database connection failed');
        console.error(err);
    });

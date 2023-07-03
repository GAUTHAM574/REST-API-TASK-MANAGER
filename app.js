require('./db/connect');
const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/notfound');
const errorHandlerMiddleWare = require('./middleware/error-handler');
const app = express();

//middleware
app.use(express.json());
app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.status(200).sendFile('index.html');
})

// post and get for tasks -
app.use('/api/v1/tasks', tasks);

//404
app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, 
            console.log(`Server is started and is listening on port : ${port}`))        
    }
    catch(Error){
        console.log(Error);
    }
}

start();
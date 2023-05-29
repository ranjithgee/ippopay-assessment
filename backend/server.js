const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const corsOptions = {
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
connectDb();
const port = process.env.PORT;
app.use(express.json());
app.use('/api/demo', require('./routes/demoRoute'));
app.use((req,res)=>{
    res.status(404);
    throw new Error('404 Not Found');
})
app.listen(port);
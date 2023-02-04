const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')




dotenv.config({path:'./config/config.env'});
//connect to DB
connectDB();
//Route file
const hospitals  = require(`./routes/hospitals`);

const app = express();

// app.get('/',(req,res)=>{
//     // res.send('<h1>Hello from express</h1>');
//     //res.send({name:'Brad});
//     //res.json({name:'Brad});
//     //res.sendStatus(400);
//     // res.sendStatus(400).json({success:false});
//     res.status(200).json({success:true,data:{id:1}});
// });

app.use(express.json())
app.use(`/api/v1/hospitals`,hospitals);


const PORT = process.env.PORT;
const server = app.listen(PORT,console.log('Server running in ',process.env.NODE_ENV," mode on port ",PORT));

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`)
    server.close(()=>process.exit(1))
})
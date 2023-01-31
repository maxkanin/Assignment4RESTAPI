const express = require('express');
const dotenv = require('dotenv');


const hospitals  = require(`./routes/hospitals`);


dotenv.config({path:'./config/config.env'});

const app = express();

// app.get('/',(req,res)=>{
//     // res.send('<h1>Hello from express</h1>');
//     //res.send({name:'Brad});
//     //res.json({name:'Brad});
//     //res.sendStatus(400);
//     // res.sendStatus(400).json({success:false});
//     res.status(200).json({success:true,data:{id:1}});
// });


app.use(`/api/v1/hospitals`,hospitals);


const PORT = process.env.PORT;
app.listen(PORT,console.log('Server running in ',process.env.NODE_ENV," mode on port ",PORT));
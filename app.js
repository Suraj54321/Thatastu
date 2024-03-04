const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
// import OpenAI from "openai";
const OpenAI = require('openai')
const { Sequelize } = require('sequelize');
const sequelize=require('./config/database.js')
const POCORDER = require('./models/poc_order.js')



const app = express();

/**Cors configuration*/
app.use(cors());

/**Body parser configuration*/
app.use(bodyParser.json());

require('dotenv').config()

/**Imported database*/
// let db = require('./config/db/database');
// db()

/**Express fileupload  configuration with limits*/
// app.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 },
// }));

/**Routes configuration*/
// app.use(require('./routes'));
// app.use(require('./u'))


const pocOrder=POCORDER(sequelize,Sequelize)
app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.get('/test',async(req,res)=>{
    const openai = new OpenAI({
        apiKey:'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'
    });
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "I need 1kg potato 1kg brinjal halk kg panner 3kg onion 1 liter milk.can you convert this into json format also dont send any extra message" }],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0].message.content);
      res.send(completion.choices[0].message.content)
});


app.listen(process.env.PORT,()=>{
    console.log(`app is running on port number ${process.env.PORT}`);
})

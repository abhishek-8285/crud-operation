const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
require('dotenv').config()
const route = require('./src/router')
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc')
const cors = require('cors')

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
      },
    },
    apis: ['./src/router.js','./src/model/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors())

const PORT=process.env.PORT||3001

mongoose.connect('mongodb+srv://betechnoid:Abhishek8285366507@cluster0.ctbkbk3.mongodb.net/express-revision?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>console.log('mongoose is running')).catch((e)=>console.log(`error ${e.massage}`))

app.use('/',route)

app.listen(PORT,()=>console.log(`server is running on port no ${PORT}`))
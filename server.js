import express, { urlencoded } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import productRoutere from './routes/productRoutere.js'


// dotenv file config
dotenv.config();

// dotenv file get value
const PORT = process.env.PORT || 6060 ;

// express init
const app = express()

// express middleware
app.use(express.json());
app.use(urlencoded({extended : false}));

// ejs setup
app.set('view engine', 'ejs');

// static folder
app.use(express.static('public'));

// routere call
app.use(productRoutere)


// express server create

app.listen(PORT, () => {
    console.log(`server is raning on port ${PORT}`.bgBlue.black);
})
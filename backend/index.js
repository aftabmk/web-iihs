import express from 'express';
import { fetch } from './fetch.js';

const app = express();
const url = "https://iihs.co.in/";
const PORT = 4000


app.get('/',async(req,res)=>{
    const data = await fetch(url)
    res.send(data)
})

app.listen(PORT,()=>console.log(`Running on http://localhost:${PORT}`))
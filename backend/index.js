import express from 'express';
import { fetch,fetchimg } from './fetch.js';

const app = express();
const urlOne = "https://iihs.co.in/";
const urlTwo = 'https://iihs.co.in/iihs-people/team/'
const PORT = 4000


app.get('/web',async(req,res)=>{
    const data = await fetch(urlOne)
    res.send({
        data:data,
    })
})
app.get('/team',async(req,res)=>{
    const data = await fetchimg(urlTwo)
    res.send({
        data:data
    })
})

app.listen(PORT,()=>console.log(`Running on http://localhost:${PORT}`))
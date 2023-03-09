import express from "express"
import { scrape } from './function.js'

// const url = "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)";
const app = express();
const PORT = 4000

app.get('/search?',async(req,res)=>{
    const url = req.query.url
    const data = await scrape(url)
    res.send({data:data})
})

app.listen(PORT,()=>console.log(`Running on http://localhost:${PORT}`))

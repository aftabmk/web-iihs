import axios from "axios"
import { JSDOM } from "jsdom"

export const getRank = async (url)=>{
    try{
        const data = await axios(url,{method:"GET"})
        const res = data.data
        const dom = new JSDOM(res)
        const $ = (el)=> dom.window.document.querySelector(el)
        const rank = Number($(".mw-pvi-month")?.textContent.replaceAll(',',''))
        return rank
    }catch(e){
        return e.message
    }
}

export const getUrl = async(url) =>{
    try{
        const array = []
        const uri = '/wiki/'
        const data = await axios(url,{method:"GET"})
        const res = data.data
        const dom = new JSDOM(res)
        const $ = (el)=> dom.window.document.querySelector(el)
        const $$ = (el)=> dom.window.document.querySelectorAll(el)
        const anchor = $$('.mw-parser-output a')
        anchor.forEach(el=>{
            if(el.href.includes(uri)){
                array.push(`https://en.wikipedia.org${el.href}`)
            }
        })
        return array
    }catch(e){
        return e.message
    }
}
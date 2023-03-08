import { getRank , getUrl } from './function.js'

const url = 'https://en.wikipedia.org/wiki/Nifty_Fifty_(disambiguation)'
const getData = async(url)=>{
    let data = []
    const arr = await getUrl(url)
    for (let url of arr ){
        let rank = await getRank(`https://en.wikipedia.org/w/index.php?title=${url.split('/').at(-1)}&action=info`)
        data.push({url,rank})
        console.log(rank)
    }
    console.log(data)
}
getData(url)
import puppeteer from "puppeteer";
import { JSDOM } from "jsdom";

export const fetch = async (url) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, { 'timeout': 10e4, 'waitUntil':'load'});
    const res = await page.content();
    await browser.close();

    const dom = new JSDOM(res);
    const $ = (el)=> dom.window.document.querySelector(el)
    const $$ = (el)=> dom.window.document.querySelectorAll(el)
    const wrapper = $(".wpb_wrapper")
    const text = wrapper.querySelector('.wpb_wrapper').textContent.replace(/\n/g,' ').trim().split('  ')
    const img =wrapper.querySelector('.wpb_wrapper img').src
    const iterate = $$(".wpb_wrapper")
    const arr = []
    iterate.forEach((el,i)=>{
      const img = el.querySelector('img')
      const text = el.textContent.replace(/\n/g,' ').trim().split('  ')
      arr.push({
      Imageurl:img?img.src:'',
      title:text[0]?text[0]:'',
      description:text[1]?text[1]:'',
      Button:text[2]?text[2]:''
      })
    })
    return arr
  };

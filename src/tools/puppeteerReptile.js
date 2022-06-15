// 导入模块  爬虫
const puppeteer = require('puppeteer')

const queue = ['https://www.bilibili.com']

//将能力收口findCards()，主线程显得简单，
function findCards() {
    return new Promise((resolve, reject) => {
        // 滚动
        function next(n, callback) {
            if (n > 0) {
                window.scrollBy(0, window.innerHeight)
            } else {
                callback()
                return
            }
            setTimeout(() => {
                next(n - 1, callback)
            }, 1000)
        }
        next(2, () => {
            const cards = document.querySelectorAll('.bili-video-card')
            //封装
            function getText(node, cls) {
                if (node.querySelector(cls)) {
                    return node.querySelector(cls).innerText
                }
                return null
            }

            try {
                resolve([...cards].map(card => {
                    if (!card.innerText) {
                        return
                    }
                    //根据class 来选择内容
                    let title = getText(card, '.bili-video-card__info--tit') || getText(card, 'title')
                    let up = getText(card, '.bili-video-card__info--author') || getText(card, 'up')
                    const href = card.querySelector("a").href

                    return { title, up, href }
                }))
            } catch (err) {
                reject(err)
            }
        })
    })
}

async function start() {
    const browser = await puppeteer.launch()
    // 打开页面
    const page = await browser.newPage()
    // 爬取数据

    while (queue.length > 0) {
        const url = queue.pop()
        const data = await analyse(page, url)
        store(data)
    }
}
//保存数据
function store(data) {
    console.log(data)
}

//（初始化）做事情，爬虫之前（分析）页面
async function analyse(page, url) {
    await page.goto(url)
    if (url === 'https://www.bilibili.com') {
        const cards = await page.evaluate(findCards)
        cards.forEach(card=>{
            card&&queue.push(card.href)
        })
        return cards
    }else{
        console.log('analyse page:'+url)
    }
    
}
start()

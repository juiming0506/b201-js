const yearAndMonth = document.getElementById('yearAndMonth')
const title = document.getElementById('title')
const data = document.getElementById('data')

const now = new Date()

//用樣版字串的寫法
//yearAndMonth.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}`

//用分開定義年和日的寫法
const nowY = now.getFullYear()
//注意回傳為0~11
const nowM = now.getMonth() + 1

// 呈現在網頁上
yearAndMonth.innerHTML = nowY + '-' + nowM

// 星期幾的陣列
const weekList = ['日', '一', '二', '三', '四', '五', '六']

let weekTitleDisplay = ''

for (let i = 0; i < weekList.length; i++) {
  weekTitleDisplay += `<th>${weekList[i]}</th>`
}

// 呈現在網頁上
title.innerHTML = `<tr>${weekTitleDisplay}</tr>`

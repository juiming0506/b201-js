const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

// 產生西元年的選項值
let yearOptions = '<option value ="0">請選擇</option>'
// 1910-2010
for (let i = 1910; i < 2011; i++) {
  yearOptions += `<option value ="${i}">${i}</option>`
}

year.innerHTML = yearOptions

// 產生月的選項值
let monthOptions = '<option value ="0">請選擇</option>'
// 1-12
for (let i = 1; i < 13; i++) {
  monthOptions += `<option value ="${i}">${i}</option>`
}

month.innerHTML = monthOptions

// 產生日期的選項值
let dayOptions = '<option value ="0">請選擇</option>'
// 1-31
for (let i = 1; i < 32; i++) {
  dayOptions += `<option value ="${i}">${i}</option>`
}

day.innerHTML = dayOptions

/// change事件可以得到選到的值

let y = 0
let m = 0
let d = 0

year.addEventListener('change', function () {
  y = +year.value

  // 更動日期選項
  if (m && y) {
    // 以西元年和月份的值，計算該月有幾天
    const currentDays = new Date(y, m, 0).getDate()

    let dayOptions = '<option value ="0">請選擇</option>'
    //更動日期的選項
    for (let i = 1; i < currentDays + 1; i++) {
      dayOptions += `<option value ="${i}">${i}</option>`
    }

    day.innerHTML = dayOptions

    // 得到的日期要先調整回0
    d = 0
  }

  console.log(y, m, d)
})

month.addEventListener('change', function () {
  m = +month.value

  // 更動日期選項
  if (m && y) {
    // 以西元年和月份的值，計算該月有幾天
    const currentDays = new Date(y, m, 0).getDate()

    let dayOptions = '<option value ="0">請選擇</option>'
    //更動日期的選項
    for (let i = 1; i < currentDays + 1; i++) {
      dayOptions += `<option value ="${i}">${i}</option>`
    }

    day.innerHTML = dayOptions

    // 得到的日期要先調整回0
    d = 0
  }

  console.log(y, m, d)
})

day.addEventListener('change', function () {
  d = +day.value

  console.log(y, m, d)
})

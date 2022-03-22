let money = 0

const moneyBox = document.querySelector('#current')
moneyBox.textContent = `현재 잔액 : ${money} 원`

// 각 버튼 요소

const water = document.querySelector('.drink-water')
const coffee = document.querySelector('.drink-coffee')
const cornWater = document.querySelector('.drink-cornwater')

const money100 = document.querySelector('.money-100')
const money500 = document.querySelector('.money-500')
const money1000 = document.querySelector('.money-1000')

// 잔액을 확인하여 품목 색상 변경

function changeColor() {
  if (money >= 1000) {
    cornWater.classList.replace('impossible', 'possible')
    coffee.classList.replace('impossible', 'possible')
    water.classList.replace('impossible', 'possible')
  } else if (money >= 700) {
    cornWater.classList.replace('possible', 'impossible')
    coffee.classList.replace('impossible', 'possible')
    water.classList.replace('impossible', 'possible')
  } else if (money >= 500) {
    cornWater.classList.replace('possible', 'impossible')
    coffee.classList.replace('possible', 'impossible')
    water.classList.replace('impossible', 'possible')
  } else {
    cornWater.classList.replace('possible', 'impossible')
    coffee.classList.replace('possible', 'impossible')
    water.classList.replace('possible', 'impossible')
  }
}

// 동전 투입

function clickMoney100() {
  money += 100
  changeColor()
  alert('100원을 넣었습니다.')
  moneyBox.textContent = `현재 잔액 : ${money} 원`
}

function clickMoney500() {
  money += 500
  changeColor()
  alert('500원을 넣었습니다.')
  moneyBox.textContent = `현재 잔액 : ${money} 원`
}

function clickMoney1000() {
  money += 1000
  changeColor()
  alert('1,000원을 넣었습니다.')
  moneyBox.textContent = `현재 잔액 : ${money} 원`
}

money100.addEventListener('click', clickMoney100)
money500.addEventListener('click', clickMoney500)
money1000.addEventListener('click', clickMoney1000)

// 품목버튼을 눌러 구매, 잔액 부족시 알람

function buyWater() {
  if (money >= 500) {
    money -= 500
    changeColor()
    alert('물을 구매했습니다.')
    moneyBox.textContent = `현재 잔액 : ${money} 원`
  } else {
    alert('잔액이 부족합니다.')
  }
}

function buyCoffee() {
  if (money >= 700) {
    money -= 700
    changeColor()
    alert('커피를 구매했습니다.')
    moneyBox.textContent = `현재 잔액 : ${money} 원`
  } else {
    alert('잔액이 부족합니다.')
  }
}

function buyCornWater() {
  if (money >= 1000) {
    money -= 1000
    changeColor()
    alert('옥수수수염차를 구매했습니다.')
    moneyBox.textContent = `현재 잔액 : ${money} 원`
  } else {
    alert('잔액이 부족합니다.')
  }
}

water.addEventListener('click', buyWater)
coffee.addEventListener('click', buyCoffee)
cornWater.addEventListener('click', buyCornWater)
// 랜덤 숫자 추출
let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)

// 변수선언
let form = document.querySelector('#form')
let inputNumber = document.querySelector('#input-number')
let inputSubmit = document.querySelector('#input-submit')

let guesses = document.querySelector('.guesses')
let lastResult = document.querySelector('.lastresult')
let lowOrHigh = document.querySelector('.low-or-high')

let guessCount = 1
let resetBtn


// 정답확인하기
function checkGuess() {
  let userGuess = Number(inputNumber.value)
  if (guessCount === 1) {
    guesses.textContent = '입력했던 숫자 : '
  }
  guesses.textContent += userGuess + ' '

  if (userGuess === randomNumber) {
    lastResult.textContent = '정답입니다!'
    lastResult.style.backgroundColor = 'green'
    lowOrHigh.textContent = ''
    resetGame()
  } else if (guessCount === 10) {
    lastResult.textContent = '게임오버!'
    lowOrHigh.textContent = ''
    resetGame()
  } else {
    lastResult.textContent = '틀렸습니다!'
    lastResult.style.backgroundColor = 'red'
    if (userGuess > randomNumber) {
      lowOrHigh.textContent = '다운!'
    } else if (userGuess < randomNumber) {
      lowOrHigh.textContent = '업!'
    }
  }
  
  guessCount++
  inputNumber.value = ''
  inputNumber.focus()
}

inputSubmit.addEventListener('click', checkGuess)


// 게임 끝, 다시 시작하기
function resetGame() {
  inputNumber.disabled = true
  inputNumber.placeholder = ''
  inputSubmit.disabled = true
  resetBtn = document.createElement('button')
  resetBtn.textContent = '게임 다시하기'
  document.body.appendChild(resetBtn)
  resetBtn.addEventListener('click', function() {
    window.location.reload()
  })
}


// submit 클릭시 새로고침 방지
form.addEventListener('submit', function (e) {
  e.preventDefault()
})
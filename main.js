//1. 랜덤번호 지정 (1~10)
//2. 유저가 숫자 입력하고, go라는 버튼을 누름
//3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//4. 랜덤번호가 유저번호보다 작을 경우, Down!!
//5. 랜덤번호가 유저번호보다 크다면, Up!!
//6. Reset 버튼을 누르면 게임이 리셋된다.
//7. 5번의 기회를 다 쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//8. 큰 숫자나 작은 숫자를 입력할 경우에는 알려주기. 기회를 깎지 않는다.
//9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.


let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', focusInput);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 10) + 1; 

  console.log('정답:', computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 10 ) {
    resultArea.textContent = '1~10 사이의 숫자를 입력해주세요!🥹';
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요~🤣'
    return;
  }

  chances--;
  chanceArea.textContent = `⭐️남은기회: ${chances}번⭐️`;

  if (userValue < computerNum) {
    resultArea.textContent = 'up⬆️';
  } else if (userValue > computerNum) {
    resultArea.textContent = 'down⬇️';
  } else {
    resultArea.textContent = '정답!🎉🎉';
    playButton.disabled = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true
  }

  if (gameOver) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = '';
  pickRandomNum();

  resultArea.textContent = '결과가 나온다';
}

function focusInput() {
  userInput.value = '';
}

pickRandomNum();
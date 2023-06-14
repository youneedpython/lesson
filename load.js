console.log('load.js 실행 시작');
const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.innerText = '제목입니다';
body.appendChild(h1);

console.log('load.js 실행 완료');
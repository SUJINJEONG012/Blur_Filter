'use strict';

//%표시글자, 백그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//로딩 숫자 초기값 0
let load = 0;
let int = setInterval(blurring, 30);//시간 0.03초에 한번씩 blurring 함수 실행

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    loadText.textContent = `${load}`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);  //(0~100) => (1,0) 으로 변경한다.
    bg.style.filter = ` blur(${scale(load, 0, 100, 30, 0)}px)`;

};


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

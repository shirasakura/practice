'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;


  //スタートタイムからの経過時間
  //現在の時刻から start ボタンを押したときの時刻である startTime を引いてあげれば、 startTime からの経過ミリ秒がわかる
  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime); 
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}:${ms}`;

    //10 ミリ秒後にこちらの処理が走るので、この countUp() のなかでも console.log() が呼ばれて、結果として 10 ミリ秒ごとに現在時刻と startTime の差が表示されていく
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  //ロード時
  setButtonStateInitial();

  //起動時
  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    startTime = Date.now();
    countUp();
    setButtonStateRunning();
  });

  //停止時
  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    //何を終了させるか引数に渡す必要がある
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    setButtonStateStopped();
  });

  //再起動時
  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    timer.textContent = '00:00:000';
    elapsedTime = 0;
    setButtonStateInitial();
  });
}
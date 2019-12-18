'use strict';

{
  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  const choices = document.getElementById('choices');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  
  const quizSet = shuffle([
    {q: 'What is A', c: ['A0', 'A1', 'A2']},
    {q: 'What is B', c: ['B0', 'B1', 'B2']},
    {q: 'What is C', c: ['C0', 'C1', 'C2']},
  ]);

  //表示する問題文を変数で管理
  let currentNum = 0;

  //すでに答えている場合の判断のための変数
  let isAnswered;

  //スコア管理
  let score = 0;


    //フィッシャーズ・イェーツのシャッフル
  function shuffle(arr){
    //範囲を定義。配列の最後の値を配列のランダムな値に入れ替える。範囲を狭める（for文で1ずつ減らす）。
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  //正誤判定
  function checkAnswer(li){
    //回答済みだったら、他を実行しない。
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    //li(選択肢）が正解と一緒の場合正解。 正解だったら、correctクラスをつける。不正解ならwrongクラスをつける。
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    }else{
      li.classList.add('wrong');
    }

    //次の問題に行くボタンを表示
    btn.classList.remove('disabled');

  }

  //問題を作成
  function setQuiz(){

    //未回答
    isAnswered = false;

    //問題文を表示
    question.textContent = quizSet[currentNum].q;

    //選択肢をランダム表示する。スプレッド演算子で、配列をコピーして配列を元の状態に保持。
    const shuffleChoices = shuffle([...quizSet[currentNum].c]);

    //問題がある場合は消す
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    //foreachで選択肢を表示
    shuffleChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  //次の問題を表示
  btn.addEventListener('click', () => {
    //disabledがついていたら次の問題に行かない
    if (btn.classList.contains('disabled')) {
      return;
    }

    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    }else{
      //最初（index = 0）から次の問題に移動
      currentNum++;
      setQuiz();
    }
  });
}
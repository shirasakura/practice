'use strict';
{
  let t = 0;
  function draw(){
    //canvas要素の取得
    const canvas = document.querySelector('canvas');

    //ブラウザがCanvasをサポートしているか調べる
    if(typeof canvas.getContext === 'undefined'){
      return;
    }

    //描画に必要なContextというオブジェクト（定数で保持）
    const ctx = canvas.getContext('2d');

    //clearRect() という命令を使えば、四角で領域をクリアすることができるので Canvas 領域いっぱいを draw() 関数を実行するたびにクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //四角形表示

    // ctx.fillStyle = 'pink';
    // ctx.strokeStyle = '#f00';
    // // ctx.lineWidth = 8;
    // // ctx.lineJoin = 'round';
    // // ctx.lineJoin = 'bevel';

    // //四角形を作成（塗り潰し/枠のみ）
    // ctx.fillRect(50, 50, 50, 50);
    // ctx.strokeRect(50, 50, 50, 50);

    // //２つ目の四角形も変わる
    // ctx.fillStyle = 'skyblue';
    // ctx.fillRect(70, 70, 50, 50);
    // ctx.strokeRect(70, 70, 50, 50);


    //線形グラデーション

    // //canvasの横幅いっぱいという意味→canvas.width、y座標は動かさない。
    // const g = ctx.createLinearGradient(0, 0, canvas.width, 0);

    // //start color and stop color 
    // g.addColorStop(0, '#f00');
    // g.addColorStop(1, '#00f');

    // //塗りに設定
    // ctx.fillStyle = g;

    // ctx.fillRect(0, 0, canvas.width, canvas.height);


    //円形グラデーション

    // const g = ctx.createRadialGradient(
    //   canvas.width / 2, canvas.height / 2, 50, 
    //   //  終点をずらす
    //   canvas.width / 2 + 100, canvas.height / 2 + 100, 500, 
    // );
    // g.addColorStop(0, '#f00');
    // g.addColorStop(0.1, '#0f0');
    // g.addColorStop(1, '#00f');

    // ctx.fillStyle = g;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);


    //影を付けてみよう

    // ctx.shadowOffsetX = 4;
    // ctx.shadowOffsetY = 4;
    // ctx.shadowBlur = 4;
    // ctx.shadowColor = 'rgba(0,0,0,0.3)';

    // ctx.fillRect(50, 50, 50, 50);

    
  //   //線を引いてみる


  //   ctx.beginPath();
  //   //この位置からスタート
  //   ctx.moveTo(50, 50);
  //   //線をひく（x方向に大きく）
  //   ctx.lineTo(100, 50);
  //   //線をひく（y方向に大きく）
  //   ctx.lineTo(100, 100);
  //   ctx.closePath();
  //   // ctx.stroke();
  //   ctx.fill();

  //線のスタイルを変更する
  
  // ctx.beginPath();
  // ctx.moveTo(100, 50);
  // ctx.lineTo(200, 50);
  // //5線を引いて10空白
  // ctx.setLineDash([5, 10]);
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200,  100);
  // //点線に設定したのを実線に戻す（からの配列に戻す）
  // ctx.setLineDash([]);
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.moveTo(100, 150);
  // ctx.lineTo(200, 150);
  // ctx.lineWidth = 16;
  // ctx.lineCap = 'round';
  // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(canvas.width, 100);
    // ctx.moveTo(100, 0);
    // ctx.lineTo(100, canvas.height);
    // ctx.stroke();



    ctx.beginPath();
    ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    //sinで-1, 1で変化する値を取得できる
    ctx.ellipse(80 + Math.sin(t /30) , 100, 8, 8, 0, 0, 2 * Math.PI);
    ctx.ellipse(120 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'skyblue';
    ctx.fill();

    t++;
    setTimeout(draw, 10);
  }

  draw();
}
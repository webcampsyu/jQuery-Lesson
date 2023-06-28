/*
$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>'); //jQueryの基本書式
});
*/

/*jQueryを使うにはHTMLと紐づけする必要がある
この時HTMLの読み込みが終わってからjQueryが実行されるように記述する必要がある

$(document).ready(function () {
  jQueryプログラムの内容
});

省略形式
$(function(){
  jQueryプログラムの内容
});


jQueryの基本書式
$( セレクタ ).メソッド ( パラメータ );
セレクタは捜査の対象になる部分
メソッドは何を行うかを記述

メソッドにパラメータを指定するとその内容に書き換えられる
パラメータを指定しない場合は、メソッドが取得される

jQueryではセレクタ、メソッド、パラメータを用いて
「どこに対して何を行うか」を記述する

今回のコードは「bodyタグ内のHTMLを,<h1>Hello jQuery!!</h1>で書き換えなさいという意味
*/

/*
$(function(){
  $('.box1').css({ //cssのスタイルをjQueryで変更するときは[cssメソッド]を使う
    'background-color': '#0000FF',
    'height': '100px'
  });
});


/*cssメソッドの記述方法
$('セレクタ').css({
  'プロパティ1': '値1',
  'プロパティ2': '値2',
  :
  :
  'プロパティn': '値n'
});
*/

//アニメーションの追加(上から下へスライドさせる)
/*
$(function(){
  $('.box1').slideDown();
});
*/

//アニメーションの追加(下から上へスライドさせる)
/*
$(function(){
  $('.box1').slideUp();
});
*/

//要素を表示する
/*
$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
});
*/

//要素を非表示
/*
$(function(){
  $('.box1').hide();
});
*/

//要素を上から下へスライドさせた後、赤色の正方形を青色の長方形(幅200px,高さ100px)に変更
//その後、下から上へスライドさせる
/*
$(function(){
  $('.box1').slideDown(function (){ //slideDownの中にfunctionを書き加えることでスライドダウンした後にfunctionを実行できるようになる
  $('.box1').css({
    'background-color': '#0000FF',
    'width': '200px',
    'height': '100px'
  }).slideUp();
  });
});
*/

/*「マウスオーバー」イベント、「マウスアウト」イベント
HTML要素上にマウスカーソルが重なっている状態を「マウスオーバー」
HTML要素からマウスカーソルが外れることを「マウスアウト」
*/

/*
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});
*/

/*イベントの記述方法
$('.セレクタ名').イベント名(function(){
  イベント発生時に行われる処理
});
今回は「box1にマウスオーバーされたとき、処理を実行してください」となる

上記の記述ではマウスカーソルのイベントを検出してその都度cssを変更しなければならない
そこでマウスオーバー時のcss(class)をあらかじめ定義する
マウスカーソルの状況に応じて、cssを追加（または解除）するように設定
*/

/*
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

/*
class属性の切り替えに使われるのが、addClass()とremoveClass()
addClass()は、対象のHTML要素にclass属性を追加
removeClass()は、要素に設定されているclass属性を解除
*/

/*
マウスクリックイベントの記述
$('.セレクタ名').on('click', funciton(){
  イベント発生時に行われる処理
});
*/

/*
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
*/

/*
$(function(){
  $('.bg1').on('click', function(){
    $('.bg1').slideUp();
  });
  
  $('.bg2').on('click', function(){
    $('.bg2').slideUp();
  });
  
  $('.bg3').on('click', function(){
    $('.bg3').slideUp();
  });
  
  $('.bg4').on('click', function(){
    $('.bg4').slideUp();
  });
})
*/

//class名のみ異なるイベントをthisを使ってまとめる
/*
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp(); //thisは「クリックされた要素」を指す
  });
});
*/

/*
children
HTML要素直下のすべての子要素を取得する
*/
$(function(){
  $('button').on('click', function(){ //button要素がクリックされたときに処理を実行してください
    $('ul').children().css('color','red'); //ここでのchildrenは「ul要素の子要素」つまり、li要素が対象になる
  });
});
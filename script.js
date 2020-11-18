//フワッと出てくるアニメーション
  const bigImg = document.querySelector('.big-img');
  bigImg.animate({opacity: [0, 1]}, 2000); 

//スライドメニュー
  const btns = document.querySelector('.burger, .btn-menu');
  const menu = document.querySelector('.btn-menu');
  const nav = document.querySelector('.menu-bar');

  //.addEventListener…特定のイベントが起こると動くメソッド
  btns.addEventListener('click', () => {
    //classList.toggle…クリックするたびにクラスの付与がオンされたりオフされたりする
    nav.classList.toggle('open-menu');
    
    if (menu.innerHTML === 'Menu') {
      menu.innerHTML = 'Close';
    } else {
      menu.innerHTML = 'Menu';
    }

  });

//Topへ戻るボタンのアニメーション
  //スクロール量を取得するメソッド/document.documentElement.scrollTop…/Window.pageYOffset…どちらとも垂直方向のスクロール量(px)
  function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
  }
          
  //トップに戻るボタンの要素を代入
  var backToBtn = document.querySelector( '.back-to-btn' );
            
  //ボタンの表示・非表示/.onscrol...スクロール時に処理を行うプロパティ
  window.onscroll = function() {
    ( getScrolled() > 200 ) ? backToBtn.classList.add( 'fadein' ): backToBtn.classList.remove( 'fadein' );
  };
            
  //Topにシューっと移動するためのメソッド
  function scrollToTop() {
    var scrolled = getScrolled();
    //window.scrollTo...特定の位置までスクロールする
    window.scrollTo( 0, Math.floor( scrolled / 2 ) );
    if ( scrolled > 0 ) {
      window.setTimeout( scrollToTop, 50 );
    }
  };
            
  //イベント発火用
  backToBtn.onclick = function() {
    scrollToTop();
  };
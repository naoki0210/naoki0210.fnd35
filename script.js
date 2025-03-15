// ボタン取得
const login = document.querySelector(".login");
//ナビゲーションとFND35を取得
const strong = document.querySelector(".strong");
const header = document.querySelector(".header");

const keyframes = {
  opacity:[0,1],
};


const options = {
  duration: 2000,
  easing:"ease",
  fill:"forwards",
};
function fnd35() {
  strong.animate(keyframes,options);
  header.animate(keyframes,options);
}
//クリックするとFND35とナビゲーションが出てくる
login.addEventListener("click", fnd35);

// ボタン取得
const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");
const result = document.querySelector(".result");
// 5つの枠を取得
const cards = document.querySelectorAll(".cards");

function shuffle () {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("back");
    const j = Math.floor(Math.random() * cards.length);
    const a = cards[i].textContent;
    cards[i].textContent = cards[j].textContent;
    cards[j].textContent = a;
  }
}


//クリックしたときに関数を実行
startButton.addEventListener("click", shuffle);
//各カードの値を受け取る
function check(e) {
 if (e.textContent === "○") {
  e.classList.remove("back")
  result.textContent = "あたり";
 }else {
  e.classList.remove("back")
  result.textContent = "はずれ";
 }
}
//リセット関数
function reset () {
  for (let i = 0; i < cards.length; i++) {
    if(i === 0) {
      cards[i].classList.remove("back");
      cards[i].textContent = "○";
    }else {
      cards[i].classList.remove("back");
      cards[i].textContent = "×";
    }
  }
  result.textContent = "\u200B";
}

resetButton.addEventListener("click", reset);

//ボタン取得
const colorChange = document.querySelector(".color-button");
//背景色を変えるクラスをつける
function change() {
  document.body.classList.toggle("color-toggle");
}
colorChange.addEventListener("click", change);
//ボタン要素を取得
const screenButton = document.querySelector(".screen-button");
const screen = document.querySelector(".screen");//上から流れてくる要素

screenButton.addEventListener("click", function () {
  screen.animate(
    {
      transform: ["translateY(-100vh)", "translateY(0)", "translateY(100vh)"],//スクリーンを上から下に移動
    },
    {
      duration: 2000, //再生時間
      easing: "ease-in-out", //加速してから減速
      fill: "forwards", //アニメーションがそのまま下に
    }
  );
});
//ボタン取得
const greeting = document.querySelector(".greeting-button");
const mask = document.querySelector(".mask");//半透明のマスク
const modal = document.querySelector(".modal"); //画面中央に出てくるモーダル
const close = document.querySelector(".close");
greeting.addEventListener("click", () => {
  mask.classList.remove("hidden");
  modal.classList.remove("hidden");
});
//クリックしたらhiddenを付与
mask.addEventListener("click", () => {
  mask.classList.add("hidden");
  modal.classList.add("hidden");
});

close.addEventListener("click", () =>{
  mask.classList.add("hidden");
  modal.classList.add("hidden");
});

//各ボタンの要素を取得
const text = document.querySelector(".change-button");
const first = text.textContent;
const second = colorChange.textContent;
const third = screenButton.textContent;
const four = greeting.textContent;
text.addEventListener("click", () => {
  if (text.textContent === first) {
 
    text.textContent = "文字が変わる";
    colorChange.textContent = "色が変わる";
    screenButton.textContent = "スクリーン";
    greeting.textContent = "こんにちは";
  } else {
    text.textContent = first;
    colorChange.textContent = second;
    screenButton.textContent = third;
    greeting.textContent = four;
  }
});

//ボタンと最後のメッセージのpを取得
const lastMessage = document.querySelector(".last-button");
const paragraphs = document.querySelectorAll(".paragraph");
lastMessage.addEventListener("click", function () {
  for (let i = 0; i < paragraphs.length; i++) {
    const anime = {
      opacity: [0, 1],
    };
    const options = {
      duration: 600,
      delay: i * 2000,
      fill: "forwards",
    };
    paragraphs[i].animate(anime, options);
  }
});

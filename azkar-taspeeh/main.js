let tasVal = document.getElementById("tas-val");
let count = document.getElementById("count");
let btn = document.getElementById("btn");
let btnNum = document.getElementById("btnNum");
let array = ["الحمد لله ", "الله اكبر", "سبحان الله", "لا اله الا الله"];
let iCount = 0;
tasVal.innerHTML = array[0];
btn.onclick = function () {
  soundBtn();
  iCount++;
  count.innerHTML = 0;
  if (iCount === 4) {
    iCount = 0;
  }
  tasVal.innerHTML = array[iCount];
};
btnNum.onclick = function () {
 
soundBtnNum() 
  count.innerHTML++;
  if (count.innerHTML == 34) {
    count.innerHTML = 0;
    if (iCount === array.length-1) {
      iCount = 0;
    }
    iCount++;
  }
  tasVal.innerHTML = array[iCount];
};
var i = 0;
function chgBackG() {
  var color = ["red", "blue"];
  count.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(chgBackG, 300);
 function soundBtn() {
     var audio = new Audio("./sound/btn.wav");
     audio.play();
}
    function soundBtnNum() {
      var audio = new Audio("./sound/btnnum.wav");
      audio.play();
    }


// var i = 0;
// function change() {
//   var doc = document.getElementById("col");
//   var color = ["black", "blue", "brown", "green"];

//   doc.style.color = color[i];
//   tasVal.style.color = color[i];
//   i = (i + 1) % color.length;
//   console.log(color[i])
// } 
// setInterval(change, 2000);
// function change() {
//   var doc = document.getElementById("background");
//   var color = ["black", "blue", "brown", "green", "blue", "brown"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
//   console.log(color[i])
// }
// setInterval(change, 1000);


// function test() {
//   let test = ["1", "2", "3", "4", "5", "6"];
//   console.log(test[i])
// }

// setTimeout(test, 1000);

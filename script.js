//let in place of var - values can be updated(reassigned) block scoped {anything between curly braces}
// let currentScore = 0;
// if(currentScore < 5) { let currentScore = 10; console.log(currentScore + " inside");}
// console.log(currentScore + " outside");

let currentScore = 0;
let playing = false;
let shape1;
let shape2;
const matchBtn = document.getElementById("match");
const broden = "url('broden.png')";
const ken1 = "url('Ken1.jpg')";
const ken2 = "url('Ken2.jpg')";
const kenOc = "url('KenOc.jpg')";
const oc1 = "url('Oc1.jpg')";
const oc2 = "url('Oc2.jpg')";
const oc3 = "url('Oc3.jpg')";
const oc4 = "url('Oc4.jpg')";
const oc5 = "url('Oc5.jpg')";
const wattle = "url('Wattle.jpg')";

const shapes = [
  {image: broden, width: 400, height: 500},
  {image: ken1, width: 400, height: 500},
  {image: ken2, width: 400, height: 500},
  {image: kenOc, width: 400, height: 500},
  {image: oc1, width: 400, height: 500},
  {image: oc2, width: 400, height: 500},
  {image: oc3, width: 400, height: 500},
  {image: oc4, width: 400, height: 500},
  {image: oc5, width: 400, height: 500},
  {image: wattle, width: 400, height: 500},
  // {color: "#ffca3a", width: 320, height: 170},
  // {color: "#ffca3a", width: 310, height: 180},
  // {color: "#8ac926", width: 190, height: 160},
  // {color: "#8ac926", width: 200, height: 175},
  // {color: "#1982c4", width: 380, height: 185},
  // {color: "#1982c4", width: 400, height: 120},
  // {color: "#6a4c93", width: 370, height: 190},
  // {color: "#6a4c93", width: 440, height: 160},
]
const selectRandomShape = () => {
  const randomNum = Math.floor(Math.random()*shapes.length);
    const randomSelection = shapes[randomNum];
  return randomSelection;
}

const repeatRandomShape = () => {
  setInterval(() => {
    matchBtn.disabled = false;
    shape1 = selectRandomShape();
    shape2 = selectRandomShape();
    console.log(shape1);
    console.log(shape2);
    const shape1Styles = `width:${shape1.width}px;
                          background:${shape1.image};
                          background-size:contain;
                          background-repeat:no-repeat;
                          height:${shape1.height+"px"};`
    const shape2Styles = `width:${shape2.width+"px"};
                          background:${shape2.image};
                          background-size:contain;
                          background-repeat:no-repeat;
                          height:${shape2.height+"px"};`
  document.getElementById("shape1").style.cssText = shape1Styles;
  document.getElementById("shape2").style.cssText = shape2Styles;
  }, 1200);
}

// Start game
document.getElementById("play").onclick = () => {
  playing = true;
  //disable the play button when playing
  document.getElementById("play").disabled = true;
  repeatRandomShape();
}

//Compare
document.getElementById("match").onclick = () => {
  if(playing) {
    matchBtn.disabled = true;
    if(Object.is(shape1, shape2)) {
      currentScore++;
      document.getElementById("score").innerHTML = currentScore;
    } else {
      currentScore--
      document.getElementById("score").innerHTML = currentScore;
    }
  }
}



const valueOfWeight = document.getElementById('weight');
const valueOfHeight = document.getElementById('heightvalue');
const BMIRANGE = document.getElementById('range');
const BMISTATUS = document.getElementById('status');
const SUGGETION = document.getElementById('suggetion');
const Errorcontant = document.getElementById('errorbox');
const RETURN = document.getElementById('error');
const suggetioWindo = document.getElementById('dupicate');
const BUTTOMBOX = document.getElementById('showclick');
var count = 50;
var answer;
var rangeStatus
var sugges;
var MeterHig
function getWeight(sysmbel) {
  if (sysmbel == "add") {
    count += 1;
  }
  else if (sysmbel == "dif") {
    count -= 1;
  }
  valueOfWeight.innerText = count;
}
function calculateBmi() {
  let Weight = valueOfWeight.innerText;
  let result = Weight / cmCovertor();
  answer = result.toFixed(1)
  return BMIRANGE.innerText = answer;
}
function cmCovertor() {
  let Height = Number(valueOfHeight.value);
  MeterHig = Height / 100;
  console.log(MeterHig);
  return (MeterHig * MeterHig);
}
function condition() {
  if (answer < 18.5) {
    rangeStatus = "Under Weight";
    sugges = "You have a Under Weight body weight. Be careful!";

  }
  else if (answer < 24.9) {
    rangeStatus = "Normal";
    sugges = "You have a normal body weight. Good job!";
  }
  else if (answer > 24.9) {
    rangeStatus = "Over Weight";
    sugges = "You have a Over Weight body weight. Be careful!";
  }
  return BMISTATUS.innerText = rangeStatus;
}

function bmisuggetion() {
  if (rangeStatus === "Under Weight") {
    sugges = "You have a Under Weight body weight. Be careful!";
  }
  else if (rangeStatus === "Normal") {
    sugges = "You have a normal body weight. Good job!";
  }
  else if (rangeStatus === "Over Weight") {
    sugges = "You have a Over Weight body weight. Be careful!";
  }
  return SUGGETION.innerText = sugges;
}
function disError() {
  if (isNaN(MeterHig) == true || MeterHig == 0) {
    Errorcontant.style.display = "block";
    suggetioWindo.style.display = "none";
    BUTTOMBOX.style.display = "none";
  }
  else {
    Errorcontant.style.display = "none";
  }
}
function reload() {
  window.location.reload();
}

function showResult() {
  BUTTOMBOX.innerText = "RE-CALCULATE YOUR BMI"
  calculateBmi();
  disError();
  condition();
  bmisuggetion();

}

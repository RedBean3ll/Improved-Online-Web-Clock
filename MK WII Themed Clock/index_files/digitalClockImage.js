// -----------------------------------------------------------------
// Digital Clock vol.1 デジタル時計
// CopyRight(C) 2014 Simple Style, All rights reserved.
// Modified by Matthew C
// Project completion date: 10/19/2022
//
// Modifications:
// -day_of_week +12hr_toggle +AMPM_toggle, 
// +second_toggle +blink_toggle
//
// Note: Cleaned up existing functions
// -----------------------------------------------------------------

//12-hr mode, Ante Meridiem, Seconds, Blinks
let rules = [true, true, true, true]; 
let blinkInt = 500;

( 
function(){ //IIFE start
// Output of the elements.
document.addEventListener('DOMContentLoaded',outputClock,false);
function outputClock(){
  //Check Rules
  if(!rules[1]) { hideAnteMeridiem(); }
  if(!rules[2]) { hideSecconds(); }
}

function hideSecconds() {
  const SECONDA = document.getElementById("Nums6");
  const SECCNDB = document.getElementById("Nums7");
  const COLONB = document.getElementById("Nums5");
  SECONDA.style.display = "none";
  SECCNDB.style.display = "none";
  COLONB.style.display = "none";
}

function hideAnteMeridiem() {
  const ANTMERD = document.getElementById("Nums8");
  ANTMERD.style.display = "none";
}

// Move the numbers. (NUMBERS SPLIT INTO SINGLE DIGITS)
function moveDigital(){
  
  var now   = new Date();
  var hour = now.getHours();

  var antemeridiem = (hour > 11) ? "hr_pm.png" : "hr_am.png";

  //HOURS
  var hour2;
  var hour1;
  if(rules[0]) {
    hour = hoursTo12(now.getHours);

    if(hour > 9) {
      hour1 = 1;
      hour2 = hour - 10;
    } else {
      hour1 = 0;
      hour2 = hour;
    }
  } else {
    hour2 = hour % 10;
    hour1 = (hour - hour2) / 10;
  }

  //MINUETS
  var mine   = now.getMinutes();
  var mine2  = mine % 10;
  var mine1  = (mine - mine2) / 10; 

  //SECONDS
  var sec    = now.getSeconds();
  var sec2   = sec % 10;
  var sec1   = (sec - sec2) / 10;

  document.getElementById('dig0').src = 'index_files/'+hour1+'.png';
  document.getElementById('dig1').src = 'index_files/'+hour2+'.png';
  document.getElementById('dig3').src = 'index_files/'+mine1+'.png';
  document.getElementById('dig4').src = 'index_files/'+mine2+'.png';
  document.getElementById('dig6').src = 'index_files/'+sec1+'.png';
  document.getElementById('dig7').src = 'index_files/'+sec2+'.png';
  document.getElementById('dig8').src = 'index_files/'+antemeridiem;
}

//24hr to 12hr
function hoursTo12(hour) { return hour % 12 || 12; }

//Blink effect
function blinks(){
  const COL_OBJ = document.getElementById('dig5').style;
  const COL2_OBJ = document.getElementById('dig2').style;

  if ( COL_OBJ.visibility=='hidden') {
    COL_OBJ.visibility = 'visible';
    COL2_OBJ.visibility = 'visible';
  }       
  else {
    COL_OBJ.visibility = 'hidden';
    COL2_OBJ.visibility = 'hidden';  
  }         
}

//Intervals
setInterval( moveDigital, 500 );
if(rules[3]) { setInterval( blinks,blinkInt ); }
}() ); //IIFE end
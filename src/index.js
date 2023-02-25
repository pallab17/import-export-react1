import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
/* import pi, { doublePi, triplePi } from "./math.js";
eikhane pi= default export mane sudhu ektai value export hoye asche
i.e. const pi = 3.1415962; from math.js file
pi naam ta variable i.e. default export jodi hoye thake
jeikhane amra import korchi seikhane we can gib it any name ami chaile pi na likhe pc o naam dite pari

eibar { doublePi, triplePi } hocche normal export or non default export jeta ekta r beshi value export hoye asche
i.e. function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
} i.e. ei duto fn asche as non default export hoye
eibar jeikhane import hooche seikhane i have to use the same name of the value that it has in the file jeikhan theke value/fn ta export hocche
i.e.
{ doublePi, triplePi } naam ta likhchi amra import jeikhane korchi
eibar ei naam guloi chilo kintu math.jsx file jeikhan theke ei value/fn gulo export hoyeche
that means i cant change the name of non default export value//fn walader

 now another way of importing is 
 import * naam_ja_khusi from "Math.js"
 * = everything
 but ei import ta suggested nah 
  but if we use this syntax then
  <ul>
    <li>{naam_ja_khusi.pi}</li>  
    <li>{naam_ja_khusi.doublePi()}</li>
    <li>{naam_ja_khusi.triplePi()}</li>
  </ul>
  erom likhte hoto jeta khub easy to read holeo hard to maintain tai 
  import everything is not suggested


*/

ReactDOM.render(
  <ul>
    <li>{pi}</li>  
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
/*
<li>{pi}</li>  {pi}--> normal js

<li>{doublePi()}</li> --> {doublePi()} -- js fn tai () used 
    <li>{triplePi()}</li> --> {triplePi()} -- js fn tai () used 
*/

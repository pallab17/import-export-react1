import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";
/* import pi, { doublePi, triplePi } from "./math.js";
eikhane pi= default export mane sudhu ektai value export hoye asche
i.e. const pi = 3.1415962; from math.js file
pi naam ta variable i.e. default export jodi hoye thake
jeikhane amra import korchi seikhane we can gib it any name ami chaile pi na likhe pc o naam dite pari

eibar { doublePi, triplePi } hocche normal export or non default export jeta ekta r beshi value export hoye asche
i.e. 





*/

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

"use strict";
// unions
// it can be both
// function printId(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// printId("chello show");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("heeloo"));
var a = [1, 2, 3, 4, 5, 6];
var b = ["A", "b", "c", "d", "e"];
console.log(getFirstThree(a));
console.log(getFirstThree(b));

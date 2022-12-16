// unions

type ID = number | string;
// it can be both

// function printId(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// printId("chello show");

function getFirstThree(x: string | string[] | number[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree("heeloo"));
let a = [1, 2, 3, 4, 5, 6];
let b = ["A", "b", "c", "d", "e"];

console.log(getFirstThree(a));
console.log(getFirstThree(b));

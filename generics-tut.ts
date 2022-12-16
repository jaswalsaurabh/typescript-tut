// // generics

import path from "path";

// function logString(arg: string) {
//   console.log(arg);
//   return arg;
// }

// function logNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }

// function logArr(arg: any) {
//   console.log(arg);
//   return arg;
// }

// logString("loged in");

// logNumber(1);

// logArr([1, 2, 3, 4, 5]);

// // <Placeholder>
// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// // logAnything("anbc");

// VERY IMporttant

// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// const players: Player[] = [
//   { name: "saurabh", age: 12 },
//   { name: "ankita", age: 22 },
//   { name: "rikki", age: 34 },
// ];

// interface Player {
//   name: string;
//   age: number;
// }
// const people: HasAge[] = [{ age: 12 }, { age: 13 }, { age: 23 }, { age: 56 }];

// getOldest(people);

// this is called assertion => this is not recommended
// const person = getOldest(players) as Player;
// const person = getOldest(players)

// interface convention
interface IPost {
  title: string;
  id: number;
  desc: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

async function fetchData(path: string): Promise<IPost[]> {
  const res = await fetch("https://example.com" + path);
  return res.json();
}

async function fetchUserData(path: string): Promise<IUser[]> {
  const res = await fetch("https://example.com" + path);
  return res.json();
}

(async () => {
  const posts = await fetchData("/posts");
  posts[0];
})();

(async () => {
  const posts = await fetchUserData("/posts");
  posts[0];
})();

// Generic function to make any api request

const fetchApiData = async <ResultType>(path: string): Promise<ResultType> => {
  const res = await fetch("https://example.com" + path);
  return res.json();
};

(async () => {
  const user = await fetchApiData<IUser[]>("/posts");
  user[0].age;
  const posts = await fetchApiData<IPost[]>("/posts");
  posts[0].desc;
})();

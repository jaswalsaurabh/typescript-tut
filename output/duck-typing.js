"use strict";
// structural typing and duck typing
// interface Icredential {
//   username: string;
//   password: number;
//   isAdmin?: boolean;
// }
// function logIn(credential: Icredential) {
//   console.log("cerdential", credential);
//   return true;
// }
// const user = {
//   username: "anku",
//   password: 12323223,
//   isAdmin: true,
// };
// logIn(user);
// interface of an object with function in it
// interface IAuth {
//   username: string;
//   password: string;
//   login(username: string, password: number): void;
// }
// const auth: IAuth = {
//   username: "saurabh",
//   password: "secret",
//   login(username: string, password: number) {},
// };
// inference
var num = "coders";

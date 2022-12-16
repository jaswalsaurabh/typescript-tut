import { type } from "os";

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 454,
};
const transaction2: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 456,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "jaswal",
  balance: 400,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// Extend 2 Interfaces

// interface Book {
//   name: string;
//   price: number;
// }

// interface Ebook extends Book {
//   format: string;
//   size: number;
// }

// interface AudioBook extends Ebook {
//   duration: number;
// }

// const book: AudioBook = {
//   name: "Master Js with me ",
//   price: 1200,
//   format: "pdf",
//   size: 12,
//   duration: 123,
// };

// Merge 2 interfaces

interface Book {
  name: string;
  price: number;
}

interface Book {
  size: number;
}

const book: Book = {
  name: "Little Woman",
  price: 12,
  size: 2,
};

type MySting = string;

type MyNumber = number;

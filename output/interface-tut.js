"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transaction1 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 454,
};
var transaction2 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456,
};
var bankAccount = {
    accountNumber: 123,
    accountHolder: "jaswal",
    balance: 400,
    isActive: true,
    transactions: [transaction1, transaction2],
};
var book = {
    name: "Little Woman",
    price: 12,
    size: 2,
};

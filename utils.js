"use strict";
// 1. Partial
// - 인터페이스 타입들을 optional로 지정하는 속성
Object.defineProperty(exports, "__esModule", { value: true });
const address1 = { email: "test", address: "서울시" };
const address2 = {};
const address3 = { email: "test" };
const address4 = { address: "서울시" };
const address5 = { email: "test", address: "서울시" };
const myProduct = {
    id: 1,
    name: "그림",
    price: 10000,
    brand: "우영",
    stock: 50
};
const noBrandProduct = {
    id: 2,
    name: "그램",
    price: 10,
    stock: 1
};
const pickProduct = {
    name: "삼성 노트북",
    price: 5000000
};
//# sourceMappingURL=utils.js.map
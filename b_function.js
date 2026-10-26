"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function explFunction() { }
const explFunctionArrow = () => { };
// 정수 두 개를 받아서 콘솔에 출력하는 함수
// function ~(): return타입 (소괄호 뒤에 리턴 타입 붙이기)
function explFunction01(num1, num2) {
    console.log(num1 + num2);
}
// 성과 이름을 더해서 풀네임을 반환하는 함수
const explFunctionArrow01 = (lastName, firstName) => lastName + firstName;
// Optional Prameter
const funcWithOptional = (x, y, z) => {
    // 옵셔널 값은 검증을 강제한다
    if (y === undefined) {
        return x;
    }
    if (z === undefined) {
        return x + y;
    }
    return x + y * z;
};
funcWithOptional(1);
funcWithOptional(1, 2);
funcWithOptional(1, 2, 3);
// Rest Parameter(...)
const functionWithParams = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
console.log(functionWithParams(10, 20));
//# sourceMappingURL=b_function.js.map
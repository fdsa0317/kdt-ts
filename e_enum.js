"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 언어를 사용할 때 상수의 규칙
// 대문자로 표기하고 스네이크 표기법 사용
const MY_DATA = 1000;
var BasicDirection;
(function (BasicDirection) {
    BasicDirection["Up"] = "Up";
    BasicDirection["Down"] = "Down";
    BasicDirection["Left"] = "Left";
    BasicDirection["Right"] = "Right"; // 3
})(BasicDirection || (BasicDirection = {}));
console.log(BasicDirection.Up);
console.log(BasicDirection.Down);
const myEnumDunc = (arrow) => arrow;
// myEnumDunc("Up")
myEnumDunc(BasicDirection.Up);
//# sourceMappingURL=e_enum.js.map
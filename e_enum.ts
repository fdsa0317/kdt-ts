// 언어를 사용할 때 상수의 규칙
// 대문자로 표기하고 스네이크 표기법 사용
const MY_DATA = 1000
enum BasicDirection {
    Up = "Up", // 0 
    Down = "Down", // 1
    Left = "Left", // 2
    Right = "Right" // 3
}

console.log(BasicDirection.Up)
console.log(BasicDirection.Down)

const myEnumDunc = (arrow: BasicDirection) => arrow

// myEnumDunc("Up")
myEnumDunc(BasicDirection.Up)
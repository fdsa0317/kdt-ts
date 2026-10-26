function explFunction(){}
const explFunctionArrow = () => {}

// 정수 두 개를 받아서 콘솔에 출력하는 함수
// function ~(): return타입 (소괄호 뒤에 리턴 타입 붙이기)
function explFunction01(num1: number, num2: number): void{
    console.log(num1 + num2)
}

// 성과 이름을 더해서 풀네임을 반환하는 함수
const explFunctionArrow01 = (lastName: string, firstName: string): string => lastName + firstName

// Optional Prameter
const funcWithOptional = (x: number, y?:number, z?:number): number => {
    // 옵셔널 값은 검증을 강제한다
    if(y === undefined){
        return x
    }
    
    if(z === undefined){
        return x + y
    }

    return x + y * z
}

funcWithOptional(1)
funcWithOptional(1, 2)
funcWithOptional(1, 2, 3)

// Rest Parameter(...)
const functionWithParams = (...numbers: number[]): number => numbers.reduce((acc, curr) => acc + curr)

console.log(functionWithParams(10, 20))
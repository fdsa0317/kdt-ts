// 강제성
export interface Animal {
    species: string;
    canSpeak: boolean;
    numberOfLegs?: number; // 옵셔널
}

const dog: Animal = {
    canSpeak: true,
    species: "강아지",
    numberOfLegs: 4
}

const snake: Animal = {
    canSpeak: false,
    species: "뱀"
}

// Fixed Value
// | or
interface Machine {
    powerLevle: number;
    meterial: "metal" | "plastic"; // 값이 들어오면 값만 넣을 수 있음
}

// 강제성
const myMachine: Machine = {
    powerLevle: 10,
    meterial: "metal"
}

// Union(합) Type
type MyUnionType = Machine & Animal 

const myUnionAnimal: MyUnionType = {
    canSpeak: false,
    meterial: "metal",
    powerLevle: 5,
    species: "인조동물"
}

type MyUnionType2 = Machine | Animal 
const myUnionAnimal2: MyUnionType2 = {
    canSpeak: true,
    species: "동물"
    // meterial: "metal"
}

type MyType = string | number
const datas: MyType | number = "value1"

// Type Intersect
// 옵셔널과 필수값 -> 필수값으로 변경되는 현상
interface Type1 {
    prop1: number;
    prop2?: string;
}

interface Type2 {
    prop2: string;
    prop3: string;
}

type NewType = Type1 & Type2
const object: NewType = {
    prop1: 10,
    prop2: "a",
    prop3: "b"
}
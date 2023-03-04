let userName:string = "Ahmad";
let hasLoggedIn:boolean = true;

userName += "Abdulazeez";

console.log(userName)


let myNumber:number = 10;

let myRegex:RegExp = /foo/;

const names:string[] = userName.split(" ");

const myValues:Array<number> = [1, 2, 3, 4];

interface Person {
    firstName: string;
    lastName: string;
}

const myPerson:Person = {
    firstName: "Ahmad",
    lastName: "Abdulazeez"
}

const ids:Record<number, string> = {
    10: "a",
    20: "b"
}

if(ids[20] === "c") {
    console.log(ids)
}

for(let i = 0; i < 10; i++) {
    console.log(i)
}




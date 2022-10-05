let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

interface BasicUser<A = boolean> {
    name: string;
    surname: string;
    age: number;
    isAdmin: A;
    permissions?: string[];
};

const user1: BasicUser<boolean> = {
    name: Romeo;
    surname: Colangelo;
    age: 20;
    isAdmin: true;
};

let usersArray: BasicUser[] = [user,user,user];

function firstUser(usersArray: BasicUser) {
    return usersArray[0];
}

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
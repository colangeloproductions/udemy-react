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

interface BasicUser {
    account: number;
}

const user1: BasicUser = {
    name: Romeo,
    surname: Colangelo,
    age: 20,
    isAdmin: true,
    account: 100,
};

let usersArray: BasicUser[] = [user,user,user];

function getFirst<T>(arr: T[]): T {
    return usersArray[0];
}

getFirst<BasicUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
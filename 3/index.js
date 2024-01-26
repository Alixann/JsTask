let variable1 = "42";
console.log(Number(variable1), Boolean(variable1), String(variable1));

let variable2 = 0;
console.log(Number(variable2), Boolean(variable2), String(variable2));

let variable3 = false;
console.log(Number(variable3), Boolean(variable3), String(variable3));

let variable4 = null;
console.log(Number(variable4), Boolean(variable4), String(variable4));

let variable5 = undefined;
console.log(Number(variable5), Boolean(variable5), String(variable5));

let variable6 = { key: "value" };
console.log(Number(variable6), Boolean(variable6), String(variable6));

let variable7 = 9007199254740993n;
console.log(Number(variable7), Boolean(variable7), String(variable7));

let variable8 = Symbol('unique');
console.log(Boolean(variable8), String(variable8));

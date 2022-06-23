
let applyAll = (choiseFunction, ...args) => {
    return choiseFunction(...args);
};

let sum = (...args) => {
    return args.reduce((partialSum, a) => partialSum + a, 0);
}

let mul = (...args) =>  {
    return args.reduce((partialSum, a) => partialSum * a, 1);
}

console.log(applyAll(sum, 1,2,3,4));
function x(a, b, c) {
    if (a > b) {
        return "A is greater";
    }
    if (c > b) {
        return "C is greater";
    } else {
        return "B is greater";
    }
}

console.log(x(10, 12, 13)); 
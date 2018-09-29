// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let halfDollars = 50;
    let quarters = 25;
    let dimes = 10;
    let nickels = 5;
    let pennies = 1;
    let limit = 10000;

    let change = {};

    if (currency > limit) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    if (currency >= halfDollars) {
        change.H = Math.floor(currency / halfDollars);
        currency %= halfDollars;
    }

    if (currency >= quarters) {
        change.Q = Math.floor(currency / quarters);
        currency %= quarters;
    }

    if (currency >= dimes) {
        change.D = Math.floor(currency / dimes);
        currency %= dimes;
    }

    if (currency >= nickels) {
        change.N = Math.floor(currency / nickels);
        currency %= nickels;
    }

    if (currency >= pennies) {
        change.P = Math.floor(currency / pennies);
        currency %= pennies;
    }
    
    return change;
}

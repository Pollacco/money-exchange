// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let p = 1;
    let coins = {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    
    if (currency >= h) {
       coins.H =  Math.floor(currency / h);
       currency = currency % h;
    }
    if (currency >= q) {
       coins.Q =  Math.floor(currency / q);
       currency = currency % q;
    }
    if (currency >= d) {
        coins.D =  Math.floor(currency / d);
        currency = currency % d;
    }
    if (currency >= n) {
        coins.N =  Math.floor(currency / n);
        currency = currency % n;
    }
    if (currency >= p) {
        coins.P =  Math.floor(currency / p);
        currency = currency % p;
    }
    return coins;
}

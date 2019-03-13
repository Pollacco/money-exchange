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
    for (i = 1; currency >= h; i++) {
        currency -= h;  
        coins.H = i;      
    }        
    for (i = 1; currency >= q; i++) {
        currency -= q;  
        coins.Q = i;      
    }
    for (i = 1; currency >= d; i++) {
        currency -= d;  
        coins.D = i;      
    }
    for (i = 1; currency >= n; i++) {
        currency -= n;  
        coins.P = n;      
    }
    for (i = 1; currency >= p; i++) {
        currency -= p;  
        coins.P = i;      
    }
    return coins;
}


//function to check a number is prime or not
function isPrime(day) {
    let result = true
    if (day > 2) {
        for (var i = 2; i < day; i++) {
            if (day % i == 0) {
                result = false;
            }
        }
    }
    else {
        result = false;
    }
    return result
}

module.exports = { isPrime: isPrime }
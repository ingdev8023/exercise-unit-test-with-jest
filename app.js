let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollar) {
    return Math.floor(dollar * (1/oneEuroIs['USD']) * oneEuroIs['JPY'])
}

function fromEuroToDollar (euro) {
    return euro * oneEuroIs['USD']
}

function fromYenToPound (yen){
    return Math.floor(yen * (1/oneEuroIs['JPY']) * oneEuroIs['GBP'])
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}
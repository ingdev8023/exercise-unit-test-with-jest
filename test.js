test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146,26 Yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(5);

    // If 1 dollar is 146 yenes, then 5 dollars euros should be (5 * 146)
    const expected = 5 * 146; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(731); // 
})

test("One Yen should be 0,0055 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromYenToPound(1000);

    // If 1 dollar is 146 yenes, then 5 dollars euros should be (5 * 146)
    const expected = 1000 * 0.005; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(5); // 
})
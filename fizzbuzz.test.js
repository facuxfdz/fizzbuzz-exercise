const fizzbuzz = require("./fizzbuzz")

describe('fizzbuzz use cases tests', () => {
    test('fizzbuzz should print 1 if it receives 1', () => {
        const expected = 1
        const result = fizzbuzz(1)
        expect(expected).toBe(result)
    })
    
    test('should fizzbuzz print fizz if it receives a multiple of 3', () => {
        const expected = "fizz"
        const result = fizzbuzz(3)
        expect(expected).toBe(result)
    })

    test('should fizzbuzz print buzz if it receives a multiple of 5', () => {
        const expected = "buzz"
        const result = fizzbuzz(5)
        expect(expected).toBe(result) 
    })

    test('should print fizzbuzz fizzbuzz if it receives a multiple of 5 and 3 at the same time', () => {
        const expected = "fizzbuzz"
        const result = fizzbuzz(15)
        expect(expected).toBe(result)
    })
})

const fizzbuzz = require("../src/fizzbuzz");

// Numbers divisible by 3 should return the word "Fizz", numbers divisible by 5 should return the word "Buzz", numbers divisible by both 3 and 5 should return the word "FizzBuzz", and numbers that are not divisible by 3 or 5 should return the number itself.

describe("fizzbuzz function", () => {
  test("number that is only divisible by 3", () => {
    let result = fizzbuzz(9);
    expect(result).toBe("fizz");
  });
  test("number that is only divisible by 5", () => {
    let result = fizzbuzz(10);
    expect(result).toBe("buzz");
  });
  test("numbers that are divisible by both 3 and 5", () => {
    let result = fizzbuzz(15);
    expect(result).toBe("fizzbuzz");
  });
  test("number is not divisible by 3 or 5", () => {
    let result = fizzbuzz(7);
    expect(result).toBe(7);
  });
});

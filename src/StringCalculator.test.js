const Add = require('./StringCalculator');

test("An empty string will return 0", () => {
  expect(Add("")).toBe(0);
});
test("If one number is inserted, return that number", () => {
  expect(Add("5")).toBe(5);
});
test("If two numbers are inserted, return their sum", () =>{
    expect(Add("1,2")).toBe(3);
});
test("Allow the Add method to handle an unknown number of arguments/numbers", () => {
  expect(Add("2,3,5,4,6,10,1,3,5,66")).toBe(105);
});
test("Allow the Add method to handle new lines between numbers (instead of commas)", () => {
  expect(Add("1\n2,3")).toBe(6);
});
test("Calling Add with a negative number will throw an exception", () => {
  expect(() => {Add("2,-4,3,-5")}).toThrow('Negatives not allowed: -4,-5');
});
test("Calling Add with one negative number throws an exception", () => {
  expect(() => {Add("-4")}).toThrow('Negatives not allowed: -4');
})

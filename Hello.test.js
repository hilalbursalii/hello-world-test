// hello.test.js
const sayHello = require('./Hello');

test('says hello world', () => {
    expect(sayHello()).toBe('Hello, World!');
});
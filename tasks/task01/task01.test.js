const reverseString = require('./task01');

// test('Проверяем реверс строки', () => {
//     expect(reverseString('hello')).toBe('olleh')
// });

describe('My test case', () => {
    const testCase = [
        {
            inString: 'hello',
            expected: 'olleh'
        },
        {
            inString: 'blin',
            expected: 'nilb'
        },
        {
            inString: 'How are you?',
            expected: '?uoy era woH'
        }
    ];

    testCase.forEach(test => {
        it(`Входящая строка: ${test.inString}, ожидаю: ${test.expected}`, () => {
            const res = reverseString(test.inString);
            expect(res).toBe(test.expected);
        });
    });
});


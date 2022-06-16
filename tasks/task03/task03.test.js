const randomInt = require('./task03');

describe('Тест случайного числа', () => {
    const testCase = [
        {from: 100, to: 110},
        {from: 200, to: 201}
    ];

    testCase.forEach(test => {
        it(`from: ${test.from}, to: ${test.to}`, () => {
            const res = randomInt(test.from, test.to);

            expect(res).toBeGreaterThanOrEqual(test.from);
            expect(res).toBeLessThanOrEqual(test.to);
        });
    });
});

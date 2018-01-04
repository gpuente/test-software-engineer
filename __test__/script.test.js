const script = require('../src/index');
const { carInsurance, daysFlow } = script;
const mockReport = require('./mocks/reportResult');

const defaultDays = 30;

describe('Script tests', () => {
  test('Report should match with mock', () => {
    const result = daysFlow(defaultDays, carInsurance, 'none');
    expect(result).toBe(mockReport);
  });
});

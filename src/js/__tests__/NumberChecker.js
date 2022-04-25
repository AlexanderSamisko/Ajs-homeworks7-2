import NumberChecker from '../NumberChecker';

test('testing whether method able to correct wrong format to the right', () => {
  const str = '8(927)000-00-00';
  const logSpy = jest.spyOn(console, 'log');
  NumberChecker.EditPhoneNumber(str);
  expect(logSpy).toHaveBeenCalledWith('+79270000000');
});

test('testing whether method able to correct wrong format to the right', () => {
  const str = '+7 960 000 00 00';
  const logSpy = jest.spyOn(console, 'log');
  NumberChecker.EditPhoneNumber(str);
  expect(logSpy).toHaveBeenCalledWith('+79600000000');
});

test('testing whether method able to correct wrong format to the right', () => {
  const str = '+86 000 000 0000';
  const logSpy = jest.spyOn(console, 'log');
  NumberChecker.EditPhoneNumber(str);
  expect(logSpy).toHaveBeenCalledWith('+860000000000');
});

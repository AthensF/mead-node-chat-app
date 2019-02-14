var expect = require('expect');

var {isRealString} = require('./validation');

describe('check isRealString', () => {

  it('return false if non-string values', () => {
    var text = 98
    expect(isRealString(text)).toBeFalsy();
  });

  it('return false if empty room name', () => {
  var text = "";
  expect(isRealString(text)).toBeFalsy();
  });

  it('return true for strings including whitespaces', () => {
    var text = "  LOTR"
    expect(isRealString(text)).toBeTruthy();
  });

});

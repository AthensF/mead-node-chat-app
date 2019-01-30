var expect = require('expect');
var {generateMessage} = require('./message')

describe('generateMessage', ()=> {
  it('should generate the correct mssage object', () => {
    var from = "Athens";
    var text = "Hello world";
    var message = generateMessage(from,text)
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text})
  });
});

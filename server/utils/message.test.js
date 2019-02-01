var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct mssage object', () => {
    var from = "Athens";
    var text = "Hello world";
    var message = generateMessage(from,text)
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text})
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location message', () => {
    var from = "Athens";
    var latitude = 1;
    var longitude = 1;
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from,url});
  });
});

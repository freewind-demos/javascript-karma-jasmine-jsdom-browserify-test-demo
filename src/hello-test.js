const JSDOM = require('jsdom').JSDOM;

describe('hello', function () {

  it('should get body text', function () {
    const document = new JSDOM('<!DOCTYPE html><html><body><div>Hello, JSDOM</div></body></html>').window.document;
    expect(hello(document)).toEqual('Hello, JSDOM');
  });

});

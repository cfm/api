const sdk = require('api')('https://example.com/openapi.json');

sdk.post('/anything', {foo: 'bar'}, {
  foo: ['bar', 'baz'],
  baz: 'abc',
  key: 'value',
  'bar-cookie': 'baz',
  'foo-cookie': 'bar',
  accept: 'application/json'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));

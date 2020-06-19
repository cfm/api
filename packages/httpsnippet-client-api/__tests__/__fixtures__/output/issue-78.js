const sdk = require('api')('https://example.com/openapi.json');

sdk.get('/store/order/1234/tracking/{trackingId}', {accept: 'application/xml'})
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });

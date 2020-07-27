const sdk = require('api')('https://example.com/openapi.json');
sdk.auth('a5a220e');

sdk.findPetsByStatus({status: 'available', accept: 'application/xml'})
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });
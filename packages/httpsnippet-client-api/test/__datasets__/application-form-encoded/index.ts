import type { SnippetMock } from '../../index.test';
import type { OASDocument } from 'oas/rmoas.types';

import definition from './openapi.json';

const mock: SnippetMock = {
  har: {
    bodySize: 0,
    cookies: [],
    headers: [
      {
        name: 'content-type',
        value: 'application/x-www-form-urlencoded',
      },
    ],
    headersSize: 0,
    httpVersion: 'HTTP/1.1',
    method: 'POST',
    postData: {
      mimeType: 'application/x-www-form-urlencoded',
      params: [
        {
          name: 'foo',
          value: 'bar',
        },
        {
          name: 'hello',
          value: 'world',
        },
      ],
    },
    queryString: [],
    url: 'http://httpbin.org/anything',
  },
  definition: definition as OASDocument,
};

export default mock;

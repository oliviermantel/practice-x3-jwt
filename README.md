# How to easily recover a token (JSON WEB Token)

## Install local repo
```bash
$ cd practice-x3-jwt
$ npm i 
```


## Test

```bash
$ npm run test 
```
### File test/get-token.data.json

```json
{	
    "clientId":"...",
    "secretOrPrivateKey":"...",
    "audience":"",
    "user":"..."
}
```

__"audience"__ is not mandatory. You can less empty

### File test/get-token.test.js
  
```js
import {getToken,Payload,Options } from '../src';

const config = require('./get-token.data.json')
const clientId=config.clientId
const secretOrPrivateKey=config.secretOrPrivateKey
const audience=config.audience
const user=config.user

const lifetime=600
const nowInSeconds = Math.floor(Date.now() / 1000) - 30;
const expInSeconds = nowInSeconds + (lifetime || 300);
const signAlgorithm = "HS256";

const payload:Payload  = {
  iss: clientId,
  sub: user,
  aud: audience || '',
  iat: nowInSeconds,
  exp: expInSeconds,
};

const options:Options = { algorithm: signAlgorithm}
describe('Get token works ?', () => {
  it('works', () => {
    const token=getToken(payload,secretOrPrivateKey,options)
    expect(token).toBeDefined();
  });
});
```
  
### Result in the console

```bash
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.711s
Ran all test suites.
```

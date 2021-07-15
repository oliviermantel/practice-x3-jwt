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
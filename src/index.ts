const jwt = require('jsonwebtoken');

export interface Payload {
  iss:string;
  sub:string;
  aud?:string;
  iat:number;
  exp:number;
}

export interface Options {
  algorithm:string;
}

export function getToken(payload:Payload,secretOrPrivateKey:string,options:Options) {
 return jwt.sign(payload, secretOrPrivateKey,options);
}

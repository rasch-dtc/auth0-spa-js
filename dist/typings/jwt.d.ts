export declare const decode: (
  token: string
) => {
  encoded: {
    header: string;
    payload: string;
    signature: string;
  };
  header: any;
  claims: IdToken;
  user: {};
};
export declare const verify: (
  options: JWTVerifyOptions
) => {
  encoded: {
    header: string;
    payload: string;
    signature: string;
  };
  header: any;
  claims: IdToken;
  user: {};
};

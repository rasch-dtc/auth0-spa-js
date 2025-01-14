export declare const getUniqueScopes: (...scopes: string[]) => any;
export declare const parseQueryResult: (
  queryString: string
) => AuthenticationResult;
export declare const runIframe: (
  authorizeUrl: string,
  eventOrigin: string
) => Promise<AuthenticationResult>;
export declare const openPopup: () => Window;
export declare const runPopup: (
  popup: any,
  authorizeUrl: string,
  config: PopupConfigOptions
) => Promise<AuthenticationResult>;
export declare const createRandomString: () => string;
export declare const encodeState: (state: string) => string;
export declare const decodeState: (state: string) => string;
export declare const createQueryParams: (params: any) => string;
export declare const sha256: (s: string) => PromiseLike<ArrayBuffer>;
export declare const urlDecodeB64: (input: string) => string;
export declare const bufferToBase64UrlEncoded: (input: any) => string;
export declare const oauthToken: ({
  baseUrl,
  ...options
}: OAuthTokenOptions) => Promise<any>;

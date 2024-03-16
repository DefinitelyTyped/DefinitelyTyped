declare module 'passport-wechat' {
    export interface Profile {
      id: string;
      username: string;
      displayName: string;
      photos: string[];
      provider: string;
    }
  
    export interface StrategyOptions {
      clientID: string;
      clientSecret: string;
      callbackURL: string;
      scope: string | string[];
    }
  
    export class Strategy {
      constructor(options: StrategyOptions, verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    }
  }

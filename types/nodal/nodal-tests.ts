import * as Nodal from 'nodal';

let BlogPost: typeof Nodal.Model;

class User extends Nodal.Model {
  public beforeSave (callback: (err?: Error) => void) {
    if (!this.hasErrors() && this.hasChanged('password')) {
        callback();
    } else {
      callback(new Error("Has errors"));
    }
  }

  public verifyPassword (unencrypted: string, callback: (model: Nodal.Model, err: Error, result: boolean) => void) {

  }
}

User.setDatabase(Nodal.require('db/main.js'));
User.setSchema(Nodal.my.Schema.models.User);

User.validates('username', 'must exist', v => v);
User.validates('password', 'must be at least 5 characters in length', v => v && v.length >= 5);

class BlogPostsController extends Nodal.Controller {
  index() {
    BlogPost.query()
      .join('user')
      .join('comments')
      .where(this.params.query)
      .end((err, blogPosts) => {
        this.respond(err || blogPosts);
      });
  }

  show() {
    BlogPost.find(this.params.route.id, (err, blogPost) => this.respond(err || blogPost));
  }

  create() {
    BlogPost.create(this.params.body, (err, blogPost) => this.respond(err || blogPost));
  }

  update() {
    BlogPost.update(this.params.route.id, this.params.body, (err, blogPost) => this.respond(err || blogPost));
  }

  destroy() {
    BlogPost.destroy(this.params.route.id, (err, blogPost) => this.respond(err || blogPost))
  }
}

type generateParam = string | number;

class AccessToken extends Nodal.Model {

  constructor(modelData: Object) {
    super(modelData);

  }

  public static generateAccessTokenString (...args: generateParam[]) {
    return "thing";
  }

  public static login (params: any, callback: Function) {
    if (params.body.grant_type !== 'password') {
      return callback(new Error('Must supply grant_type'));
    }

    User.query<User>()
      .where({username: params.body.username})
      .end((err, users) => {
        if (err || !users || !users.length) {
          return callback(new Error('User not found'));
        }

        const user = users[0];

        user.verifyPassword(params.body.password, (error, result) => {
          if (error || !result) {
            return callback(new Error('Invalid credentials'));
          }

          new AccessToken({
            user_id: user.get('id'),
            access_token: this.generateAccessTokenString(user.get('id'), user.get('email'), new Date().valueOf()),
            token_type: 'bearer',
            expires_at: (new Date(new Date().valueOf() + (30 * 24 * 60 * 60 * 1000))),
            ip_address: params.ip_address
          }).save(callback);
        });
      });
  }

  public static verify (params: any, callback: Function) {
    this.query()
      .join('user')
      .where({
        access_token: params.auth.access_token,
        expires_at__gte: new Date()
      })
      .end((err, accessTokens) => {
        if (err || !accessTokens || !accessTokens.length) {
          return callback(new Error('Your access token is invalid.'));
        }

        const accessToken = accessTokens[0];

        if (!accessToken.joined('user')) {
          return callback(new Error('Your access token belongs to an invalid user.'));
        }

        return callback(null, accessToken, accessToken.joined('user'));
      });
  }

  public static logout (params: any, callback: Function) {
    this.verify(params, (err: Error, accessToken: AccessToken) => {
      if (err) {
        return callback(err);
      }

      return accessToken.destroy(callback);
    });
  }

}

AccessToken.setDatabase(Nodal.require('db/main.js'));
AccessToken.setSchema(Nodal.my.Schema.models.AccessToken);

AccessToken.joinsTo(User, {multiple: true});

class AuthController extends Nodal.Controller {

  public authorize (callback: Function) {
    this.setHeader('Cache-Control', 'no-store');
    this.setHeader('Pragma', 'no-cache');

    AccessToken.verify(this.params, (err: Error, accessToken: string, user: User) => {
      if (err) {
        return this.respond(err);
      }

      callback(accessToken, user);
    });
  }

}

export default AuthController;



import * as low from "lowdb";
import * as lowfp from "lowdb/lib/fp";
import * as FileSync from "lowdb/adapters/FileSync";
import * as FileAsync from "lowdb/adapters/FileAsync";
import * as LocalStorage from "lowdb/adapters/LocalStorage";

const adapterSync: low.AdapterSync<{}> = new FileSync("db.json");
const adapterAsync: low.AdapterAsync<{}> = new FileAsync("db.json");
const db = low<DbSchema, typeof adapterSync>(adapterSync);

const write: DbSchema = db.defaults({ posts: [] }).write();

const result: Post[] = db
  .get("posts")
  .push({ title: "hello", views: 123 })
  .value();

const teste = db.get("user").value();
const post: Post | undefined = db
  .get("posts")
  .find({ id: 123 })
  .value();

// $ExpectError
const postAssertWithUndefined: Post = db
  .get("posts")
  .find({ id: 123 })
  .value();

// $ExpectError
const postAssertWithUndefined2: Post = db
  .get("posts")
  .find({ id: 123 })
  .write();

low<DbSchema, typeof adapterAsync>(adapterAsync).then(dbAsync => {
  const writeAction: Promise<Post> = dbAsync
    .get("posts")
    .push({ title: "async hello" })
    .last()
    .assign({ id: Date.now().toString() })
    .write();

  const test: Promise<Post | undefined> = dbAsync
    .get("posts")
    .find({})
    .write();

  const test2: Post | undefined = dbAsync
    .get("posts")
    .find({})
    .value();

  const tuple: Promise<[boolean, number] | undefined> = dbAsync
    .get("posts")
    .first()
    .get("tuple")
    .write();
});

async () => {
  const adapterSync: low.AdapterSync<ExampleSchema> = new FileSync("db.json", {
    defaultValue: {
      posts: [{ name: "baz" }]
    }
  });

  const adapterAsync: low.AdapterAsync<ExampleSchema> = new FileAsync(
    "db.json",
    {
      defaultValue: {
        posts: [{ name: "baz" }]
      }
    }
  );

  const dbSync = low(adapterSync);
  const dbAsync = await low(adapterAsync);
  const dbAssertTypeSync: low.Lowdb<ExampleSchema, typeof adapterSync> = dbSync;
  const dbAssertTypeAsync: low.Lowdb<
    ExampleSchema,
    typeof adapterAsync
  > = dbAsync;

  const xSync: ExampleSchema = dbSync
    .defaults({ posts: [{ name: "baz" }] })
    .write();

  const xAsync: Promise<ExampleSchema> = dbAsync
    .defaults({ posts: [{ name: "baz" }] })
    .write();

  const result: Promise<ExampleSchema["posts"]> = dbAsync
    .get("posts")
    .push({ name: "hello" })
    .write();

  const resultSync: ExampleSchema["posts"] = dbSync
    .get("posts")
    .push({ name: "hello" })
    .write();

  const dbPromise = low<OtherSchema, typeof adapterAsync>(adapterAsync);
  const db = await dbPromise;

  const nested: OtherSchema["nested"] = db.get("nested").value();

  const result2: Promise<OtherSchema["nested"]["x"]> = db
    .get("nested")
    .get("x")
    .write();
};

declare const lodashChain: _.LoDashExplicitWrapper<ExampleSchema>;

// let's also ensure we didn't break lodash.chain through extension
const weDidNotBreakLodash: ExampleSchema["posts"] = lodashChain
  .get("posts")
  .sortBy("")
  .value();

// tests for lowdb/lib/fp:
() => {
  const adapterLS = new LocalStorage<DbSchema>("test.json");
  const dbFP = lowfp(adapterLS);
  // Get posts
  const postsFP: low.FpReturn<Post[], low.AdapterSync<DbSchema>> = dbFP(
    "posts"
  );

  // replace posts with a new array resulting from concat
  // and persist database
  const write: Post[] = postsFP.write(
    concat({ title: "lowdb is awesome", views: random(0, 5) })
  );

  // Find post by id
  const post: Post = postsFP(find({ id: 1 }));

  // Find top 5 fives posts
  const popular: Post[] = postsFP([
    sortBy("views") as PostsAction,
    take(5) as PostsAction
  ]);

  const filtered: Post[] = dbFP("posts")(filter({ published: true }));
  const writeAction: Post[] = dbFP("posts").write(concat({ id: "123" }));
  const writeAction2: string = dbFP(["user", "name"]).write(set("typicode"));

  async () => {
    const adapterAsync = new FileAsync<DbSchema>("test.json");
    const dbAsyncPromise = lowfp(adapterAsync);
    const dbAsync = await dbAsyncPromise;
    const postsWithDefault: low.FpReturn<
      Post[],
      low.AdapterAsync<DbSchema>
    > = dbAsync("posts", [{ title: "baz" }] as Post[]);

    const func: Promise<Post[]> = postsWithDefault.write(post => [
      ...post,
      { title: "another" }
    ]);
  };

  type PostsAction = (posts: Post[]) => Post[];
};

declare function find<A, B extends A>(a: B): (arr: A[]) => A;
declare function filter<A, B extends A>(a: B): (arr: A[]) => A[];
declare function random(a: number, b: number): number;
declare function concat(a: any): <A>(arr: A) => A;
declare function sortBy(a: any): <A>(arr: A) => A;
declare function take<A>(a: A): <A>(arr: A) => A;
declare function set<A>(a: A): (val: A) => A;

interface DbSchema {
  posts: Array<Post>;
  user: {
    name: string;
  };
}

interface Post {
  title?: string;
  views?: number;
  id?: number;
  published?: boolean | undefined;
  tuple?: [boolean, number];
}

interface ExampleSchema {
  posts: Array<{
    name: string;
  }>;
}

interface OtherSchema extends ExampleSchema {
  nested: {
    x: {
      y: number;
    };
  };
}

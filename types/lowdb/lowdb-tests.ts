import * as low from "lowdb";
import * as lowfp from "lowdb/lib/fp";
import * as Base from "lowdb/adapters/Base";
import * as FileSync from "lowdb/adapters/FileSync";
import * as FileAsync from "lowdb/adapters/FileAsync";
import * as LocalStorage from "lowdb/adapters/LocalStorage";
import { find, filter, random, concat, sortBy, take, set } from "lodash/fp";

const adapterSync = new FileSync<DbSchema>("db.json");
const adapterAsync = new FileAsync<DbSchema>("db.json");
const db = low(adapterSync);

const write: DbSchema = db.defaults({ posts: [] }).write();

const result: ArrayLike<Post> = db
  .get("posts")
  .push({ title: "hello", views: 123 })
  .value();

// $ExpectType Post
db.get("posts")
  .find({ id: 123 })
  .value();
// $ExpectType Post & Promise<Post>
db.get("posts")
  .find({ id: 123 })
  .write();

low(adapterAsync).then(dbAsync => {
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

  const tuple: ArrayLike<boolean | number> & Promise<ArrayLike<boolean | number>> = dbAsync
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
  // $ExpectType LowdbSync<ExampleSchema>
  dbSync;
  // $ExpectType LowdbAsync<ExampleSchema>
  dbAsync;

  const xSync: ExampleSchema = dbSync
    .defaults({ posts: [{ name: "baz" }] })
    .write();

  const xAsync: Promise<ExampleSchema> = dbAsync
    .defaults({ posts: [{ name: "baz" }] })
    .write();

  const result: ArrayLike<{ name: string }> & Promise<ArrayLike<{ name: string }>> = dbAsync
    .get("posts")
    .push({ name: "hello" })
    .write();

  const resultSync: ArrayLike<{ name: string }> & Promise<ArrayLike<{ name: string }>> = dbSync
    .get("posts")
    .push({ name: "hello" })
    .write();

  const otherAdapterAsync = new FileAsync<OtherSchema>("db.json");

  const dbPromise = low(otherAdapterAsync);
  const db = await dbPromise;

  const nested: OtherSchema["nested"] = db.get("nested").value();

  const result2: Promise<OtherSchema["nested"]["x"]> = db
    .get("nested")
    .get("x")
    .write();
};

declare const lodashChain: _.ObjectChain<ExampleSchema>;

// let's also ensure we didn't break lodash.chain through extension
const weDidNotBreakLodash: ArrayLike<{ name: string }> = lodashChain
  .get("posts")
  .sortBy("")
  .value();

// tests for lowdb/lib/fp:
() => {
  const adapterLS = new LocalStorage<DbSchema>("test.json");
  const dbFP = lowfp(adapterLS);
  // Get posts
  const postsFP = dbFP("posts");

  // replace posts with a new array resulting from concat
  // and persist database
  const write: Post[] = postsFP.write(
    concat<Post>({ title: "lowdb is awesome", views: random(0, 5) })
  );

  // Find post by id
  const post: Post | undefined = postsFP(find<Post>({ id: 1 }));

  // Find top 5 fives posts
  const popular: Post[] = postsFP([
    sortBy<Post>("views") as PostsAction,
    take(5) as PostsAction
  ]);

  const filtered: Post[] = dbFP("posts")(filter<Post>({ published: true }));
  const writeAction: Post[] = dbFP("posts").write(concat<Post>({ id: 123 }));
  const writeAction2: string = dbFP(["user", "name"]).write(() => "typicode");

  async () => {
    const adapterAsync = new FileAsync<DbSchema>("test.json");
    const dbAsyncPromise = lowfp(adapterAsync);
    const dbAsync = await dbAsyncPromise;
    const postsWithDefault = dbAsync("posts", [{ title: "baz" }] as Post[]);

    const func: Promise<Post[]> = postsWithDefault.write(post => [
      ...post,
      { title: "another" }
    ]);
  };

  type PostsAction = (posts: Post[]) => Post[];
};

interface DbSchema {
  posts: Post[];
  user: {
    name: string;
  };
}

interface Post {
  title?: string;
  views?: number;
  id?: number;
  published?: boolean;
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

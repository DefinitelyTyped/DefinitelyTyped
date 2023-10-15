import parser = require("git-diff-parser");

const input = `commit cd4a4e2db47f9642cf322fe109b5bfb3f6eb23c7 (HEAD -> master, origin/master, origin/HEAD)
Author: John Doe <johndoe@google.com>
Date:   Thu Apr 1 23:59:59 2020 -0100

    Just a typical commit message

diff --git a/types/pkg/index.d.ts b/types/pkg/index.d.ts
index 60bb057b92..5c25c419d1 100644
--- a/types/pkg/index.d.ts
+++ b/types/pkg/index.d.ts
@@ -3,3 +3,3 @@ declare namespace A {
          */
-        aaa
+        bbb
         /**`;

parser(input); // $ExpectType Result

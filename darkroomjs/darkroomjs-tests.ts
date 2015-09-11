+/// <reference path="./darkroomjs.d.ts" />
+// test from https://github.com/MattKetmo/darkroomjs
+new Darkroom('#target', {
+    // Canvas initialization size
+    minWidth: 100,
+    minHeight: 100,
+    maxWidth: 500,
+    maxHeight: 500,
+
+    // Plugins options
+    plugins: {
+        crop: {
+            minHeight: 50,
+            minWidth: 50,
+            ratio: 1
+        },
+        save: false // disable plugin
+    },
+    // Post initialization method
+    initialize: function() {
+        // Active crop selection
+        this.plugins['crop'].requireFocus();
+
+        // Add custom listener
+        this.addEventListener('core:transformation', function() { /* ... */ });
+    }
+});

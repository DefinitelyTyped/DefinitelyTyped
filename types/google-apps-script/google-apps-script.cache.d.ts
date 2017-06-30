// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Cache {
    /**
     * A reference to a particular cache.
     *
     *  This class allows you to insert, retrieve, and remove items from a cache. This can be
     *  particularly useful when you want frequent access to an expensive or slow resource. For
     *  example, say you have an RSS feed at example.com that takes 20 seconds to fetch, but you want
     *  to speed up access on an average request.
     *
     *      function getRssFeed() {
     *        var cache = CacheService.getScriptCache();
     *        var cached = cache.get("rss-feed-contents");
     *        if (cached != null) {
     *          return cached;
     *        }
     *        var result = UrlFetchApp.fetch("http://example.com/my-slow-rss-feed.xml"); // takes 20 seconds
     *        var contents = result.getContentText();
     *        cache.put("rss-feed-contents", contents, 1500); // cache for 25 minutes
     *        return contents;
     *      }
     */
    export interface Cache {
      get(key: string): string;
      getAll(keys: String[]): Object;
      put(key: string, value: string): void;
      put(key: string, value: string, expirationInSeconds: Integer): void;
      putAll(values: Object): void;
      putAll(values: Object, expirationInSeconds: Integer): void;
      remove(key: string): void;
      removeAll(keys: String[]): void;
    }

    /**
     * CacheService allows you to access a cache for short term storage of data.
     *
     *  This class lets you get a specific cache instance. Public caches are for things that are not
     *  dependent on which user is accessing your script. Private caches are for things which are
     *  user-specific, like settings or recent activity.
     */
    export interface CacheService {
      getDocumentCache(): Cache;
      getScriptCache(): Cache;
      getUserCache(): Cache;
    }

  }
}

declare var CacheService: GoogleAppsScript.Cache.CacheService;

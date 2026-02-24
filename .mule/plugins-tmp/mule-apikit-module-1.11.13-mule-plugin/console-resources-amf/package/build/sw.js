/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api-console-10cc3562.js",
    "revision": "1bebb767542992065a4a7b26a0231342"
  },
  {
    "url": "index.html",
    "revision": "ee77befb7537a981cc0908617fdf5779"
  },
  {
    "url": "legacy/api-console-dbd67cc9.js",
    "revision": "2965d0b46dd1ee59534eb241d0ebf0a9"
  },
  {
    "url": "polyfills/core-js.9c2b3ec09627a6214771964b087f6447.js",
    "revision": "9c2b3ec09627a6214771964b087f6447"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.cff507bc95ad1d6bf1a415cc9c8852b0.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.08b86a7f56c6f0d65265654299b16d74.js",
    "revision": "08b86a7f56c6f0d65265654299b16d74"
  },
  {
    "url": "polyfills/fetch.0e67b62a23f4e9bd88d6d0485c24e420.js",
    "revision": "0e67b62a23f4e9bd88d6d0485c24e420"
  },
  {
    "url": "polyfills/regenerator-runtime.6d5da0232f4ab85670e271f840b48b03.js",
    "revision": "6d5da0232f4ab85670e271f840b48b03"
  },
  {
    "url": "polyfills/systemjs.7f2f505ec63ab981209af53ce7f0f503.js",
    "revision": "7f2f505ec63ab981209af53ce7f0f503"
  },
  {
    "url": "polyfills/webcomponents.d43d14353b5efb829a6185511b3e4dbf.js",
    "revision": "d43d14353b5efb829a6185511b3e4dbf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));

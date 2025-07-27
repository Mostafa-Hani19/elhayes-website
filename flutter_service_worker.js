'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f727e8b61ae9e565868ebea3da3ecaee",
"assets/AssetManifest.bin.json": "6e561253ce976c5a5b9077eeeaa6ff84",
"assets/AssetManifest.json": "c9cffdbb19f9cbb3b293193782a8fc85",
"assets/assets/Fonts/BadeenDisplay-Regular.ttf": "898fac8bdae1d5669860d6b02cebd8b3",
"assets/assets/Fonts/Beiruti-Black.ttf": "d64438acd0e1913eba794c74950f8f88",
"assets/assets/Fonts/Beiruti-Bold.ttf": "6bbd9d6b9545ecf8243aa595794f4b9a",
"assets/assets/Fonts/Beiruti-ExtraBold.ttf": "cf50cd19b9b532279cd96001a6b19360",
"assets/assets/Fonts/Beiruti-ExtraLight.ttf": "8b422e6cddb47fb4c982b52948270cfd",
"assets/assets/Fonts/Beiruti-Light.ttf": "1555c02dc79f60fb20bdce0b4c1ba2ac",
"assets/assets/Fonts/Beiruti-Medium.ttf": "92c706130f3533c073a9cc6f7e367937",
"assets/assets/Fonts/Beiruti-Regular.ttf": "5ef8f9d56473b491effcdc31c3fdc827",
"assets/assets/Fonts/Beiruti-SemiBold.ttf": "c79b96e6b01665af7ceeae9840f54981",
"assets/assets/Fonts/Beiruti-VariableFont_wght.ttf": "fdd0bfd5628f2cc2b6ccaed13f087fa6",
"assets/assets/Fonts/Cairo-Black.ttf": "d1956a3e1901ba6a5b927f5b6d35fe79",
"assets/assets/Fonts/Cairo-Bold.ttf": "2bbe2088a8d666fa99b80554fdc6effd",
"assets/assets/Fonts/Cairo-ExtraBold.ttf": "6469ba6c1b59b4f2b07e49f516ccf664",
"assets/assets/Fonts/Cairo-ExtraLight.ttf": "b95de133534ef622c7594cd0c94dfc25",
"assets/assets/Fonts/Cairo-Light.ttf": "fa2b785b431fa365329cfbf3955f1b88",
"assets/assets/Fonts/Cairo-Medium.ttf": "cbf0e8f4625a63746797ef8709167c44",
"assets/assets/Fonts/Cairo-Regular.ttf": "45aaa2b5f9de1d61c2d3fe1f40107ac8",
"assets/assets/Fonts/Cairo-SemiBold.ttf": "d24823f3136e983e632a2d8e11c822b4",
"assets/assets/Fonts/Cairo-VariableFont_slnt,wght.ttf": "9237f07e0de7f3d83c38ad0967f0f486",
"assets/assets/Fonts/DMSans-Italic-VariableFont_opsz,wght.ttf": "01b16af808a5a72f75b2abbe9c74b6e4",
"assets/assets/Fonts/DMSans-VariableFont_opsz,wght.ttf": "30bbfaf1881a04a75d232352a268303f",
"assets/assets/Fonts/Oxanium-Bold.ttf": "3f01934ea0564f4a7aa2acf521d1e836",
"assets/assets/Fonts/Oxanium-ExtraBold.ttf": "3aba47f994e81bf89cc1b9f0215c0e71",
"assets/assets/Fonts/Oxanium-ExtraLight.ttf": "a7736b9e325749f792fc10b7ea13ef83",
"assets/assets/Fonts/Oxanium-Light.ttf": "9266abf373fe7caf85e65dc21ec863a2",
"assets/assets/Fonts/Oxanium-Medium.ttf": "835ad6e10f1cc9272ad46ecbd81fc4c4",
"assets/assets/Fonts/Oxanium-Regular.ttf": "6cb9e5781a09f2adb36a26666e6157da",
"assets/assets/Fonts/Oxanium-SemiBold.ttf": "c09967a05931edd4f5310ae4c4143733",
"assets/assets/images/1.png": "33805e63cfde3b8face017081f9a8399",
"assets/assets/images/2.png": "08571cb4dbc64cf690b8ef2a734cca3a",
"assets/assets/images/icon/app_icon.png": "e88cfe333ae7b60ed69cf9f6c73e1a80",
"assets/assets/images/icon/app_icon2.png": "af4af0ef87793178e03cf5fe506cae9a",
"assets/FontManifest.json": "38db7cef506101511c04a4b3e37db6e6",
"assets/fonts/MaterialIcons-Regular.otf": "c71b62018916e3a9d9c6e789882b9c87",
"assets/NOTICES": "6957fec87915e9701868cf84b1aba495",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2e40db261a69318a83b4a190b236cedb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "092c2962727aa096ceb8a9634f2e6350",
"/": "092c2962727aa096ceb8a9634f2e6350",
"main.dart.js": "2baf6495fa5ffdbf97674ed91e8d52bd",
"manifest.json": "63901d128da153d8e8d6e1d74a5e1060",
"version.json": "2ac012e78873b4b9e1879d8c53d9998b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

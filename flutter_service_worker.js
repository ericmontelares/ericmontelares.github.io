'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9c68acfae20d5c07779f47f8084a6ec4",
"assets/AssetManifest.bin.json": "2d7170bb0d218e5b6fd895f639e2c3fe",
"assets/AssetManifest.json": "340087ccbbf94f7a90f958b95cd9611c",
"assets/assets/images/coins_2.png": "4a909244c26f4daae475604c3ebf3a66",
"assets/assets/images/coins_3.png": "ae07c31f786442081221e241a58ec8f9",
"assets/assets/images/coins_4.png": "8cf6ab27bf8cccb44a0938efbdebe677",
"assets/assets/images/coins_logo.png": "6bf973da698a1439f19c874a29715ee8",
"assets/assets/images/crypto1.png": "78cdbe0930056d99a56f5e0c18406567",
"assets/assets/images/crypto2.png": "c204fecdac27ae0af9ad33e77d0aa5bf",
"assets/assets/images/crypto3.png": "44f2a6f6a311bf1bcc91dfdb2350d7f4",
"assets/assets/images/crypto4.png": "0cddd4950f92aa92bc6fffba5ba3f867",
"assets/assets/images/crypto5.png": "55e702b3ced0fad4a74ca5fa9fe64549",
"assets/assets/images/food_1.jpg": "71faa9c7d0a0c989b8908d32ba718d55",
"assets/assets/images/food_2.jpg": "5e7369ca722f620488b3a12df449707f",
"assets/assets/images/food_3.png": "ad39a6d96b0dbb6361bdcf1ce9311d1b",
"assets/assets/images/food_logo.png": "5dfbb5beea08c64a3a4d5407db2d0bb3",
"assets/assets/images/gupy_1.png": "f6b6d7e19463c23f6a875f2ac32002dc",
"assets/assets/images/gupy_2.png": "18af8bece7541d4d06e60d1a0cf2ae4a",
"assets/assets/images/gupy_logo.jpeg": "4599363c7fc99bfe857e7c769feafbab",
"assets/assets/images/gupy_logo.png": "b268b48800ee595ec8096a7f70edabd8",
"assets/assets/images/inove_1.jpeg": "747efc67cfb1983774a1f2d70c8718cc",
"assets/assets/images/inove_2.jpg": "59ac112803e548a28f194899c9a5d952",
"assets/assets/images/inove_3.jpg": "43445981e95e24825600f543121cda46",
"assets/assets/images/inove_pay.png": "9212b0975ef3ad5b3704db3079d56275",
"assets/assets/images/maischat1.png": "6a6b5c6ed87754bcb45488c32a93e3cd",
"assets/assets/images/maischat2.png": "d4980b66b9317c1c82a512fd8eb06213",
"assets/assets/images/maischat3.png": "2104bab2315629940ec72a6035fe1fde",
"assets/assets/images/maischat_logo.jpg": "fed71f23595d1fafebf5dc2f9343639b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "df52c0acc5f2b3e085692e2f4f401984",
"assets/NOTICES": "89b59abed96d42e7b4af2e5c97c329e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "802d5a066b3dc875b8e5b9fc8435aa41",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cce7a0680859f1f0cd3a2cee878fdee3",
"/": "cce7a0680859f1f0cd3a2cee878fdee3",
"main.dart.js": "a4c25ff49a42ed3a1418323209eb2387",
"main.dart.mjs": "745b017b30998a5c3cb47b0cf48f228d",
"main.dart.wasm": "2e335715552406b91bc9213b6716e2a3",
"manifest.json": "08898e71f52d077b19dd09aad693e2f4",
"version.json": "4533b231d04206980158403c6dc8f852"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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

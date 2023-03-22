'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d4f91682f6d076df0ef3a8e305580926",
"assets/assets/data/0.html": "8cae2064fc75a3ba280a68a9565267b2",
"assets/assets/data/1.html": "e56df01b6e6ab88424c3cb6a5ad5400a",
"assets/assets/data/10.html": "798793476d5e3087d7b3c71f272bfe80",
"assets/assets/data/11.html": "68aea0c84f01c8ef3e28e0882f09ea9e",
"assets/assets/data/12.html": "6f1366ebc7fd928caafab4b310aff229",
"assets/assets/data/13.html": "953db86e22cf0c2c81176df094a89e47",
"assets/assets/data/14.html": "1c80c415ec0228e4312c4b689502b513",
"assets/assets/data/15.html": "0786d6603e84b5f42ff086aab90e859a",
"assets/assets/data/16.html": "3c7185d41fde1cbb2f85880c5e983b8a",
"assets/assets/data/17.html": "66b2b1cdf932142c33b8995cc43a9681",
"assets/assets/data/18.html": "cc7ccb1a2ff69799a497e5795f250e9c",
"assets/assets/data/19.html": "bd6729840328a371cb88ba22d879ef83",
"assets/assets/data/2.html": "51b6de61cf074a89c753ecf38f4933e1",
"assets/assets/data/20.html": "9d2a6cffab444b83994149145ffc8532",
"assets/assets/data/21.html": "c9f32799ae19f11048744ecd50057ee2",
"assets/assets/data/22.html": "4414da3a5da58ea5398b6f71a5033969",
"assets/assets/data/23.html": "7037315e7ac7ecbc19dc0205a510409c",
"assets/assets/data/24.html": "681b35ff7e79a6e4c4298185eb08b0e7",
"assets/assets/data/25.html": "1fa58ed1a92f8a24a155d401a5d2eb6f",
"assets/assets/data/26.html": "32db32d46ecc9ceeaa016c8abf8eefe4",
"assets/assets/data/27.html": "cb0019fda9ff14d9efa76e0279983688",
"assets/assets/data/28.html": "88c4508723db14a5196bca3d2dccf54a",
"assets/assets/data/29.html": "6b2bdbb8baea7f260458029c0bb63db0",
"assets/assets/data/3.html": "01e49fcd19f7bf2b3a813dff986898b7",
"assets/assets/data/30.html": "aa217264357a3899458ef551bd440676",
"assets/assets/data/31.html": "b558ca4fb41fcbb80a81502354d270c9",
"assets/assets/data/4.html": "9030401cb76f5838a6daef57b1ee5cbc",
"assets/assets/data/5.html": "447726c402563a716527935e475db052",
"assets/assets/data/6.html": "3435f448186f211f128704fd8b49a2e5",
"assets/assets/data/7.html": "50c7938a3845fa48f60f4d20f32696db",
"assets/assets/data/8.html": "3c7eaf7b8809e914f6ca5b2ed68c7bd5",
"assets/assets/data/9.html": "591576fb9fb8d7e37a61f7602368333e",
"assets/assets/data2/0.html": "f0277b2454d864c7cb68f5f22e385095",
"assets/assets/data2/1.html": "72749dc4090542c0f6c2e30eae124ec9",
"assets/assets/data2/10.html": "cf39a0c63fcc79b0c6da1dee3153481a",
"assets/assets/data2/11.html": "3473e4d1dcc5cffbf2dc2c92b9fad363",
"assets/assets/data2/12.html": "db666d0e848437c1e7d817e9f3eade78",
"assets/assets/data2/13.html": "ba3281f6951eaf8fe301a40debe5d6d8",
"assets/assets/data2/14.html": "0d1b55bea774ce6c2164c9dd3b8739cb",
"assets/assets/data2/15.html": "506279e8b2746236c41ecaf952216d29",
"assets/assets/data2/16.html": "62fd7a02766540e6d061cf5cb31c338f",
"assets/assets/data2/17.html": "1743741f7787e53105254936d734b448",
"assets/assets/data2/18.html": "55823fa4a54b2bfca688d33328fcb82d",
"assets/assets/data2/19.html": "6bc583ceed88452dc389a227bdfeb938",
"assets/assets/data2/2.html": "9e11bc5396722608e5aca860064dc7ce",
"assets/assets/data2/20.html": "61b3ed4e7afd1e2140bcf992e5b90a6f",
"assets/assets/data2/21.html": "bbffcda68e789aa05efe55308eecd32b",
"assets/assets/data2/22.html": "e5bff81dd59e43803f0875cf5b387ea0",
"assets/assets/data2/23.html": "eefe1fad8b41a84549c0d151a2b04a36",
"assets/assets/data2/24.html": "2f948e56ceef68ec5f98cb3a4b0c3d34",
"assets/assets/data2/25.html": "9087d7c2ffde794ec435be69d1d7c8ef",
"assets/assets/data2/26.html": "8ef893f92db690add60d09308bd16833",
"assets/assets/data2/27.html": "598b6e23f3ab0924dee2fe036e0300f5",
"assets/assets/data2/28.html": "ac465d60519780e4683082dd2f45a820",
"assets/assets/data2/29.html": "40dea9ae6a91271e6f3122ca16e17762",
"assets/assets/data2/3.html": "c9fbad7c2aae95c0b0a3d63293fa5da2",
"assets/assets/data2/30.html": "6e26e78682193073de50f2207caa3f79",
"assets/assets/data2/4.html": "a009d498729adacc2c6b2a2d7dd2b66f",
"assets/assets/data2/5.html": "56af9fd18b916ee421f1d6f51604116f",
"assets/assets/data2/6.html": "d2632b2376d4d46827e88a0300cc7629",
"assets/assets/data2/7.html": "4c2f04bb0b2b1ad69209a49fa3a7bced",
"assets/assets/data2/8.html": "ded7593801f71faf828a3223a8831652",
"assets/assets/data2/9.html": "36d1ad19176a4d25b7c2aa5eec51d428",
"assets/assets/fonts/miui.ttf": "2d37b3f0dc5b3d9553fbd8f555aa06a5",
"assets/assets/fonts/pds.ttf": "a98b080aadcb30875d016791ad44c0ea",
"assets/assets/fonts/smm.ttf": "d0195fc48a878ee39c1bb9d1c3f0f519",
"assets/assets/fonts/tl.ttf": "913129833d5b24e778511c3d3ca87837",
"assets/FontManifest.json": "e9664ac05f5045e6f44de64f52028526",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ba2daa00d193ad2445ceb8ddcd879231",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e644bc355b753c84f108db4fbf9fd0df",
"/": "e644bc355b753c84f108db4fbf9fd0df",
"main.dart.js": "69eb39f1e908b93194c122876dd3907b",
"manifest.json": "e73b62456fb2bada67095e229bfb8145",
"version.json": "2be36495a4b9995bb4409fa5b9a34047"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

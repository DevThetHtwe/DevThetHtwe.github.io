'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5fb00cbbb3adc5825d6695502058054c",
"assets/assets/fonts/mm.ttf": "99f615c6915ec7c578d70d720caa3b26",
"assets/assets/fonts/mm_bold.ttf": "67ffa5ab55c8eb0fdde4961aaabf2e03",
"assets/assets/imgs/01.jpg": "cb482f4310d802324783f2a5bf2036c4",
"assets/assets/imgs/02.jpg": "168c9ad33619ae1e2d2ba9a19339c8db",
"assets/assets/imgs/03.jpg": "becf68e875f8beb16a9a2bfa4cd4337c",
"assets/assets/imgs/loading.gif": "8161237abdbb5a9334b5d4724483808f",
"assets/assets/imgs/tarot/icon/icon.jpg": "8a5df0ea909e5b78aaa73b003aaf1d3e",
"assets/assets/imgs/tarot/images/0.jpg": "09bcef9ae24fb19f1448832d9e49c030",
"assets/assets/imgs/tarot/images/1.jpg": "2303bec96d93e6f9f492311f22812577",
"assets/assets/imgs/tarot/images/10.jpg": "f9c9aad643d5b6440d92a6907a7b8d55",
"assets/assets/imgs/tarot/images/11.jpg": "648b67fdbdedd207267a3abd730f6274",
"assets/assets/imgs/tarot/images/12.jpg": "2c608f9411ee653bc373c1cfa59fbb39",
"assets/assets/imgs/tarot/images/13.jpg": "ca605399936c1672b39da1d1001a8f6b",
"assets/assets/imgs/tarot/images/14.jpg": "71c46665fe246a4c7344184ad79c1050",
"assets/assets/imgs/tarot/images/15.jpg": "ac1f51208b6a6751f0c553c64aa9f24b",
"assets/assets/imgs/tarot/images/16.jpg": "8f2f2635517b2be5e8c7e469530abad4",
"assets/assets/imgs/tarot/images/17.jpg": "e80ef3597b07f23721df69bce52e5e06",
"assets/assets/imgs/tarot/images/18.jpg": "8bb72cdebc14a3be823f06706a4b718c",
"assets/assets/imgs/tarot/images/19.jpg": "7d84c51dbbfae4e69c61d578d236bf51",
"assets/assets/imgs/tarot/images/2.jpg": "81e0ce0e9b52077293abd8660e49c6d7",
"assets/assets/imgs/tarot/images/20.jpg": "f7fb8421a2892f2a00ab7b222fbe3987",
"assets/assets/imgs/tarot/images/21.jpg": "d2f7d56f7016d474338706c09e486fe4",
"assets/assets/imgs/tarot/images/22.jpg": "ca95e1968cffa0887aeba376efdbd88f",
"assets/assets/imgs/tarot/images/23.jpg": "9196e4964f60c237ac14fbfc4a7f5e27",
"assets/assets/imgs/tarot/images/24.jpg": "372dac83bbf376a570272b58a63c0dd0",
"assets/assets/imgs/tarot/images/25.jpg": "be21c29934bb7fc93ccb5343d44f2a06",
"assets/assets/imgs/tarot/images/26.jpg": "fc545e936fcbe00c5ce46483a0616e7e",
"assets/assets/imgs/tarot/images/27.jpg": "e6cdaeedd046b882162f063012694019",
"assets/assets/imgs/tarot/images/28.jpg": "dc1782ddc40686e682b033d068e89dcb",
"assets/assets/imgs/tarot/images/29.jpg": "34fe3d3fece0a48d857606d21aaffa77",
"assets/assets/imgs/tarot/images/3.jpg": "0b5622cf3c8d4c9d1ab3f679def62735",
"assets/assets/imgs/tarot/images/30.jpg": "5cefcfd37bca80f71dd9679c8432c6c3",
"assets/assets/imgs/tarot/images/31.jpg": "93684db341f8a917e28dbd0217b2c14e",
"assets/assets/imgs/tarot/images/32.jpg": "d5d363c7efc3e930e5abe58479e820c1",
"assets/assets/imgs/tarot/images/33.jpg": "7995fda27487958f9a75bc71ae2702bc",
"assets/assets/imgs/tarot/images/34.jpg": "b0c8df90e1393d03f63d47ed909cda79",
"assets/assets/imgs/tarot/images/35.jpg": "0b8a03127b892ec21dbaa2f09f274eb8",
"assets/assets/imgs/tarot/images/36.jpg": "bdb8fae0d5c68fd320105c17104a4f6e",
"assets/assets/imgs/tarot/images/37.jpg": "b131e34eb14d724fb6b3d9e5831c539b",
"assets/assets/imgs/tarot/images/38.jpg": "00a5a01c5bd0e55a61dc71a5b8015707",
"assets/assets/imgs/tarot/images/39.jpg": "2e1400246e88f90d97a94166047a2de2",
"assets/assets/imgs/tarot/images/4.jpg": "510c93f353f66ea8d9bb9419afc48b2b",
"assets/assets/imgs/tarot/images/40.jpg": "4a9f741f1d15939256c999e56ec8d06c",
"assets/assets/imgs/tarot/images/41.jpg": "795b0ffdca235bd258b49ac6f694c946",
"assets/assets/imgs/tarot/images/42.jpg": "05bcfadbcbf686d4268253a0e58a0b3d",
"assets/assets/imgs/tarot/images/43.jpg": "ba6a881de7aaef469ef1d25aa1bd39ae",
"assets/assets/imgs/tarot/images/44.jpg": "e42c8c04fafac64fec3e1a54d590b2a0",
"assets/assets/imgs/tarot/images/45.jpg": "aaa93f917dd8277104e783718fcf109e",
"assets/assets/imgs/tarot/images/46.jpg": "dceea3c8bfa7167534f9e8f14ac3841c",
"assets/assets/imgs/tarot/images/47.jpg": "4bbb85d80498418211327a61cb1419a7",
"assets/assets/imgs/tarot/images/48.jpg": "73f309ea451caf5b7e0970c77fa4db0f",
"assets/assets/imgs/tarot/images/49.jpg": "c33d11f77414b9a22b3a6e6df8b10713",
"assets/assets/imgs/tarot/images/5.jpg": "5034f853428a7e33ed68b3d06d526679",
"assets/assets/imgs/tarot/images/50.jpg": "5788637bb269dbba9221e0e0349f8baf",
"assets/assets/imgs/tarot/images/51.jpg": "fddadfb58b2336debb3aa04e2ae038ec",
"assets/assets/imgs/tarot/images/52.jpg": "55494f2b46e9c148802ad7c6dd8be8ef",
"assets/assets/imgs/tarot/images/53.jpg": "93fe3525249fa21a725edeedbf8bf09c",
"assets/assets/imgs/tarot/images/54.jpg": "9909b07403aeb4f56f18fa193ff49d3a",
"assets/assets/imgs/tarot/images/55.jpg": "dabe38b14284b671313fc3310fcb4329",
"assets/assets/imgs/tarot/images/56.jpg": "2d951bbd175e1e4da7806c6c57c39eb7",
"assets/assets/imgs/tarot/images/57.jpg": "a788787d39b3c66b56a806b2992fd441",
"assets/assets/imgs/tarot/images/58.jpg": "d6726eb3e08125261e4467d45687554b",
"assets/assets/imgs/tarot/images/59.jpg": "465f1b867c073e5fc5438a187cfc21f8",
"assets/assets/imgs/tarot/images/6.jpg": "5b9762d9f79c6c0b051c4b2b9f459c9b",
"assets/assets/imgs/tarot/images/60.jpg": "8585028b5ff3a406428b059c62eccf7f",
"assets/assets/imgs/tarot/images/61.jpg": "8f007e4d782b6b69141bdaded2caa78a",
"assets/assets/imgs/tarot/images/62.jpg": "806846b1acf8b7895c01744e82def1ff",
"assets/assets/imgs/tarot/images/63.jpg": "91eb440b2482aa97a25a33e6df919e80",
"assets/assets/imgs/tarot/images/64.jpg": "137335e990088b0a6972b027ff41f45d",
"assets/assets/imgs/tarot/images/65.jpg": "9aba8b3149635299f0f5754e4aa203f8",
"assets/assets/imgs/tarot/images/66.jpg": "1b36f48573ccbfa6fc3d6cd2e014037c",
"assets/assets/imgs/tarot/images/67.jpg": "0218d7b79f76537d54ffef790538e033",
"assets/assets/imgs/tarot/images/68.jpg": "2e74a243cf90819beacc4a476300e47f",
"assets/assets/imgs/tarot/images/69.jpg": "d7a27551afceadcfc525e54e6be516a4",
"assets/assets/imgs/tarot/images/7.jpg": "ed6a9c8f71612c76b52aa9e898a6ec7c",
"assets/assets/imgs/tarot/images/70.jpg": "c5e79188371a39f2a63ffef6cd05425f",
"assets/assets/imgs/tarot/images/71.jpg": "a548eacd01e3f80a46a6d43554bb5cec",
"assets/assets/imgs/tarot/images/72.jpg": "edf349569a3ad85b3606092b549f3182",
"assets/assets/imgs/tarot/images/73.jpg": "4fb01a0e94851a88275fedc76f1cb9c6",
"assets/assets/imgs/tarot/images/74.jpg": "6c271cd05a609f1b6dc983e33b72064d",
"assets/assets/imgs/tarot/images/75.jpg": "4112467ab46f5bd968fd1f88be0bebf8",
"assets/assets/imgs/tarot/images/76.jpg": "780ddaa7140a336182218bcfa99fcf33",
"assets/assets/imgs/tarot/images/77.jpg": "9ef01559a1bf154062538312ad65e575",
"assets/assets/imgs/tarot/images/8.jpg": "be5734b42460517a61b246ea0cb6fd5d",
"assets/assets/imgs/tarot/images/9.jpg": "288982aef734f021867e4afcf185f5c1",
"assets/assets/imgs/tarot/spreads/arcana.jpg": "cdc3f8fb5d0479d42d7f59462412048f",
"assets/assets/imgs/tarot/spreads/cups.jpg": "0538c16f943ed37d9b5d242b8e99860d",
"assets/assets/imgs/tarot/spreads/goddess.jpg": "f0d13358470b620c286e27621c5cdfcd",
"assets/assets/imgs/tarot/spreads/oracle.jpg": "4a54c2246a74d5475c0e20c5d5c9d9db",
"assets/assets/imgs/tarot/spreads/pentacles.jpg": "7a93b0736bf94ad839225199d8926589",
"assets/assets/imgs/tarot/spreads/spread0.jpg": "8f197f6bb1bf7a5212ca72867d7a3b77",
"assets/assets/imgs/tarot/spreads/spread1.jpg": "55f93bcb8f7669dd048dc29c6709199e",
"assets/assets/imgs/tarot/spreads/spread10.jpg": "dc8dce393354b311082ba43e0004dd70",
"assets/assets/imgs/tarot/spreads/spread11.jpg": "6ae31d0371ab84af2d90ea425ccb8106",
"assets/assets/imgs/tarot/spreads/spread12.jpg": "a1b283cfd1ed2ceea77942ef9ad7fe76",
"assets/assets/imgs/tarot/spreads/spread13.jpg": "b21055c2e94b334ea7762fa8d256b5f6",
"assets/assets/imgs/tarot/spreads/spread2.jpg": "d1cb137dc91b820779136b440c234cf9",
"assets/assets/imgs/tarot/spreads/spread3.jpg": "df1794e8198a4e7048c11dbc9930e1b3",
"assets/assets/imgs/tarot/spreads/spread4.jpg": "6c92bf5c7e6031ec34598a7b429c42a7",
"assets/assets/imgs/tarot/spreads/spread5.jpg": "d04b07776f05a9cef437e61af968fddf",
"assets/assets/imgs/tarot/spreads/spread6.jpg": "32ecd9263f4fc1b48251820ed547ab14",
"assets/assets/imgs/tarot/spreads/spread7.jpg": "bece63fe131d695ed2c1e2d91468b5da",
"assets/assets/imgs/tarot/spreads/spread8.jpg": "0f743846f2b694086296cac9864c0b38",
"assets/assets/imgs/tarot/spreads/spread9.jpg": "a58ef62b1a32c92c53e4e0965e936b1d",
"assets/assets/imgs/tarot/spreads/swords.jpg": "b697d2f42d8755c86de3d68449892ecd",
"assets/assets/imgs/tarot/spreads/tarotback.png": "efd3d1541e3a1012319218a571c2dd40",
"assets/assets/imgs/tarot%2520logo.png": "c105e00ea0ffb399db110e9a9391cef8",
"assets/assets/nms/ans.json": "498ce2b1a91541c73d0469a025debde4",
"assets/assets/nms/qus.json": "a73219e827ef05a9869834a7f8106c8b",
"assets/FontManifest.json": "fa1ab10158a5e67da700696cc0dba64d",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "1c9a3ff2612bb78ab0c3d56974531dd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63eec7f26ed8ba234030337d7c56e8cf",
"/": "63eec7f26ed8ba234030337d7c56e8cf",
"main.dart.js": "74e04f3de7f0d6e50bbe4a20cdda81a7",
"manifest.json": "380ee5a03a689689f031b83e2f506c57",
"version.json": "b95b0fe7d5ed181821d0aebf56af7164"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

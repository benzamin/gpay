'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d99027369cc8d94783723a3d678bbde3",
"index.html": "02ab14550eb8d9b7fa9dffb14023ee16",
"/": "02ab14550eb8d9b7fa9dffb14023ee16",
"main.dart.js": "db652e420ecc31a37dab21ac02a46acc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e80c54e93072f67661a197a6048a2d4",
"assets/AssetManifest.json": "9e6095928c2ea669b315e24add4f0513",
"assets/NOTICES": "f5e62cfacfe416245aef6e95a24d0b93",
"assets/FontManifest.json": "e82f3bc0ece0883a90411d44345eb39c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/gpay_logo_wide.png": "3bf793f9972a77993d947ca33ddff7f8",
"assets/assets/images/avatar_logo.png": "a04a75e6055f76cb2e4c4880e8c2382d",
"assets/assets/images/gpay_logo_big.png": "7f740c45e130f839da97d96916414838",
"assets/assets/images/fav_ribon.png": "1f1e0d1c9fcceaca987cef45c1db4d97",
"assets/assets/images/GP-Logo-small.jpg": "a24143f2c16d73cdb460904ca457efd8",
"assets/assets/images/gpay_logo.png": "8dc7425db8eccdae0c370d766920ea5f",
"assets/assets/logos/titas.png": "0985504a8b0a6d28ef1df266d6ef4a5f",
"assets/assets/logos/Bumbellbee.png": "fb83bc9b1987714d902e854ebd79fb88",
"assets/assets/logos/dwasa.png": "662dcba97e09cb9baf408af1851a98ba",
"assets/assets/logos/bgsl.png": "560a82ddc0dcc274e786423f13a1bd1a",
"assets/assets/logos/Rwasa.png": "97b5f3739f88f60f3ca3664d91246328",
"assets/assets/logos/Carnival.png": "9501a35f90beefc99e2ce73aee49a5f4",
"assets/assets/logos/wzpdcl.png": "22538e580b8dd5aa76cbdc0a2c7e2816",
"assets/assets/logos/cwasa.png": "e738611b53680767dfaf1f4a79168189",
"assets/assets/logos/jalalabad.png": "b8c95c120738601167acf492e19306a6",
"assets/assets/logos/desco.png": "0805a53909eb6030c55f5b45abafc78f",
"assets/assets/logos/qubee.png": "8aa8df4218fe518fc6add38a5835db60",
"assets/assets/logos/kwasa.png": "4f90cf0d4b6cb164e24cafc99fead120",
"assets/assets/logos/banglalion.png": "8cba8b11be85672f2bfbda6d856d7b24",
"assets/assets/logos/pgcl.png": "cb648169c23e09f681817e1149236491",
"assets/assets/logos/breb.png": "962f180e5b34efb0c9f5cc09c229fdf5",
"assets/assets/logos/dpdc.png": "65210bad8bd436f4c9d4929209c0c282",
"assets/assets/logos/scc.png": "90539c20802d4c60a07de540a016c348",
"assets/assets/logos/amberit.png": "f1188a5b2f4cac839e6331cb2ed66f98",
"assets/assets/logos/nesco.png": "a152a30cf35508cfe2755d99d4963372",
"assets/assets/logos/pdb.png": "9f4871f8327a254a0732717d7e29243c",
"assets/assets/logos/kgdcl.png": "400c326dccda2df84d9ff3ac57029c69",
"assets/assets/icons/recharge.jpg": "0f205951195b3ab44e678ff88181eba6",
"assets/assets/icons/add_money.png": "126628ff01bcbfa0ab94183a0da4e981",
"assets/assets/icons/skitto.png": "42e258aeb9715ff12e9853ed3cad5522",
"assets/assets/icons/pay_bill.png": "b20222a597e0cd16c4a15ff53db99b40",
"assets/assets/fonts/telenorlight.ttf": "d695b786e7419de616e14b9da1173448",
"assets/assets/fonts/telenor.ttf": "3ea3cdd327086fc21526476fe5f3f81c",
"assets/assets/fonts/telenormedium.ttf": "5ebf551fec39fa89de8af4ccb49d562e",
"assets/assets/fonts/telenorbold.ttf": "960324284a7a6bb88910b0fe254ec87e",
"assets/assets/onboarding/onboarding_create_rechargeMeter.png": "d5a750c49e7fe7a2236dcdc9a6cc4917",
"assets/assets/onboarding/onboarding_login_paybill.png": "d0816be8fd8774a7ba53869b9290447b",
"assets/assets/onboarding/onboarding_login_refill.png": "cd91b275e4fdbfbde332953a41e6ad3c",
"assets/assets/onboarding/onboarding_login_recharge.png": "e4528b91e2e1229d288c7d8188305c0b",
"assets/assets/onboarding/onboarding_create_payInternetBill.png": "feee334509a0f0ccf1c6e12a0b27f7b4",
"assets/assets/onboarding/onboarding_create_payDTHBill.png": "650f9ae6267042cd476d5f9df14fda70"
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

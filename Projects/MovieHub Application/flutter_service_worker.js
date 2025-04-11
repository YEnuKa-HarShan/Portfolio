'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8e0e5784ab6dedbd2259bd31dd3d7425",
"assets/AssetManifest.bin.json": "6ca652d08c81123d4eb5f7a2bea53a59",
"assets/AssetManifest.json": "ef5955122acf61a98e33dd369cd17db5",
"assets/assets/actors/20250407_102353.jpg": "235e66a2c7e5dda90e11458d7b4eee54",
"assets/assets/actors/Dhananjay.jpg": "5250d12992bbcc98cc6d795436fa85fb",
"assets/assets/actors/Kabir%2520Duhan%2520Singh.jpg": "6fd3019bea482572ec6a4ac32fe66164",
"assets/assets/actors/Unni%2520Mukundan.jpg": "be04d4e77b5616450e6c2ea42231c617",
"assets/assets/actors/Vijay%2520Antony.jpg": "e3ea0a92cdd4131f2afc93a5339b9c30",
"assets/assets/actors/Yukti%2520Thareja.jpg": "cdf1df784598c3cd67c75f268226e3c0",
"assets/assets/actors.json": "2ea0850ba2f0d7a9ae4b247e9ad53a84",
"assets/assets/Background.jpg": "0033df2faf109212450081792e5dc146",
"assets/assets/Icon.png": "1fe6dfea3094b170d01ddf8da74de4ec",
"assets/assets/landscape/Animal%25202023.jpeg": "2eed7d6a1cfcb59ed84365c508c407e7",
"assets/assets/landscape/Crakk%25202024.jpg": "b4c0fe20209284d66525bb4c5aecd3a2",
"assets/assets/landscape/Dune%2520Part%25202%25202024.jpg": "16777061aa318780037d06b20379ba7f",
"assets/assets/landscape/Marco%25202024.jpg": "b6a8ec6032239a239e99382e341e61c1",
"assets/assets/landscape/Mazhai%2520Pidikatha%2520Manithan%25202024.jpg": "4662702a15cbac65e46671ba70b61a41",
"assets/assets/landscape/The%2520Family%2520Plan%25202023.jpg": "2fe84b6f0eb5d25510a6486dbf4f018f",
"assets/assets/landscape/Wonder%2520Woman%25201984%25202020.jpg": "60dbd8d460f3ba42b65199b4643be2a9",
"assets/assets/logo/logo.png": "adb7d744634923926158a3a8d16c6cdc",
"assets/assets/movies.json": "4ad3e7baf3c22dcb9683a44c54d11e6f",
"assets/assets/portrait/800%25202023.jpg": "556841e72bf2bdabdc8fa57209b6dbcd",
"assets/assets/portrait/Animal%25202023.jpg": "0b592b62f0d70d565dce864e1d0e7f8c",
"assets/assets/portrait/Bawaal%25202023.jpg": "24eae7522ad62905fa5fd3745e36fdd5",
"assets/assets/portrait/Bhola%2520Shankar%25202023.jpg": "8d7ddea94c41470e82cba439e5424695",
"assets/assets/portrait/Bholaa%25202023.jpg": "9936219dad619bc5a3baa9baed5a158f",
"assets/assets/portrait/Big%2520Hero%25206%25202014.jpg": "ad062718f6a20690b3e7e7a7ac4baa68",
"assets/assets/portrait/Black%2520Adam%25202022.jpg": "be40085d1edec3d5a1b5843a34edc364",
"assets/assets/portrait/Blackout%25202024.jpg": "7d54b36e094efb50544ce393f0dcb44f",
"assets/assets/portrait/Blue%2520Beetle%25202023.jpg": "4551961fdf431983f3e733e77bbea4d0",
"assets/assets/portrait/Boy%2520Kills%2520World%25202023.jpg": "9fa478b57a2beda5def4d17dd8f8b399",
"assets/assets/portrait/Bridge%2520to%2520Terabithia%25202007.jpg": "05124c4216bdf060ac2c398e638edc95",
"assets/assets/portrait/Bumblebee%25202018.jpg": "a3d161e6981427e10895ac286a288049",
"assets/assets/portrait/Coolie%2520No.1%25202020.jpg": "74bd15f34808e8b392c6001a1a0fcf62",
"assets/assets/portrait/Crakk%25202024.jpg": "df7f4713a6efbd7c5e93db3f731bb24d",
"assets/assets/portrait/Custody%25202023.jpg": "5862e5ad15eb86915e8a5f051b9a1367",
"assets/assets/portrait/Dada%25202023.jpg": "d441cafe4887220c24576c7abb9fa934",
"assets/assets/portrait/Deadpool%2520&%2520Wolverine%25202024.jpg": "86f2f5b005f0db8c96e12020b7aaaa99",
"assets/assets/portrait/Deadpool%25202%25202018.jpg": "c31a81997b63a73ae9cca129c5eb94bf",
"assets/assets/portrait/Deadpool%25202016.jpg": "ccbba7c2c1caf5a76c0a6c29af715d3d",
"assets/assets/portrait/DJ%2520Tillu%25202022.jpg": "aa3e1f59d804401f7dc83ff16b0c2236",
"assets/assets/portrait/Double%2520iSmart%25202024.jpg": "ec3bd07c3261703592f251979e72429c",
"assets/assets/portrait/Dune%2520Part%25202%25202024.jpg": "695dc3033a0abc1360f52d942ba54c97",
"assets/assets/portrait/Dunki%25202023.jpg": "35d5f2149fade256a8a26293c9ab4606",
"assets/assets/portrait/Earth%2520to%2520Echo%25202014.jpg": "47ca5ca83caf410b504b3962d3062a28",
"assets/assets/portrait/Enna%2520Solla%2520Pogirai%25202022.jpg": "c18bf3fcb87c7f9608f593e479834f1c",
"assets/assets/portrait/Extraction%25202%25202023.jpg": "b9aa6e052ae807ce9cdd3e655488a89d",
"assets/assets/portrait/Fast%2520X%25202023.jpg": "c01dbb4a10e45596a5b1ca6a3ae0a214",
"assets/assets/portrait/Fighter%25202024.jpg": "d54366b609be9381c3feb00167bdaf2c",
"assets/assets/portrait/Forensic%25202022.jpg": "cf05ddd56a827d0c92cac7091ff6bf6f",
"assets/assets/portrait/Free%2520Guy%25202021.jpg": "e4ac89afbc7db9a046fe1c2225f5c6d8",
"assets/assets/portrait/Gold%25202018.jpg": "38340dec54ed84ce35297786e06582dd",
"assets/assets/portrait/Hidden%2520Strike%25202023.jpg": "ff301d94ac56e5286a8e1e38dad54f9b",
"assets/assets/portrait/IB%252071%25202023.jpg": "d53f791ed163723013d83ff0ea00a2f4",
"assets/assets/portrait/Iraivan%25202023.jpg": "6a3879df5823d847412f219c0782f5e5",
"assets/assets/portrait/Jawan%25202023.jpg": "d8fc11ae8d603a5ae4360dc7761e5778",
"assets/assets/portrait/Joe%25202023.jpg": "24f3af433d8283c854d420a6f56638e9",
"assets/assets/portrait/Kalank%25202019.jpg": "0865f13726f6d9980411f7e2430c5bba",
"assets/assets/portrait/Kalki%25202898%2520AD%25202024.jpg": "dc010c797deec7e7122d6eccfc76a5ce",
"assets/assets/portrait/Kill%25202024.jpg": "e8c0eac44b1e7018582aa487ce769fc9",
"assets/assets/portrait/Leo%25202023.jpg": "f0b5f3b3854729053ee5e0682225374e",
"assets/assets/portrait/Lift%25202024.jpg": "c10dfb6e1b74c40d4f0ac096f72f9e9e",
"assets/assets/portrait/Maaveeran%25202023.jpg": "31f84322db464b1677843dfeab5f2122",
"assets/assets/portrait/Marco%25202024.jpg": "77a06221b9b8b0da43fc7ff795f20ed0",
"assets/assets/portrait/Mazhai%2520Pidikatha%2520Manithan%25202024.jpg": "72fb0a4d560ff8a1384d9a7ee198e22a",
"assets/assets/portrait/Meg%25202%2520The%2520Trench%25202023.jpg": "909b9e54fdb90a402959a3b883c88fd4",
"assets/assets/portrait/Missing%25202018.jpg": "a01e04c1d8c261666210b01f083bb1ed",
"assets/assets/portrait/Mr.%2520Bachchan%25202024.jpg": "4134573b7ab7fa44f12df902e8a49617",
"assets/assets/portrait/Pathaan%25202023.jpg": "e2ecb05f3f7d054d2ecc5c0e701946c9",
"assets/assets/portrait/PT%2520Sir%25202024.jpg": "3a597aa642d48883d2fe1f26bcf74c35",
"assets/assets/portrait/Raayan%25202024.jpg": "dac2f43d4a0e9bed4e5da3d07138e4a6",
"assets/assets/portrait/Raid%25202018.jpg": "c2ac34bc9a8244545fb8f08453fbfea3",
"assets/assets/portrait/Raid%25202023.jpg": "d084ffe7425202eb60baab0609368942",
"assets/assets/portrait/Red%2520Sparrow%25202018.jpg": "d1d46d38a22576d5dd8365c04e5830c3",
"assets/assets/portrait/Romeo%25202024.jpg": "707a0e7fac9784555cb9b8564bc1bb0b",
"assets/assets/portrait/Saindhav%25202024.jpg": "9c48276907e331d6c5376df6036d1fb4",
"assets/assets/portrait/Salaar%2520Part%25201%2520Ceasefire%25202023.jpg": "8ad8a31ae76be56cda1598db96c4e6d1",
"assets/assets/portrait/San%2520Andreas%25202015.jpg": "8c732ec0fb0e6b98adbe4672c4d159ba",
"assets/assets/portrait/Saripodhaa%2520Sanivaaram%25202024.jpg": "c6309f805c743e74edd5772c380ee63a",
"assets/assets/portrait/Shivam%25202015.jpg": "e3e1d8e0ab468fdf381cf86324458427",
"assets/assets/portrait/Skanda%25202023.jpg": "c4b9def3615be4c78cb20d2cd26300ad",
"assets/assets/portrait/Sonic%2520the%2520Hedgehog%25202%25202022.jpg": "d3528852ba81584b56b7f147b80e4415",
"assets/assets/portrait/Sonic%2520the%2520Hedgehog%25202020.jpg": "6ec8b13ee952e9526eb7c1d20aa1d9b8",
"assets/assets/portrait/Sonic%2520the%2520Hedgehog%25203%25202024.jpg": "968a77eac021389ff1e3479291c7f4e2",
"assets/assets/portrait/Teen%2520Wolf%2520The%2520Movie%25202023.jpg": "1bc5401c8d62e87f788f585cf00b9302",
"assets/assets/portrait/The%2520Dive%25202023.jpg": "bf67d6201843320756e8771e487181d1",
"assets/assets/portrait/The%2520Family%2520Star%25202024.jpg": "6fa1d8ae69d6668bd4418fded85c5c27",
"assets/assets/portrait/The%2520Marvels%25202023.jpg": "2467b05c9682587b765b226ccefde177",
"assets/assets/portrait/The%2520Outlaws%25202017.jpg": "ab47cfe12e238187a965485faa90bb79",
"assets/assets/portrait/The%2520Watchers%25202024.jpg": "6000f5a300abdde750267c384f2c2e1c",
"assets/assets/portrait/Tiger%25203%25202023.jpg": "cf6a799c1c86bcc04460adc6f02db5e8",
"assets/assets/portrait/Tiger%2520Zinda%2520Hai%25202017.jpg": "50dcf0b09ea24c34775ee2615a7ccc5e",
"assets/assets/portrait/Transformers%25202007.jpg": "5687576f65b3b83b0448363419932453",
"assets/assets/portrait/Transformers%25202009.jpg": "46086da74042e0a364771b7036ba3b66",
"assets/assets/portrait/Transformers%25202011.jpg": "2d70dd23372a51941818e7089c131403",
"assets/assets/portrait/Transformers%25202014.jpg": "7bf104bb9305092fbcd5be2fcba17cbb",
"assets/assets/portrait/Trap%25202024.jpg": "ea66df314347e016b5d48f25839b5298",
"assets/assets/portrait/Venom%25202018.jpg": "749c5542cc600c0c383e6991a5d0735f",
"assets/assets/portrait/Wonder%2520Woman%25201984%25202020.jpg": "59b67e9f8134c1b51237ea24b8e6db38",
"assets/FontManifest.json": "897e0918de33d24c21593ca3edc9f9c5",
"assets/fonts/MaterialIcons-Regular.otf": "41082b4e2a1eec29c76637bec9b11b4c",
"assets/fonts/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/fonts/Poppins-Regular.ttf": "29cc97af5403e3251cbb586727938473",
"assets/fonts/Poppins-SemiBold.ttf": "bafbc0b1fb65a719824724dc735ea88c",
"assets/NOTICES": "3fb2ccd5137f569e08bf99a384e3cb70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1ff4c582e84363614260f2a024e7a34f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08433ed95d205e97a58e8790fe5a9162",
"/": "08433ed95d205e97a58e8790fe5a9162",
"main.dart.js": "60a79421826e94eceacd9bbd6d383a95",
"manifest.json": "918518a513ac591561311518de9d7965",
"version.json": "62bd2995142d4672fb9f4295a8199d74"};
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

// Change this to your repository name
var GHPATH = '/Improbability-Drive';

// Choose a different app prefix name
var APP_PREFIX = 'impd_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/style.css`,
  `${GHPATH}/custom.js`,
  `${GHPATH}/table.json`,
  `${GHPATH}/images/bg.jpeg`,
   `${GHPATH}/images/dice.svg`,
  `${GHPATH}/marvinvisions-bold-webfont.woff`,
  `${GHPATH}/marvinvisions-bold-webfont.woff2`,
]

self.addEventListener('fetch', function(event) {
    event.respondWith(async function() {
       try{
         var res = await fetch(event.request);
         var cache = await caches.open('cache');
         cache.put(event.request.url, res.clone());
         return res;
       }
       catch(error){
         return caches.match(event.request);
        }
      }());
  });
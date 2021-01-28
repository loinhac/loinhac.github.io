

	importScripts('/app/js/cache.js');
	var googleisthere = fetch('https://google.com', {mode: 'no-cors'}).then(r=>{return true;}).catch(e=>{return false;});
	var urlsToCache = [
  '/index.html',
  '/app/css/bootstrap.min.css',
  '/app/css/all.css',
  '/app/css/bootstrap-editable.css',
  '/app/css/dataTables.bootstrap4.min.css',
  '/app/css/animate.min.css',
  '/app/css/custom.css',
  '/app/images/loadingg.gif',
  '/app/js/jquery.min.js',
  '/app/js/cache.js',
  '/app/js/popper.min.js',
  '/app/js/jtab.js',
  '/app/js/vansu.vendor.js',
  '/app/webfonts/fa-solid-900.woff2',
  '/app/js/rules.js'
];
 
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('nhac')
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});



self.addEventListener('fetch', (event) => {
	
	if(event.request.url.match(/google\.com/)){
		fetch(event.request);
	}else{
	
  event.respondWith(async function() {
    const cache = await caches.open('nhac');
    const cachedResponse = await cache.match(event.request, {ignoreSearch: true});
    const networkResponsePromise = fetch(event.request);

    event.waitUntil(async function() {
      const networkResponse = await networkResponsePromise;
      await cache.put(event.request, networkResponse.clone());
    }());

    // Returned the cached response if we have one, otherwise return the network response.
    return cachedResponse || networkResponsePromise;
  }());
}
});



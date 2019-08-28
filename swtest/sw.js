self.addEventListener('install', event => {
  console.log('V1 installing…');

  // cache a cat SVG
  event.waitUntil(
    caches.open('static-v1').then(cache => cache.add('/cat.svg'))
  );
});

var reg;

self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
  reg = self.registration;
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'archive') {
    silentlyArchiveEmail();
  } else {
    clients.openWindow("https://play.google.com/store/apps/details?id=com.viasatshield");
  }
}, false);

self.addEventListener('fetch', event => {
  console.log('got a fetch for ' + event.request.url);
  const url = new URL(event.request.url);

  // serve the cat SVG from the cache if the request is
  // same-origin and the path is '/dog.svg'
  if (url.origin == location.origin && url.pathname == '/dog.svg') {
    event.respondWith(caches.match('/cat.svg'));
  }

    /*
  reg.showNotification("Announcing Viasat Shield", {
    body: 'Take control of your home network. Click to learn more!',
    actions: [{action: 'archive', title: "Archive"}],
    requireInteraction: true,
    image: "vshield.webp",
  });
  */
});

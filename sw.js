self.addEventListener('push', function(e) {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'PostIA — EvoGym', {
      body: data.body || 'Tenés una publicación pendiente para revisar.',
      tag: 'postia-pending',
      renotify: true,
      requireInteraction: true
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});

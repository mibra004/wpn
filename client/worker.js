console.log('Service Worker Loaded');
self.addEventListener('push', function(e) {
    const data = e.data.json();
    self.registration.showNotification(
        data.title,
        {
            body: "Notifications is enabled",
        }
    );
})

self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    var title = 'Registration is now open';
    var body = 'We have received a push message.';
    var icon = 'https://www.blinn.edu/_files/images/ico/favicon.ico';
    var tag = 'simple-push-demo-notification-tag-7';
    var data = {
    doge: {
        wow: 'such amaze notification data'
    }
    };

    event.waitUntil(
    self.registration.showNotification(title, {
        body: body,
        icon: icon,
        tag: tag,
        data: data
    })
    );
});
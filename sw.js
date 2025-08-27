
self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

self.addEventListener('install', (event) => {

    var title = 'Registration is now open';
    var body = 'We have received a push message.';
    var icon = 'https://www.blinn.edu/_files/images/ico/favicon.ico';
    var tag = 'tag-13';
    var data = {
    doge: {
        wow: 'such amaze notification data'
    }
    };

    // raul added the skipWaiting event
    self.skipWaiting();
    event.waitUntil(
    self.registration.showNotification(title, {
        body: body,
        icon: icon,
        tag: tag,
        data: data
    })
    );

}); //install


});
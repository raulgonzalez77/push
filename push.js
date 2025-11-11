const webpush = require('web-push');

// Your existing VAPID keys
const vapidKeys = {
  publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
};

webpush.setVapidDetails(
  'mailto:speedygonzales77@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is your PushSubscription object from the browser
const pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/dpR2HzWMhno:APA91bGH95fN3vVic_nKHjG0vvof1U6bHWPk-RM--Wx5hQv7n3FwxDdx8IibvvSVcIkE0bVj7oQDwDYFZ8L7mq0_NUZZUOipH-PbHjsCIEpzVPoyFuemxK9P1J270JyRH4B-jGRtEusi",
  expirationTime: null,
  keys: {
    p256dh: "BP8vm4B2bwFgtjPtTctrUULqRPzxYh2yoOKPLkcTKjWDwSUl9HrEEeifXQqOVbQGU76RgoXDEVwW-tlaj1PQvLM",
    auth: "WkB2fsK5mPGrbRzRYYDWYw"
  }
};

// The payload you want to send
const payload = JSON.stringify({
  title: 'Hello from Node.js!',
  body: 'This is a real push notification.',
  icon: 'https://www.blinn.edu/_files/images/ico/favicon.ico',
  tag: 'test-push',
  extra: { info: 'Optional extra data' }
});

// Send the push notification
webpush.sendNotification(pushSubscription, payload)
  .then(response => {
    console.log('Push sent successfully!', response.statusCode);
  })
  .catch(err => {
    console.error('Error sending push:', err);
  });

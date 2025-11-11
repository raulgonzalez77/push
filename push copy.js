const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
publicKey: 'BCis9afWX-SRKt021KIJwH7M2I67P0dlDBEvIdaeRCRj6GbPMqwG0V9rR6XPmaPCDmOT6oVObmYLEMba3oW5sMU',
  privateKey: 'dTraF3I4r-hbZ0tE3CYVYFGoz1woSrN-O5XpPJNOI_c'
};

webpush.setVapidDetails(
  'mailto:speedygonzales77@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fWuKUEPcD8U:APA91bF360nY6OyJgd0EfgdnJJgsKoof8hysVECCWh8cyiXb03SJEPGc0hX0dWGX4o27UXunebklcsGsatS5-f3I_Dmy13Ed7RkHK5DubA5PUaUt34DEGkvfKCfaBis-NStMkPH_DE30","expirationTime":null,"keys":{"p256dh":"BAERVGskrZQdIDXIzTVOm8zuwylglCwZ_bF7tmKm10w9g36z3_yCCbjeXcmhGFvf0E6wyGge1CEgIIuVXml5NGY","auth":"48b8uYCuAuJvtr6e-CvSUg"}}
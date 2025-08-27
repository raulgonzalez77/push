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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cHm4UYvBVsQ:APA91bHLiyI7Nsp-RSevnKs_qLNAPde8U0vKJ2xVSXfyTAOK87vr65gcl1x2eBpJO8TfswjWUo4Ti4D6jur1oUIlToNWRjk_kBC5JDfrO00Zn2rw1PlOIlOp4hdgDn_wMAgX3toWAfjy","expirationTime":null,"keys":{"p256dh":"BN5KyFF1NBO2gluCK7DCKXyjVv3sXVzzCNXXEJ5wMV4342nviy-_LIUaEYBTVI4L6cNuAZxeQ_ZUjx4eptduoJE","auth":"KZxa6-mxZfdmNgs9oULpUQ"}}
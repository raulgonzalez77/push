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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/d0z_NWD0wTM:APA91bFiAu37GwviHQKyb8BP8riOGL6shVYwzep7wY151CsucmC0YCR8-_30rRJsekeTPhbw7VApAqT5_jL2_WxHKWRgbKqaT1AX9gfN3gZMSJ0iRHfcfBePF9cQ7p4mhfdJ7y6ZrMvV","expirationTime":null,"keys":{"p256dh":"BGFJw72kwQttzxdRhmrcpwPvToKu7F5H5cjgxjRvDpf-zxxBgpAmmvt_abTub5_eLgfxaf1PvXdxaTk99TVlxO4","auth":"7AIbadTCTFFziDpsh1ALdA"}}
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Yeni bir istemci (client) oluşturun
const client = new Client({
    authStrategy: new LocalAuth() // QR kodunu tarayarak oturum açmanızı sağlar
});

client.on('qr', qr => {
    // QR kodunu terminalde göster
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot hazır!');
});

client.on('message', message => {
    if (message.body === '!ping') {
        message.reply('pong');
    }
});

client.initialize();

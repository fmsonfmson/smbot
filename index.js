const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzc2OTk3MjcyODUxOTcyMTA2.X69BGQ.PpwWJa2c41uqRaXc8Fx4GnNzQII';
client.on('ready', () => {
    console.log('on');
});

client.on('message', (message) =>{
    if(message.content === 'ping'){
        message.reply('pong');
    }
});

client.login(token);

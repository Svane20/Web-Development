require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE'],
});

//Prefix
const BOT_PREFIX = '!';

//Commands for BOT
const MOD_ME_COMMAND = 'mod-me';

//Bot ready state
client.on('ready', () => {
    console.log('Bot is ready for use');
});

//Warn about deleting messages
client.on('messageDelete', (msg) => {
    msg.channel.send('Stop med at slette beskeder');
});

//Message recieved
client.on('message', (msg) => {
    //Reaction
    if (msg.content == 'Jeg elsker det') {
        msg.react('❤️');
    }

    //Assign Roles
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member);
    }
});

function modUser(member) {
    member.roles.add('696446097513775230');
}

//Login
client.login(process.env.BOT_TOKEN);

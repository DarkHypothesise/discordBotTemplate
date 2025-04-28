const fs = require('fs');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot ist online! Eingeloggt als ' + client.user.tag);
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    try {
        const command = client.commands.get(commandName);
        if (commandName === 'help') {
            command.execute(message, client.commands);
        } else {
            command.execute(message, args);
        }
    } catch (error) {
        console.error(error);
        message.reply('Es gab einen Fehler beim Ausführen des Befehls!');
    }
});

client.login(token);

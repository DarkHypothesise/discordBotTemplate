const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Zeigt alle verfügbaren Befehle',
    execute(message, commands) {
        const commandList = commands.map(command => 
            `**${prefix}${command.name}** - ${command.description}`
        ).join('\n');
        
        message.channel.send({
            embeds: [{
                title: 'Verfügbare Befehle',
                description: commandList,
                color: 0x0099ff
            }]
        });
    },
};

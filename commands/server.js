module.exports = {
    name: 'server',
    description: 'Zeigt Server-Informationen',
    execute(message) {
        message.channel.send({
            embeds: [{
                title: 'Server Information',
                fields: [
                    { name: 'Server Name', value: message.guild.name },
                    { name: 'Mitglieder', value: `${message.guild.memberCount}` },
                    { name: 'Erstellt am', value: message.guild.createdAt.toLocaleDateString() }
                ],
                color: 0x0099ff
            }]
        });
    },
};

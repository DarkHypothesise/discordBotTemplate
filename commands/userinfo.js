module.exports = {
    name: 'userinfo',
    description: 'Zeigt Informationen über einen User',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(user.id);
        
        message.channel.send({
            embeds: [{
                title: 'User Information',
                fields: [
                    { name: 'Username', value: user.username, inline: true },
                    { name: 'Nickname', value: member.nickname || 'Kein Nickname', inline: true },
                    { name: 'Joined Discord', value: user.createdAt.toLocaleDateString(), inline: true },
                    { name: 'Joined Server', value: member.joinedAt.toLocaleDateString(), inline: true }
                ],
                thumbnail: { url: user.displayAvatarURL({ dynamic: true }) },
                color: 0x0099ff
            }]
        });
    },
};

module.exports = {
    name: 'avatar',
    description: 'Zeigt deinen Avatar oder den eines anderen Users',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        message.channel.send({
            embeds: [{
                title: `Avatar von ${user.username}`,
                image: { url: user.displayAvatarURL({ dynamic: true, size: 4096 }) },
                color: 0x0099ff
            }]
        });
    },
};

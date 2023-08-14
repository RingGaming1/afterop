const Discord = require('discord.js');

module.exports = async (req, res) => {
    const botToken = 'MTEwMjk2OTU3OTg0MTUyNzg2OQ.GsWQKI.N-TES869wEi76d101fTnLvwhMtqAJ8L5L1ajGM';
    const guildId = '754991441125572670';
    const channelId = '788063490505572361';

    const bot = new Discord.Client();
    await bot.login(botToken);

    try {
        const guild = bot.guilds.cache.get(guildId);
        const channel = guild.channels.cache.get(channelId);

        if (channel && channel.isText()) {
            const messages = await channel.messages.fetch({ limit: 10 });

            const messagesData = messages.map(message => ({
                author: message.author.username,
                content: message.content,
                timestamp: message.createdAt
            }));

            res.status(200).json(messagesData);
        } else {
            res.status(404).send('Channel not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching messages');
    }
};

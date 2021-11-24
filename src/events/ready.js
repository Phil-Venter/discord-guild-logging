const { ActivityTypes } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		client.user.setPresence({ activities: [{ name: 'you all.', type: 'LISTENING' }], status: 'dnd' });
	},
};
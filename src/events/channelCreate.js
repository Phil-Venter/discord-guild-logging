const channel = require('../functions/channel');

module.exports = {
	name: 'channelCreate',
	async execute(client, interaction) {
		await channel(client, interaction, 'CREATE');
	},
};
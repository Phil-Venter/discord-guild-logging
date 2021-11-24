const channel = require('../functions/channel');

module.exports = {
	name: 'channelDelete',
	async execute(client, interaction) {
		await channel(client, interaction, 'DELETE');
	},
};
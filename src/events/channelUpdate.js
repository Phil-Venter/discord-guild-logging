const channel = require('../functions/channel');

module.exports = {
	name: 'channelUpdate',
	async execute(client, interaction) {
		await channel(client, interaction, 'UPDATE');
	},
};
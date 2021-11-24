const message = require('../functions/message');

module.exports = {
	name: 'messageUpdate',
	async execute(client, interaction) {
		await message(client, interaction, 'UPDATE');
	},
};
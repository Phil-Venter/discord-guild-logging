const message = require('../functions/message');

module.exports = {
	name: 'messageCreate',
	async execute(client, interaction) {
		await message(client, interaction, 'CREATE');
	},
};
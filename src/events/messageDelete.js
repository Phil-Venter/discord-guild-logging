const message = require('../functions/message');

module.exports = {
	name: 'messageDelete',
	async execute(client, interaction) {
		await message(client, interaction, 'DELETE');
	},
};
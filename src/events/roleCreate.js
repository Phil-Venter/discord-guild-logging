const role = require('../functions/role');

module.exports = {
	name: 'roleCreate',
	async execute(client, interaction) {
		await role(client, interaction, 'CREATE');
	},
};
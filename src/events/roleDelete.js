const role = require('../functions/role');

module.exports = {
	name: 'roleDelete',
	async execute(client, interaction) {
		await role(client, interaction, 'DELETE');
	},
};
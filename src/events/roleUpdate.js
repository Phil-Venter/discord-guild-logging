const role = require('../functions/role');

module.exports = {
	name: 'roleUpdate',
	async execute(client, interaction) {
		await role(client, interaction, 'UPDATE');
	},
};
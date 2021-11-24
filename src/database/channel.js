const Sequelize = require('sequelize');

const name = 'Channel';

module.exports = {
	name,
	init: async (client) => {
		if(!client.config.channel) return;

		const table = client.sequelize.define(name, {
			type: Sequelize.STRING,
			channelId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			name: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
		}, {
			indexes: [{
				unique: true,
				fields: ['channelId', 'name'],
			}]
		});

		table.sync();

		return table;
	}
};
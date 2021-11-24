const Sequelize = require('sequelize');

const name = 'Message';

module.exports = {
	name,
	init: async (client) => {
		if(!client.config.message) return;

		const table = client.sequelize.define(name, {
			type: Sequelize.STRING,
			channelId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			messageId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			message: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
		}, {
			indexes: [{
				unique: true,
				fields: ['channelId', 'messageId', 'userId', 'message'],
			}]
		});

		table.sync();

		return table;
	}
};

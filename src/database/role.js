const Sequelize = require('sequelize');

const name = 'Role';

module.exports = {
	name,
	init: async (client) => {
		if(!client.config.role) return;

		const table = client.sequelize.define(name, {
			type: Sequelize.STRING,
			roleId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			name: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			color: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			hoist: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			position: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			permissions: {
				type: Sequelize.BIGINT,
				allowNull: false,
			},
			managed: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			mentionable: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
		}, {
			indexes: [{
				unique: true,
				fields: ['roleId', 'name', 'color', 'hoist', 'position', 'permissions', 'managed', 'mentionable'],
			}]
		});

		table.sync();

		return table;
	}
};
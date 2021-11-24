module.exports = async (client, interaction, type) => {
	if(!client.config.role) return;
	if(interaction.author.bot) return;
	if(interaction.author.system) return;

	const role = await client.database.Role;

	await role.create({
		type,
		roleId: interaction.id,
		name: interaction.name,
		color: interaction.color.toString(16),
		hoist: interaction.hoist,
		position: interaction.rawPosition,
		permissions: interaction.permissions,
		managed: interaction.managed,
		mentionable: interaction.mentionable,
	});
};
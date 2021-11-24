module.exports = async (client, interaction, type) => {
	if(!client.config.channel) return;
	if(interaction.author.bot) return;
	if(interaction.author.system) return;

	const channel = await client.database.Channel;

	await channel.create({
		type,
		channelId: interaction.id,
		name: interaction.name,
	});
};
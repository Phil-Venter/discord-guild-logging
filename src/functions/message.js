module.exports = async (client, interaction, type) => {
	if(!client.config.message) return;
	if(interaction.author.bot) return;
	if(interaction.author.system) return;

	const message = await client.database.Message;

	await message.create({
		type,
		channelId: interaction.channelId,
		messageId: interaction.id,
		userId: interaction.author.id,
		message: interaction.content,
	});
};
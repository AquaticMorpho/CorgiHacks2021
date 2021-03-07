
module.exports = {
	name: 'shutdown',
	description: 'allows the bot owner to kill the bot from discord',
	execute(message, args){
		if(message.author.id !== process.env.OWNER){
			message.channel.send('error: only the bot owner may kill me. You have no power here.');
			return;
		}
		message.reply('shutting down').then(() => {
			message.client.destroy();
		});
	},
};
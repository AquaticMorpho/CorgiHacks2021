
module.exports = {
	name: 'hewwo',
	description: 'repeats whatever message the user types in after the hewwo, but in uwuspeak',
	execute(message, args){
		if(args.length == 0){ message.channel.send("hewwo!"); return; }
		var newMessage = (message.content.slice(7)).replace(/r|l/gi, 'w');
		message.channel.send(newMessage);
	},
};
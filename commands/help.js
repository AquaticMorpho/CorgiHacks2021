
module.exports = {
	name: 'help',
	description: 'provides descriptions about other available commands',
	execute(message, args){
		var output = 'currently available commands are: ';
		for(let [cmd, data] of message.client.commands){ output += '~' + cmd + ', '; console.log(cmd); }
		message.channel.send(output.slice(0, -2));
console.log(message.client);
	},
};
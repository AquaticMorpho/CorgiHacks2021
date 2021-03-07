
module.exports = {
	name: 'test',
	description: 'helps user confirm when their messages send to discord',
	execute(message, args){
		var currentTime = new Date();
		var timeElements = currentTime.toUTCString().split(' ');
		message.reply('message received at ' + timeElements[4] + ' (UTC+0) time');
	},
};
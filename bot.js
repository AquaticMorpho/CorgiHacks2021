const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');

var swears = require('./swears.json');

const TOKEN = process.env.TOKEN;
const bot = new Discord.Client();

bot.commands = new Discord.Collection(); // allows for command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`); // same as require('./commands/' + file);
	bot.commands.set(command.name, command);
}


//========== startup bot ===========//

console.log('Starting bot');
bot.login(TOKEN);


bot.on('ready', botReady);
bot.on('message', botMessage);

//========== bot commands ==========//


function botReady(){
	console.log('bot setup successful');
} // end of botReady

function botCommand(message){
	if(((message.content).substring(0, 1) != '~')) { return false; }
	var args = message.content.substring(1).split(/ +/);
	var cmd = args[0];
	args = args.splice(1);
	if(!bot.commands.has(cmd)){ return false; }
	try{
		bot.commands.get(cmd).execute(message, args);
		return true;
	}
	catch(error){
		message.channel.send('An error was encountered, please don\'t ever try that again.');
	}
	return false;
}

function botMessage(message){
	if(message.author.bot){ return; }

	//===== normal commands (~) =====//
	if(botCommand(message)){ return; }	
	//===== end of normal commands =====//


	//===== swear parser =====//
	if(message.embeds.length === 0){ // don't want to be censoring messages with links in them
	var newMessage = message.content
	var didSwear = false
	for(var swear in swears){
		var swearRegEx = new RegExp(swear, "gi")
		if((newMessage).search(swearRegEx) != -1){
			newMessage = newMessage.replace(swearRegEx, swears[swear]);
			didSwear = true
		}
	}
	if(didSwear){
		var offendingParty = message.author.username
		var offendingChannel = message.channel
		message.delete().then(() => {
			offendingChannel.send(offendingParty + ' said a bad word. censored.\n**' + offendingParty + '**  ' + newMessage);
		});
		return;
	}
	}
	//===== end of swear parser =====//

	
	//===== fullmetal alchemist =====//
	if(message.content.match(/fullmetal alchemist/i)){
		message.channel.send("*" + message.content + "*");
		return;
	}
	//===== end of fullmetal alchemist =====//

} // end of botMessage
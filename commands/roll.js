
module.exports = {
	name: 'roll',
	description: 'rolls a given number of dice, each with a given number of sides. The dice are weighted to only roll maximums or minimums',
	execute(message, args){
		var expectedArg = /^(\d+)(?:d)(\d+)$/i
		if(args.length != 1 || !(expectedArg.test(args[0]))){
			message.channel.send('error: command must be in the format ~roll [# of dice]d[# of sides].');
			return;
		}
		var dices = args[0].match(expectedArg);
//console.log(dices);
		if(dices[1] < 1){
			message.channel.send('error: number of dice to be rolled must be a positive whole number.');
			return;
		}
		var output = 'dice results: ';
		for(i = 0; i < dices[1]; i++){
			var coinflip = Math.floor(Math.random() * 2);
			if(coinflip == 0){ output = output + dices[2] + ", "; }
			else{ output = output + "1, "; }
		}
		message.channel.send(output.slice(0, -2));
	},
};
# CorgiHacks2021

This bot is a personal project I used to learn about Javascript and the Discord JS library. It is my first experience with Javascript.

In order to run the bot, you must have node.js and discord.js installed.

The bot has five commands, each with a command symbol: ~help, ~test, ~roll, ~hewwo, and ~shutdown.

~help provides an up-to-date list of all available command names.
~test replies to the user with the time at which the bot received the message.
~roll rolls a specified number of dice, each with a specified number of faces. Each die is weighted so that it can only roll the maximum or minimum values.
~hewwo echoes whatever message follows the command back to the user, but with all of the 'r' and 'l' characters replaced by 'w'
~shutdown destroys the bot client. It can only be activated by the bot owner listed in the .env file.

In addition to its regular commands, the bot has two features not associated with a command symbol.

Typing the phrase "fullmetal alchemist" will cause the bot to respond with "_fullmetal alchemist_".

Typing various common swears will cause the bot to delete the user's message and replace it with an edited version of the message. The list of banned words, along with their replacemenrts, is contained within swears.json

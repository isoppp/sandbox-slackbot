const argv = require('yargs').argv;
const token = argv.token;
console.log('token is', token);

const Botkit = require('botkit');
const controller = Botkit.slackbot();

controller.spawn({
  token: token
}).startRTM();

controller.hears('hello', [ 'direct_message', 'direct_mention', 'mention' ], (bot, message) => {
  bot.reply(message, 'Hello yourself.');
});
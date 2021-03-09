const Discord = require('discord.js');
const client = new Discord.Client();
const Gamedig = require('gamedig');

var play;
var map;
var ai_bolit;
setInterval(function() {
Gamedig.query({
  type: 'garrysmod', // тип игры
  host: '37.230.210.97', // IP сервера
  port: 27015, // PORT Сервера
  port: 27015, // PORT Сервера
  maxAttempts: 1,
  attemptTimeout: 10000,
  socketTimeout: 1000

}).then((state) => {

playersCheck = Array.from(state.players.map(p => `${p.name}`));
playersCount = playersCheck.length;
  play = playersCount;
  map = state.map;
  ai_bolit = true;
}).catch((error) => {

console.error(error);
  client.user.setActivity('Сервер не в сети...', { type: 2 })
  ai_bolit = false;
});

client.user.setActivity('SERVER: ' + play + '/128', { type: 2 })

}, 3800);

client.on('error', (_) => {
    console.log(_);
})


client.on('message', async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if (message.content.indexOf('айпи') !== -1) {
      message.reply('Хей!')
      const embed = new Discord.MessageEmbed()

     .setAuthor("Айпи наших серверов")
        .setColor('#228B22')
        .setDescription("Servername #1 - 37.230.210.97:27015 [Online "+ play +"/128]")
        .setFooter("© VSRP. Все права защищены.")
        .setTimestamp()
      message.channel.send(embed);
  }

  if (message.content.indexOf('Айпи') !== -1) {
      message.reply('Хей!')
      const embed = new Discord.MessageEmbed()

     .setAuthor("Айпи наших серверов")
        .setColor('#228B22')
        .setDescription("Servername #1 - 37.230.210.97:27015 [Online "+ play +"/128]")
        .setFooter("© Servername. Все права защищены.")
        .setTimestamp()
      message.channel.send(embed);
  }

  if(message.content == '!status') {
    if(ai_bolit) {
      const embed = new Discord.MessageEmbed()

     .setAuthor("Servername #1 | Статус")
        .setColor('#228B22')
        .setDescription("Сервер в сети!\n Сейчас на сервере " + play + " игроков из 128\n На сервере используется карта " + map + "")
        .setFooter("© Servername. Все права защищены.")
        .setTimestamp()
      message.channel.send(embed);
    }
    if(!ai_bolit)
    {
      const embed2 = new Discord.MessageEmbed()
     .setAuthor("Servername #1 | Статус")
        .setColor('#ff0000')
        .setDescription('Сервер не в сети...')
        .setFooter("© Servername. Все права защищены.")
        .setTimestamp()
      message.channel.send(embed2);
    }
  }

})

client.login('TOKEN');

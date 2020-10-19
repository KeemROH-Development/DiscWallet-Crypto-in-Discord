const config = require("../config.json");
const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "help", // Command Name
  description: "List all of my commands/info about a specific command.", // Description
  aliases: ["h"], // Aliases
  usage: "d!help", // Usage
  cooldown: 5, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {  
  let helpembed = new Discord.MessageEmbed()
  .setTitle(`DiscWallet | Help Menu`)
  .setColor("#2F3137")
  .addField(`Main Commands`, `**d!help** - Show all of my commands!\n**d!start** - Use this command to create your wallet!\n**d!start eth** - Use this command to make an ETH wallet!\n**d!balance | d!bal** - Use this command to check how much BTC/USD you have in your wallet!\n**d!private** - Get sent your credentials for your wallet again!`)
  helpembed.setTimestamp()
  message.channel.send(helpembed) 
    
  }
};
const config = require("../config.json");
const db = require("quick.db");
const Discord = require("discord.js");
const needle = require("needle")
module.exports = {
  name: "private",
  description: "Check how much BTC/USD you have in your wallet!",
  aliases: ["priv"],
  usage: "d!balance",
  cooldown: 1,
  guildOnly: false,
  admin: false,
  mustStart: true,
  async execute(message, args, client) {
    let isstartedeth = db.fetch(`isstartedeth_${message.author.id}`)
    
    let pub = db.fetch(`public_${message.author.id}`)
    let priv = db.fetch(`private_${message.author.id}`)
    message.author.send(`Here are your credentials:\nBitcoin Address: ${pub}\nPrivate Address (Import form): ${priv}\n\nYou can always see this again by running \`d!private\` to see how much BTC / USD is in your wallet run \`d!balance or d!bal\` ` )
    message.channel.send(`Sending your credentials to dms!`)
   
    if(args[0] === "eth".toLowerCase() && isstartedeth) {
    let pubeth = db.fetch(`publiceth_${message.author.id}`)
    let priveth = db.fetch(`privateeth_${message.author.id}`)
    message.author.send(`Here are your credentials:\nETH Address: ${pubeth}\nPrivate Address (Import form): ${priveth}\n\nYou can always see this again by running \`d!private eth\` to see how much ETH / USD is in your wallet run \`d!balance eth or d!bal eth\` ` )
    message.channel.send(`Sending your credentials to dms!`)
    }
  }
}
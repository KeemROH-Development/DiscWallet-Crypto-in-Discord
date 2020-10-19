const config = require("../config.json");
const db = require("quick.db");
const Discord = require("discord.js");
const needle = require("needle")
module.exports = {
  name: "bal",
  description: "Check how much BTC/USD you have in your wallet!",
  aliases: ["balance"],
  usage: "d!balance",
  cooldown: 1,
  guildOnly: false,
  admin: false,
  mustStart: true,
  async execute(message, args, client) {
    if(!args[0]) {
    
  let pub1 = db.fetch(`public_${message.author.id}`)
  let balbtc = `https://api.blockcypher.com/v1/btc/main/addrs/${pub1}`
  
    

  needle.get(balbtc, function(error, response) {
  console.log(response.body);
  let body = response.body;
  let btcbal = body.balance / 100000000;
  let ttls = body.total_sent / 100000000;
  let ttlr = body.total_received / 100000000;
  let pending = body.unconfirmed_balance / 100000000;
  let final = body.final_balance / 100000000
  let unconfirmed = body.unconfirmed_n_tx;
  
    
  const balembed = new Discord.MessageEmbed()
  .setTitle(`DiscWallet |  Balance`)
  .setColor("#2F3137")
  .setDescription(`Here you will see all of your BTC and Official Denominations!\nBTC Address: ${pub1}`)
  .addField(`BTC:`, `${btcbal} BTC\nPending Balance (Incoming): ${pending} BTC\nFinal Balance: ${final}\nUnconfirmed Transactions: ${unconfirmed}`)
  .addField(`Official Denominations:`, `Coming soon`)
  .addField(`Stats:`, `Total Sent: ${ttls} BTC\nTotal Recieved: ${ttlr} BTC`)
  balembed.setTimestamp()
    message.channel.send(balembed)
    });
  }
    let ethstart = db.fetch(`isstartedeth_${message.author.id}`)
    
    if(args[0] === "eth".toLowerCase() && !ethstart) {
      
      
      return message.channel.send(`Hello, I noticed you just tried to check your ETH balance, you can make an eth wallet with \`d!start eth\`!`)
  
    } else if(args[0] === "eth".toLowerCase() && ethstart) {
      
     let pubeth = db.fetch(`publiceth_${message.author.id}`) 
     
     let balbtc = `https://api.blockcypher.com/v1/eth/main/addrs/${pubeth}`
  
    

  needle.get(balbtc, function(error, response) {
  console.log(response.body);
  let body = response.body;
  let ethbal = body.balance / 1000000000000000000;
  let ttlseth = body.total_sent / 1000000000000000000;
  let ttlreth = body.total_received / 1000000000000000000;
  let pendingeth = body.unconfirmed_balance / 1000000000000000000;
  let unconfirmedeth = body.unconfirmed_n_tx / 1000000000000000000;
     
      const balembedeth = new Discord.MessageEmbed()
  .setTitle(`DiscWallet |  Balance`)
  .setColor("#2F3137")
  .setDescription(`Here you will see all of your ETH and Official Denominations!\nETH Address: ${pubeth}`)
  .addField(`ETH:`, `${ethbal} ETH\nPending Balance (Incoming): ${pendingeth} ETH\nUnconfirmed Transactions: ${unconfirmedeth} ETH`)
  .addField(`Official Denominations:`, `Coming soon`)
  .addField(`Stats:`, `Total Sent: ${ttlseth} ETH\nTotal Recieved: ${ttlreth} ETH`)
  balembedeth.setTimestamp()
    message.channel.send(balembedeth)
      });
    }
  }             
};
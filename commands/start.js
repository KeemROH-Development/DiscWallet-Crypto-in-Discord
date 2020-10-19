const config = require("../config.json");
const db = require("quick.db");
const fs = require("fs")
const Discord = require("discord.js");
const cw = require('crypto-wallets');
module.exports = {
  name: "start",
  description: "start your journey!",
  aliases: [],
  usage: "d!start",
  cooldown: 1,
  guildOnly: false,
  admin: false,
  async execute(message, args, client) {
    let isstarted = db.fetch(`isstarted_${message.author.id}`);
    if (isstarted && args[0] != "eth".toLowerCase()) {
      return message.channel.send("Hello, you have already created a wallet, if you want to see your balance or see your address you may run the `d!bal` command, if you have misplaced your private key please run the d!private command!")
    } else if(!isstarted) {
       
      
      var bitcoinWallet = cw.generateWallet('BTC');
      let pub = bitcoinWallet.address
      let priv = bitcoinWallet.privateKey
      
          
       db.set(`public_${message.author.id}`, `${pub}`)
       db.set(`private_${message.author.id}`, `${priv}`)
       db.set(`isstarted_${message.author.id}`, "true")
       return message.channel.send("Hello, thank you for choosing DiscWallet! I'll DM you your wallet info and you can use the `d!bal` command to see your btc address or to see your balance in btc or USD!\n\nNote: If you did not get a dm with your credentials make sure you enable them then run: `d!private`").then(
       message.author.send(`Hello, thank you for choosing DiscWallet, here are your credentials:\nBitcoin Address: ${pub}\nPrivate Address (Import form): ${priv}\n\nYou can always see this again by running \`d!private\` to see how much BTC / USD is in your wallet run \`d!balance or d!bal\` ` )
       )
      
     
    } else if(args[0] === "eth".toLowerCase()) {
      let isstartedeth = db.fetch(`isstartedeth_${message.author.id}`)
      if(isstartedeth) return message.channel.send(`Hello, it seems you have already created an ETH wallet, if you want to see your credentials do \`d!private eth\` or if you want to see how much ETH you have do \`d!bal eth\`!`)
      var ethWallet = cw.generateWallet('ETH');
      let pubeth = ethWallet.address
      let priveth = ethWallet.privateKey
      
      fs.appendFile('PrivatesETH.txt', priveth+"\n", (err) => {
  	  if (err) throw err;
      console.log(`Added private key: ${priveth}`);
   
      
      db.set(`publiceth_${message.author.id}`, `${pubeth}`)
      db.set(`privateeth_${message.author.id}`, `${priveth}`)
      db.set(`isstartedeth_${message.author.id}`, "true")
        
      
        
      return message.channel.send("Hello, thank you for choosing DiscWallet! I'll DM you your wallet info and you can use the `d!bal eth` command to see your eth address or to see your balance in eth or USD!\n\nNote: If you did not get a dm with your credentials make sure you enable them then run: `d!private eth`").then(
       message.author.send(`Hello, thank you for choosing DiscWallet, here are your credentials:\Eth Address: ${pubeth}\nPrivate Address (Import form): ${priveth}\n\nYou can always see this again by running \`d!private eth\` to see how much ETH / USD is in your wallet run \`d!balance eth or d!bal eth\` ` )) 
       });
    }
  }
};

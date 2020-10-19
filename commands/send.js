const config = require("../config.json");
const db = require("quick.db");
const validate = require('bitcoin-address-validation');
const Discord = require("discord.js");
const needle = require("needle");

module.exports = {
  name: "send",
  description: "Send your bitcoin or ether",
  aliases: ["s"],
  usage: "d!send",
  cooldown: 1,
  guildOnly: false,
  admin: false,
  mustStart: true,
  async execute(message, args, client) {
   
  }
};
const Discord = require("discord.js")
const config = require("../config.json")
module.exports = async (client) => {
client.user.setActivity(`${config.prefix}help`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/example-url"
  });
  console.log(`logged in as ${client.user.tag}`);}

module.exports.event = {
    name: "ready"
}
const randomPuppy = require('random-puppy');
const Discord = require('discord.js')

module.exports = {
    name: 'meme',
    description: 'meme command',
    async run(message, args){
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your **meme** has been send from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
}

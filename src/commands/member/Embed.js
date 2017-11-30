const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class Embed extends Command {
  constructor(client) {
    super(client, {
      name: 'embed',
      group: 'member',
      memberName: 'embed',
      description: 'Embeds the text you provide.',
      examples: ['embed Embeds are cool.'],
      args: [
        {
          key: 'text',
          prompt: 'What text would you like the bot to embed?',
          type: 'string'
        }
      ]
    });
  }

  run(msg, args) {
    const embed = new RichEmbed()
      .setDescription(args.text)
      .setAuthor(msg.author.username, msg.author.displayAvatarURL)
      .setColor(0x00AE86)
      .setTimestamp();

    return msg.embed(embed);
  }
};

module.exports = Embed;
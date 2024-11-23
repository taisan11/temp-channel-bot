import { createBot, Intents } from '@discordeno/bot'

const bot = createBot({
  token: 'YOUR BOT TOKEN',
  intents: Intents.Guilds | Intents.GuildMessages, // Or other intents that you might needs.
  events: {
    ready: data => {
      bot.logger.info(`The shard ${data.shardId} is ready!`)
    },
  },
})

// You can add events after the createBot call if you prefer

bot.events.messageCreate = message => {
  // Do stuff with the message object ...
}

await bot.start()
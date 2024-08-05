/** enter owner number */
global.owner = ['6288232530478']
/** https://api.alyachan.pro/pricing */
global.APIs = {
   alya: 'https://api.alyachan.dev'
}
global.APIKeys = {
   'https://api.alyachan.dev': 'yourkey'
}
/** option setting */
global.set = {
   wm: `© Animbotz v${require('./package.json').version}`,
   footer: 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴍᴏᴏɴ',
   packname: 'Sticker By',
   author: 'nickdev v2 🤡'
}
/** enter your bot number to login using the code */
global.pairing = {
   state: false,
   number: 6288232530478
}
/** mongodb url */
global.mongouri = ''
/** enter your replit link, so it's active 24/7 */
global.replit_url = ''
/** the bigger it gets the harder it is to level up */
global.multiplier = 1000
/** maximum limit to send files */
global.max_upload = 70
/** maximum 2GB ram, do the math yourself */
global.ram_usage = 2100000000
/** function and scraper to make it more practical */
global.Func = new (require('./lib/functions'))
global.scrap = new (require('./lib/scrape'))
/** status message */
global.status = {
   wait: Func.Styles('Processing. . .'),
   invalid: Func.Styles('Invalid URL!'),
   wrong: Func.Styles('Wrong format!'),
   error: Func.Styles('Error occurred!'),
   premium: Func.Styles('This feature is only for premium users.'),
   admin: Func.Styles('This command is specific to Admins.'),
   botAdmin: Func.Styles('Make the bot admin to use this command.'),
   owner: Func.Styles('This command is for Owner only.'),
   mod: Func.Styles('This command is for Moderators only.'),
   group: Func.Styles('This command is Group specific.'),
   private: Func.Styles('This command is private chat only.'),
   register: Func.Styles('Please register first to use this command.'),
   game: Func.Styles('The game feature has not been activated.'),
   rpg: Func.Styles('The RPG feature has not been activated.'),
   restrict: Func.Styles('This feature is disabled')
}
/** rpg emoticon */
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         exp: '✉️',
         money: '💵',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🎁',
         mythic: '🗳️',
         legendary: '🗃️',
         pet: '🎁',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐎',
         cat: '🐈',
         dog: '🐕',
         fox: '🦊',
         petFood: '🍖',
         iron: '⛓️',
         gold: '👑',
         emerald: '💚',
      }
      let results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   },
}
/** reload file */
const fs = require('fs')
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright("Update 'config.js'"))
   delete require.cache[file]
   require(file)
})

var fs = require('fs')
var handler = async (msg, { 
client, text, command, usedPrefix
}) => {
var _timers = (604800000 - (new Date - user.lastweekly))
var timers = Func.clockString(_timers) 
if (new Date - user.lastweekly > 604800000) {
var bufer = await Func.resize(fs.readFileSync('./global/media/rpg/weekly.jpg'), 300, 150)
var buttons = await Func.duaButton('.daily','Daily','.monthly','Monthly')
client.sendImage(msg.from, bufer, `*δΉ W E E K L Y  -  C L A I M*

+ Rp 10.000.000 Money π΅
+ 1 Armor π₯
+ 2 Dog πΆ
+ 1 Fox π¦
+ 2 Uncommon crate π¦
+ 1 Diamond π
+ 5 Pet Food π
+ 10 String πΈοΈ
+ 2 Pet Crate πͺ€
`, msg, { asLocation: true, buttons: buttons, headerType: 4, footer: wm })
user.money += 10000000 * 1
user.armor += 1 * 1
user.dog += 2 * 1
user.fox += 1 * 1
user.uncommon += 2 * 1
user.diamond += 1 * 1
user.petFood += 5 * 1
user.pet += 2 * 1
user.string += 5 * 2
user.lastweekly = new Date * 1
} else {
client.reply(msg.from, `π© Kamu sudah melakukan weekly minggu ini, silahkan menunggu sampai minggu depan untuk melakukan claim lagi.\n\nTimeout : [ *${timers}* ]`, msg)
}
}
handler.tags = ['rpg']
handler.help = ['weekly']
handler.command = /^(weekly)$/i

module.exports = handler

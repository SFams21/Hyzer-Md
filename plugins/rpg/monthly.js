var fs = require('fs')
var handler = async (msg, { 
client, text, command, usedPrefix
}) => {
var _timers = (2592000000 - (new Date - user.lastmonthly))
var timers = Func.clockString(_timers) 
if (new Date - user.lastmonthly > 2592000000) {
var bufer = await Func.resize(fs.readFileSync('./global/media/rpg/monthly.jpg'), 300, 150)
var buttons = await Func.satuButton('.daily','Daily','.weekly','Weekly')
client.sendImage(msg.from, bufer, `*δΉ M O N T H L Y  -  C L A I M*

+ Rp 100.000.000 Money π΅
+ 50 Wood πͺ΅
+ 10 Potion π₯€
+ 15 Rock πͺ¨
+ 7 Emerald β¨οΈ
+ 20 String πΈοΈ
+ 1 Legendary Crate π
+ 5 Diamond π
+ 3 Pet Crate πͺ€
`, msg, { asLocation: true, buttons: buttons, headerType: 4, footer: wm })
user.money += 100000000 * 1
user.wood += 25 * 2
user.potion += 5 * 2
user.rock += 3 * 5
user.emerald += 7 * 1
user.string += 4 * 5
user.diamond += 5 * 1
user.legendary += 1 * 1
user.diamond += 5 * 1
user.pet += 3 * 1
user.lastmonthly = new Date * 1
} else {
client.reply(msg.from, `π© Kamu sudah melakukan monthly bulan ini, silahkan menunggu sampai bulan depan untuk melakukan monthy lagi.\n\nTimeout : [ *${timers}* ]`, msg)
}
}
handler.tags = ['rpg']
handler.help = ['monthly']
handler.command = /^(monthly)$/i

module.exports = handler

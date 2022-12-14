let handler = msg => msg
handler.before = function (msg) {
var budy = (typeof msg.text == 'string' ? msg.text : '')
var extract = budy ? Func.generateLink(budy) : null
if (extract && !msg.isCommand) {
if (db.data.chats[msg.from].autodl && !msg.isBaileys) {
// regex
var regexTik = /^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/;
var regexIg = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/;
var regexYt = /^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
// detect
var instagram = extract.filter(v => Func.igFix(v).match(regexIg))
var tiktok = extract.filter(v => Func.ttFix(v).match(regexTik))
var youtube = extract.filter(v => v.match(regexYt))
// tiktok
if (tiktok != 0) {
this.sendReact(msg.from, 'π', msg.key)
tiktok.map(async url => {
require('../../system/tiktok').tiktok(url).then(async v => {
var capt = `*δΉ T I K T O K - D O W N L O A D E R*

     *β¦ Caption :* ${v.title}
     *β¦ Creator :* ${v.author}
     *β¦ Fetching :* ${Func.speedNow()}
`
this.sendVideo(msg.from, v.nowm, capt, msg, { isUrl:true })
})
})
}
// instagram
if (instagram != 0) {
this.sendReact(msg.from, 'π', msg.key)
instagram.map(async url => {
try {
Scraper.instagram(url).then(res => {
for (let i = 0; i < res.results_number; i++) {
let isVid = res.url_list[i].includes('.mp4') ? true : false
if (isVid) {
this.sendVideo(msg.from, res.url_list[i], `*π Fetching : ${Func.speedNow()}*`, msg, { isUrl:true })
} else {
this.sendImage(msg.from, res.url_list[i], `*π Fetching : ${Func.speedNow()}*`, msg, { isUrl:true })
}}
})
} catch(e) {
this.sendReact(msg.from, 'β', msg.key)
msg.reply('*π© Gagal mengunduh media.*')
throw e
}
})
}
// youtube 
if (youtube != 0) {
this.sendReact(msg.from, 'π', msg.key)
youtube.map(async url => {
require('caliph-api').downloader.yt.mp4(url).then(async v => {
client.sendVideo(msg.from, v.result.result, `*δΉ Y O U T U B E - V I D E O*\n\n   *β¦ Title :* ${v.result.title}\n   *β¦ Quality :* ${v.result.quality}\n   *β¦ Size :* ${v.result.size}\n   *β¦ Duration :* ${v.result.duration}\n   *β¦ Channel :* ${v.result.channel}`, msg, { isUrl:true })
})
})
}

}}
return true
}

module.exports = handler

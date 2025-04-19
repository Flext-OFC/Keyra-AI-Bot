import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
/*let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}*/
let { exp, cookies, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const vid = ['https://files.catbox.moe/10zyi3.mp4', 'https://files.catbox.moe/10zyi3.mp4', 'https://files.catbox.moe/10zyi3.mp4']

let menu = `✦·┈๑⋅⋯🌹⋯⋅๑┈·✦
₊‧.°.⋆✮⋆.°.‧₊(꯭𝐍𝐞𝐲𝐫𝐚-𝐀𝐈-𝐁𝐨𝐭𓏲֟፝₊✮⋆.°.‧₊
⁺˚⋆｡°✩₊✩°｡⋆˚⁺⁺˚⋆｡°✩₊✩°｡⋆˚⁺

“ Hola *${taguser}* soy *Neyra-AI-Bot*, ${saludo} ”

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌹⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗠𝗘𝗡𝗨-𝗕𝗢𝗧໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌹⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ *LinkGroup:* https://chat.whatsapp.com/FFtEOPfuciI0Qq1bCOMtbJ
├ׁ̟̇⁑❧ *🄲ʀᴇᴀᴅᴏʀ:* Flext-OFC
├ׁ̟̇⁑❧ *🄼ᴏᴅᴏ:* Público
├ׁ̟̇⁑❧ *🄻ɪʙʀᴇʀɪᴀ:* Baileys
├ׁ̟̇⁑❧ *🄱ᴏᴛ:* ${(conn.user.jid == global.conn.user.jid ? 'Oficial' : 'SubBot')}
├ׁ̟̇⁑❧ *🅃ɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:* ${uptime}
├ׁ̟̇⁑❧ *🅄sᴜᴀʀɪᴏs:* ${totalreg}
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬💫⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬💫⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ *🄲ʟɪᴇɴᴛᴇ:* ${nombre}
├ׁ̟̇⁑❧ *🄿ᴀɪs:* ${global.userNationality}
├ׁ̟̇⁑❧ *🄴xᴘ:* ${exp}
├ׁ̟̇⁑❧ *🄶ᴀʟʟᴇᴛᴀs:* ${cookies}
├ׁ̟̇⁑❧ *🄽ɪᴠᴇʟ:* ${level}
├ׁ̟̇⁑❧ *🅁ᴀɴɢᴏ:* ${role}
╚━━━━━━ • ✨ • ━━━━━━╝

*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*

        *𝐋𝐈𝐒𝐓 𝐃𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* 

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗜𝗡𝗙𝗢×𝗕𝗢𝗧 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .formarpareja5
├ׁ̟̇⁑❧ .estado
├ׁ̟̇⁑❧ .host
├ׁ̟̇⁑❧ .hosting
├ׁ̟̇⁑❧ .botreglas
├ׁ̟̇⁑❧ .hornymenu
├ׁ̟̇⁑❧ .menu
├ׁ̟̇⁑❧ .menu2
├ׁ̟̇⁑❧ .runtime
├ׁ̟̇⁑❧ .script
├ׁ̟̇⁑❧ .staff
├ׁ̟̇⁑❧ .menulista
├ׁ̟̇⁑❧ .blocklist
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .githubsearch
├ׁ̟̇⁑❧ .google <búsqueda>
├ׁ̟̇⁑❧ .mercadolibre <búsqueda>
├ׁ̟̇⁑❧ .imagen <query>
├ׁ̟̇⁑❧ .pinterest
├ׁ̟̇⁑❧ .tiktoksearch <txt>
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗝𝗨𝗘𝗚𝗢𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .69 @tag
├ׁ̟̇⁑❧ .abrazar <@usuario>
├ׁ̟̇⁑❧ .acertijo
├ׁ̟̇⁑❧ .agarrar @tag
├ׁ̟̇⁑❧ .anal @tag
├ׁ̟̇⁑❧ .sonrojarse @tag
├ׁ̟̇⁑❧ .gay <@tag> | <nombre>
├ׁ̟̇⁑❧ .lesbiana <@tag> | <nombre>
├ׁ̟̇⁑❧ .pajero <@tag> | <nombre>
├ׁ̟̇⁑❧ .pajera <@tag> | <nombre>
├ׁ̟̇⁑❧ .puto <@tag> | <nombre>
├ׁ̟̇⁑❧ .puta <@tag> | <nombre>
├ׁ̟̇⁑❧ .manco <@tag> | <nombre>
├ׁ̟̇⁑❧ .manca <@tag> | <nombre>
├ׁ̟̇⁑❧ .rata <@tag> | <nombre>
├ׁ̟̇⁑❧ .prostituta <@tag> | <nombre>
├ׁ̟̇⁑❧ .prostituto <@tag> | <nombre>
├ׁ̟̇⁑❧ .apostar *<cantidad>*
├ׁ̟̇⁑❧ .chupartetas @tag
├ׁ̟̇⁑❧ .consejo
├ׁ̟̇⁑❧ .cum @tag
├ׁ̟̇⁑❧ .dance *<@user>*
├ׁ̟̇⁑❧ .formarpareja5
├ׁ̟̇⁑❧ .abrazar @tag
├ׁ̟̇⁑❧ .violar @tag
├ׁ̟̇⁑❧ .dormir @tag
├ׁ̟̇⁑❧ .lamber @tag
├ׁ̟̇⁑❧ .enamorada @tag
├ׁ̟̇⁑❧ .mamada @tag
├ׁ̟̇⁑❧ .meme
├ׁ̟̇⁑❧ .violar @tag
├ׁ̟̇⁑❧ .nombreninja *<texto>*
├ׁ̟̇⁑❧ .acariciar @tag
├ׁ̟̇⁑❧ .penetrar @user
├ׁ̟̇⁑❧ .personalidad
├ׁ̟̇⁑❧ .piropo
├ׁ̟̇⁑❧ .pokedex *<pokemon>*
├ׁ̟̇⁑❧ .pucheros @tag
├ׁ̟̇⁑❧ .pregunta
├ׁ̟̇⁑❧ .golpear @tag
├ׁ̟̇⁑❧ .reto
├ׁ̟̇⁑❧ .ruleta *<cantidad> <color>*
├ׁ̟̇⁑❧ .rusa @tag
├ׁ̟̇⁑❧ .triste @tag
├ׁ̟̇⁑❧ .scared @tag
├ׁ̟̇⁑❧ .sexo @tag
├ׁ̟̇⁑❧ .ship
├ׁ̟̇⁑❧ .love
├ׁ̟̇⁑❧ .timida @tag
├ׁ̟̇⁑❧ .simi
├ׁ̟̇⁑❧ .bot
├ׁ̟̇⁑❧ .dormir @tag
├ׁ̟̇⁑❧ .dormir @tag
├ׁ̟̇⁑❧ .top *<texto>*
├ׁ̟̇⁑❧ .violar @tag
├ׁ̟̇⁑❧ .tijeras @tag
├ׁ̟̇⁑❧ .zodiac *2002 02 25*
├ׁ̟̇⁑❧ .cancion
├ׁ̟̇⁑❧ .math <mode>
├ׁ̟̇⁑❧ .ppt
├ׁ̟̇⁑❧ .slot <apuesta>
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗥𝗢𝗟𝗟𝗪𝗔𝗜𝗙𝗨 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .character
├ׁ̟̇⁑❧ .confirmar
├ׁ̟̇⁑❧ .darrw @usuario <personaje>
├ׁ̟̇⁑❧ .guardar <personaje>
├ׁ̟̇⁑❧ .sacar <personaje>
├ׁ̟̇⁑❧ .obtenidos
├ׁ̟̇⁑❧ .robarpersonaje
├ׁ̟̇⁑❧ .roll
├ׁ̟̇⁑❧ .toprw
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗦𝗘𝗥𝗕𝗢𝗧 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .jadibot
├ׁ̟̇⁑❧ .serbot
├ׁ̟̇⁑❧ .bots
├ׁ̟̇⁑❧ .deletebot
├ׁ̟̇⁑❧ .pausarai
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ ×𝗥×𝗣×𝗚× ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .bank
├ׁ̟̇⁑❧ .cookies
├ׁ̟̇⁑❧ .crimen
├ׁ̟̇⁑❧ .daily
├ׁ̟̇⁑❧ .claim
├ׁ̟̇⁑❧ .depositar
├ׁ̟̇⁑❧ .lb
├ׁ̟̇⁑❧ .levelup
├ׁ̟̇⁑❧ .minar
├ׁ̟̇⁑❧ .retirar
├ׁ̟̇⁑❧ .rob2
├ׁ̟̇⁑❧ .rob
├ׁ̟̇⁑❧ .addprem [@user] <days>
├ׁ̟̇⁑❧ .slut
├ׁ̟̇⁑❧ .trabajar
├ׁ̟̇⁑❧ .transfer [tipo] [cantidad] [@tag]
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .profile
├ׁ̟̇⁑❧ .unreg
├ׁ̟̇⁑❧ .reg
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ ×𝗘×𝗫×𝗣× ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .bal
├ׁ̟̇⁑❧ .daily
├ׁ̟̇⁑❧ .Buy
├ׁ̟̇⁑❧ .Buyall
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .toimg (reply)
├ׁ̟̇⁑❧ .qc
├ׁ̟̇⁑❧ .stiker <img>
├ׁ̟̇⁑❧ .sticker <url>
├ׁ̟̇⁑❧ .wm <packname>|<author>
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗔𝗡𝗜𝗠𝗘𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .animelink
├ׁ̟̇⁑❧ .akira
├ׁ̟̇⁑❧ .akiyama
├ׁ̟̇⁑❧ .anna
├ׁ̟̇⁑❧ .asuna
├ׁ̟̇⁑❧ .ayuzawa
├ׁ̟̇⁑❧ .boruto
├ׁ̟̇⁑❧ .chiho
├ׁ̟̇⁑❧ .chitoge
├ׁ̟̇⁑❧ .deidara
├ׁ̟̇⁑❧ .erza
├ׁ̟̇⁑❧ .elaina
├ׁ̟̇⁑❧ .eba
├ׁ̟̇⁑❧ .emilia
├ׁ̟̇⁑❧ .hestia
├ׁ̟̇⁑❧ .hinata
├ׁ̟̇⁑❧ .inori
├ׁ̟̇⁑❧ .isuzu
├ׁ̟̇⁑❧ .itachi
├ׁ̟̇⁑❧ .itori
├ׁ̟̇⁑❧ .kaga
├ׁ̟̇⁑❧ .kagura
├ׁ̟̇⁑❧ .kaori
├ׁ̟̇⁑❧ .keneki
├ׁ̟̇⁑❧ .kotori
├ׁ̟̇⁑❧ .kurumi
├ׁ̟̇⁑❧ .madara
├ׁ̟̇⁑❧ .mikasa
├ׁ̟̇⁑❧ .miku
├ׁ̟̇⁑❧ .minato
├ׁ̟̇⁑❧ .naruto
├ׁ̟̇⁑❧ .nezuko
├ׁ̟̇⁑❧ .sagiri
├ׁ̟̇⁑❧ .sasuke
├ׁ̟̇⁑❧ .sakura
├ׁ̟̇⁑❧ .cosplay
├ׁ̟̇⁑❧ .infoanime
├ׁ̟̇⁑❧ .lolice
├ׁ̟̇⁑❧ .waifu
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .delvn <text>
├ׁ̟̇⁑❧ .delmsg <text>
├ׁ̟̇⁑❧ .delimg <text>
├ׁ̟̇⁑❧ .delsticker <text>
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗙𝗜𝗫𝗠𝗘𝗡𝗦𝗔𝗝𝗘 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .dsowner
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗚𝗥𝗨𝗣𝗢𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .group abrir / cerrar
├ׁ̟̇⁑❧ .delete
├ׁ̟̇⁑❧ .setppgroup
├ׁ̟̇⁑❧ .rentar2
├ׁ̟̇⁑❧ .setwelcome
├ׁ̟̇⁑❧ .demote
├ׁ̟̇⁑❧ .encuesta <text|text2>
├ׁ̟̇⁑❧ .hidetag
├ׁ̟̇⁑❧ .infogrupo
├ׁ̟̇⁑❧ .invite *<numero>*
├ׁ̟̇⁑❧ .kick
├ׁ̟̇⁑❧ .link
├ׁ̟̇⁑❧ .promote
├ׁ̟̇⁑❧ .rentar
├ׁ̟̇⁑❧ .tagall *<mesaje>*
├ׁ̟̇⁑❧ .invocar *<mesaje>*
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗢𝗡 / 𝗢𝗙𝗙 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .enable <option>
├ׁ̟̇⁑❧ .disable <option>
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .facebook
├ׁ̟̇⁑❧ .fb
├ׁ̟̇⁑❧ .play
├ׁ̟̇⁑❧ .playvid
├ׁ̟̇⁑❧ .gitclone *<url git>*
├ׁ̟̇⁑❧ .instagram
├ׁ̟̇⁑❧ .ig
├ׁ̟̇⁑❧ .imagen <query>
├ׁ̟̇⁑❧ .mediafire <url>
├ׁ̟̇⁑❧ .apkmod
├ׁ̟̇⁑❧ .ytmp3doc
├ׁ̟̇⁑❧ .ytmp4doc
├ׁ̟̇⁑❧ .spotify
├ׁ̟̇⁑❧ .tiktok
├ׁ̟̇⁑❧ .tw
├ׁ̟̇⁑❧ .ytmp4 *<url youtube>*
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .toanime
├ׁ̟̇⁑❧ .tts <lang> <teks>
├ׁ̟̇⁑❧ .imagen <query>
├ׁ̟̇⁑❧ .remini
├ׁ̟̇⁑❧ .hd
├ׁ̟̇⁑❧ .enhance
├ׁ̟̇⁑❧ .nuevafotochannel
├ׁ̟̇⁑❧ .nosilenciarcanal
├ׁ̟̇⁑❧ .silenciarcanal
├ׁ̟̇⁑❧ .noseguircanal
├ׁ̟̇⁑❧ .seguircanal
├ׁ̟̇⁑❧ .avisoschannel
├ׁ̟̇⁑❧ .resiviravisos
├ׁ̟̇⁑❧ .inspect
├ׁ̟̇⁑❧ .inspeccionar
├ׁ̟̇⁑❧ .eliminarfotochannel
├ׁ̟̇⁑❧ .reactioneschannel
├ׁ̟̇⁑❧ .reaccioneschannel
├ׁ̟̇⁑❧ .nuevonombrecanal
├ׁ̟̇⁑❧ .nuevadescchannel
├ׁ̟̇⁑❧ .readvo
├ׁ̟̇⁑❧ .infobot
├ׁ̟̇⁑❧ .speed
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .creador
├ׁ̟̇⁑❧ .owner
├ׁ̟̇⁑❧ .dash
├ׁ̟̇⁑❧ .dashboard
├ׁ̟̇⁑❧ .views
├ׁ̟̇⁑❧ .database
├ׁ̟̇⁑❧ .usuarios
├ׁ̟̇⁑❧ .user
├ׁ̟̇⁑❧ .ds
├ׁ̟̇⁑❧ .fixmsgespera
├ׁ̟̇⁑❧ .infobot
├ׁ̟̇⁑❧ .speed
├ׁ̟̇⁑❧ .ping
├ׁ̟̇⁑❧ .sistema
├ׁ̟̇⁑❧ .speed
├ׁ̟̇⁑❧ .speedtest
├ׁ̟̇⁑❧ .groups
├ׁ̟̇⁑❧ .grouplist
├ׁ̟̇⁑❧ .reportar
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗡𝗦𝗙𝗪 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .nsfwloli
├ׁ̟̇⁑❧ .nsfwfoot
├ׁ̟̇⁑❧ .nsfwass
├ׁ̟̇⁑❧ .nsfwbdsm
├ׁ̟̇⁑❧ .nsfwcum
├ׁ̟̇⁑❧ .nsfwero
├ׁ̟̇⁑❧ .nsfwfemdom
├ׁ̟̇⁑❧ .nsfwfoot
├ׁ̟̇⁑❧ .nsfwglass
├ׁ̟̇⁑❧ .nsfworgy
├ׁ̟̇⁑❧ .yuri
├ׁ̟̇⁑❧ .yuri2
├ׁ̟̇⁑❧ .yaoi
├ׁ̟̇⁑❧ .yaoi2
├ׁ̟̇⁑❧ .panties
├ׁ̟̇⁑❧ .tetas
├ׁ̟̇⁑❧ .booty
├ׁ̟̇⁑❧ .ecchi
├ׁ̟̇⁑❧ .furro
├ׁ̟̇⁑❧ .hentai
├ׁ̟̇⁑❧ .trapito
├ׁ̟̇⁑❧ .imagenlesbians
├ׁ̟̇⁑❧ .pene
├ׁ̟̇⁑❧ .porno
├ׁ̟̇⁑❧ .randomxxx
├ׁ̟̇⁑❧ .pechos
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .enable <option>
├ׁ̟̇⁑❧ .disable <option>
├ׁ̟̇⁑❧ .addprem [@user] <days>
├ׁ̟̇⁑❧ >
├ׁ̟̇⁑❧ =>
├ׁ̟̇⁑❧ .copia
├ׁ̟̇⁑❧ .broadcastgroup <teks>
├ׁ̟̇⁑❧ .bcgc <teks>
├ׁ̟̇⁑❧ .bcgc2
├ׁ̟̇⁑❧ .broadcast <teks>
├ׁ̟̇⁑❧ .bc <teks>
├ׁ̟̇⁑❧ .cheat
├ׁ̟̇⁑❧ .cleartmp
├ׁ̟̇⁑❧ .delprem <@user>
├ׁ̟̇⁑❧ .dsowner
├ׁ̟̇⁑❧ $
├ׁ̟̇⁑❧ .fetch
├ׁ̟̇⁑❧ .get
├ׁ̟̇⁑❧ .getplugin *<nombre>*
├ׁ̟̇⁑❧ .nuevabiobot <teks>
├ׁ̟̇⁑❧ .nuevafotobot *<imagen>*
├ׁ̟̇⁑❧ .nuevonombrebot <teks>
├ׁ̟̇⁑❧ .prefix [prefix]
├ׁ̟̇⁑❧ .resetprefix
├ׁ̟̇⁑❧ .restart
├ׁ̟̇⁑❧ .saveplugin nombre
├ׁ̟̇⁑❧ .update
├ׁ̟̇⁑❧ .actualizar
├ׁ̟̇⁑❧ >
├ׁ̟̇⁑❧ =>
├ׁ̟̇⁑❧ .resetpersonajes
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗦𝗧𝗔𝗙𝗙 𝗞𝗘𝗬𝗥𝗔 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .autoadmin
├ׁ̟̇⁑❧ .banchat
├ׁ̟̇⁑❧ .banuser <@tag> <razón>
├ׁ̟̇⁑❧ .grupocrear <nombre>
├ׁ̟̇⁑❧ .ip <alamat ip>
├ׁ̟̇⁑❧ .join <link>
├ׁ̟̇⁑❧ .unbanchat
├ׁ̟̇⁑❧ .unbanuser <@tag>
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗔𝗨𝗗𝗜𝗢𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .bass [vn]
├ׁ̟̇⁑❧ .blown [vn]
├ׁ̟̇⁑❧ .deep [vn]
├ׁ̟̇⁑❧ .earrape [vn]
├ׁ̟̇⁑❧ .fast [vn]
├ׁ̟̇⁑❧ .fat [vn]
├ׁ̟̇⁑❧ .nightcore [vn]
├ׁ̟̇⁑❧ .reverse [vn]
├ׁ̟̇⁑❧ .robot [vn]
├ׁ̟̇⁑❧ .slow [vn]
├ׁ̟̇⁑❧ .smooth [vn]
├ׁ̟̇⁑❧ .tupai [vn]
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ ×𝗔×𝗜× ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .bard
├ׁ̟̇⁑❧ .chatgpt <texto>
├ׁ̟̇⁑❧ .ia <texto>
├ׁ̟̇⁑❧ .dalle
├ׁ̟̇⁑❧ .remini
╚━━━━━━ • ✨ • ━━━━━━╝

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🌹⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦 ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🌹
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇⁑❧ .togifaud
├ׁ̟̇⁑❧ .tourl
├ׁ̟̇⁑❧ .tovideo
╚━━━━━━ • ✨ • ━━━━━━╝

> © 𝐌𝐨𝐨𝐧𝐠𝐋𝐢𝐧𝐠𝐡𝐭 ❀`.trim()

await conn.sendMessage(m.chat, { video: { url: vid.getRandom() }, caption: menu, contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: '⏤͟͞ू⃪ ፝͜🌹𝑲𝑬𝒀𝑹𝑨-𝑨𝑰-𝑩𝑶𝑻🍧✰⃔࿐', body: dev, thumbnailUrl: perfil, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
}, }, gifPlayback: true, gifAttribution: 0 }, { quoted: null })
await m.react(emojis)    

} catch (e) {
await m.reply(`✘ Ocurrió un error al enviar el menú\n\n${e}`)
await m.react(error)
}}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

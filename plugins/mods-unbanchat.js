let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍭 *¡ESTE CHAT NO ESTÁ REGISTRADO!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '📌 *¡ɴᴇʏʀᴀ-ᴀɪ-ʙᴏᴛ ɴᴏ ᴇsᴛᴀ ʙᴀɴᴇᴀᴅᴀ ᴇɴ ᴇsᴛᴇ CHAT!*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '✨ *¡ɴᴇʏʀᴀ-ᴀɪ-ʙᴏᴛ ʏᴀ ғᴜᴇ ᴅᴇsʙᴀɴᴇᴀᴅᴀ ᴇɴ ᴇsᴛᴇ ᴄʜᴀᴛ!*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['mods'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.mods = true 
//handler.group = true

export default handler
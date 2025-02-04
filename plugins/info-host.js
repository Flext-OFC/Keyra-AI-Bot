let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `✅ *🌠 𝗔𝗞𝗜𝗥𝗔𝗫 - 𝗛𝗢𝗦𝗧 🛩️* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *OlympusHost*, un hosting de calidad con servidores dedicados y precios por debajo de 1USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

📈 \`\`\`Información del Host\`\`\`

🛩️ *Home:* 
• https://home.akirax.net

🌠 *Console:*
• https://console.akirax.net

✨ *Canal:* 
•  *https://whatsapp.com/channel/0029Vb3Ocrs7IUYNQktqeE11*

📌 *Contacto (Matias-crypto)*
https://wa.me/5491164123932

> *Únete a está comunidad y disfruta de un servicio de calidad :D*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🛩️ 𝑨𝑲𝑰𝑹𝑨𝑿 - 𝑯𝑶𝑺𝑻 💥`,
body: `⚜️ Super Hosting 24/7 ⚜️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://files.catbox.moe/t59roe.jpg', 
sourceUrl: 'https://console.akirax.net'}}},
{ quoted: fkontak})
}
handler.tags =['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'olympus', 'olympushost', 'hosting']
export default handler
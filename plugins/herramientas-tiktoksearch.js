import axios from 'axios';
const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  generateWAMessageContent,
  getDevice
} = (await import("@whiskeysockets/baileys")).default;

let handler = async (message, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(message.chat, "❕️ *¿QUÉ BÚSQUEDA DESEA REALIZAR EN TIKTOK?*", message, rcanal);
  }

  async function createVideoMessage(url) {
    const { videoMessage } = await generateWAMessageContent({
      video: { url }
    }, {
      upload: conn.waUploadToServer
    });
    return videoMessage;
  }

  try {
    conn.reply(message.chat, '✨️ *ENVIANDO SUS RESULTADOS..*', message, {
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          showAdAttribution: true,
          title: '♡  ͜ ۬︵࣪᷼⏜݊᷼𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴⏜࣪᷼︵۬ ͜ ',
          body: '𝐍𝐞𝐲𝐫𝐚-𝐀𝐈-𝐁𝐨𝐭',
          previewType: 0,
          thumbnail: logo5,
          sourceUrl: cn
        }
      }
    });

    let results = [];
    let { data } = await axios.get("https://rest.codescript.my/api/ttsearch?q=" + encodeURIComponent(text));
    let topResult = data;

    results.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: titulowm }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '' + topResult.title,
        hasMediaAttachment: true,
        videoMessage: await createVideoMessage(topResult.video_url)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
    });

    const messageContent = generateWAMessageFromContent(message.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: "✨️ RESULTADO DE: " + text
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "𝐅𝐥𝐞𝐱𝐭𝐎𝐅𝐂"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...results]
            })
          })
        }
      }
    }, {
      quoted: message
    });

    await conn.relayMessage(message.chat, messageContent.message, {
      messageId: messageContent.key.id
    });
  } catch (error) {
    console.error(error);
    conn.reply(message.chat, `❌️ *OCURRIÓ UN ERROR:* ${error.message}`, message);
  }
};

handler.help = ["tiktoksearch <txt>"];
handler.estrellas = 1;
handler.group = true;
handler.register = true;
handler.tags = ["buscador"];
handler.command = ["tiktoksearch", "tts", "tiktoks"];

export default handler;
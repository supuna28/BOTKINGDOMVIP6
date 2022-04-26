let handler =  m => m.reply(`
╭─「 Donate 」
│ • 🥰 JOIN OUR MAIN GROUP 
https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

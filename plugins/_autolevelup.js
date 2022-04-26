import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
ලෙවල් අප් විය 🥰!
*${before}* -> *${user.level}*
සොයාගන්න *.profile* යොදාගන්න 😍
	`.trim())
    }
}
export const disabled = true
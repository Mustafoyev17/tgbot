const { Telegraf, Markup } = require('telegraf');
const PORT = 4444;

// Bot tokeningizni bu yerga yozing
const bot = new Telegraf('7665447567:AAGbwFY7DgFkXcU4OQRYCdidI-2ItNEnQWQ');

// Start komandasi
bot.start((ctx) => {
  ctx.reply(
    'Quyidagi tugmalardan birini tanlang:',
    Markup.inlineKeyboard([
      [Markup.button.callback("Mening So'zlarim", "custom_message")],
      [Markup.button.callback('Instagram', 'instagram')],
      [Markup.button.callback('YouTube', 'youtube')],
    ])
  );
});

// Tugmalarni boshqarish
bot.action('custom_message', (ctx) => {
  ctx.reply("Bu mening so'zlarim: Kontent olib borishimda katta hissangizni qoshayotganingiz uchun raxmat 😊");
});

bot.action('instagram', (ctx) => {
  ctx.reply("Instagram kanalimiz: https://www.instagram.com/youtube_tmeverest/");
});

bot.action('youtube', (ctx) => {
  ctx.reply("YouTube kanalimiz: https://www.youtube.com/channel/UCEUBXZvCs_cgBdC88cymIGQ");
});

// Botni ishga tushirish
bot.launch().then(() => {
  console.log("Bot muvaffaqiyatli ishga tushdi!");
});

// Tugatishda xavfsiz to'xtatish uchun
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
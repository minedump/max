// app/api/telegram/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, message } = body;

const text = `
📋 *Новая задача*

👤 *Имя:* ${name}
🏢 *Компания:* ${company || 'Не указана'}
📞 *Телефон:* ${phone}
📧 *E-mail:* ${email}

📝 *Текст задачи:*
${message}

🕐 *Дата и время:* ${new Date().toLocaleString('ru-RU')}
`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.description || 'Ошибка отправки сообщения');
    }
    return NextResponse.json({ success: true, message: 'Отправлено в Telegram' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Ошибка отправки сообщения' },
      { status: 500 }
    );
  }
}
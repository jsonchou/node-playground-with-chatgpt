import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  baseURL: "http://localhost:3040/v1",
});

try {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `
  translate this json segment from zh-CN to en: 

  "Kanban_done_kanban": {
    "message": "展示 「Done」 Kanban"
  },
  "Kanban_in_progress_kanban": {
    "message": "展示 「In Progress」 Kanban"
  },
  "Task_name": {
    "message": "任务名称"
  },
  "Close": {
    "message": "关闭"
  },
  "Color": {
    "message": "色彩"
  },
  "Priority": {
    "message": "优先级"
  },
  "Widget": {
    "message": "小部件"
  },
  "Mode": {
    "message": "模式"
  },
  "Full_size": {
    "message": "完整"
  },
  "Mini_size": {
    "message": "迷你"
  }
  
  `,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  console.log(chatCompletion.choices[0].message.content);
} catch (err) {
  console.err("response error", err);
}

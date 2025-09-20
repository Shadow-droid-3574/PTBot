import { Queue, Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL);

const queue = new Queue("jobs", { connection });

const worker = new Worker("jobs", async job => {
  console.log("Processing job", job.id, job.name, job.data);
  // Example: heavy image processing, calling LLM, or sending files to Telegram
  // You can call bot-api internal HTTP endpoints for sending messages
  // axios.post(`${process.env.BOT_API_URL}/internal/send`, {chat_id, text})
}, { connection });

worker.on("completed", job => console.log(`Job ${job.id} completed`));
worker.on("failed", (job, err) => console.error(`Job ${job.id} failed`, err));

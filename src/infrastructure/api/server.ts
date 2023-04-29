import express from 'express';
import chatbotRoutes from './chatbot.routes';

const app = express();

app.use(express.json());
app.use('/api/chatbot', chatbotRoutes);

export default app;

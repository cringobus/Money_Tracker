import express from 'express';
import user from './routes/user.route.js'
import transaction from './routes/transaction.route.js'
const app = express();
app.use(express.json())

app.use('/api/v1/access', user)
app.use('/api/v1/transactions', transaction)

export default app;
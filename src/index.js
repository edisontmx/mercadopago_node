import express from "express";
import paymentRoutes from './routes/payment.routes.js'
const app = express()

app.use(paymentRoutes);

app.listen(3000)

console.log('server on port', 3000)
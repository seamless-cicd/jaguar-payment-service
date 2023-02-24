import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'You have reached the Jaguar payment service. Please send a POST request to /payment (no body required)!!!'
    );
});

app.get('/payment', (req, res) => {
  res.status(200).send({
    message: 'The payment for protection is due',
    amountDue: 1000,
  });
});

app.post('/payment', (req, res) => {
  res.status(200).send({
    message:
      'You have paid protection money to the Jaguars. Your safety is guaranteed for now!',
    amountPaid: 1000,
  });
});

export default app;

import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'You have reached the Jaguar payment service. Please send a POST request to /payment (no body required).'
    );
});

app.post('/payment', (req, res) => {
  res.status(200).send({
    message:
      'You have paid protection money to the Jaguars. Your safety is guaranteed for now.',
    amoundPaid: 420,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

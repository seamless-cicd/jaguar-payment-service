import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('responds with a message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'You have reached the Jaguar payment service. Please send a POST request to /payment (no body required)!!'
    );
  });

  // EXAMPLE TEST FAILURE
  // it('fails a test', async () => {
  //   const response = await request(app).get('/');
  //   expect(response.statusCode).toBe(200);
  //   expect(response.text).toBe(
  //     'You have reached the Panther payment service. Please send a POST request to /payment (no body required).'
  //   );
  // });
});

describe('POST /payment', () => {
  it('responds with a message', async () => {
    const response = await request(app).post('/payment');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      'You have paid protection money to the Jaguars. Your safety is guaranteed for now!'
    );
  });

  it('responds with a payment amount', async () => {
    const response = await request(app).post('/payment');
    expect(response.statusCode).toBe(200);
    expect(response.body.amountPaid).toBe(1000);
  });
});

describe('GET /payment', () => {
  it('responds with a message', async () => {
    const response = await request(app).get('/payment');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('The payment for protection is due');
    // expect(response.body.paymentAmount).toBe(1000);
  });

  it('responds with amount due', async () => {
    const response = await request(app).get('/payment');
    expect(response.statusCode).toBe(200);
    expect(response.body.amountDue).toBe(1000);
  });
});

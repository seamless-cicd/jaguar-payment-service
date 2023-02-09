import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('responds with a message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'You have reached the Jaguar payment service. Please send a POST request to /payment (no body required).'
    );
  });
});

import request from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
  test('It should responds with a JSON object of success and msg', async (done) => {
    try {
      const response = await request(app).get('/api');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success');
      done();
    } catch (err) {
      done(err);
    }
  });
});

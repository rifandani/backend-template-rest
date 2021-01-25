import request from 'supertest';
import app from '../src/app';

describe('GET /api/users`', () => {
  test('It should respond with a JSON array of users', async (done) => {
    try {
      const response = await request(app).get('/api/users');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(['success']);
      expect(response.body.users.length).toBeGreaterThan(0);
      expect(response.body.users).toContain('Rizeki');
      done();
    } catch (err) {
      done(err);
    }
  });
});

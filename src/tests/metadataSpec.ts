import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing the metadata endpoint', () => {
  it('should return a 200 status code', async () => {
    const response = await request.get('/api/metadata?filename=sample');
    expect(response.status).toBe(200);
  });
  it('should return the correct metadata', async () => {
    const response = await request.get('/api/metadata?filename=sample');
    expect(response.text).toBe('Width: 300, Height: 300, Format: jpeg');
  });
  it('should return a 404 error', async () => {
    const response = await request.get('/api/metadata?filename=error');
    expect(response.status).toBe(404);
  });
});

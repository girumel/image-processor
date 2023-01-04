import app from '../index';
import path from 'path';
import fs from 'fs';
import supertest from 'supertest';
import sharp from 'sharp';

const request = supertest(app);

// test suite for the resize endpoint

describe('Testing the resize endpoint', () => {
  // test case for a successful resize
  it('should return a 200 status code', async () => {
    const response = await request.get(
      '/api/resize?filename=sample&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  // test case for a resize that doesn't exist
  it('should return a 404 error', async () => {
    const response = await request.get(
      '/api/resize?filename=invalid&width=200&height=200'
    );
    expect(response.status).toBe(404);
    expect(response.text).toBe('Image not found');
  });
});

// test suite for the functionality of image resizing process
// - remove the image if it exists
// - resize the image
// - check its dimensions

describe('Testing the resize functionality', () => {
  const resizedImage = path.resolve(`./images/thumbs/sample_200x200.jpg`);
  it('should remove the image if it exists', async () => {
    if (fs.existsSync(resizedImage)) {
      fs.unlinkSync(resizedImage);
    }
    expect(fs.existsSync(resizedImage)).toBe(false);
  });
  it('should resize the image', async () => {
    const response = await request.get(
      '/api/resize?filename=sample&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  it('should check the dimensions of the resized image', async () => {
    const data = await sharp(resizedImage).metadata();
    expect(data.width).toBe(200);
    expect(data.height).toBe(200);
  });
});

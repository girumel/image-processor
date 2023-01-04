import express from 'express';
import sharp from 'sharp';
import getMetadata from './utitities/getMetadata';

const metadata = express.Router();

metadata.get('/', async (req, res) => {
  const filename = req.query.filename as string;

  try {
    const data: sharp.Metadata = await getMetadata(filename);
    res.send(
      `Width: ${data.width}, Height: ${data.height}, Format: ${data.format}`
    );
    res.status(200);
  } catch (error) {
    res.status(404).send('Image not found');
    // console.log(error);
  }
});

export default metadata;

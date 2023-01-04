import express from 'express';
import path from 'path';
import fs from 'fs';

import resizeImage from './utitities/resizeImage';

const resize = express.Router();

// check if the resized image exists
// if there is, send that image
// if there isn't, resize the image and send that image

resize.get('/', async (req, res) => {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;

  const resizedImage = path.resolve(
    `./images/thumbs/${filename}_${width}x${height}.jpg`
  );

  if (fs.existsSync(resizedImage)) {
    // console.log(`Image ${filename}_${width}x${height}.jpg already exists`);
    res.sendFile(resizedImage);
    res.status(200);
  } else {
    try {
      await resizeImage(filename, width, height);
      // console.log(`Image resized to ${width} x ${height}`);
      res.sendFile(resizedImage);
      res.status(200);
    } catch (error) {
      res.status(404).send('Image not found');
      // console.log(error);
    }
  }
});

export default resize;

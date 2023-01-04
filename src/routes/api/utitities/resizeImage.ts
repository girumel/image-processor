import sharp from 'sharp';
import path from 'path';

export default async function resizeImage(
  filename: string,
  width: string,
  height: string
): Promise<void> {
  const originalImage = path.resolve(`./images/full/${filename}.jpg`);
  const resizedImage = path.resolve(
    `./images/thumbs/${filename}_${width}x${height}.jpg`
  );
  await sharp(originalImage)
    .resize(Number(width), Number(height))
    .toFormat('jpeg')
    .toFile(resizedImage);
  //   console.log(`Image resized to ${width} x ${height}`);
}

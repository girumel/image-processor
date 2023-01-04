import sharp from 'sharp';
import path from 'path';

export default async function getMetadata(
  filename: string
): Promise<sharp.Metadata> {
  const image: string = path.resolve(`./images/full/${filename}.jpg`);
  const data: sharp.Metadata = await sharp(image).metadata();
  return data;
  // console.log(`Metadata extracted for ${filename}.jpg`);
}

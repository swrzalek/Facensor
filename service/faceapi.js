import * as faceapi from 'face-api.js';
import { canvas, faceDetectionNet, faceDetectionOptions, draw } from '../commons';
import * as path from 'path';
const MODELS_URL = path.join(__dirname, "/weights");

export const fapi = async (image) => {
  await faceDetectionNet.loadFromDisk(MODELS_URL)
  await faceapi.nets.faceLandmark68Net.loadFromDisk(MODELS_URL)
  const img = await canvas.loadImage(image)
  const result = await faceapi.detectSingleFace(img, faceDetectionOptions).withFaceLandmarks();  
  if (result) {   
    const canvas = await draw(img,result);
    return canvas.toBuffer('image/jpeg');
  }
  return;
}  
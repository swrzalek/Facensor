import { Segment } from './segment.class'
import { createCanvasFromMedia } from 'face-api.js';
import { canvas } from './env'
export const draw = async (img, result) => {
    const sg = new Segment(result);
    const out = createCanvasFromMedia(img);
    const emptyCanvas = canvas.createCanvas(img.width, img.height);
    const ctx = out.getContext('2d')
    var ctx1 = emptyCanvas.getContext("2d");
    ctx1.translate(sg.vectorX, sg.vectorY); 
    ctx1.rotate( (Math.PI / 180) * (sg.rectAngle));
    ctx1.translate(- sg.vectorX, - sg.vectorY);
    ctx1.fillRect(sg.positionX - 0.4 * sg.rectHeight, sg.positionY - 0.25 * sg.rectHeight, sg.rectWidth, sg.rectHeight);  
    ctx.drawImage(emptyCanvas, 0, 0)
    return out;
}

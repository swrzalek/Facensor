# Facensor 
**Demo:**
*Frontend PWA available*:  [HERE](https://github.com/swrzalek/Facensor-Frontend)

Face Censorship Web API built with [( [face-api.js](https://github.com/justadudewhohacks/face-api.js) ) [tensorflow/tfjs-core](https://github.com/tensorflow/tfjs-core) ] , Node.js and Express.js.


![enter image description here](https://i.imgur.com/N6pCh1M.jpg=200x200)

# Features:
### It got only one feature...
Censoring single face on image with black rectangle.

# How it works
[Multer](https://github.com/expressjs/multer) is handling 'multipart/form-data' in this case it is our image.
After validation it is forwarded to face-api as a Buffer.
Next f-a.js detect all faces in an image + computes 68 Point Face Landmarks for each detected face. Returns **Array<[WithFaceLandmarks<WithFaceDetection<{}>>](https://github.com/justadudewhohacks/face-api.js#getting-started-utility-classes)>**:
Function is taking all this points and calculating properties to draw proper rectangle on canvas. 

 [Node-Canvas](https://github.com/Automattic/node-canvas) is drawing it on image.
 Canvas is then converted and returned as Buffer to be processed for a front-end.

v.01 contains num of things to fix:

 - Memory leak.
 - With firmly rotated head gives wrong angle.
 - Censoring only one face.

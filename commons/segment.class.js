class Segment
{
    constructor(result){
        this.result = result;
    }
    leftEye() {
        return this.result.landmarks.getLeftEye();
        }
    rightEye() {
        return this.result.landmarks.getRightEye();
    }
    get display() {
        return this.rectAngle();
    }
    get positionX() {
        return this.leftEye()[0]._x;
    }
    get positionY() {
        return this.leftEye()[0]._y
    }
    get rectHeight() {
        const a = this.leftEye()[0]._x - this.leftEye()[3]._x;
        const b = this.leftEye()[0]._y - this.leftEye()[3]._y;
        return Math.hypot(a, b)
    }
    get rectWidth() {
        const a = this.leftEye()[0]._x - this.rightEye()[3]._x;
        const b = this.leftEye()[0]._y - this.rightEye()[3]._y;
        return Math.hypot(a, b) + this.rectHeight ;
    }
    get rectAngle() {
        const a = this.leftEye()[0]._x - this.rightEye()[3]._x;
        const b = this.leftEye()[0]._y - this.rightEye()[3]._y;
        const c =  Math.atan2( b , a > 0 ? a : -1 * a ) * 180 / Math.PI
        return Math.round(c * -100) / 100;
    }
    get vectorX() {
        return this.positionX + 0.5 * this.rectWidth;
    }
    get vectorY(){
       return this.positionY + 0.5 * this.rectWidth;
    }

}
module.exports = {
  Segment,
};



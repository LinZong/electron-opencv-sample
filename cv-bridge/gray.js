const grayScale = require('../build/Release/opencv_gray')

function GrayImage(src,dst) {
    return grayScale.GrayImage(src,dst)
}

module.exports = { GrayImage }
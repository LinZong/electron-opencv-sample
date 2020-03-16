const $ = require('jquery')
const ipc = require('./cv-bridge/electron-render-ipc')


function CreateImage(imageId, appendTo, file) {
    if (FileReader && file) {
        var fr = new FileReader();
        fr.onload = function () {
            const img = $(`<img id="${imageId}" />`)
            img.attr("src", fr.result)
            img.css("width", "400px")
            img.appendTo(appendTo)
        }
        fr.readAsDataURL(file);
    }
}
function CreateImageLocal(imageId, appendTo, file) {
    if (FileReader && file) {
        const img = $(`<img id="${imageId}" />`)
        img.attr("src", "file://" + file)
        img.css("width", "400px")
        img.appendTo(appendTo)
    }
}
function ProcessGrayImage(filePath) {
    const ext = filePath.substring(filePath.lastIndexOf("."))
    console.log(ext)
    const grayPath = filePath.substring(0, filePath.lastIndexOf(".")) + "-gray" + ext
    console.log("Process image grayscale", filePath, grayPath)
    ipc.SendGrayImage(filePath, grayPath).then(res => {
        if (res) {
            CreateImageLocal("dest", "body", grayPath)
        }
    })
}
$(document).ready(() => {
    $('input[type="file"]').change((e) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const originalPath = file.path
            CreateImage("source", "body", file)
            ProcessGrayImage(originalPath)
        }
    });
})
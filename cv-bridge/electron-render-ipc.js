const { ipcRenderer } = window.require("electron");
const ipcConst = require('./ipc-const')

function SendGrayImage(src, dst) {
    return new Promise(resolve => {
        resolve(ipcRenderer.sendSync(ipcConst.GRAY_IMAGE, {src, dst}))
    })
}

module.exports = { SendGrayImage }
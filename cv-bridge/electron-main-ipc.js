const gray = require('./gray')
const { ipcMain } = require('electron')
const ipcConst = require('./ipc-const')

console.log("Waiting for ipc call...")
ipcMain.on(ipcConst.GRAY_IMAGE, (ev, args) => {
    const { src, dst } = args
    console.warn(args)
    const ret = gray.GrayImage(src, dst)
    ev.returnValue = ret
})

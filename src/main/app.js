var electron = require('electron');

let win;
function createWindow(){
    win = new electron.BrowserWindow();
    win.loadURL('file://'+__dirname+'/../renderer/index.html');
    win.on("close", function() {
        win = null;
    });
}

let app = electron.app;

app.on("ready", ()=> {
    console.log("ready");
    createWindow();
});

app.on("window-all-closed",()=> {
    if (process.platform !== "darwin") {
        app.quit();
    }
})

app.on("activate", (_e, hasVisibledWindows) => {
    console.log("activate");
    if (!hasVisibledWindows) {
        createWindow();
    }
})


const remote = require('@electron/remote')

const template = [
    {
        label: "Файл",
        submenu: [
            {
                label: "Открыть",
                click: async() => {
                    remote.dialog.showMessageBox({
                        title: "Hello. world!",
                        type: "info",
                        message: 'Выбран пункт меню "Открыть"'
                    });
                }
            },
            {
                label: "Сохранить",
                click: async() => {
                    remote.dialog.showMessageBox({
                        title: "Hello. world!",
                        type: "info",
                        message: 'Выбран пункт меню "Сохранить"'
                    });
                }
            },
            {
                type: "separator"
            },
            {
                role: "close"
            }
        ]
    }
];

const menu = remote.Menu.buildFromTemplate(template);
remote.Menu.setApplicationMenu(menu);

//

// const { BrowserWindow } = require('electron').remote
// const win2 = new BrowserWindow({ width: 800, height: 600 })
// win2.loadURL('https://github.com')

// const win = remote.getCurrentWindow();
// win.hide();
// console.log('win@@@');
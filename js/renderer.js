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
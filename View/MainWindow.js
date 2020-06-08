const path = require('path')
const { BrowserWindow, nativeImage } = require('electron')

class MainWindow extends BrowserWindow {
	constructor(file, isDev) {
		const iconPath = path.join(__dirname, '../', 'assets', 'icons', 'icon128.png')

		super({
			title: 'YouTube Music',
			width: 800,
			height: 1000,
			resizable: true,
			icon: iconPath,
			backgroundColor: '#000000',
		})

		this.loadURL(file)
	}
}

module.exports = MainWindow

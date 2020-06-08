const path = require('path')
const { app, Menu, ipcMain, nativeImage, screen } = require('electron')
const MainWindow = require('./View/MainWindow')
const Store = require('./utils/Store')
// Set env
const isDev = false //process.env.NODE_ENV === 'development' ? true : false

let mainWindow

// Init store & defaults
const store = new Store({
	configName: 'user-settings',
	defaults: {
		position: { left: 0, top: 0 },
		size: { width: 800, height: 1000 },
	},
})

const createMainWindow = () => {
	mainWindow = new MainWindow('https://music.youtube.com', isDev)
}

app.on('ready', () => {
	createMainWindow()

	//Load The menu
	const mainMenu = Menu.buildFromTemplate(require('./View/mainMenu'))
	Menu.setApplicationMenu(mainMenu)

	p = store.get('position')
	s = store.get('size')
	positionPlayer(s.width, s.height, p.left, p.top)
})

const positionPlayer = (width, height, left, top) => {
	mainWindow.setSize(width, height)
	mainWindow.setPosition(left, top)
	store.set('position', { left: left, top: top })
	store.set('size', { width: width, height: height })
}

const miniPlayer = () => {
	width = 400
	height = 400

	let mainScreen = screen.getPrimaryDisplay()
	let dimensions = mainScreen.workArea
	positionPlayer(width, height, dimensions.width - width, dimensions.height - height)
}
const normalPlayer = () => {
	width = 800
	height = 1000

	let mainScreen = screen.getPrimaryDisplay()
	let dimensions = mainScreen.workArea
	positionPlayer(width, height, (dimensions.width - width) / 2, (dimensions.height - height) / 2)
}
const toggleOnTop = () => {
	mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop())
}

module.exports = { miniPlayer, normalPlayer, toggleOnTop }

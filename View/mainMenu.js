const mainProcess = require('../main.js')
module.exports = [
	{
		label: 'YouTube Music',
		submenu: [{ label: 'Exit', role: 'Quit' }],
	},
	{
		label: 'Window',
		submenu: [
			{ label: 'Fullscreen', role: 'ToggleFullScreen' },
			{ label: 'Minmize', role: 'minimize' },
			{ label: 'Mini player', click: () => mainProcess.miniPlayer(), accelerator: 'F10' },
			{ label: 'Normal player', click: () => mainProcess.normalPlayer(), accelerator: 'F9' },
			{ label: 'Alway On Top', click: () => mainProcess.toggleOnTop(), accelerator: 'F8' },
		],
	},
]

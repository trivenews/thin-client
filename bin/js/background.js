chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'https://hypothes.is/embed.js'
	});
});

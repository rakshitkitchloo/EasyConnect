
chrome.browserAction.onClicked.addListener(function(){
	
    chrome.tabs.executeScript(null, {file: 'clear.js'});
	chrome.tabs.executeScript(null, {file: 'jquery.min.js'});
	chrome.tabs.executeScript(null, {file: 'sweetalert2/dist/sweetalert2.min.js'});
	chrome.tabs.insertCSS(null, {file: 'sweetalert2/dist/sweetalert2.css'});
	chrome.tabs.executeScript(null, {file: 'contact_url.js'});
    chrome.tabs.executeScript(null, {file: 'title.js'});
    chrome.tabs.executeScript(null, {file: 'email.js'});
    chrome.tabs.executeScript(null, {file: 'pop.js'});
    chrome.tabs.executeScript(null, {file: 'retrive.js'});
	
});

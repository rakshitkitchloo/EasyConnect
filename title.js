var url = window.location.hostname;
var pos1 = url.indexOf(".");
var pos2 = url.lastIndexOf(".");
if(pos1!=3)
	url =url.substr(0,++pos1);
else
	url=url.substr(++pos1,++pos2);
var pos3 = null;
pos3 = url.indexOf(".");
if (pos3 != null) {
    url = url.substr(0, pos3);
}
url = url.toUpperCase();
if (url != null) {
	chrome.storage.sync.set({
      'title': url}, function () {
      //alert('save title successful');
	});
}



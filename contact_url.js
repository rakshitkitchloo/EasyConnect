var re = new RegExp("contact","gi");
var anchors = document.getElementsByTagName('a');
for(var i=0; i < anchors.length; i++){
  var str=null;
  var temp=0;
  str=anchors[i].innerText.match(re);
  if(str==null)
    continue;
  else{  
	chrome.storage.sync.set({
					'con_url': anchors[i].href
			}, function () {
				//	alert('save Contact_url successful');
			});
  }
}

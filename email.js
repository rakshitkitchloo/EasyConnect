var x=0;
var str4=null;
var str2=null;
var re = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+","gi");
function a_tag(xyz)
{
	var list = document.getElementsByTagName(xyz)[0].innerText;
	var str=list.match(re);
	if(str!=null){
		
		if(str4!=null){
			
			str4=str4+" , "+str;
		}
		else
			str4=str;
		chrome.storage.sync.set({
			'email': str4}, function () {
				//alert('save email successful');
		});
	}
	var arr=str.toString().split(",");
	for(var i=0;i<arr.length;i++)
	{
		var ph='<a href="mailto:'+arr[i]+'">'+arr[i]+'</a>';
		if (ph != null) {
	
			if (str2 != null) {
				str2= str2 + " , " + ph;
			} else{
				str2 = ph;
			}	
	   
		}
	}
	chrome.storage.sync.set({
		'email_href': str2}, function () {
			//alert('save email_href successful');
    });
}
a_tag('html');

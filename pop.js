var x = 0;
var str1 = null;
var str2 =null;
var re = new RegExp("((1800|1860)[0-9]{6,7,8})|((?:(?:\\+|0{0,2})91(\\s*[\\- ]\\s*)?|[0 ]?)?[789]\\d{9}|(\\d[ -]?){10}\\d)", "g");
function a_tag(xyz) {
	var list = document.getElementsByTagName(xyz)[0].innerText;
    list = list.replace(/\s/gi, "");
    var str = list.match(re);
    if (str != null) {
		if (str1 != null) {
			str1 = str1 + " , " + str;
        } 
		else{
			str1 = str;
		}
		chrome.storage.sync.set({
			'pop': str1}, function () {
				// alert('save pop_a successful');
			}
		);
	}
	var arr=str.toString().split(",");
	for(var i=0;i<arr.length;i++){
		var ph='<a href="tel:'+arr[i]+'">'+arr[i]+'</a>';
		if (ph != null) {
			if (str2 != null) {
				str2= str2 + " , " + ph;
			} 
			else{
				str2 = ph;
			}
		}
	}
	chrome.storage.sync.set({
		'pop_href': str2}, function () {
			// alert('save pop_href successful');
        }
	);
}
a_tag('html');

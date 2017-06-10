var email="",phonenos="",tit="",conurl="",temp_ph="",temp_em="";
var obj={em:"",phone:"",ttit:"",curl:"",temp_p:"",temp_e:""};
var spemail="",spphone="";

function emailspeaker(){
	var obj={m:''};
	var i=0;
	obj.m=spemail;
	var msg= new SpeechSynthesisUtterance();
	var voices= window.speechSynthesis.getVoices();
	msg.voice= voices[10]; // Note: some voices don't support altering params
	msg.voiceURI= 'native';
	msg.volume= 1; // 0 to 1
	msg.rate= 0.7; // 0.1 to 10
	msg.pitch= 0.8; //0 to 2
	msg.text= obj.m;
	msg.lang= 'en-IN';
	speechSynthesis.speak(msg);
}

function phspeaker(){
	var obj={m:''};
	var i=0;
	obj.m=spphone;
	obj.m=obj.m.split('').join(' ');
	var msg= new SpeechSynthesisUtterance();
	var voices= window.speechSynthesis.getVoices();
	msg.voice= voices[10]; // Note: some voices don't support altering params
	msg.voiceURI= 'native';
	msg.volume= 1; // 0 to 1
	msg.rate= 0.7; // 0.1 to 10
	msg.pitch= 0.8; //0 to 2
	msg.text= obj.m;
	msg.lang= 'en-IN';
	speechSynthesis.speak(msg);
}

function caller(){
	if(email=="" && phonenos==""){
		swal({
			title: tit,
			html:'Please Go to ' +'<a href='+conurl+'>Contact</a> Page '
  
		})
	}
	else if(email==""){
		spphone=phonenos;
		var store2="Call Us : \n"+phonenos;
		swal({
			title: tit,
			html: 'Call Us : <br>'+temp_ph,
			type: 'success',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Exit',
			confirmButtonText: 'Listen Audio'
		}).then(function() {
			phspeaker();
			emailspeaker();
			swal({
				title: tit,
				text: store2,
				imageUrl: 'https://lh3.googleusercontent.com/994mAFsUxdBF4_Pw81-4w0awnn0_70wibfFwuATAVJt1JqRknVD6eAtBCsl1i7Blbns3=w300',
					imageWidth: 100,
					imageHeight: 100,
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Minimize',
				confirmButtonText: 'Stop Audio'
			}).then(function() {
				speechSynthesis.cancel();
			})	
		})
	}
	else if(phonenos==""){
		spemail=email;
		var store3="Mail Us : \n"+email;
		swal({
			title: tit,
			html: 'Mail Us :<br>'+temp_em,
			type: 'success',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Exit',
			confirmButtonText: 'Listen Audio'
		}).then(function() {
			phspeaker();
			emailspeaker();
			swal({
				title: tit,
				text: store3,
				imageUrl: 'https://lh3.googleusercontent.com/994mAFsUxdBF4_Pw81-4w0awnn0_70wibfFwuATAVJt1JqRknVD6eAtBCsl1i7Blbns3=w300',
					imageWidth: 100,
					imageHeight: 100,
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Minimize',
				confirmButtonText: 'Stop Audio'
			}).then(function() {
				speechSynthesis.cancel();
			})
		})
	}
	else{
		spphone=phonenos;
		spemail=email;
		var store4="Call Us :\n"+phonenos+"\n\nMail Us :\n"+email;
		swal({
			title: tit,
			html: 'Call Us : <br>'+temp_ph+'<br><br> Mail Us :<br>'+temp_em,
			type: 'success',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Exit',
			confirmButtonText: 'Listen Audio'
			}).then(function() {
				phspeaker();
				emailspeaker();
				swal({
					title: tit,
					text: store4,
					imageUrl: 'https://lh3.googleusercontent.com/994mAFsUxdBF4_Pw81-4w0awnn0_70wibfFwuATAVJt1JqRknVD6eAtBCsl1i7Blbns3=w300',
					imageWidth: 100,
					imageHeight: 100,
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					cancelButtonText: 'Minimize',
					confirmButtonText: 'Stop Audio'
				}).then(function() {
					speechSynthesis.cancel();
				})
		})	
	}	
}

var str,str1;

chrome.storage.sync.get('email', function (data) {
	obj.em=data.email;
	email=obj.em.toString();
});
chrome.storage.sync.get('pop', function (data) {
    obj.phone=data.pop;
	phonenos=obj.phone.toString();
});
chrome.storage.sync.get('con_url', function (data) {
    obj.curl=data.con_url;
	conurl=obj.curl.toString();
});
chrome.storage.sync.get('pop_href', function (data) {
    obj.temp_p=data.pop_href;
	temp_ph=obj.temp_p.toString();
});
chrome.storage.sync.get('email_href', function (data) {
    obj.temp_e=data.email_href;
	temp_em=obj.temp_e.toString();
});
chrome.storage.sync.get('title', function (data) {
    obj.ttit=data.title;
	tit=obj.ttit.toString();
	caller();
});

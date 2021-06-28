function AjaxObject(){
	var xmlHttp = null;
		try { 
			xmlHttp = new XMLHttpRequest(); 
		} catch (e) {
			try { 
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE (recent versions)
			} catch (e) {
				try { 
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE (older versions)
				} catch (e) {
					xmlHttp = null; 
				}
			}
		}
		return xmlHttp;
}

function AjaxRequest(method, url, isAsync, dataToSend, responseFunction){
		var xmlHttp = AjaxObject();
		if (xmlHttp === null){
			window.alert("Your browser does not support AJAX!"); // set error function
			return;
		}
	
		xmlHttp.open(method, url, isAsync); 
		xmlHttp.onreadystatechange = function (){
			if (xmlHttp.readyState == 4){
				console.log(xmlHttp.responseText);
				var data = JSON.parse(xmlHttp.responseText);
				responseFunction(data);
			}
		}
		xmlHttp.send(dataToSend);
}
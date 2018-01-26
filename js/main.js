$(document).ready(function() {
	console.log("ready");
	
	document.getElementById("start").addEventListener("click", function() {
		console.log("Start");
		
		document.body.style.marginTop = "-100vh";
	});
	
	document.getElementById("uploadBut").addEventListener("change", function() {
		console.log(document.getElementById("uploadBut").files);
		
		var fileList = document.getElementById("uploadBut").files;
		var highlight = document.getElementById("highlight");
		
		console.log(highlight.checked);
		
		document.getElementById("uploadBut").remove();
	
		highlight.style.marginLeft = "-20vw";
		highlight.style.width = "0";
		
		if(highlight.checked) {
			highlight.style.marginRight = "20vw";
			document.getElementById("checkText").innerHTML = "Highlight areas on";
		}
		
		document.getElementById("uploadLabel").style.height = "0";
		setTimeout(function() {
			document.getElementById("uploadLabel").remove();
			
			if(highlight.checked) {
				highlight.remove();
			} else {
				document.getElementById("check").remove();
			}
		}, 600);
		
		document.getElementById("upload").style.paddingTop = "0";
		
		var acceptableFiles = ["image/jpeg", "image/png"];
		
		for(var i = 0; i < fileList.length; i++) {
			console.log("Looping");
			if(acceptableFiles.indexOf(fileList[i].type) >= 0) {
				console.log(fileList[i]);
				var newImage = document.createElement("div");
				newImage.setAttribute("ID", "image");
				newImage.style.backgroundImage = "url('" +  fileList[i].name + "')";
				
				document.getElementById("images").appendChild(newImage);
			}
		}
	});
});
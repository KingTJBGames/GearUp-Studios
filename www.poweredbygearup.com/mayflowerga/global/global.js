function doit(id) {
	var a = document.getElementById(id);
	
	a.addEventListener('mouseover', function() { 
		a.size = a.length;
	})
	
	a.addEventListener('mouseleave', function() { 
		a.size = 1;
	}) 
}
function showHideHandler(id){
	var xjx = document.getElementById(id);
		
	function hjhj() {		
		xjx.style.display = 'none';
	}
	
	function hjkj() {
		xjx.style.display = 'block';	
	}
	if(xjx.style.display === 'block') {
		hjhj()
	} else {
		hjkj()
	}
}
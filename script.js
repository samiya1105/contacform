function ContactValidate(){
    var n =document.getElementById('name').value;
    var mob=document.getElementById('mobile').value;
    var em=document.getElementById('email').value;
    var p1=document.getElementById('pass1').value;
	var p2=document.getElementById('pass2').value;
}

if(!isNaN(n)){
    document.getElementById('namee').innerHTML ="Only character is allowed";
    return false;
}
else if(n==null || n==""){
	document.getElementById('nnamee').innerHTML ="Please fill this field";
	return false;
}
else if(n.length<3 || n.length>50){
    document.getElementById('namee').innerHTML="Length must be betweeen 3 to 50";
    return false;
}
else{
    document.getElementById('namee').innerHTML="";
    return false;
}

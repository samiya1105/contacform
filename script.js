function ContactValidate(){
    var n =document.getElementById('name').value;
    var mob=document.getElementById('mobile').value;
    var em=document.getElementById('email').value;
    var p1=document.getElementById('password1').value;
	var p2=document.getElementById('password2').value;

    // name-validation
    if(n==null || n==" "){
        document.getElementById('namee').innerHTML ="Please fill this field";
        return false;
    }
    else if(!isNaN(n)){
        document.getElementById('namee').innerHTML ="Only character is allowed";
        return false;
    }
    else if(n.length<3 || n.length>50){
        document.getElementById('namee').innerHTML="Length must be betweeen 3 to 50";
        return false;
    }
    else{
        document.getElementById('namee').innerHTML="";
        // return false;
    }

    // mobile-number-validation
    if(mob==null || mob==" "){
        document.getElementById('mobno').innerHTML="Please fill this field";
        return false;
    }
    else if(isNaN(mob)){
        document.getElementById('mobno').innerHTML="Only number is allowed";
        return false;
    }
    else if(mob.length!=10){
        document.getElementById('mobno').innerHTML="Length must be 10";
        return false;
    }
    else{
        document.getElementById('mobno').innerHTML="";
    }

     // email-validation
     if(em==null || em==" "){
        document.getElementById('emailid').innerHTML ="Please fill this field";
    }
    else if(email.indexOf('@') <= 0){
        document.getElementById('emailid').innerHTML ="@ indvalid position";
        return false;
    }
    else if(email.charAt((email.length-4)!=".") && (email.charAt(email.length-3)!=".")) {
        document.getElementById('emailid').innerHTML =" . invalid position";
        return false;
    }
    else{
        document.getElementById('emailid').innerHTML="";
    }
    
    //password-validation.
    if(p1==null || p1==""){
		document.getElementById('pass1').innerHTML ="Please fill the Password field";
		return false;
    }
    else if(Password1.length<=5 || Password1.length>=20){
		document.getElementById('pass1').innerHTML ="Lenght must be between 5 and 20";
		return false;
    }
    else{
        document.getElementById('pass1').innerHTML="";
    }

    //confirm-password-validation
    if(p2==null || p2==""){
		document.getElementById('pass1').innerHTML ="Please fill the Password field";
		return false;
    }
    else if(p2!=p1){
		document.getElementById('pass1').innerHTML ="Passwords are not matching";
        return false;
    }
    else{
        document.getElementById('pass1').innerHTML="";
    }
    return true;
}

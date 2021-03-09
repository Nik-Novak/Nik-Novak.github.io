

function formSubmit(){
    console.log('wtf')
    try{
        var pass = true;
        if($('#input_username').val().length < 5 || $('#input_title').val().length >15){
            $('#input_username').css('border', '1px solid red');
            $('#input_username').next('p').html('Username must be between 5 and 15 characters.');
            $('#input_username').next('p').css('color','red');
        }
        else{
            resetUser();
            pass=false;
        }
        
        if($('#input_email').val().split('.').length <=1){
            $('#input_email').css('border', '1px solid red');
            $('#input_email').next('p').html('Email must follow standard format.');
            $('#input_email').next('p').css('color','red');
        }
        else{
            resetEmail();
            pass=false;
        }
        
        if( $('#input_password').val().length < 7 || $('#input_password').val().length > 26 ){
            $('#input_password').css('border', '1px solid red');
            $('#input_password').next('p').html('Password must be between 7 and 26 characters.');
            $('#input_password').next('p').css('color','red');
        }
        else{
            resetPassword();
            pass=false;
        }
        
        if( $('#input_confirmpassword').val() != $('#input_password').val()){
            $('#input_confirmpassword').css('border', '1px solid red');
            $('#input_confirmpassword').next('p').html('Passwords do not match.');
            $('#input_confirmpassword').next('p').css('color','red');
        }
        else{
            resetConfirmPassword();
            pass=false;
        }
        
        alert(pass);
        return pass;
        
        
    }catch(e){
        console.log(e.message);
        return false;
    }
}



function resetUser(){
    $('#input_username').css('border', '1px solid rgb(213, 219, 221)');
    $('#input_username').next('p').html('');
    $('#input_username').next('p').css('color','black');
}

function resetEmail(){
    $('#input_email').css('border', '1px solid rgb(213, 219, 221)');
    $('#input_email').next('p').html('');
    $('#input_email').next('p').css('color','black');
}

function resetPassword(){
    $('#input_password').css('border', '1px solid rgb(213, 219, 221)');
    $('#input_password').next('p').html('');
    $('#input_password').next('p').css('color','black');
}

function resetConfirmPassword(){
    $('#input_confirmpassword').css('border', '1px solid rgb(213, 219, 221)');
    $('#input_confirmpassword').next('p').html('');
    $('#input_confirmpassword').next('p').css('color','black');
}


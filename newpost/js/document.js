

function formSubmit(){
    try{
        var pass = true;
        if($('#input_title').val().length < 5 || $('#input_title').val().length >24){
            $('#input_title').css('border', '1px solid red');
            $('#input_title').next('p').html('Title must be between 5 and 24 characters.');
            $('#input_title').next('p').css('color','red');
        }
        else{
            resetTitle();
            pass=false;
        }
        
        if($('#textarea_description').val().length < 5 || $('#textarea_description').val().length > 500){
            $('#textarea_description').css('border', '1px solid red');
            $('#textarea_description').next('p').html('Description must be between 5 and 500 characters. <span></span>');
            $('#textarea_description').next('p').css('color','red');
        }
        else{
            resetDescription();
            pass=false;
        }
        
        if( $('#textarea_tags').val().split(",").length  >8){
            $('#textarea_tags').css('border', '1px solid red');
            $('#textarea_tags').next('p').html('You cannot have more than 8 tags.');
            $('#textarea_tags').next('p').css('color','red');
        }
        else{
            resetTags();
            pass=false;
        }
        
        if(!mapObj.getMarker()){
            $('.map').css('border', '2px solid red');
            $('.map').next('div').children('p').html('You must mark the location of the photo.');
            $('.map').next('div').children('p').css('color','red');
        }
        else{
            resetMap();
            pass=false;
        }
        
        return pass;
        
        
    }catch(e){
        console.log(e.message);
        return false;
    }
}



function resetTitle(){
    $('#input_title').css('border', '1px solid rgb(213, 219, 221)');
    $('#input_title').next('p').html('Title your photograph. <span></span>');
    $('#input_title').next('p').css('color','black');
}

function resetDescription(){
    $('#textarea_description').css('border', '1px solid rgb(213, 219, 221)');
    $('#textarea_description').next('p').html('Leave a short description. <span>0/500</span>');
    $('#textarea_description').next('p').css('color','black');
}

function resetTags(){
    $('#textarea_tags').css('border', '1px solid rgb(213, 219, 221)');
    $('#textarea_tags').next('p').html('Add tags for other people to find your photos. <span>0/8</span>');
    $('#textarea_tags').next('p').css('color','black');
}

function resetMap(){
    $('.map').css('border', 'none');
    $('.map').next('div').children('p').html('Click or tap to select the area on the map where you took the photo.');
    $('.map').next('div').children('p').css('color','black');
}


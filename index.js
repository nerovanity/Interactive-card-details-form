var card_name = document.getElementById('card_name');
var card_number = document.getElementById('card_number');
var mm = document.getElementById('mm');
var yy = document.getElementById('yy');
var inputs = document.getElementsByClassName('input');
var form_container = document.getElementById('form_container');
var cvc = document.getElementById('cvc');
var completed = document.getElementById('completed')



function cvc_change(){
    var cvc_card = document.getElementById('cvc_card');
    cvc_card.innerHTML = cvc.value.toString().padEnd(3, '0'); 
}


function number_change(){
    var number = document.getElementById('number');
    card_number.value = card_number.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    card_number_value = card_number.value.replace(/\s/g, '')
    number.innerHTML = card_number_value.slice(0,4).toString().padEnd(4, '0')+' '+card_number_value.slice(4,8).toString().padEnd(4, '0')+' '+card_number_value.slice(8,12).toString().padEnd(4, '0')+' '+card_number_value.slice(12).toString().padEnd(4, '0');
}




function card_name_change(){
    var name = document.getElementById('name');
    name.innerHTML = card_name.value;
}


function date_change(){
    var month = document.getElementById('month');
    var year = document.getElementById('year');
    month.innerHTML = mm.value.padEnd(2, '0');
    
    
    year.innerHTML = yy.value.padEnd(2, '0');

}
function continue_button(){
    i=0;
    card_number_value = card_number.value.replace(/\s/g, '')
    var name_error = document.getElementById('name_error');
    if(card_name.value == null || card_name.value == undefined || card_name.value == ""){
        name_error.style.display = "block";
    }
    else{
        name_error.style.display = "none";
        i++
    }
    var number_error = document.getElementById('number_error');
    if(card_number.value == null || card_number.value == undefined || card_number.value == ""){
        number_error.style.display = "block";
    }
    else if(isNaN(card_number_value)){
        number_error.innerHTML = 'Wrong Format, numbers only!';
        number_error.style.display = "block";
    }
    else{
        number_error.style.display = "none";
        i++
    }
    var date_error = document.getElementById('date_error');
    if((mm.value == null || mm.value == undefined || mm.value == "") || (yy.value == null || yy.value == undefined || yy.value == "")){
        date_error.style.display = "block";
    }
    else if(isNaN(mm.value) || isNaN(yy.value)){
        date_error.innerHTML = 'Wrong Format, numbers only!';
        date_error.style.display = "block";
    }
    else if(Number(mm.value) > 12 || Number(mm.value) < 0 ){
        date_error.innerHTML = 'Invalid month';
        date_error.style.display = "block";
    }
    else{
        date_error.style.display = "none";
        i++
    }
    var cvc_error = document.getElementById('cvc_error');
    if(cvc.value == null || cvc.value == undefined || cvc.value == ""){
        cvc_error.style.display = "block";
    }
    else if(isNaN(cvc.value)){
        cvc_error.innerHTML = 'Wrong Format, numbers only!';
        cvc_error.style.display = "block";
    }
    else{
        cvc_error.style.display = "none";
        i++
    }

    if(i==4){
        form_container.style.display = "none";
        completed.style.display = "block";
    }

}
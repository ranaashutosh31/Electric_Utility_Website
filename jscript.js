function replace(){
    location.replace("about.html");
}
function checkk() {
    let x = document.getElementById("customerId").value; 
    let y = Math.floor((Math.random()*1000)+1);
    let z = confirm("The bill for Customer ID " + x + " is " + y + " Rupees." + "Do you want to continue to Payment Gateway?");
    if(z==true){
        alert("Sorry for inconvinience. Our servers are facing issues right now. Please try after sometime.");
    }
    else{
        return false;
    }
}
function resett() {
    let x = confirm("The entries you filled will be erased. Do you want to reset?");
    if(x==true){
        document.querySelector("#arform").reset();
    }
    else{
        return false;
    }
}
function subReq() {
    let z = confirm("Do you want to submit form?");
    if(z==true){
        alert("Your request has been successfully recorded. Our respective team will contact you very soon. We are grateful for your approach.");
    }
    else{
        return false;
    }
}
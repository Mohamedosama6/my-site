/*     SEND TO WHATSAPP     */
function send(){
    var name = document.getElementById("name").value;
    var msg = document.getElementById("msg").value;
    window.open("https://api.whatsapp.com/send?phone=+201289670014&text=Hi, mohamed! My name is "+name+", I want to tell you that '"+msg+"'");
    document.getElementById("name").value = "";
    document.getElementById("msg").value = "";
}

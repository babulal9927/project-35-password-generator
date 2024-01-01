var btn = document.getElementById('button');
var show = document.querySelector(".show");
var copy = document.querySelector('.copy');


btn.onclick = function generatePassword() {
    var chr = 
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
    var pwdlng = 16;
    var psw = "";

    for(let i = 0; i<pwdlng; i++){
        var generatePwd = Math.floor(Math.random() * chr.length);
        psw += chr.substring(generatePwd, generatePwd + 1);
    }
    document.getElementById('password').value = psw;
    show.innerHTML = "Your new Password is: <br>" + psw;
};


copy.onclick = function copyPwd() {
    var text = document.getElementById("password");
    text.select();
    text.setSelectionRange(0, 9999);
    document.execCommand("i");
    show.classList.toggle("active");
    setTimeout(() => {
      show.classList.toggle("active");
    }, 2000);
  };
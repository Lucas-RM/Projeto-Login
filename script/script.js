let username = "test";
let password = "12345678";

const login = () => {
    const submitbtn = document.querySelector(".btn");
    
    if(submitbtn) {
        submitbtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            var inputnome = document.getElementById('username').value;
            var inputsenha = document.getElementById('password').value;
            var msglogin = document.querySelector('.login-efetuado');

            if (inputnome == username && inputsenha == password) {
                msglogin.style.display = "block"; 
                msglogin.innerHTML = "ACESSO PERMITIDO";
            } else {
                msglogin.style.display = "block";
                msglogin.innerHTML = "ACESSO NEGADO";
            }
            
            setTimeout(function () {
                msglogin.style.display = "none";
                window.location.reload();
            }, 1000);
        })
    }

}

window.onload = login;

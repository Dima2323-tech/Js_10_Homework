window.onload =  () => {
    //1) Створити форму як на малюнку, за допомогою js реалізувати перевірку чи співпадають паролі. Чи введені всі дані в полях.
    // Якщо всі данні введені, сховати поля  і кнопки і вивести текст, реєсстрація пройшла успішно
    let name = document.querySelector(".Name")
    let password = document.querySelector(".Password")
    let confirmPsw = document.querySelector(".Confirm")
    let regBtn = document.querySelector(".Reg_Btn")
    let HaveAC = document.querySelector(".HaveAC_Btn")
    let regBtnLog = document.querySelector(".Reg_Btn_Log")
    let [...regInfo] = document.querySelector(".info_reg").children
    let hideReg = document.querySelector('.info_reg')
    let hideBtnReg = document.querySelector('.Reg_Btn')
    function chekInfo (){

        for (i = 0 ; i < regInfo.length; i++ ) {
            let element = regInfo[i]
            if (element.value.length == 0) {
                alert(`Вы не ввели ${element.className}`)
            }
        }

            if (password.value != confirmPsw.value) {
                alert("Пароли не совпадают")

            }

            if (!!regInfo && !!password.value && !!confirmPsw.value) {
                alert("Регистрация прошла успешно")
                alert(`Пользователь с именнем ${name.value} зарегестрирован (формально) `)
                hideReg.style.display = "none"
                hideBtnReg.style.display = "none"
            }
    }
    regBtn.onclick = function (){
        chekInfo()
    }

    //2) Відцентрувати форму логіну використовуючи дані отримані з window. Розрахувати відступ зверху і зліва, врахувати розміри форми при цьому ++
    let centerReg = document.querySelector(".Rer_Menu")
    centerReg.style.position = "relative"
    centerReg.style.left = (innerWidth - centerReg.offsetWidth )/ 2 + "px";
    centerReg.style.top = (innerHeight - centerReg.offsetHeight) / 2 + "px";

    let centerLogin = document.querySelector(".Log_menu")
    centerLogin.style.position = "relative"
    centerLogin.style.left = (innerWidth - centerReg.offsetWidth )/ 2 + "px";
    centerLogin.style.top = (innerHeight - centerReg.offsetHeight) / 2 + "px";

    //3) Створити форму як на малюнку кнопка login має бути дісайблед, використати подію onchange на формі зробити щоб після заповнння полів з форми видалявся стан disabled
    let takeLoginMenu = document.querySelector(".Log_menu")
    function takeLogin (){
        let hideReg = document.querySelector(".Rer_Menu")
        takeLoginMenu.style.display = ""
        hideReg.style.display = "none"
    }
    function takeRegister () {
        let hideRegLog = document.querySelector(".Rer_Menu")
        hideRegLog.style.display = ""
        hideReg.style.display = ""
        hideBtnReg.style.display = ""
        takeLoginMenu.style.display = "none"
    }
    regBtnLog.onclick = function (){
        takeRegister ()
    }
    HaveAC.onclick = function (){
        takeLogin()
    }
    let login = document.querySelector(".Log_Btn")
    let [...logInfo] = document.querySelector(".loginUser").children
    login.disabled = true;
    for (let a = 0 ; a < logInfo.length; a++){
        logInfo[a].onchange = function (){
           console.log(logInfo[1])
            if (logInfo[0].value.length > 0 && logInfo[1].value.length > 0){
                login.disabled = false
                login.style.opacity = '1'
            }
            else {
                login.disabled = true
                login.style.opacity = "0.5"
            }
        }
    }
    login.onclick = function (){
        alert("Вы успешно вошли в систему ")
    }

}
const nameForm = document.querySelector(".form-name")
const message = document.querySelector(".form-message")
const email = document.querySelector(".form-email")
const imgWarning = document.querySelector(".img-warning")
const errorMessage =  document.querySelector(".error-message")
const widthScreen = window.innerWidth

  window.addEventListener('resize', refreshOnResize);

if(widthScreen >= 1150) {

    nameForm.addEventListener("focus", () => {
    nameForm.style.outline = "none"
    nameForm.style.borderColor = "#4EE1A0";
    })

    email.addEventListener("focus", () =>{
        email.style.outline = "none"
    })

    message.addEventListener("focus", () => {
        message.style.outline = "none"
    })

    email.addEventListener("keyup", () => {
        let valeurEmail = email.value
        const regexArobase = /@/
        const regexPoint = /\./

        if(regexArobase.test(valeurEmail) && regexPoint.test(valeurEmail)) {
                email.style.height = "45px"
                errorMessage.style.display = "none"
                imgWarning.style.display = "none"
                email.style.borderColor = "#4EE1A0"
            }else {
                email.style.height = "65px"
                errorMessage.style.display = "block"
                imgWarning.style.display = "block"
                email.style.borderColor = "#FF6F5B"
            }
        })
}


/**
 * 
 * functions
 * 
 */

function refreshOnResize() {
    location.reload(true); 
  }
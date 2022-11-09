const onSubmit = event => {
    event.preventDefault()
    validate(event)
}

const validate = (event) => {
    console.log(event.type)
    
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)
            break;
            
        case 'submit':
            for(let element of event.target)
                validateElement(element)
            break;
    }
}

const validateElement = (element) => {
    if (element.required) {
        let label = document.getElementById(`${element.id}-label`).innerText
        let error = ""

        switch(element.type) {
            case 'text':
                if (!isNullOrEmpty(element.value)) {
                    if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${label.toLocaleLowerCase()} must containt at least ${element.dataset.requiredMin} letters`
                    }
                } else {
                    error = `You must enter a ${label.toLocaleLowerCase()}`
                }
                break;

            case 'email':
                if (!isNullOrEmpty(element.value)) {
                    if(!isEmailValid(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} must be valid (eg. example@domain.com)`
                    }
                } else {
                    error = `You must enter an ${label.toLocaleLowerCase()}`
                }
                break;
        }


        document.getElementById(`${element.id}-error`).innerText = error
    }
}

const isNullOrEmpty = value => {
    if (value.length === 0)
        return true

    return false
}

const isMinimumLength = (value, minLength = 2) => {
    if (value.length >= minLength)
        return true

    return false
}

const isEmailValid = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}






// const checkLength = (element, minLength = 2, message) => {

//     if (message === undefined) 
//         message = `Your ${element.target.id} must contain at least ${minLength} characters`

//     if (element.target.value.length < minLength) {
//         document.getElementById(element.target.id).classList.add(`error`)
//         document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = message
//     }   else {
//         document.getElementById(element.target.id).classList.remove(`error`)
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
//     }
// }

// const checkEmail = (element, message) => {
//     if(message === undefined)
//         message = `Your ${element.target.id} must be a valid e-mail adress`
        
//     if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
//         document.getElementById(element.target.id).classList.add('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = message
//     } 
    
//     else {
//         document.getElementById(element.target.id).classList.remove('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
//     }
// }



// const validate = (e) => {
//     switch(e.target.type) {
//         case "text":
//             checkLength(e, `You must enter a ${e.target.id}`, 2)
//             break;
//         case "email":
//                 break;
//         case "textarea":
//             checkLength(e, `You must enter a ${e.target.id}`, 5)
//             break;    
//     }
// }
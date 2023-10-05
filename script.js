const form = document.querySelector("form");
const usrName = document.getElementById("username");
const usrEmail = document.getElementById("email");
const usrPass = document.getElementById("password");
const usrPassConfirm = document.getElementById("passConfirm");

const errors = [];

//

const checkRequired = (arg) => {
    if (!arg.value.trim().length) {
        showError(arg, `This field is required`);
    } else {
        showSuccess(arg);
    }
};

const checkLength = (arg, min, max) => {
    if (arg.value.trim().length < min || arg.value.trim().length > max) {
        showError(arg, `Must be between ${min} and ${max} characters`);
    } else {
        showSuccess(arg);
    }
};

const checkEmail = (arg) => {
    if (
        !usrEmail.value.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
        showError(arg, `Must be a valid email`);
    } else {
        showSuccess(usrEmail);
    }
};

const checkMatch = (arg1, arg2) => {
    if (arg1.value !== arg2.value || !arg2.value.length) {
        showError(arg2, `The passwords should be the same`);
    } else {
        showSuccess(arg2);
    }
}

//

const showError = (arg, msg) => {
    arg.parentElement.classList = "error";
    arg.nextElementSibling.nextElementSibling.innerText = msg;
    arg.nextElementSibling.nextElementSibling.classList.remove("msg");
    errors.push(arg);
    console.log(arg.nextElementSibling.nextElementSibling);
};

const showSuccess = (arg) => {
    arg.parentElement.classList= "success";
};

//

form.addEventListener("submit", (e) => {
    e.preventDefault();

    errors.length = 0;

    checkRequired(usrName);
    checkRequired(usrEmail);
    checkRequired(usrPass);
    checkRequired(usrPassConfirm);

    checkLength(usrName, 5, 10);
    checkLength(usrPass, 8, 15);

    checkEmail(usrEmail);

    checkMatch(usrPass, usrPassConfirm);

     console.log(errors);

     if (!errors.length) {
        console.log({
            usrName: usrName.value,
            usrEmail: usrEmail.value,
            usrPass: usrPass.value,
        });
    }
});
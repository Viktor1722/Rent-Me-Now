function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction2() {
    var x = document.getElementById("myLinks2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction3() {
    var x = document.getElementById("myLinks3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// Functions taken from the internet
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
        const ret = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return ret.test(String(phone).toLowerCase());
    }
    //

let formCheck = false;
const form = document.querySelector('form');
const checkName = document.querySelector('input[name="FullName"]');
const checkEmail = document.querySelector('input[name="email"]');
const checkPhone = document.querySelector('input[name="phone"]');
const SentMessage = document.querySelector(".SentMessage");

const resetInputs = (elm) => {
    elm.nextElementSibling.classList.add("hide");
};

const invalidInputs = (elm) => {
    elm.nextElementSibling.classList.remove("hide");
};


const checkInputs = () => {
    resetInputs(checkName);
    resetInputs(checkEmail);
    resetInputs(checkPhone);
    formCheck = true;

    if (!checkName.value) {
        invalidInputs(checkName);
        formCheck = false;
    }

    if (!isValidEmail(checkEmail.value)) {
        invalidInputs(checkEmail);
        formCheck = false;
    }

    if (!isValidPhone(checkPhone.value)) {
        invalidInputs(checkPhone);
        formCheck = false;
    }
};



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (formCheck) {
        form.remove();
        SentMessage.classList.remove("hide");
    }
});

checkName.addEventListener("input", () => {
    checkInputs();
});

checkEmail.addEventListener("input", () => {
    checkInputs();
});

checkPhone.addEventListener("input", () => {
    checkInputs();
});
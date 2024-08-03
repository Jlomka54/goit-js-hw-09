const formData = {
    email: "" ,
    message: ""
};

const feedbackForm = document.querySelector(".feedback-form");

checkFormState();

const formElement = () => {

    formData.email = feedbackForm.elements.email.value.trim();
    formData.message = feedbackForm.elements.message.value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

feedbackForm.addEventListener("input", formElement);
function checkFormState() {
    const checkFormState = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (checkFormState) {   
        feedbackForm.elements.email.value =  checkFormState.email
        feedbackForm.elements.email.message = checkFormState.message;

        formData.email = checkFormState.email;
    formData.message = checkFormState.message;
    }

    feedbackForm.addEventListener('submit', checkingTheFields);

}
function resetFormDat() {
    const feedbackDataForm = Object.keys(formData);

    for (const key of feedbackDataForm) {
        formData[key] = '';
    }

}
function checkingTheFields(eve) {
    eve.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    resetFormDat();
    feedbackForm.reset();
}
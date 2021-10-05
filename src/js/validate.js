const addClassValidate = (object, isSuccess) => {
    if (isSuccess) {
        object.classList.remove('error');
        object.classList.add('success');
    } else {
        object.classList.remove('success');
        object.classList.add('error');
    }
}

const removeClassValidate = (object) => {
    object.classList.remove('error');
    object.classList.remove('success');
}

const validateData = () => {
    const fullname = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    addClassValidate(fullname, (fullname.value != ''));
    addClassValidate(phone, (phone.value != ''));
    addClassValidate(email, (email.value != ''));
    addClassValidate(subject, (subject.value != ''));
    addClassValidate(message, (message.value != ''));
    
    setTimeout(() => {
        removeClassValidate(fullname);
        removeClassValidate(phone);
        removeClassValidate(email);
        removeClassValidate(subject);
        removeClassValidate(message);
    }, 5000);
}
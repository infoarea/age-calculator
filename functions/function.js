

/*
* Alert Functions
*/

const msgAlert = (msg, type = 'danger') =>{
    return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}

/**
 * Email check function
*/

const emailCheck = (email) => {
    const emailPattern = /^[a-z0-9\._]{1,}@[a-z0-9\._]{1,}\.[a-z]{1,4}$/;

   return emailPattern.test(email);
}


/**
 * Phone Number check function
*/
const phoneCheck = (phone) => {
    const phonePattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return phonePattern.test(phone);
}


/**
 * Number Checking
*/

const numberCheck = (num) => {
    let numberPatter = /^[0-9]{1,3}$/;

    return numberPatter.test(num);

}
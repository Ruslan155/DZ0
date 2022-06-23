// function validatePassword(password){
//     arrayPassword = password.split('');
//     if(password.length <= 6 || password.length >= 20){
//         return 'INVALID';
//     }
//     let letters = arrayPassword.filter(function(number) {
//         return ((number.charCodeAt(0) >= 97 && number.charCodeAt(0) <= 122) || (number.charCodeAt(0) >= 65 && number.charCodeAt(0) <= 90));
//     });
//     let nums = arrayPassword.filter(function(number) {
//         return  (number.charCodeAt(0) >= 48 && number.charCodeAt(0) <= 57);A
//     });
//     if(letters.length == 0 || nums.length == 0){
//         return 'INVALID';
//     }
//     if(letters.length + nums.length != password.length){
//         return 'INVALID';
//     }
//     return 'VALID';
// }

let validatePassword = (password) => {
    arrayPassword = password.split('');
    if(password.length <= 6 || password.length >= 20){
        return 'INVALID';
    }
    let letters = arrayPassword.filter(function(number) {
        return ((number.charCodeAt(0) >= 97 && number.charCodeAt(0) <= 122) || (number.charCodeAt(0) >= 65 && number.charCodeAt(0) <= 90));
    });
    let nums = arrayPassword.filter(function(number) {
        return  (number.charCodeAt(0) >= 48 && number.charCodeAt(0) <= 57);A
    });
    if(letters.length == 0 || nums.length == 0){
        return 'INVALID';
    }
    if(letters.length + nums.length != password.length){
        return 'INVALID';
    }
    return 'VALID';
};

console.log(validatePassword("TcSf12y"));
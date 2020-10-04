function formValidation(scope) {

  var ContactForm = {},
  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/;
  
  // Your Form fields will go here
  ContactForm.nameField = scope.querySelector("[name='form-name']");
  ContactForm.emailField = scope.querySelector("[name='form-email']");
  ContactForm.companyField = scope.querySelector("[name='form-company']");

  // Fields auto generated in DOM based on the number of fields in your form.
  ContactForm.nameError = document.getElementById("name-error");
  ContactForm.emailError = document.getElementById("email-error");
  ContactForm.phoneError = document.getElementById("phone-error");

  function form_validation(fieldName, fieldError, errorMessage, isEmail, emailErrorMessage) {

    //Clear error field
    fieldName.classList.remove("error-border");
    if (fieldError) {
      fieldError.remove();
    }

    if (!isEmail) {

      if (fieldName.value == "") {
        fieldName.classList.remove("error-border");
        fieldName.insertAdjacentHTML('afterend', '<span class="error-message" id="name-error">' + errorMessage + '</span>');
        fieldName.classList.add("error-border");
      }
    } else {

      if (fieldName.value == "") {
        fieldName.insertAdjacentHTML('afterend', '<span class="error-message" id="email-error">' + errorMessage + '</span>');
        fieldName.classList.add("error-border");
      } else if (!fieldName.value.match(mailformat)) {
        fieldName.insertAdjacentHTML('afterend', '<span class="error-message" id="email-error">' + emailErrorMessage + '</span>');
        fieldName.classList.add("error-border");
      } 

    }

  }

  form_validation(ContactForm.nameField, ContactForm.nameError, 'please share your name');
  form_validation(ContactForm.emailField, ContactForm.emailError, 'please share your email address', true, 'please share your vaild email address');
  form_validation(ContactForm.companyField, ContactForm.phoneError, 'please share name of your organization ');

  if (ContactForm.nameField.value == "" || ContactForm.emailField.value == "" || !ContactForm.emailField.value.match(mailformat) || ContactForm.companyField.value == "") {
    return false;
  } else {

    // If incase you want to add popup message on successful submisson then uncomment the below line. I have used tingle modal to showcase the thank you message in popup.
    // Reference : https://tingle.robinparisi.com/

    // var tingleModalExists = document.querySelector('.tingle-modal'),
    // modalContainer = document.querySelector('.enable-popup-modal');

    // if (tingleModalExists) {
    //   tingleModalExists.style.display = "none";
    // }
    // if(modalContainer) {
    //   var custModalVideo = new tingle.modal({
    //     onClose: function() {
    //       custModalVideo.destroy();
    //     }
    //   });
    //   custModalVideo.setContent(modalContainer.innerHTML);
    //   custModalVideo.open();
    // }

    return true;
  }
}
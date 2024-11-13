import {IValidation} from 'models/generic';

// RegEx
const onlyDigits = /^[0-9]*$/;
const vaildStart = /^(05)/;
const containsDigits = /[0-9]/;
const containsArabicDigits = /[\u0660-\u0669]/;
const containsSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
const vaildEmail =
  /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

const isValidName = (name: string): IValidation => {
  if (name.replace(/\s/g, '').length === 0) {
    return {
      isInValid: true,
      message: 'Required',
    };
  } else if (
    containsSpecialCharacters.test(name) ||
    containsDigits.test(name) ||
    containsArabicDigits.test(name)
  ) {
    return {
      isInValid: true,
      message: 'Your name must contain only letters',
    };
  } else if (name.length <= 4 || name.length > 250) {
    return {
      isInValid: true,
      message: 'Please enter a valid name',
    };
  } else {
    return {
      isInValid: false,
      message: '',
    };
  }
};

const isValidEmail = (
  email: string,
  isFieldRequired?: boolean,
): IValidation => {
  if (isFieldRequired && email.replace(/\s/g, '').length === 0) {
    return {
      isInValid: true,
      message: 'Required',
    };
  } else if (email?.length > 0 && !vaildEmail.test(email)) {
    return {
      isInValid: true,
      message: 'Please enter a valid email',
    };
  }
  return {
    isInValid: false,
    message: '',
  };
};

const isValidPhone = (phone: string): IValidation => {
  if (phone.replace(/\s/g, '').length === 0) {
    return {
      isInValid: true,
      message: 'Required',
    };
  } else if (!onlyDigits.test(phone)) {
    return {
      isInValid: true,
      message: 'Your phone number must contain only digits',
    };
  } else if (!vaildStart.test(phone)) {
    return {
      isInValid: true,
      message: 'Your phone number must start with 05',
    };
  } else if (phone.length != 10) {
    return {
      isInValid: true,
      message: 'Your phone number must be 10 digits',
    };
  }

  return {
    isInValid: false,
    message: '',
  };
};

export default {
  isValidPhone,
  isValidName,
  isValidEmail,
};

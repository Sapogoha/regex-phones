export default function validatePhoneNumber(phone) {
  const justDigits = phone.replace(/\D/g, '');

  function checkingRussian(data) {
    return /^8\d{10}$|^7\d{10}$/.test(data);
  }

  return checkingRussian(justDigits)
    ? justDigits.replace(/^8|^7/, '+7')
    : justDigits.replace(/^(\d)/, '+$1');
}

// export default class Validator {
//   constructor(phone) {
//     this.phone = phone;
//   }

//   validatePhoneNumber() {
//     const justDigits = this.phone.replace(/\D/g, '');

//     function checkingRussian(data) {
//       return /^8\d{10}$|^7\d{10}$/.test(data);
//     }

//     return checkingRussian(justDigits)
//       ? justDigits.replace(/^8|^7/, '+7')
//       : justDigits.replace(/^(\d)/, '+$1');
//   }
// }

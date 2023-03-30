import React, { useState } from 'react';

export interface InputPhoneProps {
  onChange: Function;
}
const numbers = /^[0-9 -]+$/;
export function InputPhone({ onChange }: InputPhoneProps) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const updatePhoneNumber = (event: any) => {
    let old = phoneNumber;

    let str = event.target.value;

    if (str.length < 1) {
      str = '';
    } else {
      if (str.match(numbers)) {
        str = phoneFormatter(str);
      } else {
        str = old;
      }
    }

    setPhoneNumber(str);
    onChange(str);
  };

  function phoneFormatter(num: string) {
    var numbers = /^[0-9 -]+$/;

    var formatNum = num;
    if (!num.match(numbers)) {
      formatNum = '';
      num = '';
    }
    num = num.replace(/-/g, '');
    if (num.indexOf('02') == 0) {
      if (num.length > 10) {
        num = num.substr(0, 10);
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      } else if (num.length > 9) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      } else if (num.length > 5) {
        formatNum = num.replace(/(\d{2})(\d{3})(\d)/, '$1-$2-$3');
      } else if (num.length >= 2) {
        formatNum = num.replace(/(\d{2})(\d)/, '$1-$2');
      }
    } else {
      if (num.length > 11) {
        num = num.substr(0, 11);
        formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      } else if (num.length > 10) {
        formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      } else if (num.length > 6) {
        formatNum = num.replace(/(\d{3})(\d{3})(\d)/, '$1-$2-$3');
      } else if (num.length >= 3) {
        formatNum = num.replace(/(\d{3})(\d)/, '$1-$2');
      }
    }

    return formatNum;
  }

  return <input type="text" onChange={updatePhoneNumber} />;
}

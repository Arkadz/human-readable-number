module.exports = function toReadable (number) {
  
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const fromTenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    function func(data) {
      if (data.startsWith('1')) {
          return fromTenToTwenty[+data[1]];
      } else if (data.startsWith('0')) {
          return (data[1] == '0' ? '' : units[+data[1]]);
      } else if (data.endsWith('0')) {
          return dozens[+data[0]];  
      } else {
          return dozens[+data[0]] + ' ' + units[+data[1]];
      }
    }
    
    number = String(number);
    len = number.length;
    
    if (len == 1) {
      return units[+number];
    }
  
    if (len == 2) {   
        return func(number);
    }
   
    if (len == 3) {
      return (units[+number[0]] + ' hundred ' + func(number.slice(1))).trim(); 
    }
  
    return '';
  }

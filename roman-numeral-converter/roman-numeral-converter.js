function convertToRoman(num) {
    var numUnits = num%10;
    var numTens = num%100-numUnits;
    var numHundreds = (num%1000-(numTens+numUnits));
    var numThousands = (num%10000-(numTens+numUnits+numHundreds));
    var units = {
    0:'',
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    6:'VI',
    7:'VII',
    8:'VIII',
    9:'IX'};
    var tens = {0:'',
    10:'X',
    20:'XX',
    30:'XXX',
    40:'XL',
    50:'L',
    60:'Lx',
    70:'LXX',
    80:'LXXX',
    90:'XC'};
    var hundreds = {0:'',
    100:'C',
    200:'CC',
    300:'CCC',
    400:'CD',
    500:'D',
    600:'DC',
    700:'DCC',
    800:'DCCC',
    900:'CM'};
    var hundreds = {0:'',
    100:'C',
    200:'CC',
    300:'CCC',
    400:'CD',
    500:'D',
    600:'DC',
    700:'DCC',
    800:'DCCC',
    900:'CM'};
    var thousands = {
      0:'',
      1000:'M',
      2000:'MM',
      3000:'MMM',
    };
    var romanNumeral = thousands[numThousands]+hundreds[numHundreds]+tens[numTens]+units[numUnits];
    return romanNumeral;
   }
   
   convertToRoman(36);
function palindrome(kata) {
    var indexPembalik = kata.length-1;
    var pembalik = [];
    for(var i=0; i<kata.length; i++) {
        pembalik[indexPembalik] = kata[i];
        indexPembalik--;
    }

    if(pembalik.join('') == kata) {
        return true;
    }else {
        return false;
    }

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


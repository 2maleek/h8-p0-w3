function angkaPalindrome(num) {

	 do { 
	 	num ++  // untuk pass jika input sudah palindrome
	 	var numString = num.toString();
	  var balik = ''; 
	  for(var i = numString.length - 1 ; i >= 0 ; i--)
	  { 
	  	balik += numString[i];
	  	 }
	  }while (numString != balik); 
	  return numString;
 } 
 // TEST CASES 
 console.log(angkaPalindrome(8)); // 9 
 console.log(angkaPalindrome(10)); // 11 
 console.log(angkaPalindrome(117)); // 121 
 console.log(angkaPalindrome(175)); // 181 
 console.log(angkaPalindrome(1000)); // 1001 

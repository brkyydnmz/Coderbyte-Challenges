function LetterChanges(str){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newAlphabet = "bcdEfghIjklmnOpqrstUvwxyzA";
    var answer = "";
    
    for (i = 0; i < str.length; i++)
    {
        //"!== -1" kullanımı, bir karakterin "alpha" dizisi içinde olup olmadığını kontrol etmek için kullanılır.
        //indexOf eğer karakter dizisi dize içinde bulunmazsa, fonksiyon "-1" döndürür.
        if (alphabet.indexOf(str[i]) !== -1) {  
            answer += newAlphabet.charAt(alphabet.indexOf(str[i]));  
        } else {
            answer += str[i];
        }
    }
    return answer;
}

console.log(LetterChanges("Hello world"));  //OUTPUT: Hfmmp xpsmE
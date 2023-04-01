function LetterCapitalize(str) { 

    var array = str.split(" "); 

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    
    return array.join(" ");  
}

//verilen metni kelime arası boşluğa göre ayırdı
//elimizde test car olsa var array ile 2 lelemanlı array oldu
// array.length'i 2 [0,1]
// array[0] ın yani test in charAt(0) ı t dir 
//t yi toUpperCase() ile T ye dönüştürdük
//slice(1) ile 0.array elemanında 1.elemandan itibaren ekle yani est i ekledi
// for ile array in[0] ı hallettikten sonra sırayla 1,2,... halleder 
//en son her array elemanını aralarını boşluk ile birbirine ekledik 

console.log(LetterCapitalize("test car"))


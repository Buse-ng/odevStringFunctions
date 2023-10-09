/*
1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE) +
2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER) +
3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE) +
4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE) +
5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE) +
6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü) +
7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING) +

8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper)
*/


// 1) 
var metin1 = "  Çağatay Yıldız";
var sonuc1 = metin1.replace(/ /g, "");
console.log(sonuc1);

// 2) 
var metin2 = "cagatay yildiz";
var sonuc2 = metin2.replace(/ /g, "").toUpperCase();
console.log(sonuc2);

// 3) 
var metin3 = "******Çağatay Yıldız";
var sonuc3 = metin3.replace(/\*/g, "");
console.log(sonuc3);

// 4)
var metin4 = "Çağatay  Yıldız";
var sonuc4 = metin4.replace(/  /g, " ");
console.log(sonuc4);

// 5) 
var metin5 = "**Tech Career**";
var sonuc5 = metin5.replace(/\*/g, "");
console.log(sonuc5);

// 6) 
var metin6 = "Tech Career";
var sonuc6 = "***" + metin6 + "***";
console.log(sonuc6);

// 7) 
var metin7 = "Tech Career Bilişim teknolojileri";
var sonKelime = metin7.substring(metin7.lastIndexOf(" ") + 1);
var sonKelimeyiBuyut = sonKelime.toUpperCase();
var sonuc7 = metin7.replace(sonKelime, sonKelimeyiBuyut);
console.log(sonuc7);

// 8)



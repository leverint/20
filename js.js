(function type() {
    //из числа в строку
    var num = 32;
    var numberAsStr = String(num);
    var numberAsStrMagic = num + "";
    console.log("Как String", numberAsStr, typeof numberAsStr);
    console.log("Как + пустая строка", numberAsStrMagic, typeof numberAsStrMagic);

})();

(function type() {
    //из числа в строку только с точкой, иначе NaN
    var String = "32";
    var stringAsNumber = Number(String);
    var stringAsNumberMagic = +String;
    var stringAsNumberBinary = String - 1;
    var stringAsNumberDel = String / 1;
    console.log("Как Number", stringAsNumber, typeof stringAsNumber);
    console.log("Как +String", stringAsNumberMagic, typeof stringAsNumberMagic);
    console.log("Как String - 1", stringAsNumberBinary, typeof stringAsNumberBinary);
    console.log("Как String / 1", stringAsNumberDel, typeof stringAsNumberDel);

})();





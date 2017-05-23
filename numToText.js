var numberDecode = function(number){
var numberPosition = {
	 one : {
		
		1 : "один",
		2 : "два",
		3 : "три",
		4 : "четыре",
		5 : "пять",
		6 : "шесть",
		7 : "семь",
		8 : "восемь",
		9 : "девять",
 		10 : "десять",
		11 : "одинадцать",
		12 : "двенадцать",
		13 : "тринадцать",
		14 : "четырнадцать",
		15 : "пятнадцать",
		16 : "шестнадцать",
		17 : "семнадцать",
		18 : "восемнадцать",
		19 : "девятнадцать" },
	decade : {
		1 : "один",
		2 : "двадцать",
		3 : "тридцать",
		4 : "сорок",
		5 : "пятьдесят",
		6 : "шестьдесят",
		7 : "семьдесят",
		8 : "восемьдесят",
		9 : "девяносто" },
	hundred : {
		1 : "сто",
		2 : "двести",
		3 : "триста",
		4 : "четыресто",
		5 : "пятьсот",
		6 : "шестьсот",
		7 : "семьсот",
		8 : "восемьсот",
		9 : "девятьсот" },
	thousand:{
		1 : "одна тысяча",
		2 : "две тысячи",
		3 : "три тысячи",
		4 : "четыре тысячи",
		5 : "пять тысяч",
		6 : "шесть тысяч",
		7 : "семь тысяч",
		8 : "восемь тысяч",
		9 : "девять тысяч",
		
	}
		
}
	
 
	var stringNumber = String(number).split("").reverse();
	var textNumber = '';
		textNumber = !!numberPosition.thousand[stringNumber[3]] ? textNumber + numberPosition.thousand[stringNumber[3]] + ' ' : textNumber; 
		textNumber = !!numberPosition.hundred[stringNumber[2]] ? textNumber + numberPosition.hundred[stringNumber[2]] + ' ' : textNumber; 
	
	if ( stringNumber[1] === '1'){
		textNumber = textNumber + numberPosition.one[(stringNumber[1] + stringNumber[0])];
	}
	else{
		textNumber = !!numberPosition.decade[stringNumber[1]] ? textNumber + numberPosition.decade[stringNumber[1]] + ' ' : textNumber;
		textNumber = !!numberPosition.decade[stringNumber[0]] ? textNumber + numberPosition.one[stringNumber[0]] + ' ' : textNumber;	
	}
	return textNumber;
};
 
 var number = 101;
console.log(numberDecode(number)  ); 

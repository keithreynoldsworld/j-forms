function add(a,b){return parseFloat(a) + parseFloat(b)};

function subtract(a,b){return parseFloat(a) - parseFloat(b)};

function tax(a,b){var c = a.substring(1);
				  var d = b.substring(0, b.length - 1);
				 
	return "$" + parseFloat(c)*parseFloat(d)*.01};
tax("$100.00", "7%")

function stringLength(a){

	if (a.length < 5){return "short string";}
	else if (a.length >= 5 && a.length <=10){return "medium string";}
	else {return "long string"}

}; 

function startsWith(a){
var b = a.toLowerCase();
	if (b.charAt(0)==="a"){return "starts with A";}
	if (b.charAt(0)==="b"){return "starts with B";}
	if (b.charAt(0)==="c"){return "starts with C";}
	if (b.charAt(0)==="d"){return "starts with D";}
	if (b.charAt(0)==="e"){return "starts with E";}
			else {return "starts with something else";}
			

};

function stringRepeat(a,b){
	if(b===1){return a;}
	for(var i = 0;i<b-1;i++){a = a+a;}
	return a;



};

function nSum(a){
	var c = 1
	for(var i = 0;i<parseFloat(a)+1;i++){c = c+i;}  
		return c-1;
};

function join(array,separator){


 return array.join(separator);
};


function countLetters(str){


var counts = {};

var ch, index, len, count;


for (index = 0, len = str.length; index < len; ++index) {
    
    ch = str.charAt(index); 
    count = counts[ch];

    counts[ch] = count ? count + 1 : 1;
}

var banana = [];
for (ch in counts) {
    banana.push(ch+": "); banana.push(counts[ch]+", ");
}
return banana.join("");
}; countLetters("have a nice day");
//var	spatula = {};
//var banana = a.split("");
//console.log(banana);

//for(var m=0;m<banana.length;m++){spatula.count = 
//	for(var i=0;i<banana.length;i++){if(banana[m]===banana[i]){spatula[m]=spatula[m]+1];}   ;}
//};	
//	console.log(banana);
//	console.log(spatula);
//};

//If thuld be displayed. If the string is between 5 and 10 characters long the words "medium string" should be displayed. If the string is greater than 10 characters long the words "long string" should be displayed.</p>

function maze(){

var items = [[true,true,true,true,true,true],[true,true,false,false,false,true],["start",false,false,true,false,true],[true,false,true,true,false,"end"],[true,false,true,true,true,true],[true,false,false,false,true,true],[true,true,true,true,true,true]];
return items;
// 1

};


function table(a,b,c,d){
var e = 
};








let task1 = document.querySelector('#task1');
let result1 = document.querySelector('#result1');

let task2 = document.querySelector('#task2');
let result2 = document.querySelector('#result2');

let task3 = document.querySelector('#task3');
let result3 = document.querySelector('#result3');

let task4 = document.querySelector('#task4');
let result4 = document.querySelector('#result4');

let task5 = document.querySelector('#task5');
let result5 = document.querySelector('#result5');

let task6 = document.querySelector('#task6');
let result6 = document.querySelector('#result6');

let task8 = document.querySelector('#task8');
let result8 = document.querySelector('#result8');

let task9 = document.querySelector('#task9');
let result9 = document.querySelector('#result9');

let task10 = document.querySelector('#task10');
let result10 = document.querySelector('#result10');

function sumArray(arr){
	let sum = 0;
	arr.forEach(function(num){
		sum = sum + num;
	});
	return sum;
}

function getAboveZero(arr){
	let z = arr.filter(function(num){
		return num > 0;
	});
	return z;
}

function getPonies(arr, poni){

	let p = arr.includes(poni);
	if (p == true)
		return poni;
	else 
		return p;
}

function isTxIncluded(arr, inc){
	let i = arr.includes(inc);
	return i;
}


function getSizes(arr){
	let s = arr.map(function(num){
		return num.length;
	})
	return s;
}


function getWithSpaces(arr){
	let sum = 0;
	arr.forEach(function(s){sum = sum + s.length})
	let a = [arr.join(" "), sum];
	return a;
}

function getWithSpaces(arr){
	let sum = 0;
	arr.forEach(function(s){sum = sum + s.length})
	let a = [arr.join(" "), sum];
	return a;
}

function getEpisodes(anime){
	return `Аниме ${anime.title} включает ${anime.episodes} серий`;
}



const triple = (x) => {
	return parseInt(x)*3;
}

const getAvgGlucose = (check) => {
	let sum = 0;
	check.forEach(num => {
		sum = sum + num;
	})
	n = check.length;
	return ((sum/n).toFixed(1));
}

task1.onclick = function(){
	
	result1.innerHTML = "Результат: " + sumArray([4, 6, 16, 73, 5]);
}

task2.onclick = function(){
	
	result2.innerHTML = "Результат: " + getAboveZero([1,-3, -2, 4, 10]);
}

task3.addEventListener("input", () => {
	
	result3.innerHTML = "Результат: " + getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'], task3.value);

})

task4.addEventListener("input", () =>{
	
	result4.innerHTML = "Результат: " + isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], task4.value);
})

task5.onclick = function(){
	
	result5.innerHTML = "Результат: " + getSizes(["Moscow", "Coding", "School"]);
}

task6.onclick = function(){
	
	result6.innerHTML = "Результат: " + getWithSpaces(["Moscow", "never", "sleep"]);
}

task8.onclick = function(){
	
	result8.innerHTML = "Результат: " + getEpisodes({title: "Code Geass", episodes: 25});
}

task9.addEventListener("input", () => {
	
	result9.innerHTML = "Результат: " + triple(task9.value);
})

task10.onclick = function(){
	
	result10.innerHTML = "Результат: " + getAvgGlucose([5.4, 8.1, 6.3, 4.9]);
}

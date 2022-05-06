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


function getAge(arr){
	return arr + 1;
}

function getRemainder(x, y){
	return x % y;
}

function faceControl(arr){
	if (arr >= 18)
		return "Welcome";
	else 
		return "Отказ";
}

function getNextAge(age){
	if (age != '')
		return Number(age) + 1;
	else
		return 0;
}


function canRide(arr){
	return arr >= 140;
}

task1.onclick = function(){
	
	result1.innerHTML = "Результат: " + getAge(18);
}

task2.onclick = function(){
	
	result2.innerHTML = "Результат: " + getRemainder(10, 3);
}

task3.addEventListener("input", () => {
	
	result3.innerHTML = "Результат: " + faceControl(task3.value);

})

task4.addEventListener("input", () =>{
	
	result4.innerHTML = "Результат: " + getNextAge(task4.value);
})

task5.addEventListener("input", () =>{
	
	result5.innerHTML = "Результат: " + canRide(task5.value);
})
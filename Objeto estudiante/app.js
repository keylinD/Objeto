const michelle = {
	name : 'Michelle',
	points : 2000,
	isActive : true,
	courses : ['Intro JS' , ' Intro UX' , 'UX master']
};

const alexandra = {
	name : 'Alexandra',
	points : 4100,
	isActive : true,
	courses : ['Intro JS' , ' Intro UX' , 'UX master']
};

const andrea = {
	name : 'Andrea',
	points : 800,
	isActive : false,
	courses : ['Intro JS' , 'JS avanzado']
};

var students = [michelle, alexandra, andrea];

//alumnas activas

for (let i = 0; i < students.length ; i++){
	if (students[i].isActive){
		console.log(students[i].name);
	}	
}

//puntos totales de las clases 

var total = 0;

for (var i = 0; i < students.length; i++){
	total += students[i].points;
}
	//console.log(students[i].points);
	console.log(total);

//Nombre de las estudiantes que llevaron el curso de JS

for (var i = 0; i < students.length; i++){
	var studentCourses = students[i].courses;
	for (var j =0  ;j < studentCourses.length; i++) {
		if (studentCourses[j] === 'JS Avanzado') {
			console.log(students[i]);
		}
		
	}
	console.log(students[i].courses);
}
// if(studentCourses[j] === 'JS avanzado'
			// console.log(students[i]);
// write a message about the quiz in the console and the alert box, respectively
console.log("Привіт. Пройди вікторину з географії України та отримай по завершенню звіт про рівень своїх знань. Поїхали!");
alert("Привіт. Пройди вікторину з географії України та отримай по завершенню звіт про рівень своїх знань. Поїхали!");

// points counter
let score = 0;

// question 1
let answer1 = prompt("Питання 1: Яка європейська держава найбільша за площею?");
if (answer1.toLowerCase() === "україна") {
	score++;
}

// question 2
let answer2 = prompt("Питання 2: Яка річка найбільша в Україні?");
if (answer2.toLowerCase() === "дніпро") {
	score++;
}

// question 3
let answer3 = prompt("Питання 3: Яке місто найдовше в Україні?");
if (answer3.toLowerCase() === "кривий ріг") {
	score++;
}

// question 4
let answer4 = prompt("Питання 4: Яка гора в Україні найбільша?");
if (answer4.toLowerCase() === "говерла") {
	score++;
}

// question 5
let answer5 = prompt("Питання 5: Географічний центр Європи знаходиться у місті, яке розташоване на Закарпатті Україні. Як називається це місто?");
if (answer5.toLowerCase() === "рахів") {
	score++;
}

// question 6
let answer6 = prompt("Питання 6: Яка пустеля найбільша в Україні та є однією з найбільших пустель Європі?");
if (answer6.toLowerCase() === "олешківські піски") {
	score++;
}

// question 7
let answer7 = prompt("Питання 7: Яке природне озеро в Україні найглибше?");
if (answer7.toLowerCase() === "світязь") {
	score++;
}

// question 8
let answer8 = prompt("Питання 8: Які гори розташовані на півдні України?");
if (answer8.toLowerCase() === "кримські" || answer8.toLowerCase() === "кримські гори") {
	score++;
}

// question 9
let answer9 = prompt("Питання 9: Як називається острів, який є європейським заповідником, флора й фауна якого занесена до Червоної книги? Його ще називають українськими Мальдивами");
if (answer9.toLowerCase() === "джарилгач") {
	score++;
}

// question 10
let answer10 = prompt("Питання 10: Як називається найбільше село в Україні, розтягнуте на 27 кілометрів?");
if (answer10.toLowerCase() === "микуличин") {
	score++;
}

// statistics on the number of correct answers and the level of knowledge relative to the scored points:

// v.1 write a message in the console
console.log(`Тест завершено! Ти набрав ${score} з 10 балів.`);
if (score === 10) {
	console.log("Твій рівень знань: Супер! Ти добре знаєш географію України.");
} else if (score >= 7) {
	console.log("Твій рівень знань: Добре. Ти знаєш георгафію України.");
} else if (score >= 5) {
	console.log("Твій рівень знань: Гаразд. Твої знання з географії можна трохи покращити.");
} else if (score >= 3) {
	console.log("Твій рівень знань: Так собі. Твої знання з географії потрібно покращити.");
} else {
	console.log("Твій рівень знань: Слабенько. Рекомендую тобі більше вчитися і надолужити знання з географії України.");
}

// v.2 write a message in the alert box
let totalQuestions;
if (score === 10) {
	totalQuestions = "Супер! Ти добре знаєш географію України.";
} else if (score >= 7) {
	totalQuestions = "Добре. Ти знаєш георгафію України.";
} else if (score >= 5) {
	totalQuestions = "Гаразд. Твої знання з географії можна трохи покращити.";
} else if (score >= 3) {
	totalQuestions = "Твій рівень знань: Так собі. Твої знання з географії потрібно покращити.";
} else {
	totalQuestions = "Слабенько. Рекомендую тобі більше вчитися і надолужити знання з географії України.";
}
alert(`Тест завершено! Ти набрав ${score} з 10 балів. Твій рівень знань: ${totalQuestions}`);
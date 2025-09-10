let num = Number(prompt("Введите число -"));
if (num > 0) {
    alert("Число положительное");
} else if (num < 0) {
    alert("Число отрицательное");
} else {
    alert("Число равно нулю");
}

let age = Number(prompt("Введите ваш возраст:"));
if (age >= 0 && age <= 120) {
    alert("Возраст введен корректно");
} else {
    alert("Возраст некорректный");
}

let number = Number(prompt("Введите число - "));
if (number < 0) {
    alert("Модуль числа = " + (-number));
} else {
    alert("Модуль числа = " + number);
}

let hours = Number(prompt("Введите часы (0-23) - "));
let minutes = Number(prompt("Введите минуты (0-59) -"));
let seconds = Number(prompt("Введите секунды (0-59) -"));

if (
    hours >= 0 && hours <= 23 &&
    minutes >= 0 && minutes <= 59 &&
    seconds >= 0 && seconds <= 59
) {
    alert("Время корректное");
} else {
    alert("Время некоректное");
}

let x = Number(prompt("Введите координату X - "));
let y = Number(prompt("Введите координату Y - "));

if (x === 0 && y === 0) {
    alert("Точка в начале координат");
} else if (x === 0) {
    alert("Точка на оси Y");
} else if (y === 0) {
    alert("Точка на оси X");
} else if (x > 0 && y > 0) {
    alert("1 четверть");
} else if (x < 0 && y > 0) {
    alert("2 четверть");
} else if (x < 0 && y < 0) {
    alert("3 четверть");
} else {
    alert("4 четверть");
}

let month = Number(prompt("Введите номер месяца (1-12):"));
switch (month) {
    case 1: alert("Январь"); break;
    case 2: alert("Февраль"); break;
    case 3: alert("Март"); break;
    case 4: alert("Апрель"); break;
    case 5: alert("Май"); break;
    case 6: alert("Июнь"); break;
    case 7: alert("Июль"); break;
    case 8: alert("Август"); break;
    case 9: alert("Сентябрь"); break;
    case 10: alert("Октябрь"); break;
    case 11: alert("Ноябрь"); break;
    case 12: alert("Декабрь"); break;
    default: alert("Неверный номер месяца");
}

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let prompt_let = prompt("Введите знак - +, -, *, / -");

switch (prompt_let) {
    case "+": alert("Результат- " + (num1 + num2)); 
    break;
    case "-": alert("Результат- " + (num1 - num2));
    break;
    case "*": alert("Результат- " + (num1 * num2)); 
    break;
    case "/":
        if (b !== 0) {
            alert("Результат- " + (num1 / num2));
        } else {
            alert("Деление на ноль невозможно!");
        }
        break;
    default: alert("Ошибка");
}

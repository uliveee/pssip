// Функция для расчета длины окружности по заданному радиусу
function calculateCircumference() {
    var radiusInput = document.getElementById("radiusInput");
    var radius = parseFloat(radiusInput.value);

    if (isNaN(radius)) {
        alert("Пожалуйста, введите числовое значение для радиуса.");
        return;
    }

    var circumference = 2 * Math.PI * radius;

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Длина окружности: " + circumference.toFixed(2);
}

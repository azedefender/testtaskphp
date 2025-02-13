        // Генерация таблицы 5x5 с случайными 0 и 1
        function generateTable() {
            const table = document.getElementById('numberTable');
            for (let i = 0; i < 5; i++) {
                const row = table.insertRow();
                for (let j = 0; j < 5; j++) {
                    const cell = row.insertCell();
                    cell.textContent = Math.round(Math.random()); // Генерация 0 или 1
                }
            }
        }

        // Функция для подсчета ячеек с нулями, у которых больше двух соседей с единицами
        function countZerosWithNeighbors() {
            const table = document.getElementById('numberTable');
            let count = 0;

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if (table.rows[i].cells[j].textContent === '0') {
                        let neighborCount = 0;

                        // Проверка соседей: сверху, снизу, слева, справа
                        if (i > 0 && table.rows[i - 1].cells[j].textContent === '1') neighborCount++; // Сверху
                        if (i < 4 && table.rows[i + 1].cells[j].textContent === '1') neighborCount++; // Снизу
                        if (j > 0 && table.rows[i].cells[j - 1].textContent === '1') neighborCount++; // Слева
                        if (j < 4 && table.rows[i].cells[j + 1].textContent === '1') neighborCount++; // Справа

                        if (neighborCount > 2) {
                            count++;
                        }
                    }
                }
            }

            // Вывод всплывающего сообщения с количеством ячеек
            alert(`Количество ячеек с нулями, имеющих рядом с собой больше двух ячеек с единицами: ${count}`);
        }

        // Функция для изменения цвета ячеек на желтый
        function makeCellsYellow() {
            const table = document.getElementById('numberTable');
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    table.rows[i].cells[j].classList.add('yellow');
                }
            }
        }

        // Генерация таблицы при загрузке страницы
        window.onload = generateTable;

// Функция для отображения информации об игроке
function showPlayerDetails(playerName, teamName, rank, score, podbori,peredachi) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h3>${playerName}</h3>
        <p>Команда: ${teamName}</p>
        <p>Место в рейтинге: ${rank}</p>
        <p>Очки: ${score}, Подборы: ${podbori}, Передачи: ${peredachi}</p>
    `;
    modal.classList.remove('hidden');
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

// Обработчик закрытия модального окна по клавише Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});



const playersDB = [
    { name: "Леброн Джеймс", team: "Команда A", rank: 1, score: 30, podbori: 10, peredachi: 8 },
    { name: "Коби Брайант", team: "Команда B", rank: 2, score: 28, podbori: 6, peredachi: 7 },
    { name: "Майкл Джордан", team: "Команда C", rank: 3, score: 35, podbori: 8, peredachi: 9 },
    { name: "Шакил О’Нил", team: "Команда D", rank: 4, score: 25, podbori: 12, peredachi: 4 }
];

// Функция для загрузки игроков на страницу
function loadPlayers() {
    const playerList = document.querySelector('.player-list'); // Контейнер для списка игроков
    playersDB.forEach(player => {
        const newPlayer = document.createElement('li');
        newPlayer.innerHTML = `
            <h3>${player.name}</h3>
            <p>Команда: ${player.team}</p>
            <p>Рейтинг: ${player.rank}</p>
            <p>Очки: ${player.score}</p>
            <p>Подборы: ${player.podbori}</p>
            <p>Передачи: ${player.peredachi}</p>
            <button class="details-btn" onclick="showPlayerDetails('${player.name}', '${player.team}', '${player.rank}', '${player.score}', '${player.podbori}', '${player.peredachi}')">Подробнее</button>
        `;
        playerList.appendChild(newPlayer);
    });
}

// Загружаем игроков при загрузке страницы
document.addEventListener("DOMContentLoaded", loadPlayers);

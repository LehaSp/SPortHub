
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

const teamsDB = [
    { 
        name: "Команда A", 
        raiting: 1,
        winrate: '80', 
        wins: 20, 
        lose: 5, 
        srscore: 90,
        players: ["Игрок 1", "Игрок 2", "Игрок 3", "Игрок 4", "Игрок 5"], 
        coach: "Джеки Чан", 
        number: "+7 (999) 173-08-29"
    },
    { 
        name: "Команда B", 
        raiting: 2,
        winrate: '70', 
        wins: 18, 
        lose: 8, 
        srscore: 90,
        players: ["Игрок 1", "Игрок 2", "Игрок 3", "Игрок 4", "Игрок 5"], 
        coach: "Джеки Чан", 
        number: "+7 (999) 173-08-29"
    },
    { 
        name: "Команда C", 
        raiting: 3,
        winrate: '65', 
        wins: 17, 
        lose: 9, 
        srscore: 90,
        players: ["Игрок 4", "Игрок 5", "Игрок 6"], 
        coach: "Джеки Чан", 
        number: "+7 (999) 173-08-29"
    },
    { 
        name: "Команда D", 
        raiting: 4,
        winrate: '58',
        wins: 15, 
        lose: 11, 
        srscore: 90,
        players: ["Игрок 4", "Игрок 5", "Игрок 6"], 
        coach: "Джеки Чан", 
        number: "+7 (999) 173-08-29"
    }
    
];

// Функция для загрузки команд
function loadTeams() {
    const teamList = document.querySelector('.team-list'); // Контейнер для команд
    teamsDB.forEach(team => {
        const newTeam = document.createElement('li');
        newTeam.innerHTML = `
            <span>${team.name} (Винрейт: ${team.winrate}%)</span>
            <p>Статистика: ${team.wins} побед, ${team.lose} поражений</p>
            <button class="details-btn" data-team='${JSON.stringify(team)}'>Подробнее</button>
        `;
        teamList.appendChild(newTeam);
    });
    // Привязка обработчиков событий после того, как элементы добавлены на страницу
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const team = JSON.parse(this.getAttribute('data-team'));
            showTeamDetails(
                team.name,
                team.players,
                team.number,
                team.raiting,
                team.winrate,
                team.wins,
                team.lose,
                team.coach,
                team.srscore
            );
        });
    });
}



// Загрузка команд при загрузке страницы
document.addEventListener("DOMContentLoaded", loadTeams);

// Функция для отображения информации о команде
function showTeamDetails(teamName, players,number,raiting,winrate,win,lose,coach,srscore) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h3>${teamName}</h3>
        <div class="leftside">
            <h4>Рейтинг команды: ${raiting}</h4>
            <p>Состав команды:</p>
            <ul>
                ${players.map(player => `<li>${player}</li>`).join('')}
            </ul>
        </div>
        <div class="rightside">
            <h4>Тренер: ${coach}</h4>
            <h4>Статистика:</h4>
            <h4>${winrate} Винрейт</h4>
            <h4>${win} Победы</h4>
            <h4>${lose} Поражения</h4>
            <h4>${srscore} Очков в среднем за игру</h4>
            
        </div>
        <section class="recent-matches">
            <h2>Последние матчи</h2>
            <ul>
                <li class="match-row">
                    <span class="team team-left">${teamName}</span>
                    <span class="score">85 - 78</span>
                    <span class="team team-right">Команда Б</span>
                </li>
                <li class="match-row">
                    <span class="team team-left">${teamName}</span>
                    <span class="score">92 - 88</span>
                    <span class="team team-right">Команда D</span>
                </li>
                <li class="match-row">
                    <span class="team team-left">${teamName}</span>
                    <span class="score">100 - 95</span>
                    <span class="team team-right">Команда F</span>
                </li>
            </ul>
        </section>
            
            <h5>Контактный номер:${number}</h5>`;
    modal.classList.remove('hidden');
}

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


// Пример функции для добавления турнира
function addTournament(name, date, location) {
    const carousel = document.querySelector('.tournament-carousel');
    const newTournament = document.createElement('div');
    newTournament.classList.add('tournament');
    newTournament.innerHTML = `
        <h3>${name}</h3>
        <p>Дата: ${date}</p>
        <p>Место проведения: ${location}</p>
    `;
    carousel.appendChild(newTournament);
}

addTournament("Турнир трех волшебников", "12 августа 2025", "Якутск")



// Прокрутка карусели колесиком мыши
const tournamentCarousel = document.querySelector('.tournament-carousel');

tournamentCarousel.addEventListener('wheel', (event) => {
    event.preventDefault(); // Отключаем стандартную вертикальную прокрутку
    tournamentCarousel.scrollBy({
        left: event.deltaY, // Горизонтальная прокрутка
        behavior: 'smooth', // Плавный скролл
    });
});



//FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        parent.classList.toggle('active');
    });
});


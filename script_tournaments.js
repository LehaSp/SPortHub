// Прокрутка карусели колесиком мыши
const tournamentCarousel = document.querySelector('.tournament-carousel');

tournamentCarousel.addEventListener('wheel', (event) => {
    event.preventDefault(); // Отключаем стандартную вертикальную прокрутку
    tournamentCarousel.scrollBy({
        left: event.deltaY, // Горизонтальная прокрутка
        behavior: 'smooth', // Плавный скролл
    });
});

// Пример турниров
const tournamentsData = {
    current: [
        { name: 'Турнир 1', date: '25 января 2025', location: 'Москва' },
        { name: 'Турнир 2', date: '30 января 2025', location: 'Санкт-Петербург' },
        { name: 'Турнир 3', date: '5 февраля 2025', location: 'Казань' },
        { name: 'Турнир 4', date: '10 февраля 2025', location: 'Новосибирск' },
    ],
    upcoming: [
        { name: 'Турнир 5', date: '15 февраля 2025', location: 'Екатеринбург' },
        { name: 'Турнир 6', date: '20 февраля 2025', location: 'Казань' },
        { name: 'Турнир 7', date: '25 февраля 2025', location: 'Москва' },
        { name: 'Турнир 8', date: '1 марта 2025', location: 'Санкт-Петербург' },
    ],
    past: [
        { name: 'Турнир 9', date: '10 января 2025', location: 'Сочи' },
        { name: 'Турнир 10', date: '15 января 2025', location: 'Ростов-на-Дону' },
        { name: 'Турнир 11', date: '20 января 2025', location: 'Уфа' },
        { name: 'Турнир 13', date: '19 января 2025', location: 'Томск' },
        { name: 'Турнир 14', date: '18 января 2025', location: 'Томск' },
        { name: 'Турнир 15', date: '17 января 2025', location: 'Томск' },
        { name: 'Турнир 12', date: '25 января 2025', location: 'Томск' },
    ]
};



// Открытие модального окна
function openModal(status) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTournaments = document.getElementById('modal-tournaments');
    
    // Очищаем модальное окно перед загрузкой данных
    modalTournaments.innerHTML = '';

    // Устанавливаем заголовок модального окна
    modalTitle.innerText = `Все ${status === 'current' ? 'текущие' : status === 'upcoming' ? 'будущие' : 'прошлые'} турниры`;


    // Добавляем все турниры в модальное окно
    tournamentsData[status].forEach(tournament => {
        const tournamentElement = document.createElement('div');
        tournamentElement.classList.add('tournament');
        tournamentElement.innerHTML = `
            <h3>${tournament.name}</h3>
            <p>Дата: ${tournament.date}</p>
            <p>Место проведения: ${tournament.location}</p>
        `;
        modalTournaments.appendChild(tournamentElement);
    });

    // Показываем модальное окно
    modal.style.display = 'block';
    
}
// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
}

// Обработчик закрытия модального окна по клавише Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
// Загружаем турниры при загрузке страницы
window.onload = displayTournaments;




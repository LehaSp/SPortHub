// База новостей
const newsDB = [
    {
        title: "Открытие нового сезона",
        date: "1 апреля 2025",
        content: "В новом сезоне нас ждет множество интересных матчей, неожиданных поворотов и эпических сражений. Не пропустите старт!",
    },
    {
        title: "Команда A выиграла турнир",
        date: "15 марта 2025",
        content: "Команда A показала невероятную игру и победила в финале с разницей в 10 очков. Поздравляем!",
    },
    {
        title: "Новый игрок в Команде B",
        date: "10 марта 2025",
        content: "Команда B подписала контракт с перспективным игроком. Он уже готов показать себя в ближайших матчах.",
    },
    {
        title: "Сидоров Николай сделал ДАНК",
        date: "2 Апреля 2025",
        content: "В ожесточенной схватке 2 на 2 Колесико поставил ДИКИЙ ПОСТЕР через Легостаева Эмиля.",
    }
];

// Функция загрузки новостей
function loadNews() {
    const newsList = document.querySelector('.news-list');
    newsDB.forEach(news => {
        const newsItem = document.createElement('li');
        newsItem.innerHTML = `
            <h3>${news.title}</h3>
            <p><strong>Дата:</strong> ${news.date}</p>
            <button class="details-btn" data-title="${news.title}">Подробнее</button>
        `;
        newsList.appendChild(newsItem);
    });

    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            showNewsDetails(button.getAttribute('data-title'));
        });
    });
}

// Функция отображения модального окна с подробной новостью
function showNewsDetails(title) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const newsItem = newsDB.find(news => news.title === title);

    if (newsItem) {
        modalBody.innerHTML = `
            <h2>${newsItem.title}</h2>
            <p><strong>Дата:</strong> ${newsItem.date}</p>
            <p>${newsItem.content}</p>
        `;
        modal.style.display = "flex";
    }
}

// Функция закрытия модального окна
function closeNewsModal() {
    document.getElementById('modal').style.display = "none";
}

// Загружаем новости при загрузке страницы
document.addEventListener('DOMContentLoaded', loadNews);




// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Обработчик закрытия модального окна по клавише Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
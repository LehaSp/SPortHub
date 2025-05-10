// Открытие модального окна
function openModal() {

  // Подгружаем текущие данные
  const name = localStorage.getItem('name') || '';
  const nickname = localStorage.getItem('nickname') || '';
  const email = localStorage.getItem('email') || '';
  const role = localStorage.getItem('role') || '';
  const team = localStorage.getItem('team') || '';
  const bio = localStorage.getItem('bio') || '';

  document.getElementById('edit-name').value = name;
  document.getElementById('edit-nickname').value = nickname;
  document.getElementById('edit-email').value = email;
  document.getElementById('edit-role').value = role;
  document.getElementById('edit-team').value = team;
  document.getElementById('edit-bio').value = bio;

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

// Обработка формы
document.getElementById('edit-profile-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('edit-name').value;
  const nickname = document.getElementById('edit-nickname').value;
  const email = document.getElementById('edit-email').value;
  const role = document.getElementById('edit-role').value;
  const team = document.getElementById('edit-team').value;
  const bio = document.getElementById('edit-bio').value;

  localStorage.setItem('name', name);
  localStorage.setItem('nickname', nickname);
  localStorage.setItem('email', email);
  localStorage.setItem('role', role);
  localStorage.setItem('team', team);
  localStorage.setItem('bio', bio);

  updateProfileDisplay();
  closeEditModal();
});

// Обновление отображения профиля
function updateProfileDisplay() {
  document.getElementById('profile-name').textContent = localStorage.getItem('name') || 'Имя пользователя';
  document.getElementById('profile-nickname').textContent = localStorage.getItem('nickname') || 'Никнейм';
  document.getElementById('profile-email').textContent = localStorage.getItem('email') || 'Email';
  document.getElementById('profile-role').textContent = localStorage.getItem('role') || 'Роль';
  document.getElementById('profile-team').textContent = localStorage.getItem('team') || 'Команда';
  document.getElementById('profile-bio').textContent = localStorage.getItem('bio') || 'О себе';
}

// Примерные данные профиля (можно заменить на данные из базы или localStorage)
const defaultProfile = {
    name: "Вова Адидас",
    nickname: "PACAN",
    email: "vovan@gmail.com",
    team: "Пацаны",
    role: "Защитник",
    bio: "Я на вас смотрю, вы не готовы все!"
};

// Загрузка профиля
function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || defaultProfile;

    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-nickname').textContent = profile.nickname;
    document.getElementById('profile-email').textContent = profile.email;
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-team').textContent = profile.team;
    document.getElementById('profile-bio').textContent = profile.bio;
}

// Отображение формы редактирования
function showEditForm() {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || defaultProfile;

    document.getElementById('edit-name').value = profile.name;
    document.getElementById('edit-nickname').value = profile.nickname;
    document.getElementById('edit-email').value = profile.email;
    document.getElementById('edit-role').value = profile.role;
    document.getElementById('edit-team').value = profile.team;
    document.getElementById('edit-bio').value = profile.bio;

    document.getElementById('edit-profile-form').classList.remove('hidden');
    document.getElementById('profile-display').classList.add('hidden');
}

// Сохранение профиля
function saveProfile(e) {
    e.preventDefault();

    const updatedProfile = {
        name: document.getElementById('edit-name').value,
        nickname: document.getElementById('edit-nickname').value,
        email: document.getElementById('edit-email').value,
        role: document.getElementById('edit-role').value,
        team: document.getElementById('edit-team').value,
        bio: document.getElementById('edit-bio').value
    };

    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));

    document.getElementById('edit-profile-form').classList.add('hidden');
    document.getElementById('profile-display').classList.remove('hidden');

    loadProfile();
}

document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    document.getElementById('edit-button').addEventListener('click', showEditForm);
    document.getElementById('edit-profile-form').addEventListener('submit', saveProfile);
});

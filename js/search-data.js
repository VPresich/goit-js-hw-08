
const searchQuery = 'пейзаж';

const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Обработка результатов запроса
    if (data.results.length > 0) {
      data.results.forEach(result => {
        console.log('URL картинки:', result.urls.regular);
      });
    } else {
      console.log('Нет результатов по вашему запросу.');
    }
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  });
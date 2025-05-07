document.addEventListener('DOMContentLoaded', function() {
	const examples = document.querySelectorAll('[class^="example"]');
	const codeSections = document.querySelectorAll('.code');
	
	codeSections.forEach((codeSection, index) => {
	  const textarea = codeSection.querySelector('textarea');
	  const resetButton = codeSection.querySelector('#reset-code'); // Змінено селектор
	  const example = examples[index];
	  
	  // Зберегти початкове значення
	  textarea.defaultValue = textarea.value;
	  
	  // Функція оновлення прикладу
	  function updateExample() {
		example.innerHTML = textarea.value;
	  }
	  
	  // Оновлювати при змінах
	  textarea.addEventListener('input', updateExample);
	  
	  // Обробник кнопки скидання
	  if(resetButton) { // Перевірка наявності кнопки
		resetButton.addEventListener('click', () => {
		  textarea.value = textarea.defaultValue;
		  updateExample();
		});
	  }
	  
	  // Ініціалізація при завантаженні
	  updateExample();
	});
  });
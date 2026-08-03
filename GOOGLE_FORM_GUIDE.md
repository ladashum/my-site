# 📋 Как встроить Google Form на сайт

## Способ 1: Встроить в модальное окно (ТЫ ИСПОЛЬЗУЕШЬ ЭТОТ) ✅

Это то, что уже реализовано в проекте. Форма открывается в красивом модальном окне.

### Как получить правильную ссылку:

1. **Открой свой Google Form** в браузере
2. **Нажми на кнопку "Отправить"** (стрелка в правом верхнем углу)
3. **Выбери вкладку "Встроить"** (</>)
4. Увидишь HTML код типа:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd...../viewform?embedded=true" 
        width="640" height="621" frameborder="0" marginheight="0" marginwidth="0">
  Загрузка…
</iframe>
```

5. **Скопируй только ссылку** из атрибута `src="..."`
6. **Вставь в App.jsx** на строке ~193:

```jsx
<iframe
  src="ВСТАВЬ_СЮДА_ССЫЛКУ"
  width="100%"
  height="600"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  title="Project Survey"
>
  Загрузка...
</iframe>
```

### Пример правильной ссылки:
```
https://docs.google.com/forms/d/e/1FAIpQLSc_xyz123abc/viewform?embedded=true
```

⚠️ **Важно:** Ссылка должна заканчиваться на `viewform?embedded=true`

## Способ 2: Прямая ссылка в кнопку

Если хочешь просто открыть форму в новой вкладке, измени кнопку:

```jsx
<a href="https://docs.google.com/forms/d/e/1FAIpQLSc_xyz..." target="_blank">
  📋 Заполнить опрос
</a>
```

## Способ 3: Двойная интеграция (форма + прямая ссылка)

Используй оба способа вместе:

```jsx
<button onClick={() => setFormOpen(!formOpen)}>
  📋 Заполнить опрос на сайте
</button>

<a href="https://docs.google.com/forms/..." target="_blank" style={{marginLeft: '12px'}}>
  или в новой вкладке
</a>
```

## 🔧 Кастомизация формы

### Изменить высоту iframe:
```jsx
height="800"  // вместо 600
```

### Изменить стиль кнопки:
В `App.css` найди `.survey-button` и меняй стили:

```css
.survey-button {
  background: var(--sage);  /* меняй цвет */
  color: white;
  border: none;
  padding: 14px 24px;  /* размер */
  /* ... */
}
```

## 🛡️ Безопасность

Google Forms встроены через `<iframe>` — это безопасно.

Используются параметры:
- `frameBorder="0"` — убирает рамку
- `marginHeight="0"` и `marginWidth="0"` — убирает отступы
- `title="Project Survey"` — для доступности

## 📊 Получение ответов

Ответы автоматически попадают на почту (которая привязана к Google аккаунту, где создана форма).

Проверь письма в:
1. Gmail
2. Или в самой форме → вкладка "Ответы"

## ✨ Дополнительные возможности

### Предзаполнение полей
Если хочешь предзаполнить какие-то поля:

```jsx
src="https://docs.google.com/forms/d/e/1FAIpQLSc_.../viewform?embedded=true&entry.123456=ИМЯ&entry.789012=ПОЧТА"
```

Здесь:
- `entry.123456` — ID поля (найди в коде исходной формы)
- `=значение` — значение для предзаполнения

### Скрытие части формы
Используй параметр `ifq` (ignore form questions):

```jsx
?embedded=true&ifq=true
```

## 🎨 Стилизация модального окна

Модальное окно настроено в `App.css` в классе `.modal-content`. Там можешь менять:

```css
.modal-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 700px;  /* ширина */
  /* ... */
}
```

## ❌ Частые ошибки

❌ **Неправильная ссылка** (без `?embedded=true`)
```
https://docs.google.com/forms/d/e/1FAIpQLSc_.../edit
// ❌ Неправильно!
```

✅ **Правильная ссылка**
```
https://docs.google.com/forms/d/e/1FAIpQLSc_.../viewform?embedded=true
// ✅ Правильно!
```

❌ **Ссылка на превью**
```
https://forms.google.com/preview?edit_requested=true
// ❌ Это не работает
```

## 📱 Мобильный адаптив

Форма автоматически адаптируется к размеру экрана благодаря:
```jsx
width="100%"
```

На мобилке она будет во всю ширину экрана.

## 🚀 Готовые примеры ссылок

Вот примеры ссылок (замени на свои):

```
https://docs.google.com/forms/d/e/1FAIpQLSdgf9lR6j8c_example/viewform?embedded=true
https://docs.google.com/forms/d/e/1FAIpQLSd_2xY8pQ9rZ_test/viewform?embedded=true
```

---

**Помощь:** Если ссылка не работает, проверь:
1. Скопирована ли вся ссылка?
2. Есть ли `?embedded=true` в конце?
3. Имеешь ли ты доступ к этой форме?
4. Форма ли это Google Docs или Sheets?

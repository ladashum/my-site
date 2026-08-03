import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="app">
      {/* STICKY NAV */}
      <nav className="topnav">
        <div className="brand">Сайты и Telegram-боты</div>
        <nav className="nav-links">
          <a href="#sites">Сайты</a>
          <a href="#bot">Боты</a>
          <a href="#support">Сопровождение</a>
          <a href="#cta">Контакты</a>
        </nav>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="hero-inner">
          <div className="eyebrow">Сайты и Telegram-боты</div>
          <h1>От лендинга до <em>магазина в Telegram</em></h1>
          <p>Полный спектр: сайты любой сложности, Telegram-боты с оплатой и каталогом, доработки и сопровождение после запуска. Ниже — что входит в каждый формат, сколько это стоит и сколько занимает по времени.</p>
        </div>
      </section>

      {/* SITES */}
      <section id="sites">
        <div className="eyebrow">01 · Сайты</div>
        <h2 className="section-title">Лендинг и многостраничные сайты</h2>
        <p className="section-sub">Разработка с нуля — от структуры и текстов до готовой страницы. Можно с индивидуальным дизайном или на основе проверенного шаблона.</p>

        <table className="price">
          <thead>
            <tr>
              <th style={{width:'46%'}}>Услуга</th>
              <th style={{width:'24%'}}>Стоимость</th>
              <th>Срок</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name-cell"><b>Лендинг — индивидуальный дизайн</b><span>Уникальный стиль под бренд с нуля</span></td>
              <td className="price-cell">30 000 – 50 000 ₽</td>
              <td className="time-cell">По объёму</td>
            </tr>
            <tr className="alt">
              <td className="name-cell"><b>Лендинг — готовый шаблон</b><span>На 20–30% дешевле индивидуального дизайна</span></td>
              <td className="price-cell">21 000 – 40 000 ₽</td>
              <td className="time-cell">По объёму</td>
            </tr>
            <tr>
              <td className="name-cell"><b>Многостраничный сайт — индивидуальный дизайн</b><span>От 3–5 страниц, единый стиль и навигация</span></td>
              <td className="price-cell">70 000 – 120 000 ₽</td>
              <td className="time-cell">По объёму</td>
            </tr>
            <tr className="alt">
              <td className="name-cell"><b>Многостраничный сайт — готовый шаблон</b><span>На 20–30% дешевле индивидуального дизайна</span></td>
              <td className="price-cell">50 000 – 95 000 ₽</td>
              <td className="time-cell">По объёму</td>
            </tr>
            <tr>
              <td className="name-cell"><b>Адаптация существующего сайта</b><span>Новый город, сезон, контакты, зоны доставки</span></td>
              <td className="price-cell">8 000 – 25 000 ₽</td>
              <td className="time-cell">3–5 раб. дней</td>
            </tr>
          </tbody>
        </table>
        <p className="note">Итоговая стоимость фиксируется после брифа и зависит от объёма текстов и правок.</p>
      </section>

      {/* BOTS */}
      <section id="bot" style={{background:'var(--light-rose)'}}>
        <div className="eyebrow">02 · Telegram-боты</div>
        <h2 className="section-title">Бот-магазин с оплатой</h2>
        <p className="section-sub">Полноценный интернет-магазин внутри Telegram: каталог, корзина, оформление заказа и приём оплаты — без отдельного сайта.</p>

        <div className="twocol">
          <div>
            <ul className="feature-list">
              <li>Мини-приложение с каталогом: фото, цены, остатки</li>
              <li>Корзина и оформление заказа в 3 шага</li>
              <li>Приём оплаты через ЮKassa</li>
              <li>Базовая админ-панель в самом боте</li>
              <li>Уведомления о новых заказах в реальном времени</li>
            </ul>
          </div>
          <div className="price-block">
            <div className="tag">Стоимость</div>
            <div className="big">от 50 000 ₽</div>
            <div className="time">2–3 недели с момента предоплаты и получения материалов</div>
          </div>
        </div>

        <h3 style={{fontSize:'17px', margin:'30px 0 12px'}}>Что можно добавить</h3>
        <table className="price sage">
          <thead>
            <tr>
              <th style={{width:'46%'}}>Опция</th>
              <th style={{width:'24%'}}>Стоимость</th>
              <th>Срок</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name-cell"><b>Живой апдейт остатков</b><span>Изменения в админке сразу видны в мини-приложении</span></td>
              <td className="price-cell">+15 000 – 25 000 ₽</td>
              <td className="time-cell">+3–5 дней</td>
            </tr>
            <tr className="alt">
              <td className="name-cell"><b>Отдельная веб-админка</b><span>Управление в браузере вместо бота</span></td>
              <td className="price-cell">+30 000 – 50 000 ₽</td>
              <td className="time-cell">+1–2 недели</td>
            </tr>
            <tr>
              <td className="name-cell"><b>Бот и мини-апп для MAX</b><span>Перенос готовой логики Telegram-бота</span></td>
              <td className="price-cell">+20 000 – 30 000 ₽</td>
              <td className="time-cell">+1–2 недели</td>
            </tr>
          </tbody>
        </table>
        <p className="note">MAX: регистрация ботов сейчас доступна юрлицам (ООО); условия для ИП уточняются перед стартом этого этапа.</p>
      </section>

      {/* SUPPORT */}
      <section id="support">
        <div className="eyebrow">03 · После запуска</div>
        <h2 className="section-title">Сопровождение и этапы работы</h2>

        <div className="twocol">
          <div className="support-card">
            <div className="tag">Абонентское обслуживание</div>
            <div className="big">5 000 ₽ / мес</div>
            <div className="time">Мониторинг и мелкие правки, хостинг — отдельно</div>
            <p className="desc" style={{marginTop:'14px'}}>Слежу за стабильной работой сайта или бота и оперативно чиню мелкие проблемы. Новый функционал оценивается отдельной задачей.</p>
            <div className="alt-line"><b>Без абонентки:</b> можно обращаться по мере необходимости — доработки оцениваются индивидуально под задачу.</div>
          </div>

          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <div><h3>Бриф и предоплата</h3><p>Обсуждаем задачу и сроки. 50% — перед стартом.</p></div>
            </div>
            <div className="step">
              <div className="num">2</div>
              <div><h3>Дизайн и материалы</h3><p>Согласовываем стиль, собираю тексты, фото, доступы.</p></div>
            </div>
            <div className="step">
              <div className="num">3</div>
              <div><h3>Разработка</h3><p>Собираю сайт или бота, показываю промежуточные результаты.</p></div>
            </div>
            <div className="step">
              <div className="num">4</div>
              <div><h3>Тестирование и передача</h3><p>Проверяем вместе, оставшиеся 50% — и проект переходит на ваш аккаунт.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - SURVEY SECTION */}
      <section id="cta">
        <div className="blob"></div>
        <div id="cta-inner">
          <div className="eyebrow">Готовы начать?</div>
          <h2>Обсудим ваш проект</h2>
          <p className="lead">Напишите — подберём формат под задачу и бюджет: лендинг, многостраничный сайт или бот в Telegram.</p>
          
          <div className="facts">
            <div><b>Все аккаунты — ваши</b>Репозиторий, хостинг и платёжные сервисы — на вашем имени</div>
            <div><b>Прозрачные сроки</b>Точная стоимость и срок — после брифа</div>
          </div>
          
          <div className="terms">Оплата: 50% предоплата · 50% по завершении разработки</div>
          
          {/* SURVEY BUTTON */}
          <button 
            className="survey-button" 
            onClick={() => setFormOpen(!formOpen)}
          >
            📋 Заполнить опрос о проекте
          </button>
        </div>

        {/* SURVEY MODAL */}
        {formOpen && (
          <div className="modal-overlay" onClick={() => setFormOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={() => setFormOpen(false)}
              >
                ✕
              </button>
              <h3>Расскажите о вашем проекте</h3>
              
              {/* GOOGLE FORM IFRAME */}
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
              
              <p style={{fontSize:'12px', color:'var(--grey)', marginTop:'12px', textAlign:'center'}}>
                💡 Используй форму выше или пиши напрямую в Telegram
              </p>
            </div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer>Обновлено · Август 2026</footer>
    </div>
  );
}

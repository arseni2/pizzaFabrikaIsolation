export const contactsPage = `
<style type="text/css">.from-cke__details-restaurant {
    display: flex;
}

.from-cke__details-text {
    width: 40%;
    margin-left: 20px;
}
.from-cke__details-map {
    width: 60%;
}
.from-cke__details-time {
    padding-left: 20px;
}
.from-cke__details-social {
    margin-top: 35px;
}
.from-cke__details-social-pic-block {
    display: flex;
    margin-bottom: 75px;
}
.from-cke__details-social-pic {
    width: 50px;
    height: 50px;
    padding-top: 10px;
    opacity: 1;
}
.from-cke__details-link:hover {
    opacity: 0.7;
}
h2 {
    font-size: 26px;
    font-weight: bold;
    line-height: 32px;
    margin: 35px 0px 12px 0px;
}
h2:first-child {
    font-size: 26px;
    font-weight: bold;
    line-height: 32px;
    margin: 10px 0px 12px 0px;
}
h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin: 20px 0px 10px 0px;
}
p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: auto;
}
iframe {
    height: 500px;
}
td {
    font-size: 16px;
    line-height: 24px;
}
.from-cke__details-container:last-child {
    margin-bottom: 100px;
}
.base-button {
    display: inline-block;
    height: 41px;
    font-family: SF-UI-Text, sans-serif;
    font-size: 18px;
    box-sizing: border-box;
    white-space: nowrap;
    color: #000;
    background-color: transparent;
    outline: none;
    line-height: 39px;
    padding: 0 20.5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 20.5px;
    font-family: RobotoSlab, serif;
    border: 1px solid #000;
    transition: background-color .5s;
}
.base-button--red {
    background-color: #f11e20;
    border: none;
    color: #fff!important;
    min-width: 154px;
    transition: background-color .1s linear;
}
@media	(max-width: 812px) {
.from-cke__details-restaurant {
        display: flex;
        flex-direction: column;
    }
.from-cke__details-text {
        width: auto;
        margin-left: 10px;
    }
.from-cke__details-map {
        width: auto;
        margin-top: 20px;
    }
    h3 {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        margin: 10px 0px 0px 0px;
    }
    iframe {
        height: 400px;
    }
    h2 {
        font-size: 22px;
        font-weight: bold;
        line-height: 32px;
        margin: 35px 0px 12px 0px;
    }
    h2:first-child {
        font-size: 22px;
        font-weight: bold;
        line-height: 32px;
        margin: 10px 0px 12px 0px;
    }
}
</style>

 <my-accordion title="название акк">
    <p>Это содержимое первого аккордеона.</p>
    <button>Кнопка внутри</button>
 </my-accordion>
 
 <my-accordion title="название акк nested">
    <p>Это содержимое первого аккордеона.</p>
    <button>Кнопка внутри</button>
    <my-accordion title="название акк">
        <p>Это содержимое первого аккордеона.</p>
        <button>Кнопка внутри</button>
    </my-accordion>
 </my-accordion>


<div class="from-cke__details-container">
<div class="from-cke__details-header">
<div class="from-cke__details-toggle-btn">&nbsp;</div>
⁠Семейный ресторан г. Вологда, ул. Зосимовская, дом 47</div>

<div class="from-cke__details-description">
<div class="from-cke__details-restaurant">
<div class="from-cke__details-text" itemscope="" itemtype="http://schema.org/LocalBusiness">
<h2 itemprop="name">Семейный ресторан на Зосимовской</h2>

<h3>Адрес:</h3>

<p itemprop="address"><br />
    г. Вологда, ул. Зосимовская, дом 47</p>

<h3>Телефон для бронирования:</h3>

<p itemprop="telephone"><a href="tel:88172503888">8 (8172) 50-38-88</a></p>
<a class="base-button base-button--red" href="https://pizzafabrika.restoplace.ws/">класс base-button--red в shadomdom(красный фон)</a>

<h3>Режим работы:</h3>

<table border="0" cellpadding="0">
<tbody>
    <tr itemprop="openingHours">
    <td>Вс-Чт</td>
    <td class="from-cke__details-time">10:00 - 22:00</td>
</tr>
<tr itemprop="openingHours">
    <td>Пт-Сб</td>
    <td class="from-cke__details-time">10:00 - 23:00</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>

<h3>Оставьте отзыв</h3>

<p><a href="https://clck.ru/YQCCC">Яндекс карты, </a> <a href="https://clck.ru/YQCK3">Google карты, </a> <a href="https://clck.ru/YQCLS">2 ГИС</a></p>
    </div>

    </div>
    </div>
    </div>

    <div class="from-cke__details-container">
<div class="from-cke__details-header">
<div class="from-cke__details-toggle-btn">&nbsp;</div>
⁠Семейный ресторан, г. Вологда, Пошехонское шоссе, дом 10</div>

<div class="from-cke__details-description from-cke__details-description--hidden">
<div class="from-cke__details-restaurant">
<div class="from-cke__details-text" itemscope="" itemtype="http://schema.org/LocalBusiness">
<h2 itemprop="name">Семейный ресторан на Пошехонском шоссе</h2>

<h3>Адрес</h3>

<p itemprop="address">г. Вологда, Пошехонское шоссе, дом 10</p>

<h3>Телефон для бронирования</h3>

<p itemprop="telephone"><a href="tel:88172503888">8 (8172) 50-38-88</a></p>
<a class="base-button base-button--red" href="https://pizzafabrika.restoplace.ws/" style="background: blue;">класс base-button--red в shadomdom(красный фон) и inline style(синий фон)</a>

<h3>Режим работы</h3>

<table border="0" cellpadding="0">
<tbody>
    <tr itemprop="openingHours">
    <td>Вс-Чт</td>
    <td class="from-cke__details-time">11:00 - 23:00</td>
</tr>
<tr itemprop="openingHours">
    <td>Пт-Сб</td>
    <td class="from-cke__details-time">11:00 - 00:00</td>
</tr>
</tbody>
</table>

<h3>Оставьте отзыв</h3>

<p><a href="https://clck.ru/YQCMB">Яндекс карты, </a> <a href="https://clck.ru/YQCMf">Google карты, </a> <a href="https://clck.ru/YQCMw">2 ГИС</a></p>

    <p>&nbsp;</p>
</div>

</div>
</div>
</div>

<div class="from-cke__details-container">
<div class="from-cke__details-header">
<div class="from-cke__details-toggle-btn">&nbsp;</div>
⁠Семейный ресторан, г. Вологда, Окружное шоссе, 9Д</div>

<div class="from-cke__details-description from-cke__details-description--hidden">
<div class="from-cke__details-restaurant">
<div class="from-cke__details-text" itemscope="" itemtype="http://schema.org/LocalBusiness">
<h2 itemprop="name">Семейный ресторан на Окружном шоссе</h2>

<h3>Адрес</h3>

<p itemprop="address">г. Вологда, Окружное шоссе, 9Д</p>

<h3>Телефон для бронирования</h3>

<p itemprop="telephone"><a href="tel:88172503888">8 (8172) 50-38-88</a></p>
<a class="base-button base-button--red" href="https://pizzafabrika.restoplace.ws/">класс base-button--red в shadomdom(красный фон)</a>

<h3>Режим работы</h3>

<table border="0" cellpadding="0">
<tbody>
    <tr itemprop="openingHours">
    <td>Вс-Чт</td>
    <td class="from-cke__details-time">11:00 - 23:00</td>
</tr>
<tr itemprop="openingHours">
    <td>Пт-Сб</td>
    <td class="from-cke__details-time">11:00 - 00:00</td>
</tr>
</tbody>
</table>

<h3>Оставьте отзыв</h3>

<p><a href="https://clck.ru/YQCNJ">Яндекс карты, </a> <a href="https://clck.ru/YQCxW">Google карты, </a> <a href="https://clck.ru/YQCv2">2 ГИС</a></p>

    <p>&nbsp;</p>
</div>

</div>
</div>
</div>

<div class="from-cke__details-container">
<div class="from-cke__details-header">
<div class="from-cke__details-toggle-btn">&nbsp;</div>
⁠Семейный ресторан, г. Вологда, ул. Добролюбова, дом 38</div>

<div class="from-cke__details-description from-cke__details-description--hidden">
<div class="from-cke__details-restaurant">
<div class="from-cke__details-text" itemscope="" itemtype="http://schema.org/LocalBusiness">
<h2 itemprop="name">Семейный ресторан на Добролюбова</h2>

<h3>Адрес</h3>

<p itemprop="address">г. Вологда, улица Добролюбова, дом 38</p>

<h3>Телефон для бронирования</h3>

<p itemprop="telephone"><a href="tel:88172503888">8 (8172) 50-38-88</a></p>
<a class="base-button base-button--red" href="https://pizzafabrika.restoplace.ws/">класс base-button--red в shadomdom(красный фон)</a>

<h3>Режим работы</h3>

<table border="0" cellpadding="0">
<tbody>
    <tr itemprop="openingHours">
    <td>Пн-Чт</td>
    <td class="from-cke__details-time">10:00 - 23:00</td>
</tr>
<tr itemprop="openingHours">
    <td>Пт-Сб</td>
    <td class="from-cke__details-time">10:00 - 00:00</td>
</tr>
<tr itemprop="openingHours">
    <td>Вс</td>
    <td class="from-cke__details-time">10:00 - 23:00</td>
</tr>
</tbody>
</table>

<h3>Оставьте отзыв</h3>

<p><a href="https://clck.ru/YQCMB">Яндекс карты, </a> <a href="https://clck.ru/YQCMf">Google карты, </a> <a href="https://clck.ru/YQCMw">2 ГИС</a></p>

    <p>&nbsp;</p>
</div>

</div>
</div>
</div>

<h3 class="from-cke__details-social">Мы в социальных сетях</h3>

<div class="from-cke__details-social-pic-block"><a class="from-cke__details-link" href="https://vk.com/pizzafabrika_vologda" rel="nofollow"><img class="from-cke__details-social-pic " src="//cdpiz1.pizzasoft.ru/pizzafab/content/3/3149/image_60fa82b41ab7a.png" /></a>&nbsp;</div>

<h3 class="from-cke__details-social">Контакты для СМИ: &nbsp;<br />
PR-менеджер Наталья Лебедева<br />
e-mail: <a href="mailto:manager.pr.pizzafab@gmail.com">manager.pr.pizzafab@gmail.com</a><br />
&nbsp;</h3>

<div class="from-cke__details-social-pic-block"><br />
    &nbsp;</div>
`
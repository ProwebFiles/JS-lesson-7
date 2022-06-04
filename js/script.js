/* 

Сначало создаем подключение к стрелкам
document - это весь сайт 
document.querySelector - подключение к определенному одному тегу или классу или индификатору и отдает как один Объект элемент 

*/
const   hour = document.querySelector('.h'), /* Подключаемся к часовой стрелке */

        min = document.querySelector('.m'), /* Подключаемся к минутной стрелке */

        sec = document.querySelector('.s'), /* Подключаемся к секундной стрелке */

        hoursNumber = document.querySelector('.hours'), /* Подключаемся к часу в цифровых часах */

        minutesNumber = document.querySelector('.minutes'); /* Подключаемся к минутам в цифровых часах */


function clock() {
    /* 
    
    new Date() - Берет время которое сейчас на компьютере
    getSeconds() - это метод Который берет секунда с компьтерного времени  
    getMinutes() - это метод Который берет минуты с компьтерного времени  
    getHours() - это метод Который берет часы с компьтерного времени  

    */
    let time = new Date();
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    /* 
    
    HTML элемент.style - добовляет CSS стили в html документ к элементу
    
    */
    sec.style = `transform: rotate(${second}deg); transition: 1s linear`;
    min.style = `transform: rotate(${minutes}deg); transition: 1s linear`;
    hour.style = `transform: rotate(${hours}deg); transition: 1s linear`;

    /* 
    
    HTML элемент.innerHTML - Заменяет весь контент в HTML элементе
    
    */

    /* 
    
    делаем проверку на число меньше 10 если оно меньше то прибавляем 0 в строковом типе данных
    
    */
    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    /* 
    
    setTimeout(функция, миллисекунды) - Делает задержку вызова функции
    Рекурсия это когда функция вызывает саму себя
    */

    setTimeout(() => clock(), 1000); 

}

/* Запускае функцию в первый раз */

clock(); 

/* 

document.querySelectorAll() - Подключается ко всем элементам с одним названием и отдает все Элементы в ввиде массива 

*/

const   links = document.querySelectorAll('.tabsItem'), /* Поключаемся ко всем понктов Меню табов */
        tabs = document.querySelectorAll('.tabsContentItem'); /* Поключаемся ко всем табам */
        
for (let i = 0; i < links.length; i++) { 
    /* 
    
    делаем перебор всех понктов в Меню табов
    
    */

    /* 

    HTML элемент.addEventListener() - Добавляет событие слушателя (click - нажатие)
    HTML элемент.addEventListener(событие, функция которая будет выполняться при нажатие)

    */
    
    links[i].addEventListener('click', function (e) {
        /* 
        
        e - это аргумент который отдает нам всю информацию о элементе 
        e.preventDefault() это метод который останавливает действия HTML.
        
        */
        e.preventDefault();
        /* 
        
        При помощи цикла мы удаляем классы у всех элементов
        
        */
        for (let ix = 0; ix < links.length; ix++) {
            /* 
            
            HTML элемент.classList - работа с классами HTML элемента
            HTML элемент.classList.remove() - Метод который удаляет класс к элементу
            HTML элемент.classList.add() - Метод который добавляет класс к элементу
            
            */
            links[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        /* В функцию tab первым параметром отправляем нам тот элемент на который сейчас было сделано нажатие при помощи клбчючекого  слова this и отправляем тот таб который совпадает по итератором нажатой ссылки */
        tab(this, tabs[i]);
    })
}

function tab(el, arr) {
    el.classList.add('active');
    arr.classList.add('active');
}




/* 


Д/З создать секундомер HTML готовый предоставлять с классной работы

Задание:
    При помощи рекурсии и условий создать секундомер который будет работать без использования new Date()

*/



const   watchBtn = document.querySelector('.stopwatch__btn'), /* Подключемся в кнопке старт */
        secondWatch = document.querySelector('.stopwatch__seconds'), /* Подключаемся секундам сукундомера */
        minutesWatch = document.querySelector('.stopwatch__minutes'), /* Подключаемся минутам сукундомера */
        hoursWatch = document.querySelector('.stopwatch__hours'), /* Подключаемся часам сукундомера */
        seconfInfo = document.querySelector('.tabsLink__span'); /* Подключаемся span`у который означает запуск секундомера */
        
watchBtn.addEventListener('click', function () { /* Событие нажатия кнопки секундомера */
    /* Проверяем что написано в кнопке */
    if (this.innerHTML == 'start') { 
        /* если написано start у кнопки секундомера заменяем на stop */

        this.innerHTML = 'stop';

        /* Добавляем класс active к span  */

        seconfInfo.classList.add('active');

/* Передаем в функцию stopWatch саму кнопку и итератор с 0 который создовая задержку в 1000 миллисекунд = 1 секунде */
        let i = 0;
        setTimeout(() => stopWatch(this, i), 1000)

    } else if (this.innerHTML == 'stop') {
        /* Удаляем класс active с span */
        seconfInfo.classList.remove('active');

        /* если написано stop у кнопки секундомера заменяем на clear */
        seconfInfo.classList.add('active_clear');

        /* если написано stop у кнопки секундомера заменяем на clear */
        this.innerHTML = 'clear';
    } else {
        /* Удаляем класс active_clear со span */
        seconfInfo.classList.remove('active_clear');

        /* Обнуляем секунды, минуты и часы */
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;

        /* если написано clear у кнопки секундомера заменяем на start */
        this.innerHTML = 'start';
    }
})
function stopWatch(el, i) { /* function */
    /* 
    
        функция stopWatch принемает на себя кнопку и итератор
    
    */
    if (el.innerHTML == 'stop') { /* if  */

        /* Если у кнопки написано stop то секундомер будет работать */
        if (i == 60) { 

            i = 0;/* Если итератор равен 60 то он обнуляется */

            secondWatch.innerHTML = i /* Выводим в HTML элемент секунду */

            if (minutesWatch.innerHTML == 59) {  

                /* Если минуты достигли 59 то сбрасываем их и прибовляем + 1 к часу */
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;

            } else {

                /* если часы не равны 59 то делаем прибавку к минутам тольуо тогда когда секунды равны 60 */
                minutesWatch.innerHTML++

            }
        } else {
            i++ /* Прибавку к секунде */
            secondWatch.innerHTML = i; /* Вывод секунд */
        }

        /* Рекурси работает если у кнопки написано stop  */
        setTimeout(() => stopWatch(el, i), 1000);

    } /* end if */

} /* end function */
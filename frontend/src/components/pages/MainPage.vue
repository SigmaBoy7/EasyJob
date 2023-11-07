<template>
    <div class="flex flex-col">
        <app-header></app-header>
        <div class="max-w-full px-10 pt-6 sm:pt-60 bg-gradient-to-r from-green-200 to-green-500 h-screen rounded-b-3xl ">
            <div class="grid grid-cols-1 max-w-7xl place-items-center sm:grid-cols-2 sm:m-auto">
                <div class="sm:hidden">
                    <img class="w-80 h-80" src="@/assets/img/MainPage.svg" alt="#">
                </div>
                <div id="intro-left" class="text-lg font-medium text-black text-center sm:text-left">
                    <p class="mb-8">
                        Добро пожаловать на наш сайт по поиску вакансий! <br>
                        У нас вы найдете самую актуальную и разнообразную информацию о вакансиях со всего мира. <br>
                        Наша цель - помочь вам найти идеальную работу, соответствующую вашим навыкам и интересам.
                    </p>
                    <a
                    @click="smoothScroll('#vacancy', 500)"
                    class="px-10 py-4 bg-green-400 text-white text-xl font-bold text-white cursor-pointer hover:bg-green-500 "
                    >
                    Вакансии партнеров
                    </a>
                </div>
                <div class="hidden sm:flex lg:justify-center">
                    <div class="w-72 h-72 md:w-96 md:h-96 bg-green-400  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] bg-main-svg bg-no-repeat bg-contain bg-center">
                    </div>
                </div>
            </div>
        </div>
        <div id="vacancy" class="bg-white">
            <div class="max-w-7xl m-auto px-3 pt-20 pb-20">
                <div>
                    <span
                    class="uppercase font-bold text-4xl">
                    Вакансии партнеров</span>
                    <p class=" text-lg font-medium">
                        Ознакомтесь с вакансиями наших партнеров и оставте заявку на понравившийся
                    </p>
                </div>
                <div class="grid gap-5 grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <the-vacancy-block
                    class=""
                    v-for="item, idx in data" 
                    :key="idx">
                        <template v-slot:title>{{ item.title }}</template>
                        <template v-slot:desc>{{ item.description }}</template>
                    </the-vacancy-block>
                </div>
                <app-button
                class="mt-10 text-white"
                >
                    Больше вакансий
                </app-button>
            </div>
        </div>
        <div id="about" class="flex pt-20 pb-20  bg-gradient-to-b sm:bg-gradient-to-r from-black via-green-900 to-green-500">
            <div class="max-w-7xl m-auto px-5">
                <div class="flex flex-col items-center sm:items-start justify-between">
                    <div class="mb-16 uppercase text-3xl font-bold text-green-500">
                        О компании
                    </div>
                    <div class="flex justify-between flex-col items-center text-center sm:text-left sm:items-start sm:flex-row text-green-100">
                        <div class="text-base lg:text-xl font-light">
                            Наше агентство по трудоустройству «Работа Хаб» <br>
                            предлагает индивидуальную услугу по индивидуальному подбору <br>
                            персонала для компаний, стартовавших в марте 2019 года. <br>
                            Это агентство отличается использованием новейших технологий в области <br>
                            ИТ и оптимизации подбора персонала, что позволяет нам найти <br>
                            необходимое количество сотрудников. в короткий промежуток времени.
                        </div>
                        <div class="mt-10 p-2 sm:mt-0">
                            <ul class="flex text-base sm:ml-10 lg:text-lg flex-col sm:justify-between font-bold">
                                <li class="flex flex-col sm:flex-row items-center mb-4">
                                    <div class="mb-2 sm:mr-5 w-5 h-5">
                                        <img src="@/assets/img/Tick.svg" alt="!">
                                    </div>
                                    <span>Высокий профессионализм и опыт сотрудников;</span>
                                </li>
                                <li class="flex flex-col sm:flex-row items-center mb-4">
                                    <div class="mb-2 sm:mr-5 w-5 h-5">
                                        <img src="@/assets/img/Tick.svg" alt="!">
                                    </div>
                                    <span>Исследование рынка (аналитика заработных плат, анализ рынка);</span>
                                </li>
                                <li class="flex flex-col sm:flex-row items-center mb-4">
                                    <div class="mb-2 sm:mr-5 w-5 h-5">
                                        <img src="@/assets/img/Tick.svg" alt="!">
                                    </div>
                                    <span>Подготовка резюме;</span>
                                </li>
                                <li class="flex flex-col sm:flex-row items-center mb-4">
                                    <div class="mb-2 sm:mr-5 w-5 h-5">
                                        <img src="@/assets/img/Tick.svg" alt="!">
                                    </div>
                                    <span>Индивидуальная работа;</span>
                                </li>
                                <li class="flex flex-col sm:flex-row items-center mb-4">
                                    <div class="mb-2 sm:mr-5 w-5 h-5">
                                        <img src="@/assets/img/Tick.svg" alt="!">
                                    </div>
                                    <span>Аутсорсинг;</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div id="contacts" class="py-10 px-10 bg-slate-200">
            <div class="max-w-7xl m-auto pt-10 flex flex-col">
                <div class="">
                    <div class=" text-green-600 font-bold text-4xl">
                        Контакты
                    </div>
                    <div class="pt-5 text-xl opacity-70">
                        Вы можете связаться с нами любым удобным вам способом !
                    </div>
                </div>
                <div class="p-5 mt-10 flex flex-col bg-white w-fit">
                    <ul>
                        <li class="flex flex-col">
                            <div class="flex items-center">
                                <div class="mr-3 w-3 h-3 rounded-full bg-red-700"></div>
                                <span class="text-xl font-bold opacity-70">Электронная почта</span> 
                            </div>
                            <a href="/" class="mt-3 underline">
                               help@rabotahub.ru
                            </a>
                        </li>
                        <li class="mt-5 flex flex-col">
                            <div class="flex items-center">
                                <div class="mr-3 w-3 h-3 rounded-full bg-red-700"></div>
                                <span class="text-xl font-bold opacity-70">Наш адрес </span> 
                            </div>
                            <span class="text-xl font-bold">
                                Пресненская наб., 10 с 1, Москва, 123317
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="pt-10 sm:pt-32 bg-white">
            <div class="flex justify-center items-start">
                ©2015-2023 «Работа Хаб». Все права защищены
            </div>
        </div>
    </div>
</template>

<script setup>
    import TheVacancyBlock from "@/components/blocks/TheVacancyBlock.vue"
    import AppHeader from "@/components/blocks/AppHeader.vue";
    import smoothScroll from "@/helper/smoothScroll.js"
    const data = [
        {
            id: 1,
            title: 'Сборщик заказов',
            description: 'до 125 400 рублей в месяц (СВОБОДНЫЙ ГРАФИК, еженедельные выплаты, можно выбрать магазин рядом с домом)'
        },
        {
            id: 1,
            title: 'Сборщик заказов',
            description: 'до 125 400 рублей в месяц (СВОБОДНЫЙ ГРАФИК, еженедельные выплаты, можно выбрать магазин рядом с домом)'
        },
        {
            id: 1,
            title: 'Сборщик заказов',
            description: 'до 125 400 рублей в месяц (СВОБОДНЫЙ ГРАФИК, еженедельные выплаты, можно выбрать магазин рядом с домом)'
        },
        {
            id: 1,
            title: 'Сборщик заказов',
            description: 'до 125 400 рублей в месяц (СВОБОДНЫЙ ГРАФИК, еженедельные выплаты, можно выбрать магазин рядом с домом)'
        },
        {
            id: 1,
            title: 'Сборщик заказов',
            description: 'до 125 400 рублей в месяц (СВОБОДНЫЙ ГРАФИК, еженедельные выплаты, можно выбрать магазин рядом с домом)'
        },
    ]


</script>

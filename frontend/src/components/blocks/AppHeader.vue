<template>
    <header class="fixed w-full flex justify-between items-center p-10 bg-green-600">
        <div class="pt-10">
            <Slide>
                <a
                @click="smoothScroll('#vacancy', 500)"
                class="hover:underline text-white cursor-pointer"
                >
                    <span>Вакансии</span>
                </a>
                <a
                @click="smoothScroll('#about', 500)"
                class="hover:underline text-white cursor-pointer"
                >
                    <span>О нас</span>
                </a>
                <a
                @click="smoothScroll('#contacts', 500)"
                class="hover:underline text-white cursor-pointer"
                >
                    <span>Контакты</span>
                </a>
            </Slide>

        </div>
        <div class="flex text-white items-center">
            <div class="mr-5 sm:mr-10 w-10 h-10 flex items-center justify-center sm:text-xl font-bold rounded-full bg-white text-green-500">
                RH
            </div>
            <div class="font-bold sm:text-4xl text-xl">
                Работа Хаб
            </div>
        </div>
        <div class="hidden lg:block font-bold text-2xl ">
            <ul class="flex">
                <li class="mr-8">
                    <a
                    class="text-white cursor-pointer hover:underline"
                    @click="smoothScroll('#about', 500)">
                        О нас
                    </a>
                </li>
                <li class="mr-8">
                    <a 
                    class="text-white cursor-pointer hover:underline"
                    @click="smoothScroll('#contacts', 500)">
                        Контакты
                    </a>
                </li>
                <li class="mr-8">
                    <a 
                    class="text-white cursor-pointer hover:underline"
                    @click="smoothScroll('#vacancy', 500)">
                        Вакансии
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
    import smoothScroll from "@/helper/smoothScroll.js"
    import { Slide } from 'vue3-burger-menu' 
</script>

<template>
    <div class=" ">
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
        class="mt-10"
        >
            Больше вакансий
        </app-button>
    </div>
</template>

<script setup>
    import TheVacancyBlock from "@/components/blocks/TheVacancyBlock.vue"
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

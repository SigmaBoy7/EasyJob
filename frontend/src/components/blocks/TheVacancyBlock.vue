<template>
    <div class="p-8 bg-green-200 rounded-xl hover:bg-green-300">
        <div class="flex flex-col">
            <div 
            class="flex justify-between text-lg mb-8">
                <slot 
                name="title"
                ></slot>
                <div class="h-20 w-20">
                    <img class="rounded-xl" src="https://rabotacenter.ru/wp-content/uploads/2022/06/kmo_111307_43646_1_t222_103707-287x300.jpg" alt="">
                </div>
            </div>
            <div 
            class=" text-lg font-light text-black  mb-8">
                <slot name="desc">

                </slot>
            </div>
            <div>
                <button class="text-red-600 uppercase ">
                    Узнать больше
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
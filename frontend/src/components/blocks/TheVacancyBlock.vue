<template>
    <div class="px-3 py-2 bg-green-200 rounded-xl hover:bg-green-300">
        <div class="flex flex-col">
            <div 
            class="flex justify-between text-lg mb-8">
                <slot 
                name="title"
                ></slot>
                <div class="h-5 w-5 rounded-full bg-red-700 "></div>
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
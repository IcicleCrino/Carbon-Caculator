<template>
    <div class="content-box">
        <div class="content-warpper">
            <div class="content-nav">
                <div>衣</div>
                <div>食</div>
                <div>住</div>
                <div>行</div>
                <div>用</div>
            </div>

            <div class="content-content">
                <div class="content-item" v-for="item, index in clothes">
                    <img class="content-item__img">
                    <div class="content-item__name">名称</div>
                    <div class="content-item__number">
                        - 数量 +
                    </div>
                    <div class="content-item__carbon">10g</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue"
import { clothes, food, house, journey, use } from "../storage/data"

</script>

<style lang="scss">

</style>
<template>
    <div class="content-box">
        <div class="content-warpper">
            <div class="content-nav">
                <div @click="toTab(0)" :class="tabSwitch(0)"><span>衣</span></div>
                <div @click="toTab(1)" :class="tabSwitch(1)"><span>食</span></div>
                <div @click="toTab(2)" :class="tabSwitch(2)"><span>住</span></div>
                <div @click="toTab(3)" :class="tabSwitch(3)"><span>行</span></div>
                <div @click="toTab(4)" :class="tabSwitch(4)"><span>用</span></div>
            </div>

            <div class="content-content">

                <div class="content-item" v-for="item, index in clothes" v-show="isShowHandler(0)">
                    <div>
                        <img class="content-item__img" :src="item.pic">
                        <div class="content-item__name">{{ item.name }}</div>
                    </div>
                    <div class="content-item__number--warpper">
                        <div class="content-item__number">
                            <el-button type="primary" @click="minHandler(index)">-</el-button>
                            <span class="content-number__number">
                                <div>{{ item.number }}</div>
                            </span>
                            <div class="content-number__unit">
                                <div>({{ item.unit }})</div>
                            </div>
                            <el-button type="primary" @click="addHandler(index)">+</el-button>
                        </div>
                        <div class="content-item__carbon">
                            <span class="content-carbon__title">碳排放量：</span>
                            <span class="content-carbon__number">{{ (item.number * item.carbon).toFixed(2) }}g</span>
                        </div>
                    </div>
                </div>

                <div class="content-item" v-for="item, index in food" v-show="isShowHandler(1)">
                    <div>
                        <img class="content-item__img" :src="item.pic">
                        <div class="content-item__name">{{ item.name }}</div>
                    </div>
                    <div class="content-item__number--warpper">
                        <div class="content-item__number">
                            <el-button type="primary" @click="minHandler(index)">-</el-button>
                            <span class="content-number__number">
                                <div>{{ item.number }}</div>
                            </span>
                            <div class="content-number__unit">
                                <div>({{ item.unit }})</div>
                            </div>
                            <el-button type="primary" @click="addHandler(index)">+</el-button>
                        </div>
                        <div class="content-item__carbon">
                            <span class="content-carbon__title">碳排放量：</span>
                            <span class="content-carbon__number">{{ (item.number * item.carbon).toFixed(2) }}g</span>
                        </div>
                    </div>
                </div>

                <div class="content-item" v-for="item, index in house" v-show="isShowHandler(2)">
                    <div>
                        <img class="content-item__img" :src="item.pic">
                        <div class="content-item__name">{{ item.name }}</div>
                    </div>
                    <div class="content-item__number--warpper">
                        <div class="content-item__number">
                            <el-button type="primary" @click="minHandler(index)">-</el-button>
                            <span class="content-number__number">
                                <div>{{ item.number }}</div>
                            </span>
                            <div class="content-number__unit">
                                <div>({{ item.unit }})</div>
                            </div>
                            <el-button type="primary" @click="addHandler(index)">+</el-button>
                        </div>
                        <div class="content-item__carbon">
                            <span class="content-carbon__title">碳排放量：</span>
                            <span class="content-carbon__number">{{ (item.number * item.carbon).toFixed(2) }}g</span>
                        </div>
                    </div>
                </div>

                <div class="content-item" v-for="item, index in journey" v-show="isShowHandler(3)">
                    <div>
                        <img class="content-item__img" :src="item.pic">
                        <div class="content-item__name">{{ item.name }}</div>
                    </div>
                    <div class="content-item__number--warpper">
                        <div class="content-item__number">
                            <el-button type="primary" @click="minHandler(index)">-</el-button>
                            <span class="content-number__number">
                                <div>{{ item.number }}</div>
                            </span>
                            <div class="content-number__unit">
                                <div>({{ item.unit }})</div>
                            </div>
                            <el-button type="primary" @click="addHandler(index)">+</el-button>
                        </div>
                        <div class="content-item__carbon">
                            <span class="content-carbon__title">碳排放量：</span>
                            <span class="content-carbon__number">{{ (item.number * item.carbon).toFixed(2) }}g</span>
                        </div>
                    </div>
                </div>

                <div class="content-item" v-for="item, index in use" v-show="isShowHandler(4)">
                    <div>
                        <img class="content-item__img" :src="item.pic">
                        <div class="content-item__name">{{ item.name }}</div>
                    </div>
                    <div class="content-item__number--warpper">
                        <div class="content-item__number">
                            <el-button type="primary" @click="minHandler(index)">-</el-button>
                            <span class="content-number__number">
                                <div>{{ item.number }}</div>
                            </span>
                            <div class="content-number__unit">
                                <div>({{ item.unit }})</div>
                            </div>
                            <el-button type="primary" @click="addHandler(index)">+</el-button>
                        </div>
                        <div class="content-item__carbon">
                            <span class="content-carbon__title">碳排放量：</span>
                            <span class="content-carbon__number">{{ (item.number * item.carbon).toFixed(2) }}g</span>
                        </div>
                    </div>
                </div>

            </div>

            <div class="content-footer">
                <div class="footer-warpper">
                    <span class="footer-clear">
                        <el-button type="primary" @click="clearHandler">清空</el-button>
                    </span>
                    <span class="footer-info">
                        <span class="content-info__title">
                            <span>总碳排放量为：</span>
                        </span>
                        <span class="content-info__carbon">
                            <span class="content-info__totalCarbon">
                                {{ carbon.toFixed(4) }}
                            </span>
                            <span>
                                g
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { computed } from "vue";
import { clothes, food, house, journey, use } from "../storage/data"

//tag切换的标志，0~4依次为 衣食住行用
var flag = ref(0)

var carbon = computed(() => {
    let count = 0.0
    clothes.forEach((el) => {
        count += el.carbon * el.number
    })

    food.forEach((el) => {
        count += el.carbon * el.number
    })

    house.forEach((el) => {
        count += el.carbon * el.number
    })

    journey.forEach((el) => {
        count += el.carbon * el.number
    })

    use.forEach((el) => {
        count += el.carbon * el.number
    })

    return count
})

const isShowHandler = (index) => {
    if (index == flag.value) {
        return 1
    }
    return 0
}

const toTab = (index) => {
    flag.value = index
}

const tabSwitch = (index) => {
    if (flag.value == index) {
        return "content-nav__element--activated"
    }
    return ""
}

const minHandler = (index) => {
    if (flag.value == 0) {
        if (clothes[index].number <= 0) {
            alert("请输入正确的数量")
            return
        }

        clothes[index].number--
    }
    else if (flag.value == 1) {
        if (food[index].number <= 0) {
            alert("请输入正确的数量")
            return
        }

        food[index].number--
    }
    else if (flag.value == 2) {
        if (house[index].number <= 0) {
            alert("请输入正确的数量")
            return
        }

        house[index].number--
    }
    else if (flag.value == 3) {
        if (journey[index].number <= 0) {
            alert("请输入正确的数量")
            return
        }

        journey[index].number--
    }
    else if (flag.value == 4) {
        if (clothes[index].number <= 0) {
            alert("请输入正确的数量")
            return
        }

        use[index].number--
    }
}

const addHandler = (index) => {
    if (flag.value == 0) {
        clothes[index].number++
    }
    else if (flag.value == 1) {
        food[index].number++
    }
    else if (flag.value == 2) {
        house[index].number++
    }
    else if (flag.value == 3) {
        journey[index].number++
    }
    else if (flag.value == 4) {
        use[index].number++
    }
}

const clearHandler = () => {
    clothes.forEach((el) => {
        el.number = 0
    })

    food.forEach((el) => {
        el.number = 0
    })

    house.forEach((el) => {
        el.number = 0
    })

    journey.forEach((el) => {
        el.number = 0
    })

    use.forEach((el) => {
        el.number = 0
    })
}

</script>

<style lang="scss">
$warpperWidth: 1000px;

.el-button {
    height: 30px;
}

.content-box {
    height: 100vh;
    width: 100vw;
    // background-color: aqua;
    overflow-y: scroll;

    .content-warpper {
        margin: 0px auto;
        width: $warpperWidth;
        height: 100vh;
        // background-color: aquamarine;

        .content-nav {
            $round : 70px;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: $round;
            width: 95%;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 2px 10px 5px #ccc;

            .content-nav__element--activated {
                background-color: rgb(72, 191, 255);
                box-shadow: -3px -2px 8px 2px rgb(3, 145, 216) inset;
                box-shadow: 1px 2px 8px 1px rgb(3, 141, 210)
            }

            >* {
                // margin: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 30px;
                line-height: 2.5;
                font-weight: 900;
                height: $round;
                width: $round;
                border-radius: 50%;
                background-color: rgb(255, 255, 255);
                // box-shadow: 2px 2px 8px 5px inset;
                transition: 0.5s;
            }

            >*:hover {
                transform: scale(1.1);
                background-color: rgb(72, 191, 255);
                box-shadow: -3px -2px 8px 2px rgb(3, 145, 216) inset;
                box-shadow: 1px 2px 8px 2px rgb(3, 141, 210);
            }
        }

        .content-content {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            // background-color: brown;

            .content-item:hover{
                box-shadow: 0px 0px 20px 2px rgb(0, 149, 235);
                transform: scale(1.009);
            }

            .content-item {
                position: relative;
                display: flex;
                justify-content: space-between;
                width: 35%;
                // height: 150px;
                margin: 20px 3.5%;
                padding: 10px 4%;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0px 2px 10px 5px #ccc;
                transition: 0.5s;

                .content-item__img {
                    width: 80px;
                    border-radius: 50%;
                }

                .content-item__name {
                    width: 80px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: 900;
                }

                .content-item__number--warpper {
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;
                    width: 250px;

                    .content-item__number {
                        display: flex;
                        justify-content: space-between;
                        // justify-content: center;
                        align-items: center;
                        padding-bottom: 15px;
                        width: 200px;

                        .content-number__number {
                            display: flex;
                            flex-direction: row;
                            justify-content: end;
                            align-items: center;
                            height: 100%;
                            // text-align: end;
                            // vertical-align: bottom;
                            width: 70px;
                        }

                        .content-number__unit {
                            display: flex;
                            flex-direction: row;
                            justify-content: start;
                            align-items: center;
                            height: 100%;
                            width: 45px;
                            text-align: start;
                            // text-justify: bottom;
                            // vertical-align: text-bottom;
                            font-size: 10px;
                            // line-height: 3;
                            color: #555;
                        }
                    }

                    .content-item__carbon {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        font-size: 23px;
                        font-weight: 800;

                        .content-carbon__title {
                            position: relative;
                            left: 10px;
                            text-align: start;
                        }

                        .content-carbon__number {
                            text-align: end;
                        }
                    }
                }

            }
        }

        .content-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            // height: px;
            width: 95%;
            margin: 0px auto;

            .footer-warpper {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 60px;
                background-color: #fff;
                box-shadow: 2px 2px 10px 5px #ccc;
                border-radius: 10px;

                .footer-clear {
                    display: flex;
                    padding: 0px 3%;
                }

                .footer-info {
                    padding: 0px 5%;
                    font-size: 25px;

                    .content-info__carbon{

                        .content-info__totalCarbon{
                            font-weight: 900;
                        }
                    }
                }
            }
        }
    }
}
</style>
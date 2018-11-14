<template>
    <div class="goods-list" style="height: 100%">
        <div style="height: calc(100vh - 53px);">
            <ul>
                <li v-for="(index,entity) in entities" :key="entity.productId"
                    @click="openGoodsDetail(entity.productId)">
                    <div class="horizontal">
                        <img :src="entity.loadingImage==='none'? loadingImg : entity.loadingImage" alt="">
                        <div class="flex-1">
                            <div class="title ellipsis">{{entity.productName}}</div>
                            <div class="detail">{{entity.description}}</div>
                            <div class="address-wrap ellipsis">
                                <span class="place ellipsis" v-if="!!entity.place">{{entity.place}}</span>
                                <span class="" v-if="!!entity.salesHeat"> &nbsp; &nbsp; 销量: {{entity.salesHeat}}</span>
                                <span class="" style="float: right;">单价 {{entity.showPrice/entity.productNum}}元</span>
                            </div>
                            <div class="money-wrap ellipsis" style="">
                                <span class="color-red">¥<span class="money">{{entity.showPrice}}</span></span>
                                <span class="line-through">建议价 {{entity.classDPrice}}元</span>
                            </div>
                        </div>
                    </div>
                </li>
                <div class="no_line color-999" v-show="noLine">
                    <span>没有更多商品了</span>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>

    export default {
        name: "product-list",
        components: {},
        created(){
        },
        data() {
            return {
                noLine: false,
                classShow: false,
                entities: [
                    {
                        "salesHeat": "1万",
                        "classDPrice": 368.00,
                        "loadingImage": "none",
                        "description": "普尔莱克:新西兰自有工厂，原装进口！坎特伯雷大草原散养荷斯坦奶牛，初乳粉为奶源,生完小牛一个月内,更适合中国宝宝",
                        "productNum": 2.0,
                        "productImg": "/pic/20180626/bbd0dbba766b4271ad819264d5eb4aa1.jpg,/pic/20180626/a3681c52c1f443b9aab98fe4d0381e6b.jpg,/pic/20180626/587131caa1a44b82875348fffe83b4f9.jpg",
                        "showPrice": 396.00,
                        "place": "国内贸易",
                        "productName": "新西兰原装进口普尔莱克奶粉",
                        "productId": "00b7463c8c8b427bb4805c5a4c7f286e"
                    }
                ]
            };
        },
        methods: {
            processButton001() {
                this.show = true;
            },
            openGoodsDetail(){
                this.$router.push({name: 'goods'});
            }

        }
    }
</script>

<style scoped>
    .goods-list {
    }

    .goods-list ul {
        background-color: #fff;
    }

    .goods-list li {
        border-bottom: 1px solid #d5d5d5;
        padding: 2.67% 4%;
    }

    .goods-list li > .horizontal {
        height: 100px;
    }

    .goods-list ul li:last-of-type {
        border-bottom: 0;
    }

    .goods-list li img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 10px;
    }

    .goods-list .btn {
        width: 34%;
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        border-radius: 4px;
    }

    .goods-list .address-wrap {
        font-size: 11px;
        color: #999;
        line-height: 20px;
        padding-top: 6px;
        display: flex;
        justify-content: space-between;
    }
</style>
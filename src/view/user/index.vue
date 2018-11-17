<template>
    <div>
        <div class="center-top bg-cover">
            <header>
                <h4 class="title">个人中心</h4>
            </header>
            <div class="wrapper horizontal">
                <!--<img class="head-img" :src="headImg==='none'? defaultHeader: imgUrl+headImg"-->
                <img class="head-img"
                     src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
                     @click="openWin('')"/>
                <div class="desc flex-1">
                    <div class="name">{{userName}}</div>
                    <div class="rank">
                        <van-icon name="success"/>
                        金牌店长
                    </div>
                    <div class="income" @click="initItem()">本月团队绩效：11111元</div>
                </div>
                <div class="option">
                    <div @click="showKeHJL">
                        <van-icon name="success"/>
                        联系客户经理
                    </div>
                    <div style="margin-top: 4px;" @click="showYingYS">
                        <van-icon name="success"/>
                        联系我的营养师
                    </div>
                </div>
            </div>
        </div>
        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="pending-payment"/>
                待付款
            </van-col>
            <van-col span="6">
                <van-icon name="pending-orders"/>
                待接单
            </van-col>
            <van-col span="6">
                <van-icon name="pending-deliver"/>
                待发货
            </van-col>
            <van-col span="6">
                <van-icon name="logistics"></van-icon>
                待发货
            </van-col>
        </van-row>

        <van-cell-group class="user-group">
            <van-cell icon="records" title="全部订单" is-link></van-cell>
        </van-cell-group>

        <van-cell-group>
            <van-cell icon="exchange" title="我的积分" is-link></van-cell>
            <van-cell icon="gold-coin" title="我的优惠券" is-link></van-cell>
            <van-cell icon="gift" title="我收到的礼物" is-link></van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    import {Row, Col, Icon, Cell, CellGroup} from 'vant';
    import {getLocalStorage, setLocalStorage} from '../../common/utils/Location.js'

    export default {
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup
        },
        data() {
            return {
                userName: '',
                phone: ''
            }
        },
        created() {
            this.userName = getLocalStorage('userName');
            this.phone = getLocalStorage('phone');
        },
        methods: {
            login() {
            }
        }
    };
</script>

<style lang="less">
    body {
        background-color: #eee;
    }

    .ul-half {
        border-top: 0;
    }

    .li-one {
        margin: 0;
    }

    .li-one .icon-go {
        margin-top: 0;
        top: 6px;
    }

    .center-top .wrapper {
        padding: 10% 0 10% 4%;
    }

    .center-top .wrapper .desc {
        font-size: 0;
        padding: 12px 1% 0 2.7%;
    }

    .center-top .wrapper .desc .name {
        font-size: 16px;
        color: #f44;
        display: inline-block;
        width: auto;
    }

    .center-top .wrapper .desc .rank {
        font-size: 12px;
        color: #fff;
        height: 18px;
        line-height: 18px;
        text-align: center;
        padding: 0 8px;
        border-radius: 9px;
        display: inline-block;
        background-color: rgba(255, 68, 68, 0.7);
        margin-left: 6px;
    }

    .center-top .rank img {
        display: inline-block;
        width: 12px;
        margin-right: 5px;
        position: relative;
        top: 2px;
    }

    .center-top .wrapper .desc .income {
        font-size: 12px;
        color: #333;
        margin-top: 5px;
    }

    .center-top .option {
        padding-top: 15px;
    }

    .center-top .option div {
        line-height: 18px;
        font-size: 12px;
        color: #fff;
        background-color: rgba(255, 68, 68, 0.7);
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
        padding: 2px 5px 0 5px;
    }

    .center-top .option img {
        width: 13px;
        display: inline-block;
        margin-right: 2px;
        position: relative;
        top: 1px;
    }

    .user {
        &-poster {
            width: 7.5rem;
            height: 4rem;
            display: block;
        }

        &-group {
            margin-bottom: .3rem;
        }

        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;

            .van-icon {
                display: block;
                font-size: 24px;
            }
        }
    }
</style>

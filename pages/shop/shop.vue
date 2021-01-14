<template>
	<view class="shop">
		<view class="shop-header">
			<Head></Head>
			<view :style="{width: '100%',height:nav_height + 'px' }"></view>
			<view class="shop-header-main">
				<view class="shop-header-main-top">
					<image class="shop-logo" src="" mode=""></image>
					<view class="shop-name felx-1">
						<view class="shop-name-t d-flex j-sb">
							<view class="">森山官方旗舰店</view>
							<view class="shop-share d-flex j-sb" >
								<image style="height: 40upx;width: 40upx;" src="../../static/img/btn_reserve_3@2x.png" mode=""></image>
								<image style="height:50upx;width: 50upx;" src="../../static/img/btn_share.png"  mode=""></image>
							</view>
						</view>
						<view class="shop-name-b">
							<text>9999在售商品 | </text>
							<text> 已售9999万件 </text>
							<text> | 9999人收藏</text>
						</view>
					</view>
				</view>
				<view class="shop-header-main-bottom">
						<li v-for="(item,index) in tabArr" :key="index" @click="isTab = index">
							<text :style="{color: isTab === index ? '#FA6E39':'#333333'}">{{item.name}}</text>
							<p v-if="index === isTab"></p>
						</li>
				</view>
			</view>
		</view>
		<view class="shop-content">
			<scroll-view scroll-y='true' style="height: 100%;">
				<Recommended :isTab = "isTab" ></Recommended>
				<AllProduct :isTab = "isTab"></AllProduct>
				<ProductClass :isTab = "isTab"></ProductClass>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	import Recommended from "../../components/shop/recommended.vue"
	import AllProduct from "../../components/shop/allProduct.vue"
	import ProductClass from "../../components/shop/productClass.vue"
	export default{
		data(){
			return{
				isTab:0,
				tabArr:[
					{name:'推荐',id:0},
					{name:'全部商品',id:1},
					{name:'商品分类',id:2},
				],
				nav_height:0,
			}
		},
		components:{
			Head,
			Recommended,
			AllProduct,
			ProductClass
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.shop{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		.shop-header{
			width: 100%;
			background: #FFFFFF;
			&-main{
				width: 100%;
				box-sizing: border-box;
				padding: 0 34upx;
				&-top{
					width: 100%;
					height: 180upx;
					border-top: 2upx solid #F4F4F4;
					display: flex;
					align-items: center;
					.shop-logo{
						border: 2upx solid #BABABA;
						height: 100upx;
						width: 100upx;
						border-radius: 50upx;
					}
					.shop-name{
						flex: 1;
						margin-left: 20upx;
						&-t{
							.shop-share{
								width: 100upx;
							}
						}
						&-b{
							color: #999999;
							line-height: 34px;
							font-size: 24upx;
						}
					}
				}
				&-bottom{
					border-top: 2upx solid #F4F4F4;
					width: 100%;
					height: 108upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					li{
						list-style: none;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 33%;
						position: relative;
						p{  
							position: absolute;
							bottom: 0;
							left: 50%;
							margin-left: -32upx;
							width: 64upx;
							height: 6upx;
							background: #FA6E39;
							border-radius: 3px;
						}
					}
				}
			}
		}
		.shop-content{
			width: 100%;
			height: 100%;
			flex: 1;
		}
	}
</style>

<template>
	<view class="all-product" >
		<view class="similar-content-main">
			<view class="similar-product-list" v-for="(index) in 10" :key= index >
				<image src="../../static/img/4@2x.png" mode=""></image>
				<view class="pro-name">森山铁皮枫斗甄选原料优良品种 100g</view>
				<view class="shop">官方授权 品牌直营</view>
				<view class="pro-price d-flex a-center j-sb">
					<view class="" style="font-size: 24upx;color: #FA6E39;">￥4320.00</view>
					<view class="" style="font-size: 20upx;color: #BABABA;">销量：8888件</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['isTab']
	}
</script>

<style lang="less" scoped>
	.all-product{
		padding-top: 30upx;
		.similar-content-main{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			box-sizing: border-box;
			padding: 0 30upx;
			.similar-product-list{
				border-radius: 20upx;
				background: #FFFFFF;
				width: 336upx;
				margin-bottom: 20upx;
				image{
					height: 336upx;
					width: 336upx;
					border-radius: 20upx 20upx 0 0;
				}
				>view{
					margin: 20upx;
				}
				.pro-name{
					font-size: 32upx;
					font-weight: 400;
					color: #333333;
					line-height: 44upx;
					width: 80%;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.shop{
					font-size: 24upx;
					font-weight: 400;
					color: #999999;
					line-height: 34upx;
				}
			}
		}
	}
</style>

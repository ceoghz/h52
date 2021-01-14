<template>
	<view class="payorder">
		<Head title="支付订单"></Head>
		<view :style="{width: '100%',height:nav_height + 'px' }"></view>
		<view class="payorder-content">
			<view class="payorder-content-top">
				<view class="d-flex" style="margin-top: 50upx;">
					<view class="await-pay">等待支付</view>
					<view class="await-price"> <text style="font-size: 32upx;">￥</text>166600.00</view>
				</view>
				<view class="residue-time">
					<text>剩余时间：</text>
					<text>00：59：59</text>
				</view>
			</view>
			<view class="payorder-content-main">
				<view class="pay-title" style="">支付方式</view>
				<view class="pay-why d-flex j-sb a-center" >
					<image style="height: 92upx;width: 92upx;" src="../../static/img/pay_Alipay.png" mode=""></image>
					<view class="aa">支付宝支付</view>
					<label class="radio">
						<radio value="" :checked="pay_way==='alipay'?true:false" @click="cutPay('alipay')" /><text></text>
					</label>
				</view>
				<view class="pay-why d-flex j-sb a-center">
					<image style="height: 92upx;width: 92upx;" src="../../static/img/pay_WeChat.png" mode=""></image>
					<view class="aa">微信支付</view>
					<label class="radio">
						<radio value="" :checked="pay_way==='alipay'?false:true" @click="cutPay('app_wechat')"/><text></text>
					</label>
				</view>
			</view>
		</view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main" @click="jumpAddAddress">
				<view class="add-btn d-flex j-center a-center">去支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
				pay_way:'alipay',//支付方式  app_wechat-微信支付，alipay-支付宝,
			}
		},
		components:{
			Head
		},
		methods:{
			cutPay(type){
				this.pay_way = type
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
	}
</script>

<style lang="less" scoped>
	.payorder{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.payorder-content{
		box-sizing: border-box;
		padding: 20upx 30upx; 
		width: 100%;
		&-top{
			width: 100%;
			height: 240upx;
			background: #FFFFFF;
			border-radius: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.await-pay{
				font-size: 40upx;
				font-weight: 500;
				color: #333333;
				line-height: 56upx;
				
			}
			.await-price{
				color: #FA6E39;
				font-size: 40upx;
				font-weight: 500;
				line-height: 56upx;
			}
			.residue-time{
				font-size: 36upx;
				font-weight: 400;
				color: #333333;
				line-height: 50upx;
				margin-top: 15upx;
			}
		}
		&-main{
			margin-top: 20upx;
			width: 100%;
			height: 334upx;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			.pay-title{
				font-size: 36upx;
				color: #333333;
				font-weight: 500;
				margin: 15upx 20upx 35upx;
			}
			.pay-why{
				margin: 20upx 20upx;
				.aa{
					font-size: 36upx;
					font-weight: 400;
					color: #333333;
					line-height: 50px;
					margin-right: 100upx;
				}
			}
			
		}
	}
	
	.address-footer{
		height: 138upx;
		width:100% ;
		border-top: 2upx solid #979797;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		&-main{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.add-btn{
				width: 690upx;
				height: 80upx;
				background: linear-gradient(to right, #FD8A03 0%, #FD5700 100%);
				border-radius: 40upx;
				color: #FFFFFF;
				line-height: 44px;
				font-size: 32upx;
			}
		}
	}
	
</style>

<template>
	<view class="message">
		<view class="message-header">
			<Head></Head>
			<view class="" style="width: 100%;height: 64px;"></view>
			<view class="message-header-main">
				<view class="unread">999条未读消息</view>
				<view class="remov">清除未读</view>
				<view class="enit">编辑</view>
			</view>
		</view>
		<view class="message-content">
			<scroll-view class="avv" scroll-y='true' style="height: 100%;" >
				<view class="" style="height: 20upx;width: 100%;"></view>
				<view class="message-list-item" v-for="(item,index) in 10" :key = 'index' >
					<image class="message-list-item-left" src="../../static/img/system-img.png" mode=""></image>
					<view class="message-list-item-right" >
						<view class="item-name d-flex j-sb">
							<view class="" style="color: #333333;line-height: 50upx;font-size: 36upx;">系统消息</view>
							<view class="" style="color: #999999;line-height: 34upx;font-size: 24upx;">20/11/12</view>
						</view>
						<view class="item-content d-flex j-sb">
							<view class="" style="color: #999999;line-height: 40upx;font-size: 28upx;">最后2天，本店全场满3000元减400元</view>
							<view style="height: 40upx;width: 40upx;background: red;color: #FFFFFF;border-radius: 20upx;line-height: 40upx;text-align: center;font-size: 24upx;">11</view>
						</view>
					</view>
				</view>
				
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import Head from  "../../components/head.vue"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Head
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scode>
	.message{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		.message-header{
			width: 100%;
			&-main{
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				border-top: 2upx solid #F4F4F4;
				background: #FFFFFF;
				height: 74upx;
				.unread,.remov{
					font-size:24upx;
					color: #666666;
					line-height: 34px;
				}
				.enit{
					color: #333333;
				}
			}
		}
		&-content{
			width: 100%;
			height: 100%;
			flex: 1;
			
			.message-list-item{
				width: 100%;
				height: 148upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2upx solid #F4F4F4;
				background-color: #FFFFFF;
				&-left{
					height: 100upx;
					width: 100upx;
					border-radius: 50upx;
					margin-left: 30upx;
				}
				&-right{
					flex: 1;
					width: calc(100% - 100upx);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 20upx;
					margin-right: 20upx;
					.item-name{
						width: 100%;
					}
					.item-content{
						width: 100%;
						margin-top: 20upx;
					}
				}
			}
		}
	}
</style>

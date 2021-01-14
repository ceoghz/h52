<template>
	<view class="myd d-flex flex-column ">
		<!-- #ifdef MP-WEIXIN -->
		<heads title="我的" :border="true" :returnFlag="true"  ishead_w="1"></heads>
		<!-- #endif -->
		<view class="myd-main">
			<view class="myd-main-header">
				<view class="myd-main-header-info d-flex j-sb " style="">
					<view class="avtar d-flex a-center">
						<view class="avtar-l ">
							<image style="width: 120upx;height: 120upx;border-radius: 60upx;border: 1px solid #FFFFFF;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611885980&t=a7ea2fdc8a6b0a8c897614e8c598c21f" mode=""></image>
						</view>
						<view class="avtar-r">
							<!-- #ifdef MP-WEIXIN -->
							<button class="shouquan" @click="jumpShouquan"  size="mini" plain=true>授权</button>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<button class="shouquan"  size="mini" plain=true>登录</button>
							<!-- #endif -->
						</view>
					</view>
					<view class="setting">
						<view class="setting-l">
							<image style="height: 100%;width: 100%;" src="../../static/img/btn_install1.png" mode=""></image>
						</view>
						<view class="setting-r">
							<image  style="height: 100%;width: 100%;"  src="../../static/img/btn_install2.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="myd-main-content">
				<view class="user-lines d-flex j-sb">
					<view class="">
						<text>账户余额</text>
						<text>1860.00</text>
					</view>
					<view class="" style="border-left: 2upx solid #F4F4F4;">
						<text>优惠卷</text>
						<text>12</text>
					</view>
					<view class="" style="border-left: 2upx solid #F4F4F4;" @click="gradeClick()">
						<text>公益基金</text>
						<text>12</text>
					</view>
				</view>
				<view class="card">
					<view class="card-l">
						<view>扶贫助农</view>
						<view>天天又好物品</view>
						<view>产地优选 乐享低价</view>
						<view> <image style="width: 100%;height: 100%;" src="../../static/img/integral.png" mode=""></image></view>
					</view>
					<view class="card-r">
						<view>扶贫助农</view>
						<view>天天又好物品</view>
						<view>产地优选 乐享低价</view>
						<view>
							<image style="width: 100%;height: 100%;" src="../../static/img/volume.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="order">
					<view class="order-t d-flex j-sb">
						<view class="order-t-l" >
							我的订单
						</view>
						<view class="order-t-r d-flex a-center" @click="jumpMyOrder">
							<text>查看全部订单</text>
							<view class="" style="height: 60upx;width:60upx;margin-left: 10upx;">
								<image style="width: 100%;height: 100%;" src="../../static/img/btn_back.png" mode=""></image>
							</view>
							
						</view>
					</view>
					<view class="order-b d-flex j-sb">
						<view class="">
							<view ><image src="../../static/img/icon_payFor@2x.png" mode=""></image></view>	
							<text>待付款</text>
						</view>
						<view class="">
							<view ><image src="../../static/img/icon_payFor@2x(1).png" mode=""></image></view>
							<text>待发货</text>
						</view>
						<view class="">
							<view ><image src="../../static/img/icon_payFor(2).png" mode=""></image></view>
							<text>待收货</text>
						</view>
						<view class="">
							<view ><image src="../../static/img/icon_payFor(3).png" mode=""></image></view>
							<text>评价</text>
						</view>
						<view class="">
							<view ><image src="../../static/img/icon_payFor(4).png" mode=""></image></view>
							<text>退款/售后</text>
						</view>
					</view>
				</view>
				<view class="service">
					<view class="service-t">更多服务</view>
					<view class="service-b">
						<view class="d-flex j-sb" style="height: 84upx;width: 100%;" v-for="(item,index) in abb_list" :key='index' >
						    <view class="d-flex a-center" style="height: 100%;">
						    	<image style="width: 60upx;height: 60upx;" :src="item.img_src" mode=""></image>
								<text style="font-size: 32upx;margin-left: 15upx;color: #666666;">{{item.name}}</text>
						    </view>	
							<view class="d-flex a-center" style="height: 100%;">
								<image style="width: 60upx;height: 60upx;" src="../../static/img/btn_back.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				abb_list:[
					{img_src:'../../static/img/icon_collection.png',name:'我的收藏'},
					{img_src:'../../static/img/icon_collection@2x(1).png',name:'收货地址'},
					{img_src:'../../static/img/icon_collection@2x(2).png',name:'在线客服'},
					{img_src:'../../static/img/icon_collection@2x(3).png',name:'关于我们'},
					{img_src:'../../static/img/icon_collection@2x(4).png',name:'分享好友'},
					{img_src:'../../static/img/icon_collection(5).png',name:'浏览足迹'}
				]
			}
		},
		onLoad() {
			console.log('lll')
			uni.checkSession({
			    success: function (res) {
			        console.log(res, '登录未过期')
					console.log('genghaozhe4')
			    },
			    fail: function (res) {
			        console.log(res, '登录过期了',1)
			    }
			})
		},
		methods:{
			//跳转到个人中心
			jumpMyOrder(){
				console.log(222)
				uni.navigateTo({
					url:"/pages/personal/myOrder",
					success() {
						console.log('跳转成功')
					}
				})
			},
			jumpShouquan(){
				console.log('授权页面')
				uni.navigateTo({
					url:"/pages/shouquan/index",
					success() {
						console.log("跳转成功")
					}
				})
			},
			//我的积分
			gradeClick(){
				uni.navigateTo({
					url:"/pages/personal/grade",
				})
			}
			
		},
		created(){
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	.myd{
		height: 100%;
	}
	.myd-main{
		flex:1;
		width:100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		&-header{
			width:100%;
			height:270upx;
			background: linear-gradient(to right, #FD8A03 0%,#FD5700 100%);
			box-sizing: border-box;
			padding: 32upx;
			border-radius: 0 0 90upx 90upx;
			&-info{
				height: 155upx;
				width: 100%;
				// background: #FFFFFF;
				.avtar{
					height: 100%;
					&-l{
					}
					&-r{
						margin-left: 25upx;
						font-weight: 500;font-size: 40upx;color:#FFFFFF;
						.shouquan{
							margin-top: 30upx;
							background: transparent;
							height:60upx;
							border: 1upx solid #FFFFFF;
							color: #FFFFFF;
							border-radius: 35upx;
							line-height: 60upx;
							font-size: 25upx;
						}
					}
				}
				.setting{
					// height: 100%;
					display: flex;
					&-l{
					   	height: 60upx;
						width: 60upx;
					}
					&-r{
						height: 60upx;
						width: 60upx;
						margin-left: 30upx;
					}
				}
			}
		}
		&-content{
			box-sizing: border-box;
			padding: 0 32upx;
			flex: 1;
			.user-lines{
				width: 100%;
				height: 204upx;
				box-sizing: border-box;
				padding: 32upx 0;
				background-color: #FFFFFF;
				border-radius: 20upx;
				margin-top: -70upx;
				view{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					width: 33%;
					text:first-child{
						color: #666666;
						font-size: 32upx;
					}
					text:last-child{
						color: #FA6E39;
						font-size: 48upx;
					}
				}
			}
		    .card{
				display:flex;
				justify-content: space-between;
				width: 100%;
				height: 200upx;
				margin-top: 20upx;
				>view{
					height: 200upx;
					width: 336upx;
					border-radius: 20upx;
					box-sizing: border-box;
					padding: 20upx;
					position: relative;
					:nth-of-type(1){
						color: #FFFFFF;
						line-height: 50upx;
						font-size: 36upx;
						font-weight:500;
					}
					:nth-of-type(2){
						width: 160upx;
						height: 40upx;
						border-radius: 20upx;
						border: 2upx solid #FFFFFF;
						color: #FFFFFF;
						font-size: 24upx;
						text-align: center;
						margin: 10upx 0 20upx 0;
					}
					:nth-of-type(3){
						width: 234upx;
						height: 40upx;
						font-size: 28upx;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 40upx;
					}
					:nth-of-type(4){
						position: absolute;
						right: 20upx;
						top: 30upx;
						height: 110upx;
						width: 110upx;
					}
				}
				&-l{
					background: linear-gradient(to right, #8F56F7 0%,#2C7AE3 100%);
				}
				&-r{
					background: linear-gradient(to right, #F3122B 0%,#FD5204 100%);
				}
			}
			.order{
				width: 100%;
				// height: 254upx;
				background: #FFFFFF;
				border-radius: 20upx;
				box-sizing: border-box;
				padding: 20upx 10upx;
				display: flex;
				flex-direction: column;
				margin-top: 30upx;
				&-t{
					// height: 89upx;
					border-bottom: 2upx solid #F4F4F4;
					&-l{
						width:160upx;
						height: 50upx;
						font-size: 36upx;
						font-weight: bold;
						color: #333333;
						line-height: 50upx;
						letter-spacing: 2upx;
					}
					&-r{
						>text{
							width: 196upx;
							height: 44upx;
							font-size: 32upx;
							font-weight: 400;
							color: #666666;
							line-height: 44upx;
						}
					}
				}
				&-b{
					// height: 163upx;
					>view{
					    display: flex;
						flex-direction: column;
						justify-content:space-around;
						align-items: center;
						width: 20%;
						// height: 100%;
						>view{
							height: 65upx;
							width: 65upx;
							>image{
								height: 100%;
								width: 100%;
							}
						}
						>text{
							height: 44upx;
							font-size: 32upx;
							font-weight: 400;
							color: #666666;
							line-height: 44upx;
							overflow: hidden;
							white-space: nowrap;
							
						}
						
					}
				}
			}
			.service{
				width: 100%;
				height: 600upx;
				background: #FFFFFF;
				border-radius: 20upx;
				box-sizing: border-box;
				padding: 20upx 20upx;
				display: flex;
				flex-direction: column;
				margin-top: 30upx;
				&-t{
					height: 70upx;
					border-bottom: 2upx solid #F4F4F4;
					font-size: 36upx;
					font-weight: bold;
					color: #333333;
					line-height: 50upx;
				}
			}
		}
	}
	
</style>

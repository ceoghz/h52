<template>
	<view class="order d-flex flex-column">
		<view class="order-header d-flex flex-column">
			<Headd></Headd>
			<view style="height: 64px;width: 100%;"></view>
			<view class="search d-flex " >
				<view class="search-left d-felx a-center">
						<image src="../../static/img/icon-搜索备份@2x.png" style="height: 48upx;width: 48upx;margin-left: 20upx;" mode=""></image>
						<input type="text" value="" placeholder="请输入商品名称/订单号"/>
				</view>
			     <view style="color: #333333;font-size: 32upx;margin-right: 20upx;font-weight: normal;letter-spacing: 4upx;">搜索 </view>
			</view>
			<view class="tab">
				 <scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="0" show-scrollbar="false">
					  <view class="scroll-view-item_H" v-for="(item,index) in tabData" :key="index" @click="activeTab(item.cid)">
							<view :style="{color: item.cid==fenId?'#FA6E39':'#333333'}">{{item.pname}}</view>
							<p v-if="item.cid==fenId"></p>
					  </view>
				 </scroll-view>	
			</view>
		</view>
		<view class="" style="height: 310upx;width: 100%;"></view>
		<view class="avv" style="margin-top: 310upx;">
			<scroll-view class="scroll-content" scroll-y="true" >
				<view class="order-list">
					<view class="order-list-1">
						<view class="abb d-felx flex-column">
							<view class="d-felx a-center" style="width: 100%;height: 88upx;display:flex;align-items: center;">
								<view class="" style="margin-left:20upx;">森山官方直营店</view>
								<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
							</view>
							<view class="d-flex">
								<image src="../../static/img/4@2x.png" style="width: 200upx;height: 200upx;margin-left: 20upx;" mode=""></image>
								<view class="felx-1 pro d-flex flex-column">
									<view class="pro-name d-felx j-sb">
										<view class="" style="width: 228upx;margin-left: 20upx;line-height: 40upx;">
											森山直供铁皮枫斗 100克官方
										</view>
										<view class="d-felx flex-column" style="margin-right: 20upx;">
											<view class="" style="line-height: 40upx;">待付款</view>
											<view class="" style="line-height: 34upx;">￥200</view>
										</view>
									</view>
									<view class="pro-num" >
										<view class="" style="margin-left: 20upx;">100g木盒装</view>
										<view class="" style="margin-right: 20upx;">X20</view>
									</view>
									<view class="total-price">
										<view class="" style="margin-right: 20upx;">4000.00</view>
										<view class="">￥</view>
										<view class="">总价</view>
									</view>
								</view>
							</view>
							<view class="" style="width: 100%;height: 0;border-top: 2upx solid #F4F4F4;"></view>
						</view>
						<view class="abb d-felx flex-column">
							<view class="d-felx a-center" style="width: 100%;height: 88upx;display:flex;align-items: center;">
								<view class="" style="margin-left:20upx;">森山官方直营店</view>
								<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
							</view>
							<view class="d-flex">
								<image src="../../static/img/4@2x.png" style="width: 200upx;height: 200upx;margin-left: 20upx;" mode=""></image>
								<view class="felx-1 pro d-flex flex-column">
									<view class="pro-name d-felx j-sb">
										<view class="" style="width: 228upx;margin-left: 20upx;line-height: 40upx;">
											森山直供铁皮枫斗 100克官方
										</view>
										<view class="d-felx flex-column" style="margin-right: 20upx;">
											<view class="" style="line-height: 40upx;">待付款</view>
											<view class="" style="line-height: 34upx;">￥200</view>
										</view>
									</view>
									<view class="pro-num" >
										<view class="" style="margin-left: 20upx;">100g木盒装</view>
										<view class="" style="margin-right: 20upx;">X20</view>
									</view>
									<view class="total-price">
										<view class="" style="margin-right: 20upx;">4000.00</view>
										<view class="">￥</view>
										<view class="">总价</view>
									</view>
								</view>
							</view>
							<view class="" style="width: 100%;height: 0;border-top: 2upx solid #F4F4F4;margin-top: 8upx;"></view>
						</view>
					</view>
					<view class="order-list-2">
						<view class="total-num">
							<view class="" style="line-height: 34upx;">共2件</view>
							<view class="" style="line-height: 34upx;">总计¥ 4399.00，优惠¥ 79.00</view>
						</view>
						<view class="d-flex" style="margin-right: 20upx;">
							<view class="">实付：</view>
							<view class="">￥</view>
							<view class="">4000.00</view>
						</view>
					</view>
					<view class="order-list-3">
						<button  class="btn1"  type="default" size="mini" plain=true>客服</button>
						<button  class="btn1"  type="default" size="mini" plain=true>取消订单</button>
						<button class="btn2" type="default" size="mini" plain=true>去支付</button>
					</view>
				</view>
				<view class="order-list">
					<view class="order-list-1">
						<view class="abb d-felx flex-column">
							<view class="d-felx a-center" style="width: 100%;height: 88upx;display:flex;align-items: center;">
								<view class="" style="margin-left:20upx;">森山官方直营店</view>
								<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
							</view>
							<view class="d-flex">
								<image src="../../static/img/4@2x.png" style="width: 200upx;height: 200upx;margin-left: 20upx;" mode=""></image>
								<view class="felx-1 pro d-flex flex-column">
									<view class="pro-name d-felx j-sb">
										<view class="" style="width: 228upx;margin-left: 20upx;line-height: 40upx;">
											森山直供铁皮枫斗 100克官方
										</view>
										<view class="d-felx flex-column" style="margin-right: 20upx;">
											<view class="" style="line-height: 40upx;">待付款</view>
											<view class="" style="line-height: 34upx;">￥200</view>
										</view>
									</view>
									<view class="pro-num" >
										<view class="" style="margin-left: 20upx;">100g木盒装</view>
										<view class="" style="margin-right: 20upx;">X20</view>
									</view>
									<view class="total-price">
										<view class="" style="margin-right: 20upx;">4000.00</view>
										<view class="">￥</view>
										<view class="">总价</view>
									</view>
								</view>
							</view>
							<view class="" style="width: 100%;height: 0;border-top: 2upx solid #F4F4F4;"></view>
						</view>
						<view class="abb d-felx flex-column">
							<view class="d-felx a-center" style="width: 100%;height: 88upx;display:flex;align-items: center;">
								<view class="" style="margin-left:20upx;">森山官方直营店</view>
								<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
							</view>
							<view class="d-flex">
								<image src="../../static/img/4@2x.png" style="width: 200upx;height: 200upx;margin-left: 20upx;" mode=""></image>
								<view class="felx-1 pro d-flex flex-column">
									<view class="pro-name d-felx j-sb">
										<view class="" style="width: 228upx;margin-left: 20upx;line-height: 40upx;">
											森山直供铁皮枫斗 100克官方
										</view>
										<view class="d-felx flex-column" style="margin-right: 20upx;">
											<view class="" style="line-height: 40upx;">待付款</view>
											<view class="" style="line-height: 34upx;">￥200</view>
										</view>
									</view>
									<view class="pro-num" >
										<view class="" style="margin-left: 20upx;">100g木盒装</view>
										<view class="" style="margin-right: 20upx;">X20</view>
									</view>
									<view class="total-price">
										<view class="" style="margin-right: 20upx;">4000.00</view>
										<view class="">￥</view>
										<view class="">总价</view>
									</view>
								</view>
							</view>
							<view class="" style="width: 100%;height: 0;border-top: 2upx solid #F4F4F4;margin-top: 8upx;"></view>
						</view>
					</view>
					<view class="order-list-2">
						<view class="total-num">
							<view class="" style="line-height: 34upx;">共2件</view>
							<view class="" style="line-height: 34upx;">总计¥ 4399.00，优惠¥ 79.00</view>
						</view>
						<view class="d-flex" style="margin-right: 20upx;">
							<view class="">实付：</view>
							<view class="">￥</view>
							<view class="">4000.00</view>
						</view>
					</view>
					<view class="order-list-3">
						<button  class="btn1"  type="default" size="mini" plain=true>客服</button>
						<button  class="btn1"  type="default" size="mini" plain=true>取消订单</button>
						<button class="btn2" type="default" size="mini" plain=true>去支付</button>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>	
import Headd from "../../components/head.vue"
	export default{
		data(){
			return{
				header_height:0,
				fenId:0,
				tabData:[
					{cid:0,pname:'全部'},
					{cid:1,pname:'待付款'},
					{cid:2,pname:'代发货'},
					{cid:3,pname:'待收货'},
					{cid:4,pname:'待评价'},
					{cid:5,pname:'退款/售后'},
				],
				
			}
		},
		components:{
			Headd
		},
		methods:{
			activeTab(cid){
			    this.fenId=cid;
			    // this.erInit()
		    },
		},
		created() {
			// this.header_height = uni.getStorageSync("")
		}
	}
</script>

<style lang="less" scoped>
	.order{
		background: #F4F4F4;
		height: 100%;
		.order-header{
			background: #FFFFFF;
			width: 100%;
			position: fixed;
			top: 0;
			z-index: 99999;
			.search{
				width: 100%;
				justify-content: space-around;
				align-items: center;
				&-left{
					width: 594upx;
					height: 68upx;
					background: #F4F4F4;
					display: flex;
					border-radius: 34upx;
				}
			}
		}
		
		.scroll-content{
			width: 100%;
			box-sizing: border-box;
			padding: 20upx 30upx;
			background: #F4F4F4;
			.order-list{
			    margin-bottom: 20upx;
				background: #FFFFFF;
				border-radius: 20upx;
				min-height: 100upx;
				.order-list-1{
					width: 100%;
					display: flex;
					flex-direction: column;
					.abb{
						width: 100%;
						
					}
					.pro{
						width: calc(100% - 200upx);
					}
					.pro-name{
						display: flex;
						justify-content: space-between;
						width: 100%;
					}
					.pro-num{
						display: flex;
						justify-content: space-between;
						line-height: 34upx;
						color: #999999;
						font-size: 24upx;
						margin-top: 5upx;
					}
					.total-price{
						display: flex;
						flex-direction: row-reverse;
					}
				}
				.order-list-2{
					width:100%;
					height: 82upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #F4F4F4;
					.total-num{
						display: flex;
						flex-direction: column;
						font-size: 24upx;
						color: #999999;
						margin-left: 20upx;
					}
				}
				.order-list-3{
					height: 99upx;
					width: 100%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.btn1{
						border: 2upx solid #BABABA;
						border-radius:30upx;
						font-size: 28upx;
						color: #666666;
						height: 60upx;
						line-height: 60upx;
					}
					.btn2{
						background: linear-gradient(to right,#FD8A03 0%,#FD5700 100%);
						font-size: 28upx;
						color: #FFFFFF;
						height: 60upx;
						line-height: 60upx;
						border-radius:30upx;
						border: none;
					}
				}
			}
		}
	}
	
	
	.tab{
		width: 100%;
	}
	.scroll-view_H {
		 white-space: nowrap;
		 width: 100%;
	}
	.scroll-view-item_H{
	 display: inline-block;
	 margin:0 20upx;
	 position: relative;
	}
	.scroll-view-item_H view{
	 height: 108upx;
	 line-height:108upx;
	 font-size: 32upx;
	}
	.scroll-view-item_H p{
		 width:60upx;
		 height:6upx;
		 background-color: #FA6E39;
		 border-radius: 3upx;
		 position: absolute;
		 bottom: 0;
		 left: 50%;
		 margin-left: -30upx;
	 
	}
	/deep/.scroll-view-item_H ::-webkit-scrollbar { /* 隐藏滚动条，但依旧具备可以滚动的功能 */ display: none; width: 0; height: 0; color: transparent; background: transparent; } /deep/::-webkit-scrollbar { display: none; width: 0; height: 0; color: transparent; background: transparent; }

</style>

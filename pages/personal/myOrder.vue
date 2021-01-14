<template>
	<view class="order">
		<view class="order-header">
			<Headd title="我的订单"> </Headd>
			<view :style="{height:nav_height+'px',width: '100%'}"></view>
			<view class="search d-flex">
				<view class="search-left d-felx a-center">
						<image src="../../static/img/icon-搜索备份@2x.png" style="height: 48upx;width: 48upx;margin-left: 20upx;" mode=""></image>
						<input type="text" v-model.trim="search_con" placeholder="请输入商品名称/订单号"/>
				</view>
			     <view style="color: #333333;font-size: 32upx;margin-right: 20upx;font-weight: normal;letter-spacing: 4upx;" @click="searchClick">搜索 </view>
			</view>
			<view class="tab">
				 <scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="0" show-scrollbar="false">
					  <view class="scroll-view-item_H" v-for="(item,index) in tabData" :key="index" @click="activeTab" :data-cid = "item.cid" :data-type="item.type">
							<view :style="{color: item.cid==fenId?'#FA6E39':'#333333'}">{{item.pname}}</view>
							<p v-if="item.cid==fenId"></p>
					  </view>
				 </scroll-view>	
			</view>
		</view>
		<view class="scroll-content"  >
			<scroll-view class="avv" scroll-y='true' style="height: 100%;" >
				<view class="" v-for="(item,index) in order_list" :key="index">
					<!-- //待付款 -->
					<view v-if="item.status === 0" class="order-list" >
						<view class="order-list-1">
							<view class="abb d-felx flex-column" v-for="(item1,index) in item.mch" :key="index">
								<view class="d-felx a-center" style="width: 100%;height: 88upx;display:flex;align-items: center;">
									<view class="" style="margin-left:20upx;">{{item1.mch_name}}</view>
									<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
								</view>
								<view class="d-flex" v-for="(item2,index) in item1.order_details" :key="index">
									<image :src="item2.product_img" style="width: 200upx;height: 200upx;margin-left: 20upx;" mode=""></image>
									<view class="felx-1 pro d-flex flex-column">
										<view class="pro-name d-felx j-sb">
											<view class="" style="width: 228upx;margin-left: 20upx;line-height: 40upx;">
												{{item2.product_title}}
											</view>
											<view class="d-felx flex-column" style="margin-right: 20upx;">
												<view class="" style="line-height: 40upx;color: #FA6E39;">{{item2.order_details_status_desc}}</view>
												<view class="" style="line-height: 34upx;">￥{{item2.price}}</view>
											</view>
										</view>
										<view class="pro-num" >
											<view class="" style="margin-left: 20upx;">{{item2.attribute_str}}</view>
											<view class="" style="margin-right: 20upx;">X{{item2.num}}</view>
										</view>
										<view class="total-price">
											<view class="" style="margin-right: 20upx;">{{item2.after_discount}}</view>
											<view class="">￥</view>
											<view class="">总价</view>
										</view>
									</view>
								</view>
								<view class="" style="width: 100%;height: 0;border-top: 2upx solid #F4F4F4;"></view>
							</view>
						</view>
						<view class="order-list-2">
							<view class="total-num">
								<view class="" style="line-height: 34upx;">共{{item.num}}件</view>
								<view class="" style="line-height: 34upx;">总计¥ {{item.spz_price}}，优惠¥ {{item.preferential_amount}}</view>
							</view>
							<view class="d-flex" style="margin-right: 20upx;">
								<view class="">实付：</view>
								<view class="">￥</view>
								<view class="">{{item.actual}}</view>
							</view>
						</view>
						<view class="order-list-3">
							<button  class="btn1"  type="default" size="mini" plain=true>客服</button>
							<button  class="btn1" v-if="item.status === 0" type="default" size="mini" plain=true @click="cancelOrder(item.id)">取消订单</button>
							<button class="btn2" type="default" size="mini" plain=true>去支付</button>
						</view>
					</view>
					<!-- //其他状态 -->
					<view v-else class="order-list1">
						<view class="order-list-1">
							<view class="abb d-felx flex-column" v-for="(item1,index) in item.mch" :key="index">
								<view class="d-felx a-center" style="width: 100%;height: 88upx;display:flex;align-items: center;">
									<view class="" style="margin-left:20upx;">{{item1.mch_name}}</view>
									<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
								</view>
								<view class=""v-for="(item2,index) in item1.order_details" :key="index">
									<view class="d-flex" >
										<image :src="item2.product_img" style="width: 200upx;height: 200upx;margin-left: 20upx;" mode=""></image>
										<view class="felx-1 pro d-flex flex-column">
											<view class="pro-name d-felx j-sb">
												<view class="" style="width: 228upx;margin-left: 20upx;line-height: 40upx;">
													{{item2.product_title}}
												</view>
												<view class="d-felx flex-column" style="margin-right: 20upx;">
													<view class="" style="line-height: 40upx;color: #FA6E39;">{{item2.order_details_status_desc}}</view>
													<view class="" style="line-height: 34upx;">￥{{item2.price}}</view>
												</view>
											</view>
											<view class="pro-num d-felx j-sb" >
												<view class="" style="margin-left: 20upx;">{{item2.attribute_str}}</view>
												<view class="" style="margin-right: 20upx;">X{{item2.num}}</view>
											</view>
											<view class="total-price">
												<view class="" style="margin-right: 20upx;">{{item2.after_discount}}</view>
												<view class="">￥</view>
												<view class="">总价</view>
											</view>
										</view>
									</view>
									<view class="order-list-3">
											<button  class="btn1"  type="default" size="mini" plain=true>客服</button>
											<button  class="btn1" v-if="item.status === 0"  type="default" size="mini" plain=true>取消订单</button>
											<button  class="btn1" @click="jumpRefund" :data-id="item2.id" :data-pid ="item2.p_id" :data-status="item.status"  type="default" size="mini" plain=true>申请退款</button>
											<!-- <button class="btn2" type="default" size="mini" plain = true>确认收货</button> -->
									</view>
									<view class="" style="width: 100%;height: 0;border-top: 2upx solid #F4F4F4;"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>	
import Headd from "../../components/head.vue"
import {calculate_reduce} from "@/utils/util.js"
	export default{
		data(){
			return{
				header_height:0,
				nav_height:0,
				fenId:0,
				tabData:[
					{cid:0,pname:'全部',type:''},
					{cid:1,pname:'待付款',type:'payment'},
					{cid:2,pname:'代发货',type:'send'},
					{cid:3,pname:'待收货',type:'receipt'},
					{cid:4,pname:'待评价',type:'evaluate'},
					{cid:5,pname:'退款/售后',type:'return'},
				],
				page:1,
				order_type:'',//订单类型
				search_con:'',
				order_list:'',//订单列表
			}
		},
		components:{
			Headd
		},
		methods:{
			//跳转申请退款 
			jumpRefund(e){
				console.log(e)
				let res =e.currentTarget.dataset
				uni.navigateTo({
					url:`/pages/order/service?id=${res.id}&status=${res.status}&pid=${res.pid}`,
					icon:'none'
				})	
			},
			searchClick(){
				if(this.search_con === ''){
					uni.showToast({
						title:'请输入搜索内容！',
						icon:'none'
					})
					return false
				}
				let keyword = this.search_con
				this.fenId = 0 
				this.requestOrderList({keyword})
			},
			activeTab(e){
				let res = e.currentTarget.dataset
			    this.fenId=res.cid;
				this.order_type = res.type
				let type = res.type
				this.requestOrderList({type})
			    // this.erInit()
		    },
			//计算实付金额
			ann(arr){
				arr.forEach((item,index)=>{
					if(item.status === 0){
						item.actual =  calculate_reduce(item.spz_price,item.preferential_amount)
					}
				})
				return arr
			},
			//取消待支付订单
			cancelOrder(order_id){
				console.log(order_id)
				// this.$http.post("",{
				// 	access_id:uni.getStorageSync("access_id"),
				// 	store_id:1,
				// 	store_type:2,
				// 	module:'app',
				// 	action:'order',
				// 	app:'removeOrder',
				// 	order_id:order_id
				// }).then(res=>{
				// 	console.log(res)
				// 	if(res.data.code){
				// 		uni.showToast({
				// 			title:res.data.message,
				// 			icon:'none'
				// 		})
				// 	}
				// })
			},
			//订单列表
			requestOrderList({type='',page=1,keyword=''}){
				this.$http.post(
				'',
				{
					access_id:uni.getStorageSync("access_id"),
					module:'app',
					action:'order',
					app:'getList',
					store_id:1,
					store_type:2,
					order_type:type,
					page:page,
					keyword:keyword
				}).then(res=>{
					console.log('ammmmmm',res)
					if(res.data.code === 200){
						this.order_list = this.ann(res.data.data.data) 
						console.log(this.order_list)
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
			}
		},
		onLoad(options) {
			console.log("options",options)
			let type = options.type || ''
			this.order_type = options.type || ''
			console.log(type)
			this.requestOrderList({type})
			this.fenId = Number(options.id)
		},
		onReachBottom() {
			let page = ++this.page
			let type = this.order_type
			this.requestOrderList({page,type})
		},
		created() {
			
			console.log()
			this.header_height =  (uni.getStorageSync('nav_height')*2 + 216)  +'rpx'
			console.log('kkk',this.header_height)
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scoped>
	.order{
		background: #F4F4F4;
		height: 100%;
		display: flex;
		flex-direction: column;
		.order-header{
			background: #FFFFFF;
			width: 100%;
			.search{
				width: 100%;
				justify-content: space-around;
				align-items: center;
				height: 108upx;
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
			flex: 1;
			height: 100%;
			overflow: hidden;
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
						width: 100%;
						>view:first-child{
							width: 300upx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
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
						padding: 0 20upx;
					}
					.btn2{
						background: linear-gradient(to right,#FD8A03 0%,#FD5700 100%);
						font-size: 28upx;
						color: #FFFFFF;
						height: 60upx;
						line-height: 60upx;
						border-radius:30upx;
						border: none;
						padding: 0 20upx;
					}
				}
			}
		}
	}
	.tab{
		width: 100%;
		height: 108upx;
	}
	.scroll-view_H {
		 white-space: nowrap;
		 width: 100%;
		 height: 108upx;
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

		//其他状态
		.order-list1{
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
								padding: 0 20upx;
							}
							.btn2{
								background: linear-gradient(to right,#FD8A03 0%,#FD5700 100%);
								font-size: 28upx;
								color: #FFFFFF;
								height: 60upx;
								line-height: 60upx;
								border-radius:30upx;
								border: none;
								padding: 0 20upx;
							}
						}
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
						width: 100%;
						>view:first-child{
							width:300upx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
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
		
</style>

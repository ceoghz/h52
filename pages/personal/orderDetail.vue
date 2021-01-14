<template>
	<view class="fen">
		<view class="home_top">
		    <view class="" style="position: fixed;top: 0rpx;left: 0rpx;z-index:99;">
		        <!-- #ifdef MP-WEIXIN -->
		        <heads :title="title" :border="true" :returnFlag="true"  ishead_w="1"></heads>
		        <!-- #endif -->
		    </view>
			<view class="home_item">
				<view class="head1">待付款</view>
				<view>剩余支付时间</view>
			</view>
		</view>
	    <view class="main">
			<view class="wu">
				<view class="wu-head">物流信息</view>
				<view class="wu-body">
					<view class="wu1">您的快件已签收您的快件已签收您的快件已签收您的快件已签收您的快件已签收您的快件已签收</view>
				    <view class="wu2"><image src="../../static/img/btn_more_2.png"></image></view>
				</view>
				<view class='wu-shi'>2020-08-01 23:05:06</view>
			</view>
			<view class="address">
				<h3>收货地址</h3>
				<view>收货人：王小明</view>
				<view>手机号码：130554633666</view>
				<view>收货地址：浙江省 杭州市 下城区 水印康庭 杭州市 下城区 水印康庭</view>
			</view>
			<view class="order-list">
				<view class="list-head">森山官方旗舰店<image src="../../static/img/btn_more_2.png"></image></view>
				<view class="list-body">
					<view class="list-img">
						<image src="../../static/img/4@2x.png"></image>
					</view>
					<view class="list-con">
						<view class="con1">森山直供铁皮枫斗啊啊官方啊啊官方1000</view>
						<view class="con2">
							<view class="con2_1">型号：标准 100课/急急急</view>
							<view class="con2_2">x1</view>
						</view>
						<view class="con3">
							<view class="bPrice">￥ <text>4320.</text>99</view>
						</view>
					</view>
				</view>
				<view class="list-body">
					<view class="list-img">
						<image src="../../static/img/4@2x.png"></image>
					</view>
					<view class="list-con">
						<view class="con1">森山直供铁皮枫斗啊啊官方啊啊官方1000</view>
						<view class="con2">
							<view class="con2_1">型号：标准 100课/急急急</view>
							<view class="con2_2">x1</view>
						</view>
						<view class="con3">
							<view class="bPrice">￥ <text>4320.</text>99</view>
						</view>
					</view>
				</view>
			</view>
			<view class="order-list">
				<view class="list-head">森山官方旗舰店<image src="../../static/img/btn_more_2.png"></image></view>
				<view class="list-body">
					<view class="list-img">
						<image src="../../static/img/4@2x.png"></image>
					</view>
					<view class="list-con">
						<view class="con1">森山直供铁皮枫斗啊啊官方啊啊官方1000</view>
						<view class="con2">
							<view class="con2_1">型号：标准 100课/急急急</view>
							<view class="con2_2">x1</view>
						</view>
						<view class="con3">
							<view class="bPrice">￥ <text>4320.</text>99</view>
						</view>
					</view>
				</view>
			</view>
			<view class="order-price">
				<view class="price-title">金额信息</view>
				<view class="p-list">
					<view>商品总价</view><view>￥65.00</view>
				</view>
				<view class="p-list">
					<view>优惠券</view><view>-￥5.00</view>
				</view>
				<view class="p-list">
					<view>账户余额</view><view>-￥65.00</view>
				</view>
				<view class='p-list'>
					 <!-- 空盒子，为了price靠右 -->
					<view class='pP1'></view>
					<view class="pPrice">总计：￥ <text>4320.</text>99</view>
				</view>
			</view>
			<view class="order-message">
				<view class='message-head'>订单信息</view>
				<view>订单编号：1234567</view>
				<view>下单时间：2020-08-01 23:05:06</view>
			</view>
		</view>
		<view class="main1">
			<view class="shou-hou">
				<view class='shou-head'>买家回寄物流信息</view>
				<view>快递名称：王小明</view>
				<view>快递单号：130554633666</view>
				<view>联系人：王小明</view>
				<view>联系电话：130554633666</view>
				<view>收货地址：浙江省 杭州市 下城区 水印康庭 杭州市 下城区 水印康庭</view>
			</view>
			<view class="shou-hou">
				<view class='shou-head'>售后地址</view>
				<view>退货地址：浙江省 杭州市 下城区 水印康庭 杭州市 下城区 水印康庭</view>
			    <view>联系人：王小明</view>
			    <view>联系电话：130554633666</view>
			</view>
			<view class="shou-hou">
				<view class='shou-head'>售后信息</view>
				<view>商品名称：王小明</view>
				<view>订单号：130554633666</view>
				<view>申请时间：王小明</view>
				<view>售后类型：130554633666</view>
				<view>申请原因：多拍</view>
				<view>退款金额：￥289</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-btn">
				<view>联系客服</view>
				<view>取消订单</view>
				<view class="btn-fu">付款</view>
			</view>
		</view>
	</view>
</template>

<script>
	import heads from "../../components/head.vue"
	export default{
		components: {

		},
		data(){
			return{
				title:'商品订单详情',
				head1:'',
				head2:'',
				orderId:'',
			}
		},
		onLoad(){
			// let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			// let curParam = routes[routes.length - 1].options; //获取路由参数
			// this.orderId=curParam.id; 
			this.orderId=12128
			console.log(this.orderId,'ggg')
			this.init()
			
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"order",
					app:"details",
					order_details_id:this.orderId
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
						
						console.log(this.totalData,9999)
					}else{
						uni.showToast({
							title:res.data.message
						})
					}
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			headClick(name){
				this.selectName=name
				if(name==='全部明细'){
					this.gradeData=this.totalData.whole
					if(this.ifGrade='no_grade'){
						this.ifGrade='no_grade'
					}else if(this.gradeData=[]){
						this.ifGrade='no_ming'
					}else{
						this.ifGrade=''
					}
				}else if(name==='获取明细'){
					this.gradeData=this.totalData.sign
					if(this.ifGrade='no_grade'){
						this.ifGrade='no_grade'
					}else if(this.gradeData=[]){
						this.ifGrade='no_ming'
					}else{
						this.ifGrade=''
					}
				}else{
					this.gradeData=this.totalData.consumption
					if(this.ifGrade='no_grade'){
						this.ifGrade='no_grade'
					}else if(this.gradeData=[]){
						this.ifGrade='no_ming'
					}else{
						this.ifGrade=''
					}
				}
			}
			
		}
	}
</script>

<style scoped lang="less">
	 @import url('../../static/css/personal/orderDetail.less');
</style>




<template>
	<view class="fen">
		<view class="head">
			<view class="title">
				<view class="back" @click="back()"><image src="../../static/img/back.png"></image></view>
				<text>{{title}}</text>
			</view>
		</view>
	    <view class="main">
			<!-- 产品 -->
			<view class="goods">
				<view class="goods-list" v-for="(item,index) in goodsData" :key="index">
					<image :src="item.image_url"></image>
					<view class="goods-content">
						<text class="gTitle">{{item.product_title}}</text>
						<text class='gText1'>官方授权 品牌直营</text>
			            <view class="gText2">
							<text class="gPrice">￥ <b>{{item.price.split('.')[0]}}.</b>{{item.price.split('.')[1]}}</text>
							<text>销量：{{item.volume}}</text>
						</view>
						<view class="gText3">
							<view></view>
							<view class="gXiang" @click="alikeGoods(item.id)">找相似</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		components: {

		},
		data(){
			return{
				fenId:'',
				title:'',
				goodsData:[],
			}
		},
		onLoad(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.fenId=curParam.id; 
			this.title=curParam.pname;
			console.log(this.fenId,this.title,'ggg')
			this.init()
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					store_id:1,
					store_type:2,
					module:'app',
					action:"index",
					app:"productByCate",
					cid:this.fenId
					
				 }).then((res)=>{
					console.log(res,'hh')
					this.goodsData=res.data.data.data
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			//找相似
			alikeGoods(id){
				uni.navigateTo({
				    url: '/pages/goods/alikeGoods?id='+id
				});
			}
		}
	}
</script>

<style scoped lang="less">
	 @import url('../../static/css/goods/erGoods.less');
</style>


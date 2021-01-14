<template>
	<view class="fen">
		<view class="head">
			<view class="title">
				<view class="back" @click="back()"><image src="../../static/img/back.png"></image></view>
				<text>商品详情</text>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in goodsData.product_img" :key="index">
					<view class="swiper-item">
						<image :src="item.img_url"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	    <view class="main">
			<view class="goods">
				<view class="bText1">
					<text class="bPrice">￥ <b>{{goodsData.price.split('.')[0]}}.</b>{{goodsData.price.split('.')[1]}}</text>
				</view>
				<view class="bTitle">{{goodsData.product_title}}</view>
				<view class='bText2'>
					<view>销量：{{goodsData.volume}}</view>
					<view>运费：{{goodsData.freight}}</view>
				</view>
			</view>
			<!-- 评价 -->
			<view class="ping">
				<view class="head">
					<view class="head-1">商品评价 （{{comments.length}}）</view>
					<view class="head-2" @click="allPing()">
						查看全部
						<image src="../../static/img/back_2.png"></image>
					</view>
				</view>
				<view class="ping-list" v-if='comments.length>0'>
					<view class="ping-head">
						<image :src="comments[0].user.headimgurl"></image>{{comments[0].user.user_name}}
					</view>
					<view class="ping-content">
						{{comments[0].content}}
					</view>
					<!--  -->
					<view class="ping-img">
						<view v-for="(item,index) in comments[0].comments_img" :key="index">
							<image :src="item.comments_img"></image>
						</view>
					</view>
				</view>
				<view v-else class="ping-list2">暂无评价</view>
			</view>
			<!-- 店铺 -->
			<view class="store">
				<view class="store_head">
					<view class="store_logo">
						<image :src="mch.logo_url"></image>{{mch.name}}
					</view>
					<view class="store_1 store_fen">分享店铺</view>
					<view class="store_1 store_go">进店逛逛</view>
				</view>
				<view class="store_number">
					<view style="border-right:2px solid #F4F4F4">
						{{mch.on_sale}}<br><text>在售商品</text>
					</view>
					<view style="border-right:2px solid #F4F4F4">
						{{mch.sold}}<br><text>已售</text>
					</view>
					<view>
						{{mch.collection_num}}<br><text>关注人数</text>
					</view>
				</view>
			</view>
			<!-- 商品详情 -->
			<view class="xiang">
				<view class="video" v-for="(item,index) in goodsData.product_video" :key="index">
					<video :src="item.url"></video>
				</view>
				<mp-html :content="goodsData.content" />
			</view>
			<!-- 底部 -->
			<view class="bottom">
				<view class='bottom_left'>
					<view class="left_list">
						<view class="list_img">
							<image v-if="!ifShou" src="../../static/img/shou_0.png" @click="shou()"></image>
							<image v-else src="../../static/img/shou_1.png" @click="cancelShou()"></image>
						</view>
						收藏
					</view>
					<view class="left_list">
						<view class="list_img">
							<image src="../../static/img/kf.png" @click="kf()"></image>
						</view>
						客服
					</view>
					<view class="left_list">
						<view class="list_img img3"  @click="shopCar()">
							<image v-if="!ifGou" src="../../static/img/cart.png"></image>
							<image v-else src="../../static/img/shop_car.png"></image>
							<view class="img3_num">2</view>
						</view>
						购物车
					</view>
				</view>
				<view class="bottom_right">
					<view class="add_shop" @click="addCar()">加入购物车</view>
					<view class="go_shop">立即购买</view>
				</view>
			</view>
			<uni-popup ref="popup" type="bottom">
				<view class="shop-list">
					<view @click="cancelCar()" class='can_car'></view>
					<view class="goodsM">
						<view class="goods-img">
							<image :src="select.img"></image>
						</view>
						<view class="goods-mess">
							<view class="g-price">￥ <b>{{goodsData.price.split('.')[0]}}.</b>{{goodsData.price.split('.')[1]}}</view>
							<view class="g-2">库存 {{select.ku}}</view>
							<view class="g-3">已选：{{select.gui}}</view>
						</view>
					</view>
					<view class="goods-type" v-for="(item,index) in guiType" :key="index">
						<h3>{{item}}</h3>
						<view class='types'>
							<view v-for="(it,ind) in guis" :key="ind">
								<view class="type-list" v-if="it[0]===item" @click="selectGui(it)">
									<button v-if="it[1]!==disableG">{{it[1]}}</button>
									<button v-else disabled>{{it[1]}}</button>
								</view>
							</view>
							
						</view>
					</view>
				</view>
			</uni-popup>
			<!-- <view class="">
				<view @click="selectSukid">选择规格</view>
				<specificationsnew @submitSukid="update" v-if="JSON.stringify(goodsInfo)!='{}' && JSON.stringify(gspecList)!='{}'" :goodsInfo="goodsInfo" :gspecList="gspecList" ref="mychild"></specificationsnew>
				</view> -->
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import specificationsnew from '@/components/specificationsnew.vue';
	export default{
		components: {
           mpHtml,
		   uniPopup,
		   uniPopupMessage,
		   uniPopupDialog,
		   specificationsnew
		},
		data(){
			return{
				goodsId:'',
				goodsData:{},//商品数据	
				//轮播图属性
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				comments:[],//评价
				mch:{},//店铺信息
				ifShou:false,//是否收藏
				ifGou:false,//购物车里是否有该店铺商品
				select:{
					gui:'',
					img:'',
					ku:'',//库存
					num:'',//选择数量
				},
				sku:[],
				// gspecList: {
				// 	goods_spec:[],
				// 	spec_info_list:[]
					
				// },//商品sku信息
				// goodsInfo: {},//商品详情
				guiType:[],//规格类目
				guis:[],//规格
				disableG:'',
			}
		},
		onLoad(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.goodsId=curParam.id; 
			console.log(this.goodsId,'ggg')
			this.init()
			// this.getlist();
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
					action:"product",
					app:"details",
					pid:this.goodsId
					
				 }).then((res)=>{
					console.log(res,'hh')
					this.goodsData=res.data.data
					this.comments=res.data.data.comments
					this.mch=res.data.data.mch
					//是否收藏
					if(res.data.data.collection_id===0){
						this.ifShou=false
					}else{
						this.ifShou=true
					}
					//购物车中本商品数量
					if(res.data.data.cart_num==='0'){
						this.ifGou=false
					}else{
						this.ifGou=true
					}
					this.sku=res.data.data.sku
					//默认规格图片,库存
					this.select.img=res.data.data.sku[0].img_url;
					this.select.ku=res.data.data.sku[0].total_num;
					console.log(this.sku,888)
					// this.gspecList.goods_spec=res.data.data.sku;
					var str=this.sku[0].attribute.split(';')
					console.log(str,555)
					
					// var obj={
					// 	spec_name:'',
					// 	spec_id:'',
					// 	value:[]
					// }
					// var objZ=[]
					str.forEach((item,index)=>{
						if(item!==''){
							this.guiType.push(item.split(':')[0])
							// this.gspecList.spec_info_list.push(obj)
							// // console.log(this.gspecList,666)
							// str2=item.split(':')
							// console.log(str2[0],this.gspecList.spec_info_list[index],555)
							// this.gspecList.spec_info_list[index].spec_name=str2[0];
							// this.gspecList.spec_info_list[index].spec_id=index;	
							// objZ.push(obj)
							
						}	
					})
					console.log(this.guiType,666)
					var str2=[]
					var att=''
		            this.sku.forEach((item,index)=>{
						// console.log(item.attribute,777)
						item.attribute.split(';').forEach((it,ind)=>{
							att=it.split(':')[1]
							if(it!=='' && str2.indexOf(att)==-1){
								str2.push(att)
								this.guis.push([it.split(':')[0],att])
								console.log(att,it.split(':')[0],444)
							}
							
						})
					})
					console.log(this.guis,333)
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			//查看全部评价
			allPing(){
				uni.navigateTo({
				    url: '/pages/aboutGoods/allPing?id='+this.goodsId
				});
			},
			//点击收藏按钮
			shou(){
				this.ifShou=true;
			},
			//取消收藏
			cancelShou(){
				this.ifShou=false;
			},
			//加入购物车
			addCar(){
				this.$refs.popup.open()
				// if(JSON.stringify(this.goodsInfo)!='{}' && JSON.stringify(this.gspecList)!='{}'){
				// this.$refs.mychild.toggleSpec();
					
				// }else{
				// 	 uni.showToast({
				// 		title: '请稍后再试',
				// 		mask: false,
				// 		duration: 1500
				// 	});
				// }
			},
			//关闭购物车弹框
			cancelCar(){
				this.$refs.popup.close()
			},
			//选择规格
			selectGui(list){
				this.disableG=''
				// this.select.gui=item.attribute;
				// this.select.img=item.img_url;
				// this.select.ku=item.total_num
				console.log(list,'ppp')
				var str=[]
				var str2=[]
				this.sku.forEach((item,index)=>{
					str=item.attribute.split(';')
					console.log(str,'uuu')
					str.forEach((it,ind)=>{
						str2=it.split(':')
						if(item.total_num==0&&str2[1]===list[1]){
							str.forEach((it2,ind2)=>{
								if(it2!==it&&it2!==''){
									this.disableG=it2.split(':')[1]
									console.log(it2,'ttt')
								}
							})
						console.log(item,'iii')
						}
					})
					
					// console.log(item,'ooo')
				})
			},
			update:function(e){
				console.log(e)
			},
			/**
			 * 模拟获取商品详情，以及商品规格信息
			 * 
			 */
		// 	getlist: function() {
		// 		setTimeout(() => {
		// 			this.gspecList = {
		// 				goods_spec: [
		// 					{
		// 						thumb: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1841931946,2601594367&fm=26&gp=0.jpg',
		// 						specs: '2_5',
		// 						id: 23,
		// 						stock: 10,
		// 						title: '热+有糖(半勺)',
		// 						price: '20.00'
		// 					},
		// 					{
		// 						thumb: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942074681,1492806778&fm=26&gp=0.jpg',
		// 						specs: '2_6',
		// 						id: 22,
		// 						stock: 0,
		// 						title: '热+无糖',
		// 						price: '20.00'
		// 					}
		// 				],
		// 				spec_info_list: [
		// 					{
		// 						spec_name: '温度',
		// 						spec_id: 3,
		// 						value: [
		// 							{
		// 								spec_value_name: '热',
		// 								spec_name: '温度',
		// 								spec_id: 3,
		// 								spec_value_id: 2
		// 							},
		// 							{
		// 								spec_value_name: '冷',
		// 								spec_name: '温度',
		// 								spec_id: 3,
		// 								spec_value_id: 3
		// 							}
		// 						]
		// 					},
		// 					{
		// 						spec_name: '口味',
		// 						spec_id: 4,
		// 						value: [
		// 							{
		// 								spec_value_name: '有糖(半勺)',
		// 								spec_name: '口味',
		// 								spec_id: 4,
		// 								spec_value_id: 5
		// 							},
			
		// 							{
		// 								spec_value_name: '无糖',
		// 								spec_name: '口味',
		// 								spec_id: 4,
		// 								spec_value_id: 6
		// 							},
		// 							{
		// 								spec_value_name: '有糖(一勺)',
		// 								spec_name: '口味',
		// 								spec_id: 4,
		// 								spec_value_id: 7
		// 							}
		// 						]
		// 					}
		// 				]
		// 			};
		// 			this.goodsInfo = {
		// 				thumb: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346693831,2195431178&fm=26&gp=0.jpg',
		// 				stock: 100,
		// 				price: '30.00'
		// 			};
		// 		}, 1500);
		// 	}
		}
	}
</script>

<style scoped lang="less">
	@import url('../../static/css/goods/goodsDetail.less');
</style>


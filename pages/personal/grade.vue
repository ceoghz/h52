<template>
	<view class="fen">
		<Headd></Headd>
		<view class="head">
			<view class="title">
				<view class="back" @click="back()"><image src="../../static/img/back.png"></image></view>
				<view class="title-b">
					<text>我的积分</text>
				</view>
			</view>
		</view>
	    <view class="main">
			<view class="totalZ">
				<view class="total">
					<text>{{totalData.score}}</text><br>
					当前可用积分
				</view>
			</view>
			<view class="grades">
				<view class="grades-head">
					<view class="head-list1" v-if="selectName==='全部明细'" @click="headClick('全部明细')">全部明细</view>
					<view class="head-list" v-else @click="headClick('全部明细')">全部明细</view>
					<view class="head-list1" v-if="selectName==='获取明细'" @click="headClick('获取明细')">获取明细</view>
					<view class="head-list" v-else @click="headClick('获取明细')">获取明细</view>
					<view class="head-list1" v-if="selectName==='使用明细'" @click="headClick('使用明细')">使用明细</view>
					<view class="head-list" v-else @click="headClick('使用明细')">使用明细</view>
				</view>
				<view class='grades-body1' v-if="ifGrade==='no_grade'">
					<image src="../../static/img/no_ji.png"></image>
					<view>您当前没有积分哦~</view>
				</view>
				<view class='grades-body1' v-else-if="ifGrade==='no_ming'">
					<image src="../../static/img/no_ming.png"></image>
					<view>您当前没有明细哦~</view>
				</view>
				<view class='grades-body' v-else>
					<view class="grades-list" v-for="(item,index) in gradeData" :key="index">
						<view class="list-left">
							<view>{{item.name}}</view>
							{{item.sign_time}}
						</view>
						<view class='list-right'>{{item.sign_score}}</view>
					</view>
				</view>
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
				totalData:{},//总数据
				selectName:'全部明细',
				gradeData:[],//明细数据
				ifGrade:'',
			}
		},
		onLoad(){
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
					action:"sign",
					app:"integral"
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
						this.totalData=res.data.data
						this.gradeData=this.totalData.whole
						if(this.gradeData=[]&&this.totalData.score=='0'){
							this.ifGrade='no_grade'
						}else if(this.gradeData=[]){
							this.ifGrade='no_ming'
						}
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
	 @import url('../../static/css/personal/grade.less');
</style>




<template>
	<view class="evaluation">
		<Head></Head>
		<view class="" style="width: 100%;height: 64px;"></view>
		<view class="evaluation-content">
			<view class="evaluation-content-top">
				<view class="edge d-flex">
					<image style="" src="" mode=""></image>
					<view class="edge-right d-flex flex-column j-sb">
						<view class="edge-right-name">森山铁皮枫斗甄选原料优良品种品种品品种品品种品</view>
						<view class="edge-right-price">¥4320.00</view>
					</view>
				</view>
			</view>
			<view class="evaluation-content-main">
				<view class="main-title">商品评价：</view>
				<view class="main-rate ">
					<uni-rate @change="onChange" :value="3" :size = 33 color="#FA6E39" active-color="#FA6E39" :margin="5" :is-fill="false" />
				</view>
				<view class="eva-box">
					<view class="main-con">
						<view class="uni-textarea">
							<textarea placeholder-style="color:#999999" maxlength = 100 placeholder="快把你的想法告诉老朋友吧！"/>
						</view>
						<view class="upload-img">
							<image @click="chooseImg" style="height: 152upx;width: 152upx;" src="../../static/img/btn_picture@2x.png" mode=""></image>
						</view>
					</view>
				
				</view>
			</view>
		</view>
		<view class="evaluation-footer" >
			
			<view class="evaluation-footer-main">
				<view class="evaluation-btn d-flex j-center a-center" @click="releaseClick">发布</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	import uniBadge from '@/components/uni/uni-badge/uni-badge.vue'
	import uniRate from '@/components/uni/uni-rate/uni-rate.vue'
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	export default{
		data(){
			return{
				files:'',
				
			}
		},
		components:{
			Head,
			uniBadge,
			uniSection,
			uniRate
		},
		methods:{
			onChange(e){
				console.log(e)
			},
			chooseImg(){
				console.log('chooseImg')
				let that = this
				uni.chooseImage({
				  	count: 1,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['camera','album'], //这要注意，camera掉拍照，album是打开手机相册
				    success: (res)=> {
						console.log(res);
						const tempFilePaths = res.tempFilePaths;
						uni.showLoading({ title: '图片上传中', mask: true })
						that.files = res.tempFiles[0].path.split('.')//将图片地址用.分割成数组
						const name = that.files[that.files.length-1]//取数组中的最后一个为上传的文件名后缀
						that.urlTobase64(res.tempFilePaths[0],name);
				    }
				});
			},
			async urlTobase64(url,name) {
				console.log('urlTobase64',url,name)
					let base64 = uni.getFileSystemManager().readFileSync(url, "base64")  //图片转base64的方法    
					console.log(base64)
					uni.hideLoading()
					uni.showToast({title:'上传成功',duration:2000,icon:'none'})
			},
		},
		created() {
			
		},
		
	}
</script>

<style lang="less" scoped>
	.evaluation{
		width: 100%;
		height: 100%;
		background: #F4F4F4;
		&-content{
			width: 100%;
			box-sizing: border-box;
			padding: 20upx 30upx;
			&-top{
				height: 192upx;
				width: 100%;
				border-radius: 20upx;
				background: #FFFFFF;
				box-sizing: border-box;
				padding: 20upx;
				.edge{
					width: 100%;
					height: 100%;
					image{
						height: 152upx;
						width: 152upx;
						background: #F76260;
					}
					.edge-right{
						flex: 1;
						background: #F4F4F4;
						width: calc(100% - 152upx);
						&-name{
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-left: 20upx;
							font-size: 28upx;
							color: #333333;
							line-height: 40upx;
							margin-bottom: 20upx;
							margin-top: 25upx;
						}
						&-price{
							margin-left: 20upx;
							margin-bottom: 20upx;
						}
					}
				}
			}
			&-main{
				width: 100%;
				min-height: 300upx;
				border-radius: 20upx;
				background-color: #FFFFFF;
				margin-top: 20upx;
				.main-title{
					width: 100%;
					font-size: 36upx;
					font-weight: 500;
					color: #333333;
					line-height: 50upx;
					overflow: hidden;
					padding-top: 15upx;
					margin-left: 20upx;
				}
				.main-rate{
					width: 100%;
					height: 100upx;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 80upx;
					margin-top: 30upx;
				}
				.eva-box{
					width: 100%;
					min-height: 478upx;
					box-sizing: border-box;
					padding:0 20upx 20upx;
				}
				.main-con{
					width: 100%;
					min-height: 458upx;
					border: 2upx solid #BABABA;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.upload-img{
						min-height: 153upx;
						width: 100%;
						margin-left: 20upx;
					}
				}
			}
		}
		.evaluation-footer{
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
				.evaluation-btn{
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
	}
	
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
</style>

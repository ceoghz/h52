<template>
	<view class="product-class" v-if="isTab === 2">
		<view class="product-class-img">
			<image src=""  mode=""></image>
		</view>
		<view class="product-class-list" >
			<uni-list>
				<uni-list-item title="列表右侧带箭头" />
				<uni-list-item title="列表右侧带箭头" />
				
			</uni-list>
			
			</view>
		</view>
	</view>
</template>

<script>
	import uniListItem  from "../uni/uni-list-item/uni-list-item"
	import uniList  from "../uni/uni-list/uni-list"
	export default{
		props:['isTab'],
		components:{
			uniListItem,
			uniList
		},
		options: { styleIsolation: 'shared' },
	}
</script>

<style lang="less" >
	.product-class{
		width: 100%;
		padding-top: 30upx;
		.product-class-img{
			width: 100%;
			height: 292upx;
			box-sizing: border-box;
			padding: 0upx 30upx;
			>image{
				border-radius: 30upx;
				height: 292upx;
				width: 100%;
				background: #DD524D;
			}
		}
		.product-class-list{
			margin-top: 20upx;
		}
	}
	
	/deep/ .uni-list-item .uni-list-item__container .uni-list-item__content .uni-list-item__content-title{
		color: #333333;
		font-size: 32upx;
	}
</style>

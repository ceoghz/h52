<template>
	<view class="all-product" v-if="isTab === 1">
		全部商品
	</view>
</template>

<script>
	export default{
		props:['isTab']
	}
</script>

<style lang="less" scoped>
	.all-product{
		padding-top: 30upx;
	}
</style>

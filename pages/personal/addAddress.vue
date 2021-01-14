<template>
	<view class="add-address">
			<Head></Head>
			<view class="" style="height: 64px;width: 100%;"></view>
			<view class="add-address-content">
				<view class="add-address-content-1 d-felx a-center">
					<text>收货人姓名</text> 
					<input class="uni-input" name="nickname" placeholder="请输入姓名" placeholder-style="color:#999999" />
				</view>
				<view class="add-address-content-2">
					<text>手机号码</text>
					<input class="uni-input" name="nickname" placeholder="请输入手机号码"  placeholder-style="color:#999999"/>
				</view>
				<view class="add-address-content-3"  @click="showMulLinkageThreePicker()">
					<text>所在地区</text>
					<input  class="uni-input" name="nickname" type="text" disabled='true' @focus="hideKeyboard()" placeholder="请选择" v-model="city_all" placeholder-style="color:#999999"/>
					<image src="../../static/img/btn_back_1.png" style="height: 60upx; width: 60upx;" mode=""></image>
				</view>
				<view class="add-address-content-4" >
					<text>详细地址</text>
					<input class="uni-input" name="nickname" placeholder="如道路、门牌号、小区、单元室等" placeholder-style="color:#999999"/>
				</view>
			</view>
			<view class="set-default d-flex a-center">
				<radio-group style="margin-left: 30upx;" name="gender">
					<label>
						<radio :checked="isChecked" @click="isChecked = !isChecked"  color="#FA6E39" value="设为默认地址" /><text style="margin-left: 20upx;font-size: 32upx;line-height: 50upx;color:#333333 ;">设为默认地址</text>
					</label>
				</radio-group>
			</view>
			<view class="add-address-footer" >
				<view class="add-address-footer-main">
					<view class="add-btn d-flex j-center a-center" @click="saveClick">保存</view>
				</view>
			</view>
			<mpvue-city-picker :themeColor="themeColor" ref="ctt" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default{
	
		data(){
			return{
				city_all:'',
				 themeColor: '#FA6E39',
				  cityPickerValueDefault: [0, 0, 1],
				  isChecked:true
			}
		},
		components:{
			Head,
			mpvueCityPicker,
		},
		methods:{
			saveClick(){
				console.log("保存")
			},
			hideKeyboard () {
			    uni.hideKeyboard()
			},
			onConfirm (e) {
			    this.city_all = e.label
			},
			showMulLinkageThreePicker () {
				console.log(this.$refs)
			    this.$refs.ctt.show()
			},
		}
	}
</script>

<style lang="less" scoped>
	.add-address{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		&-content{
			width: 100%;
			box-sizing: border-box;
			padding: 10upx 30upx;
			background: #FFFFFF;
			>view{
				width: 100%;
				height: 108upx;
				border-top: 2upx solid #F4F4F4;
				display: flex;
				align-items: center;
				>text{
					width: 185upx;
					font-size: 34upx;
					
					color: #333333;
					line-height: 50px;
				}
			}
		}
		.set-default{
			width: 100%;
			height: 108upx;
			background: #FFFFFF;
			margin-top: 25upx;
		}
		.add-address-footer{
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
				.add-btn{
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
</style>

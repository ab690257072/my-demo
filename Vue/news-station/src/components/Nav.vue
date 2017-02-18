<template>
	<div class="nav">
		<div class="nav-logo"><img :src="logoImg" alt=""></div>
		<ul>
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link to="/follow" tag="li" active-class="active">
	    		<a href="javascript:;">关注</a>
	    	</router-link>
	    	<router-link to="/column" tag="li" active-class="active">
	    		<a href="javascript:;">栏目</a>
	    	</router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				logoImg: './src/assets/logo.png'
			}
		}
	}
</script>
<style scoped>
	.nav-logo img {
		transform: scale(.6,.6);
		position: absolute;
		left: 231px;
	}
</style>
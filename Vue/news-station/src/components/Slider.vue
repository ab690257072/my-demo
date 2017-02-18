<template>
  <div class="banner">
    <ul class="img-ct">
      <li data-id="0">
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/26.jpg" alt="图片"></a>
        <p>清华女教授遭电信诈骗1800万</p>
        <h3>夏蝉 / 文</h3>
      </li>
      <li data-id="1">
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/25.jpg" alt="图片"></a>
        <p>性感女神梦露生前孕照首次公开</p>
        <h3>冬青 / 文</h3>
      </li>
      <li data-id="2">
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/24.jpg" alt="图片"></a>
        <p>张杰谢娜代言游戏造型惊人</p>
        <h3>轻灵 / 文</h3>
      </li>
      <li data-id="3">
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/23.jpg" alt="图片"></a>
        <p>父母打工她辍学照顾弟弟</p>
        <h3>凤羽 / 文</h3>
      </li>
    </ul>
    <a href="javascript:void(0)" class="pre arrow">
      &lt;</a>
        <a href="javascript:void(0)" class="next arrow">&gt;</a>
        <ul class="bullet">
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
  </div>
</template>
<script>
	export default {
		mounted(){
            $('.banner').runCarousel();
		}
	}
</script>
<style scoped>
    .banner {
      position: relative;
      width: 620px;
      height: 413px;
      overflow: hidden;
    }
    
    .banner .img-ct {
      position: absolute;
    }
    
    .banner .img-ct img {
      width: 620px;
      height: 413px;
    }
    
    .banner .img-ct:after {
      content: '';
      display: block;
      clear: both;
    }
    
    .banner .img-ct li {
      float: left;
      position: relative;
    }
    .banner .img-ct li p, .banner .img-ct li h3 {
      position: absolute;
      left: 0;
      width: 100%;
      background: rgba(0,0,0,.7);
      color: #fff;
      font-size: 200%;
      line-height: 2em;
      bottom: 52px;
    }
    .banner .img-ct li h3 {
        bottom: 4px;
        text-indent: 2em;
    }
    .banner .arrow {
      position: absolute;
      top: 50%;
      margin-top: -15px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #4E443C;
      color: #fff;
      border-radius: 50%;
      opacity: 0.8;
      box-shadow: 0 0 2px #999;
    }
    
    .banner .arrow:hover {
      opacity: 1;
    }
    
    .banner .pre {
      left: 10px;
    }
    
    .banner .next {
      right: 10px;
    }
    
    .banner .bullet {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .banner .bullet li {
      display: inline-block;
      width: 16px;
      height: 4px;
      border-radius: 2px;
      background-color: #fff;
      cursor: pointer;
    }
    
    .banner .bullet li.active {
      background-color: #666;
    }
</style>
/* 轮播背景图片 */
$(function () {
	$.backstretch([
		  "https://cdn.staticaly.com/gh/qwangqq/Hugo_images@main/%E9%93%B6%E7%8B%BC%E6%94%B9-%E6%98%9F%E7%A9%B9%E8%BD%A8%E9%81%93-109899883-0.webp",
		  "https://cdn.staticaly.com/gh/qwangqq/Hugo_images@main/background2.webp",
		  "https://cdn.staticaly.com/gh/qwangqq/Hugo_images@main/%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93-108157873-0.webp",
		  "https://cdn.staticaly.com/gh/qwangqq/Hugo_images@main/%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%20%E4%B8%89%E6%9C%88%E4%B8%83-107618199-0.webp",
		  "https://cdn.staticaly.com/gh/qwangqq/Hugo_images@main/%E4%B8%9C%E6%96%B9%C3%97%E9%93%81%E9%81%93%E2%80%94%E2%80%94%E5%B0%8F%E5%8C%97-102913422-0.webp",
	], { duration: 60000, fade: 1500 });
});
'<script src="/live2d-widget/autoload.js"></script>'
/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
	  if(document.hidden) {	
		document.title = '你猜猜我有没有更新(￣y▽,￣)╭ ';
		clearTimeout(titleTime);
	  } else {
		document.title = '当然没有更新 咕~咕~咕~';
		titleTime = setTimeout(function() {
		  document.title = OriginTitile;
		}, 2000);
	  }
	});
  }

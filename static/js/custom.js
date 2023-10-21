/* 轮播背景图片 */
$(function () {
	$.backstretch([
		  "https://cdn.jsdelivr.net/gh/qwangqq/Hugo_images@main/银狼改-星穹轨道-109899883-0.webp",
		  "https://cdn.jsdelivr.net/gh/qwangqq/Hugo_images@main/background2.webp",
		  "https://cdn.jsdelivr.net/gh/qwangqq/Hugo_images@main/崩坏星穹铁道-三月七-107618199-0.webp",
		  "https://cdn.jsdelivr.net/gh/qwangqq/Hugo_images@main/星穹铁道-108157873-0.webp",
		  "https://cdn.jsdelivr.net/gh/qwangqq/Hugo_images@main/东方×铁道——小北-102913422-0.webp",
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

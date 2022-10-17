/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
    //khi button được click thì tìm đến thẻ body có id là myBody
    // dùng classlist để gọi thuộc tính class của thẻ body
    //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
    document.getElementById("myBody").classList.toggle("dark");
  };

  (function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();
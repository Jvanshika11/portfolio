jQuery(document).ready(function ($) {

	var my_nav = $('.navbar-sticky');
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;

	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function () {
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) {
			my_nav.addClass('stick');
		} else {
			my_nav.removeClass('stick');
		}
	};

	var initio_parallax_animation = function () {
		$('.parallax').each(function (i, obj) {
			var speed = $(this).data('parallax-speed');
			if (speed) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css('background-position', 'center ' + background_pos);
			}
		});
	}

	// run our function on load
	sticky_navigation();

	// and run it again every time you scroll
	$(window).scroll(function () {
		sticky_navigation();
		initio_parallax_animation();
	});

});

const text = "Business Analyst | Consultant";
let index = 0;

function typeText() {
  const typedLine = document.getElementById("typed-line");
  if (index < text.length) {
    typedLine.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, Math.random() * 200); // Adjust typing speed here
  } else {
    setTimeout(eraseText, 1000); // Wait before erasing text
  }
}

function eraseText() {
  const typedLine = document.getElementById("typed-line");
  if (typedLine.textContent.length > 16) {
    typedLine.textContent = typedLine.textContent.slice(0, -1);
    setTimeout(eraseText, 50); // Adjust erasing speed here
  } else {
    index = 0; // Reset index for the next typing cycle
    setTimeout(typeText, 500); // Wait before typing the text again
  }
}

// Start typing when the page loads
window.onload = function() {
  typeText();
};

function openTab(evt, companyName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(companyName).style.display = "block";
  evt.currentTarget.className += " active";
}


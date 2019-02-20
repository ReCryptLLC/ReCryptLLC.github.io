document.addEventListener('DOMContentLoaded', function() {
	function smoothScroll(target, duration) {
		var target = document.querySelector(target);
		var targetPosition = target.getBoundingClientRect().top;
		var startPosition = window.pageYOffset;
		var distance = targetPosition - startPosition;
		var startTime = null;

		function animation(currentTime) {
			if(startTime === null) startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			var run = ease(timeElapsed, startPosition, distance, duration);
			window.scrollTo(0, run);
			if(timeElapsed < duration) requestAnimationFrame(animation);
		}

		function ease(t, b, c, d) {
			t /=  d / 2;
			if(t < 1) return c / 2 * t * t + b;
			t--;
			return  -c / 2 * ( t * (t - 2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}

	// Наверх страницы
	var toTopPage = document.querySelector("#topLink");
	toTopPage.addEventListener('click', function() {
		smoothScroll("#top", 1000);
	})

	// К разделам
	var toExplore = document.querySelector("#exploreLink");
	toExplore.addEventListener('click', function() {
		smoothScroll("#explore", 1000);
	})
	var toProject = document.querySelector("#projectLink");
	toProject.addEventListener('click', function() {
		smoothScroll("#project", 1000);
	})
	var toDevelop = document.querySelector("#developLink");
	toDevelop.addEventListener('click', function() {
		smoothScroll("#develop", 1000);
	})
	var toProtect = document.querySelector("#protectLink");
	toProtect.addEventListener('click', function() {
		smoothScroll("#protect", 1000);
	})
});

document.addEventListener('scroll', function() {
	if(window.scrollY > 0) {
		document.querySelector("#topLink").style.display = "flex";
	} else {
		document.querySelector("#topLink").style.display = "none";
	}
});

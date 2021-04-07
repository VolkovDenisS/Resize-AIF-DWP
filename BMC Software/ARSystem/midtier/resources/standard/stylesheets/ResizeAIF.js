window.addEventListener(
	"hashchange",
	() => {
		if (location.hash === "#/srm/profile/SRGAA5V0HI2KVAQ36NYJQ287SGYW10/srm" || location.hash === "#/srm/profile/SRGAA5V0HI2KVAQKB75VQ9DG2J9F9H/srm") {
			resizeAIF ();
		}
	},
	false
);

$(document).ready(() => {
	if (location.hash === "#/srm/profile/SRGAA5V0HI2KVAQ36NYJQ287SGYW10/srm" || location.hash === "#/srm/profile/SRGAA5V0HI2KVAQKB75VQ9DG2J9F9H/srm") {
		resizeAIF ();
	}
});


function resizeAIF () {
			var cssId = 'myCss';  
			if (!document.getElementById(cssId)){
				var head  = document.getElementsByTagName('head')[0];
				var link  = document.createElement('link');
				link.classList = 'AIFCss'
				link.id   = cssId;
				link.rel  = 'stylesheet';
				link.type = 'text/css';
				link.href = 'custom/AIF.css';
				link.media = 'all';
				head.appendChild(link);
	}	
}

function restoreAIF () {
			const cssDelete = document.getElementById('myCss');
			cssDelete.parentElement.removeChild(cssDelete)	
	}
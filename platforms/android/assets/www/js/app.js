(function($) {

"use strict";

var tipPercent = 15.0;

var saveSettings = function() {
	try {
		var tipPct = parseFloat( $('#tipPercentage').val());
		localStorage.setItem('tipPercentage', tipPct);
		tipPercent = tipPct;
		window.history.back();
		}
		catch (ex) {
			alert('Tip percentage must be decimal');
		}
	};
		
var calcTip = function() {
			var billAmt = Number($('#billAmount').val());
			var tipAmt = billAmt * tipPercent/100;
			var totalAmt = billAmt + tipAmt;
			
			$('#tipAmount').text('$' + tipAmt.toFixed(2));
			$('#totalAmount').text('$' + totalAmt.toFixed(2));
		};

$(document).on("ready", function(){
	$('#calcTip').on('click', calcTip);
	$('#saveSettings').on('click', saveSettings);
	
	var tipPercentSetting = localStorage.getItem('tipPercentage');
	
	if(tipPercentSetting) {
		tipPercent = parseFloat(tipPercentSetting);
	}
	
	$('#tipPercentage').val(tipPercent);
	
});

$(document).on("deviceready", function(){
	StatusBar.overlaysWebView(false);
	StatusBar.backgroundcolor("gray");
	});
		
})(jQuery);	
		
		
		
		
		
		
		
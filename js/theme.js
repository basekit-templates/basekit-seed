// Attention!
// bk$.noConflict(true);
// bk$ = $

var ThemeModule = (function(){

	function testRun() {
		console.log('Run...');
	}

	return {
		testRun: testRun
	};
	
})();

bk$(function(){

	ThemeModule.testRun();

});
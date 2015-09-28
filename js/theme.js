var ThemeModule = (function(){

	function testRun() {
		console.log('Run...');
	}

	return {
		testRun: testRun
	};
	
})();

$(function(){

	ThemeModule.testRun();

});
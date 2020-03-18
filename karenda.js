$(function(){
	$("#dp").datepicker({
		defaultDate : new Date(),
		dateFormat : 'yy/mm/dd(DD)',
		showWeek : true,
		showOtherMonths : true,
		selectOtherMonths: true,
		changeYear : true,
		changeMonths : true,
		numberOfMonths : 3,
		showOn : "both",
		buttonText : "カレンダーを表示",
		showButtonPanel : true,
		currentText : "今日",
		closeText : "閉じる"
	});
	$("#dp").datepicker(
		"setDate",new Date());
});

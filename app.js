$(document).ready(function() {


$('#getUsers').click(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'http://reqr.es/api/users?page=1',
		method: 'GET',
		success: function(result) {
			console.log(result);
			insertData(result.data);
		},
		failure: function(result) {
			console.log('failed.')
		}
	});
})

var insertData = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		$('#userInfo' + (i + 1)).html('<div>' + 'User Info' + '<li>' + 'First name: ' + arr[i].first_name + '</li>' + '<li>' + 'Last name: ' + arr[i].last_name + '</li' + '<hr>' + '</div');
	}
};

$('#addUser').click(function(e) {
	e.preventDefault();
	var a = $('#name').val();
	var b = $('#job').val();
	$.ajax({
		url: 'http://reqr.es/api/users',
		method: 'POST',
		data: {userName: a, userJob: b},
		success: function(result) {
			$('#name').val('');
			$('#job').val('');
			console.log(result)
			$('#recentUser').html('<div>' + 
				'<li>' + 
				'User name: ' + 
				result.userName + '</li>' + '<li>' + 'User job: ' + result.userJob + '</li>' + '<li>' + 'User ID: ' + result.id + '</li>' + '</div');
			},
	});
});


});
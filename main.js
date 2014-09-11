$('.imageHolder').append('<img src="' + user.avatar_url + '">');
$('.imageHolder').append('<h1>' + user.name + '</h1>');
$('.imageHolder').append('<h3>' + user.login + '</h3>');
$('.infoArea').append('<span>' + user.location + '</span>');
$('.infoArea').append('<span>' + user.email + '</span>');
$('.infoArea').append('<span>' + user.blog + '</span>');
$('.infoArea').append('<span>' + user.created_at + '</span>');
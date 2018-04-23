'use strict';

var membersAdalab = [];
var selectUsers = document.querySelector('.select__users');

function getAdalabUsers() {
	return fetch('https://api.github.com/orgs/adalab/members?per_page=68')
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		var selectUsers = document.querySelector('.select__users');
		var newOptions = '<option class="user0" value="selectOption" selected>Selecciona una usuaria</option>';

		for (var i = 0; i < json.length; i++) {
			var username = json[i].login;
			var info = json[i].url;
			var objectUser = {
				"name": username,
				"info": info
			}
			membersAdalab.push(objectUser);
			newOptions += '<option class="user' + (i + 1) + '">' + membersAdalab[i].name + '</option>';
		}
		selectUsers.innerHTML = newOptions;
	});
}
getAdalabUsers();


function getInfoUser(event) {
	var user = event.currentTarget.value;
	for (var i = 0; i < membersAdalab.length; i++) {
		if (membersAdalab[i].name === user) {
			return fetch(membersAdalab[i].info)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				var json = json;
				var infoUser = {
					"avatar": json.avatar_url,
					"login": json.login,
					"name": json.name,
					"location": json.location,
					"repos": json.public_repos,
					"followers": json.followers,
					"following": json.following,
					"date": json.created_at
				}
				var ul = document.querySelector('.list__user')
				// avatar
				var avatar = document.createElement('li');
				avatar.className = 'avatar';
				var avatarContent = '<img src="' + infoUser.avatar + '" alt="' + infoUser.name + '">';
				avatar.insertAdjacentHTML('afterbegin', avatarContent);
				// login
				var sectionUser = document.querySelector('.user');
				var login = document.createElement('li');
				login.className = 'login';
				var loginContent = document.createTextNode('@' + infoUser.login);
				login.appendChild(loginContent);
				// name
				var name = document.createElement('li');
				name.className = 'name';
				var nameContent = document.createTextNode(infoUser.name);
				name.appendChild(nameContent);
				// location
				var location = document.createElement('li');
				location.className = 'location';
				var locationContent = document.createTextNode(infoUser.location);
				location.appendChild(locationContent);
				// public_repos
				var repos = document.createElement('li');
				repos.className = 'repos';
				var reposContent = document.createTextNode(infoUser.repos + ' Repos');
				repos.appendChild(reposContent);
				// followers
				var followers = document.createElement('li');
				followers.className = 'followers';
				var followersContent = document.createTextNode(infoUser.followers + ' Followers');
				followers.appendChild(followersContent);
				// following
				var following = document.createElement('li');
				following.className = 'following';
				var followingContent = document.createTextNode(infoUser.following + ' Following');
				following.appendChild(followingContent);
				// // date
				var date = document.createElement('li');
				date.className = 'date';
				var dateContent = document.createTextNode('Miembre desde hace ' + infoUser.date + ' años');
				date.appendChild(dateContent);
				ul.append(avatar, login, name, location, repos, followers, following, date);
			});
		}
	}
}
selectUsers.addEventListener('change', getInfoUser);

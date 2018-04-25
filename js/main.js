'use strict';

var membersAdalab = [];
var selectUsers = document.querySelector('.select__users');
var userSection = document.querySelector('.user');

function getAdalabUsers() {
	return fetch('https://api.github.com/orgs/adalab/members?per_page=68')
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		// console.log('json: ', json);
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
		// console.log('membersAdalab ', membersAdalab);
	});
}
getAdalabUsers();

function getInfoUser(event) {
	userSection.innerHTML = '';
	var user = event.currentTarget.value;
	// console.log('User: ', user);
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
				// console.log('infoUser: ', infoUser);

				// AVATAR

				var avatar = document.createElement('div');
				avatar.className = 'avatar__container';
				var avatarContent = '<img class="avatar" src="' + infoUser.avatar + '" alt="' + infoUser.name + '">';
				avatar.innerHTML = avatarContent;

				// INFO

				var infoContainer = document.createElement('div');
				infoContainer.className = 'info__container';
				// login
				var login = document.createElement('p');
				login.className = 'login';
				var loginContent = document.createTextNode('@' + infoUser.login);
				login.appendChild(loginContent);
				// name
				var name = document.createElement('p');
				name.className = 'name';
				var nameContent = document.createTextNode(infoUser.name ? infoUser.name : '');
				name.appendChild(nameContent);
				// location
				var location = document.createElement('div');
				location.className = 'location';
				var spanLocation = document.createElement('span');
				spanLocation.className = 'info-location';
				var locationContent = infoUser.location? '<img src="/images/location.svg" alt="logo-location">' + infoUser.location:'';
				spanLocation.innerHTML = locationContent;
				location.append(spanLocation);
				infoContainer.append(login, name, location);

				// INFO GITHUB

				var infoGitHub = document.createElement('div');
				infoGitHub.className = 'info__github';

				// public_repos
				var reposContainer = document.createElement('div');
				reposContainer.className = 'repos__container';
				var repos = document.createElement('span');
				repos.className = 'repos';
				var reposContent = document.createTextNode(infoUser.repos);
				repos.appendChild(reposContent);
				var reposText = document.createElement('span');
				reposText.className = 'repos-text';
				var reposTextContent = ' Repos';
				reposText.innerHTML = reposTextContent;
				reposContainer.append(repos, reposText);
				// followers
				var followersContainer = document.createElement('div');
				followersContainer.className = 'followers__container';
				var followers = document.createElement('span');
				followers.className = 'followers';
				var followersContent = document.createTextNode(infoUser.followers);
				followers.appendChild(followersContent);
				var followersText = document.createElement('span');
				followersText.className = 'followers-text';
				var followersTextContent = ' Followers';
				followersText.innerHTML = followersTextContent;
				followersContainer.append(followers, followersText);
				// following
				var followingContainer = document.createElement('div');
				followingContainer.className = 'following__container';
				var following = document.createElement('span');
				following.className = 'following';
				var followingContent = document.createTextNode(infoUser.following);
				following.appendChild(followingContent);
				var followingText = document.createElement('span');
				followingText.className = 'following-text';
				var followingTextContent = ' Following';
				followingText.innerHTML = followingTextContent;
				followingContainer.append(following, followingText);
				infoGitHub.append(reposContainer, followersContainer, followingContainer);

				// DATE
				var dateContainer = document.createElement('div');
				dateContainer.className = 'date__container';
				var date = document.createElement('span');
				date.className = 'date';
				var dateContent = document.createTextNode('Miembro desde el ' + new Date(infoUser.date).getFullYear());
				date.appendChild(dateContent);
				dateContainer.appendChild(date);

				userSection.append(avatar, infoContainer, infoGitHub, dateContainer);
			});
		}
	}
}
selectUsers.addEventListener('change', getInfoUser);

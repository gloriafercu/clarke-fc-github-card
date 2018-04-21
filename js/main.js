'use strict';

var membersAdalab = [];

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
				newOptions += '<option class="user' + (i+1) + '">' + membersAdalab[i].name + '</option>';
			}
			selectUsers.innerHTML = newOptions;
			console.log('membersAdalab ', membersAdalab);
			//console.log('url', urlmember);
		}
	);
}
getAdalabUsers();

function getInfoUser() {
	var user = document.querySelector




}






[
 {
  "login": "AilatanGH",
  "id": 26969648,
  "avatar_url": "https://avatars2.githubusercontent.com/u/26969648?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AilatanGH",
  "html_url": "https://github.com/AilatanGH",
  "followers_url": "https://api.github.com/users/AilatanGH/followers",
  "following_url": "https://api.github.com/users/AilatanGH/following{/other_user}",
  "gists_url": "https://api.github.com/users/AilatanGH/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AilatanGH/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AilatanGH/subscriptions",
  "organizations_url": "https://api.github.com/users/AilatanGH/orgs",
  "repos_url": "https://api.github.com/users/AilatanGH/repos",
  "events_url": "https://api.github.com/users/AilatanGH/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AilatanGH/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "Alienah",
  "id": 33132944,
  "avatar_url": "https://avatars2.githubusercontent.com/u/33132944?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Alienah",
  "html_url": "https://github.com/Alienah",
  "followers_url": "https://api.github.com/users/Alienah/followers",
  "following_url": "https://api.github.com/users/Alienah/following{/other_user}",
  "gists_url": "https://api.github.com/users/Alienah/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Alienah/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Alienah/subscriptions",
  "organizations_url": "https://api.github.com/users/Alienah/orgs",
  "repos_url": "https://api.github.com/users/Alienah/repos",
  "events_url": "https://api.github.com/users/Alienah/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Alienah/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "AltheaE",
  "id": 26813399,
  "avatar_url": "https://avatars0.githubusercontent.com/u/26813399?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AltheaE",
  "html_url": "https://github.com/AltheaE",
  "followers_url": "https://api.github.com/users/AltheaE/followers",
  "following_url": "https://api.github.com/users/AltheaE/following{/other_user}",
  "gists_url": "https://api.github.com/users/AltheaE/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AltheaE/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AltheaE/subscriptions",
  "organizations_url": "https://api.github.com/users/AltheaE/orgs",
  "repos_url": "https://api.github.com/users/AltheaE/repos",
  "events_url": "https://api.github.com/users/AltheaE/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AltheaE/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "AmaliaVamar",
  "id": 27018106,
  "avatar_url": "https://avatars2.githubusercontent.com/u/27018106?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmaliaVamar",
  "html_url": "https://github.com/AmaliaVamar",
  "followers_url": "https://api.github.com/users/AmaliaVamar/followers",
  "following_url": "https://api.github.com/users/AmaliaVamar/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmaliaVamar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmaliaVamar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmaliaVamar/subscriptions",
  "organizations_url": "https://api.github.com/users/AmaliaVamar/orgs",
  "repos_url": "https://api.github.com/users/AmaliaVamar/repos",
  "events_url": "https://api.github.com/users/AmaliaVamar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmaliaVamar/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "AnitaMartinez",
  "id": 33347782,
  "avatar_url": "https://avatars0.githubusercontent.com/u/33347782?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AnitaMartinez",
  "html_url": "https://github.com/AnitaMartinez",
  "followers_url": "https://api.github.com/users/AnitaMartinez/followers",
  "following_url": "https://api.github.com/users/AnitaMartinez/following{/other_user}",
  "gists_url": "https://api.github.com/users/AnitaMartinez/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AnitaMartinez/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AnitaMartinez/subscriptions",
  "organizations_url": "https://api.github.com/users/AnitaMartinez/orgs",
  "repos_url": "https://api.github.com/users/AnitaMartinez/repos",
  "events_url": "https://api.github.com/users/AnitaMartinez/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AnitaMartinez/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "Celia19C",
  "id": 33252071,
  "avatar_url": "https://avatars2.githubusercontent.com/u/33252071?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Celia19C",
  "html_url": "https://github.com/Celia19C",
  "followers_url": "https://api.github.com/users/Celia19C/followers",
  "following_url": "https://api.github.com/users/Celia19C/following{/other_user}",
  "gists_url": "https://api.github.com/users/Celia19C/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Celia19C/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Celia19C/subscriptions",
  "organizations_url": "https://api.github.com/users/Celia19C/orgs",
  "repos_url": "https://api.github.com/users/Celia19C/repos",
  "events_url": "https://api.github.com/users/Celia19C/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Celia19C/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "Danaeh",
  "id": 26907990,
  "avatar_url": "https://avatars0.githubusercontent.com/u/26907990?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Danaeh",
  "html_url": "https://github.com/Danaeh",
  "followers_url": "https://api.github.com/users/Danaeh/followers",
  "following_url": "https://api.github.com/users/Danaeh/following{/other_user}",
  "gists_url": "https://api.github.com/users/Danaeh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Danaeh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Danaeh/subscriptions",
  "organizations_url": "https://api.github.com/users/Danaeh/orgs",
  "repos_url": "https://api.github.com/users/Danaeh/repos",
  "events_url": "https://api.github.com/users/Danaeh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Danaeh/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "ElenaCerezoSwing",
  "id": 33314032,
  "avatar_url": "https://avatars1.githubusercontent.com/u/33314032?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ElenaCerezoSwing",
  "html_url": "https://github.com/ElenaCerezoSwing",
  "followers_url": "https://api.github.com/users/ElenaCerezoSwing/followers",
  "following_url": "https://api.github.com/users/ElenaCerezoSwing/following{/other_user}",
  "gists_url": "https://api.github.com/users/ElenaCerezoSwing/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ElenaCerezoSwing/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ElenaCerezoSwing/subscriptions",
  "organizations_url": "https://api.github.com/users/ElenaCerezoSwing/orgs",
  "repos_url": "https://api.github.com/users/ElenaCerezoSwing/repos",
  "events_url": "https://api.github.com/users/ElenaCerezoSwing/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ElenaCerezoSwing/received_events",
  "type": "User",
  "site_admin": false
 },
 {
  "login": "ElenaMLopez",
  "id": 27022503,
  "avatar_url": "https://avatars0.githubusercontent.com/u/27022503?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ElenaMLopez",
  "html_url": "https://github.com/ElenaMLopez",
  "followers_url": "https://api.github.com/users/ElenaMLopez/followers",
  "following_url": "https://api.github.com/users/ElenaMLopez/following{/other_user}",
  "gists_url": "https://api.github.com/users/ElenaMLopez/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ElenaMLopez/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ElenaMLopez/subscriptions",
  "organizations_url": "https://api.github.com/users/ElenaMLopez/orgs",
  "repos_url": "https://api.github.com/users/ElenaMLopez/repos",
  "events_url": "https://api.github.com/users/ElenaMLopez/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ElenaMLopez/received_events",
  "type": "User",
  "site_admin": false
}]

const members = [
	{
		id: 1,
		name: "alpha",
		description: "Competitive Coding",
		img: 'img/team/matthew.png',
		contact: "9999999999",
		year: "First Year"
	},
	{
		id: 2,
		name: "beta",
		description: "Competitive Coding",
		img: 'img/team/molly.png',
		contact: "9999999999",
		year: "Second Year"
	},
	{
		id: 1,
		name: "gamma",
		description: "Development",
		img: 'img/team/elyse.png',
		contact: "9999999999",
		year: "Second Year"
	},
	{
		id: 1,
		name: "alpha",
		description: "Cyber Security",
		img: 'img/team/matthew.png',
		contact: "9999999999",
		year: "Third Year"
	},
	{
		id: 1,
		name: "alpha",
		description: "Cyber Security",
		img: 'img/team/matthew.png',
		contact: "9999999999",
		year: "First Year"
	},
	{
		id: 1,
		name: "alpha",
		description: "Development",
		img: 'img/team/matthew.png',
		contact: "9999999999",
		year: "First Year"
	}
]

const heads = [
	{
		id: 1,
		name: "alpha",
		description: "Club Head",
		img: 'img/team/matthew.png',
		contact: "9999999999",
		year: "Third Year"
	},
	{
		id: 2,
		name: "beta",
		description: "Club Head",
		img: 'img/team/molly.png',
		contact: "9999999999",
		year: "Third Year"
	}
]


Vue.component('member-component', {
	template: `
			<div class="inline-1">
				<div class="image">
					<img :src="member.img" alt="images" height="200px" width="200px">
				</div>
				<div class="name">
					<strong>{{member.name}}</strong>
					<div class="description">{{member.description}}</div>
					<div class="description">{{member.year}}</div>
					<a href="#"> <i class="fab fa-github"></i> </a>
				</div>
				<br class="clearboth" />
			</div>
	`,
	props: {
    member: Object
  }
});

Vue.component('head-component', {
	template: `
			<div class="inline">
				<div class="image">
					<img :src="head.img" alt="images" height="300px" width="300px">
				</div>
				<div class="name" style="font-size:2em;">
					<strong>{{head.name}}</strong>
					<div class="description">{{head.description}}</div>
					<div class="description">{{head.year}}</div>
					<a href="#"> <i class="fab fa-github"></i> </a>
				</div>
				<br class="clearboth" />
			</div>
	`,
	props: {
    head: Object
  }
});

new Vue({
  el: '#app',
  data: {
    members,
    heads
  }
});

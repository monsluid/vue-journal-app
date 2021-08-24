export default () => ({
	isLoading: true,
	entries: [
		{
			id: new Date().getTime(),
			date: new Date().toDateString(),
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			picture: null

		},
		{
			id: new Date().getTime() + 1000,
			date: new Date().toDateString(),
			text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paritum',
			picture: null

		},
		{
			id: new Date().getTime() + 2000,
			date: new Date().toDateString(),
			text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			picture: null

		}
	]
})

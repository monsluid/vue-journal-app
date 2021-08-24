export default {

  name: 'daybook',
  component: () => import(/* webpackChunkName: "Daybook Page" */ '../layouts/DaybookLayout'),
  children: [
	{
	  path: '',
	  name: 'no-entry',
	  component: () => import(/* webpackChunkName: "No Entry" */ '../views/NoEntrySelected'),

	},
	{
	  path: ':id',
	  name: 'entry',
		component: () => import(/* webpackChunkName: "Entry" */ '../views/EntryView'),

	}
  ]
	
}

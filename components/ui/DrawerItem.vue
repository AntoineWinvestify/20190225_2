<template>
	<v-list-tile 
		@click="item.action" 
		v-if="item.action"
	>
		<v-list-tile-action>
			<i :class="item.icon"></i>
		</v-list-tile-action>
		<v-list-tile-content>
			<v-list-tile-title>{{ item.name }}</v-list-tile-title>
		</v-list-tile-content>
	</v-list-tile>
	<v-list-tile 
		:nuxt="item.href ? true : false" 
		:to="item.href ? `/${lang}${item.href}` : ''"
		v-else
	>
		<v-list-tile-action>
			<i :class="item.icon"></i>
		</v-list-tile-action>
		<v-list-tile-content>
			<v-list-tile-title>{{ item.name }}</v-list-tile-title>
		</v-list-tile-content>
	</v-list-tile>
</template>
<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		computed: {
			lang () {
				return this.$store.getters.locale
			}
		}
	}
</script>
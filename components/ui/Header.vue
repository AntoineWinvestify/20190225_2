<template>
	<div>
		<header>
			<nav v-if="!mobile">
				<ul>
					<li><nuxt-link nuxt :to="`/${$store.state.locale}/`">{{ $t('statics.header.home') }}</nuxt-link></li>
					<li><nuxt-link nuxt :to="`/${$store.state.locale}/our-solution`">{{ $t('statics.header.solutions') }}</nuxt-link></li>
					<li><nuxt-link nuxt :to="`/${$store.state.locale}/`">{{ $t('statics.header.platforms') }}</nuxt-link></li>
					<li><nuxt-link nuxt :to="`/${$store.state.locale}/about`">{{ $t('statics.header.about') }}</nuxt-link></li>
					<li><nuxt-link nuxt :to="`/${$store.state.locale}/contact`">{{ $t('statics.header.contact') }}</nuxt-link></li>
				</ul>
			</nav>
			<v-icon v-else @click="drawer = true">menu</v-icon>
			<div class="actions">
				<languages />
				<v-btn nuxt :to="`/${$store.state.locale}/login`" color="white" flat>{{ $t('statics.header.login') }}</v-btn>				
				<v-btn @click="showModalRegister" class="register-button">{{ $t('statics.header.register') }}</v-btn>
			</div>
		</header>
		<v-navigation-drawer
			v-model="drawer"
			width=200
			fixed
			app
			class="mobile-menu"
			v-if="mobile"
		>
			<figure>
				<img src="~assets/img/logo-text.png" alt="">
			</figure>
			<nav>
				<ul>
					<li>{{ $t('statics.header.home') }}</li>
					<li>{{ $t('statics.header.solutions') }}</li>
					<li>{{ $t('statics.header.platforms') }}</li>
					<li>{{ $t('statics.header.about') }}</li>
					<li>{{ $t('statics.header.contact') }}</li>
				</ul>
			</nav>
		</v-navigation-drawer>
	</div>
</template>
<script>
	import Languages from '~/components/ui/LanguagesList'

	export default {
		props: {
			mobile: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				drawer: false
			}
		},
		mounted () {

		},
		methods: {
			showModalRegister () {
				
			}
		},
		components: {
			Languages
		}
	}
</script>
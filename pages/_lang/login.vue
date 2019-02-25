<template>
	<v-container class="login-container">
		<v-flex xs12 sm7 md5 lg4>
			<v-form ref="login" v-model="valid" class="login-form custom-form">
				<v-flex class="login-header" xs12>
					<img src="~assets/img/logo-text.png" alt="">
					<p>Sign-in</p>
				</v-flex>
				<v-text-field hide-details v-model="user.username" :rules="validation.emailRules" name="username" label="Username"></v-text-field>
				<v-text-field hide-details v-model="user.password" :rules="validation.passwordRules" name="password" label="Password" type="password"></v-text-field>
				<v-flex class="forgot-message" xs12 text-xs-right>
					Forgot password??
				</v-flex>
				<div class="login-button">
					<v-btn block :disabled="!valid" color="white" @click="makeLogin">Log in</v-btn>
				</div>
			</v-form>
			<v-flex class="login-message" xs12>
				<span>Terms of Service</span>
				<span>Request Access</span>
			</v-flex>
		</v-flex>
	</v-container>
</template>
<script>
	import axios from '~/plugins/axios'

	export default {
		head () {
			return {
				title: 'Winvestify - Login'
			}
		},
		data () {
			return {
				user: {},
				valid: false,
				validation: {
					passwordRules: [
						v => !!v || 'Password is required',
						v => (v && v.length >= 5) || 'Password must be more than 5 characters'
					],
					emailRules: [
						v => !!v || 'E-mail is required',
						v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
					],
				}
			}
		},
		mounted () {

		},
		computed: {
			lang () {
				return this.$store.getters.locale
			}
		},
		methods: {
			makeLogin () {
				console.log('asas')
				this.$store.dispatch('initLoading', this)
				axios.post('/api/auth', {
					username: this.user.username,
					password: this.user.password
				})
					.then(res => {
						this.$store.dispatch('finishLoading', this)
						this.$store.commit('SET_USER', res.data)
						location.href = `/${this.lang}/dashboard`
					})
					.catch(err => {
						if (typeof err.response.data === 'string') {
							this.showError('El usuario y/o password no coinciden')
						} else {
							this.$store.dispatch('errorLoading', this)
							this.showErrors(err.response)
						}
					})
			}
		},
		components: {

		},
		middleware: ['noAuth']
	}
</script>

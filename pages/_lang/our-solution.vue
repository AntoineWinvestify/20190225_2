<template>
	<div v-resize="onResize">
		<article class="landing landing-step-1">
			<v-container>
				<header-simple :mobile="mobile" />
				<section class="landing-step-1-container">
					<v-layout column wrap>
						<v-flex class="first-line" xs12>
							Winvestify is an analytical SaaS and expert services
						</v-flex>
						<v-flex class="second-line" xs12>
							Manage assets, risk, and liability by leveraging our platform to get more information on payments, losses and recoveries.
						</v-flex>
						<v-flex xs12>
							<v-btn class="button-open-account">Request Access</v-btn>
						</v-flex>
					</v-layout>
				</section>
				<section class="solution-title">
					<span>Standardized Data is the First Step in Making </span>
					<span>Smart Investment Decisions</span>
				</section>
			</v-container>
		</article>
		<article class="solution-information-container">
			<section class="solution-information">
				<v-layout row wrap>
					<v-flex class="information-item-container" xs12>
						<v-layout class="information-item" row wrap>
							<v-flex class="information-item" xs12 sm5 md5 lg6>
								<div class="information-item-content">
									<div class="title-sub-section">
										Our Solutions
									</div>
									<p class="information-item-text">Winvestify flexible data infrastructure allows us to accept data directly from principal Lending Platforms in a variety of formats.</p>
									<p class="information-item-text">Our data ingestion process guarantees that all data is direct from the source.</p>
								</div>
							</v-flex>
							<v-flex class="information-image-container" xs12 sm6 md6 lg5>
								<img src="~/assets/img/Cloud.png" alt="">
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex class="information-item-container" xs12>
						<v-layout class="information-item item-reverse" row wrap>
							<v-flex class="information-image-container" xs12 sm6 md6 lg6>
								<img src="~/assets/img/IsometricInvestor.png" alt="">
							</v-flex>
							<v-flex class="information-item" xs12 sm5 md5 lg5>
								<div class="information-item-content">
									<div class="title-sub-section">
										Clean, Accurate Data
									</div>
									<p class="information-item-text">Winvestify automated data validation engine performs hundreds of checks to verify that data adheres to internal and external requirements.</p>
									<p class="information-item-text">As a key part of our data integration process, our data validation engine is flexible enough to accommodate customizable rules.</p>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex class="information-item-container" xs12>
						<v-layout class="information-item" row wrap>
							<v-flex class="information-item" xs12 sm5 md5 lg5>
								<div class="information-item-content">
									<div class="title-sub-section">
										State of the Art Systems
									</div>
									<p class="information-item-text">The Winvestify platform is implemented on a state-of-the-art cloud-based cluster. The cluster fully supports continuous availability and readily scales with load requirements, ensuring our systems are always responsive to client needs.</p>
								</div>
							</v-flex>
							<v-flex class="information-image-container" xs12 sm6 md6 lg6>
								<img src="~/assets/img/Cloud.png" alt="">
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex class="information-item-container" xs12>
						<v-layout class="information-item item-reverse" row wrap>
							<v-flex class="information-image-container" xs12 sm6 md6 lg6>
								<img src="~/assets/img/IsometricIcon.png" alt="">
							</v-flex>
							<v-flex class="information-item" xs12 sm5 md5 lg5 text-xs-center>
								<div class="information-item-content">
									<div class="title-section-get">
										Get in Touch
									</div>
									<p class="information-item-text">Interested in a live look at Winvestify marketplace management software?</p>
									<p class="information-item-text">We look forward to connecting with you to understand your alternative lending needs</p>
									<v-flex xs12 text-xs-center>
										<v-btn class="button-open-account">Schedule Demo</v-btn>
									</v-flex>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</section>			
		</article>
		<footer-simple />
		<v-dialog
			v-model="dialogRegister"
			:overlay="false"
			max-width="600px"
			transition="dialog-transition"
		>
			<div class="form-register-content">
				<figure>
					<img src="~/assets/img/logo-text.png" alt="">
				</figure>
				<v-form ref="formStep1" v-model="validStep1" v-show="step === 1">
					<v-flex xs12>
						<v-text-field v-model="user.email" :rules="validation.emailRules" label="Email"></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field type="password" v-model="user.password" :rules="validation.passwordRules" label="Password"></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field type="password" v-model="user.rePassword" :rules="validation.rePassRules" label="Repeat Password"></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field v-model="user.phone" :rules="validation.mobileRules" persistent-hint label="Mobile phone"
						hint="For security reasons it is mandatory to include your mobile phone number so we can send you an account activation code"></v-text-field>
					</v-flex>
					<v-flex class="custom-checks register" xs12>
						<v-checkbox
							v-model="terms"
							label="Business Loans"
							color="light-green accent-3"
							value=""
							:rules="validation.termsRules"
							hide-details
						>
							<template slot="label">
								I accept the <a href="#">terms of service</a> and the <a href="#">privacy policy</a>
							</template>
						</v-checkbox>
						<v-flex xs12 text-xs-right>
							<v-btn :disabled="!validStep1" @click="step = 2" class="next-button">Next</v-btn>
						</v-flex>
					</v-flex>
				</v-form>
				<v-form ref="formStep2" class="step-2" v-model="validStep2" v-show="step === 2">
					<v-flex class="message" xs12>
						<p>Dear Investor,</p>
						<p>A confirmation code has been sent to {{ user.phone }}</p>
					</v-flex>
					<v-flex xs12>
						<v-text-field v-model="user.code" :rules="validation.codeRules" label="Confirmation Code"></v-text-field>
					</v-flex>
					<v-flex xs12 mt-5>
						You did not receive a code?
					</v-flex>
					<v-flex class="buttons" xs12>
						<v-btn color="blue-grey darken-1" class="new-code">Request new code</v-btn>
						<v-btn :disabled="!validStep2" @click="step = 3" class="next-button">Next</v-btn>
					</v-flex>
				</v-form>
				<v-form ref="formStep3" class="step-3" v-model="validStep3" v-show="step === 3">
					<v-flex class="message" text-xs-center xs12>
						<p>Your Account Has Been Successfully Created</p>
						<p>For security reasons it is mandatory to include your name and surnames for the correct identification of your account</p>
					</v-flex>
					<v-flex xs12>
						<v-text-field v-model="user.name" :rules="validation.nameRules" label="Name"></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field v-model="user.surnames" :rules="validation.surnamesRules" label="Surnames(s)"></v-text-field>
					</v-flex>					
					<v-flex xs12 mt-5>
						Are you an accredited investor?
					</v-flex>
					<v-flex xs12>
						<v-layout row wrap>
							<v-flex class="custom-checks main" xs12>
								<v-checkbox
									v-model="ex1"
									label="Yes"
									color="light-green accent-3"
									value="yes"
									:rules="validation.investorRules"
									hide-details
								></v-checkbox>
								<v-checkbox
									v-model="ex1"
									label="No"
									color="light-green accent-3"
									value="no"
									:rules="validation.investorRules"
									hide-details
								></v-checkbox>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex text-xs-right xs12>
						<v-btn :disabled="!validStep3" @click="dialogRegister = !dialogRegister, clear" class="next-button">Start</v-btn>
					</v-flex>
				</v-form>				
			</div>
		</v-dialog>
	</div>
</template>
<script>
	import HeaderSimple from '~/components/ui/Header'
	import FooterSimple from '~/components/ui/Footer'
	
	export default {
		head () {
			return {
				title: 'Winvestify - Home'
			}
		},
		data () {
			return {
				value: '',
				ex1: false,
				step: 1,
				validStep1: false,
				validStep2: false,
				validStep3: false,
				user: {},
				terms: false,
				dialogRegister: false,
				menu: false,
				valid: false,
				mobile: false,
				drawer: false,
				items: [
					{ title: 'Click Me' },
					{ title: 'Click Me' },
					{ title: 'Click Me' },
					{ title: 'Click Me 2' }
				],
				validation: {
					passwordRules: [
						v => !!v || 'Password is required',
						v => (v && v.length >= 5) || 'Password must be more than 5 characters'
					],
					rePassRules: [
						v => !!v || 'Re-password is required',
						v => (v === this.user.password) || 'Password and re-password field must be the same'
					],
					emailRules: [
						v => !!v || 'E-mail is required',
						v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
					],
					mobileRules: [
						v => !!v || 'Mobile phone is required',
						v => (v && v.length >= 5) || 'Mobile phone must be more than 5 characters'
					],
					termsRules: [
						v => !!v || 'You must accept our terms of service and the privacy policy'
					],
					codeRules: [
						v => !!v || 'Confirmation Code is required',
						v => (v && v.length >= 5) || 'Confirmation Code must be more than 5 characters'
					],
					nameRules: [
						v => !!v || 'Name is required',
						v => (v && v.length >= 5) || 'Name must be more than 5 characters'
					],
					surnamesRules: [
						v => !!v || 'Surname(s) is required',
						v => (v && v.length >= 5) || 'Surname(s) must be more than 5 characters'
					],
					investorRules: [
						v => !!v || 'You must accept our terms of service and the privacy policy'
					]
				}
			}
		},
		methods: {
			showModalRegister () {
				this.clear()
				this.dialogRegister = true
			},
			clear () {
				this.$refs.formStep1.reset()
				this.$refs.formStep2.reset()
				this.$refs.formStep3.reset()
				this.step = 1
			},
			onResize () {
				let x = window.innerWidth
				this.mobile = false
				if (x <= 960) {
					this.mobile = true
				}
			}
		},
		components: {
			HeaderSimple,
			FooterSimple
		},
		layout: 'landing'
	}
</script>

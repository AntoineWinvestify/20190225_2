<template>
	<div v-resize="onResize">
		<article class="landing">
			<v-container grid-list-md>
				<header-simple :mobile="mobile" />
				<v-flex class="contact-account-container" xs12>
					<v-layout row wrap>
						<v-flex class="form-container" sm12 md7 lg6>
							<span class="section-title">
								Do You Need Help?
							</span>
							<p>If you have any questions or are missing something, Please contact our customer service</p>
							<v-form class="form-contact custom-form">
								<v-layout  row wrap>
									<v-flex lg6>
										<v-text-field hide-details label="First Name"></v-text-field>
									</v-flex>
									<v-flex lg6>
										<v-text-field hide-details label="Last Name"></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field hide-details label="Job Title"></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field hide-details label="Company"></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field hide-details label="Phone Number"></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field hide-details label="Email"></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field multi-line="" hide-details label="Message"></v-text-field>
									</v-flex>																
								</v-layout>
								<div class="form-button">
									<v-btn color="white">Send</v-btn>
								</div>
							</v-form>
						</v-flex>
						<v-flex class="form-image" hidden-sm-and-down md6 lg6>
							<img src="~/assets/img/IsometricIcon.png" alt="">
						</v-flex>
					</v-layout>
				</v-flex>
			</v-container>
		</article>
	</div>
</template>
<script>
	import HeaderSimple from '~/components/ui/Header'
	
	export default {
		head () {
			return {
				title: 'Winvestify - Contact us'
			}
		},
		data () {
			return {
				mobile: false,
			}
		},
		methods: {
			onResize () {
				let x = window.innerWidth
				this.mobile = false
				if (x <= 960) {
					this.mobile = true
				}
			}
		},
		components: {
			HeaderSimple
		},
		layout: 'landing'
	}
</script>

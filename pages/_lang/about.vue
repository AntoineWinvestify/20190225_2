<template>
	<div v-resize="onResize">
		<article class="landing">
			<v-container grid-list-md>
				<header-simple :mobile="mobile" />
				<v-flex text-xs-center class="static-section" xs12 offset-lg2 lg8>
					<div class="title-section">
						About Us
					</div>
					<p>The alternative investment landscape is changing and modernizing. P2P Online Lending is steadily on the rise, assets are becoming more institutionalized, and investors are looking beyond their borders to find global opportunities. Undeniably, the P2P Lending market has earned its place as an efficient financial asset. Yet despite the intensity of these trends, Alternative Financing continues to lag behind other industries in technology adoption and in particular in big data and analytics use.</p>
					<p>Winvestify is at the forefront of this opportunity with analytics solutions and expert services that help our clients navigate the complexities of the Online Lending market to maximize the value of their assets and portfolios.</p>
					<p>Winvestify Analytics business is exceptionally well positioned in Europe, connecting many of the largest and most influential P2P Lending platforms. We empower our clients with software and data analytics solutions that provide data-driven insights regarding their P2P loans.</p>
					<p>Our services draw on our market expertise to create value for investors. In our services application areas, we are touching every stage of the lifecycle of P2P loans which gives us a significant advantage and access to robust market data. It also provides us with a unique long‐term opportunity to use that data to drive differentiation, to launch new products and to strengthen our market position.</p>
					<p>Our goal is to evolve towards a focused and integrated business model which augments our data, analytics and software capabilities on a global basis while continuing to provide analytics solutions and expert services for P2P Lending Platforms and professional investors.</p>
					<p>At Winvestify we are providing transparency and insight into every aspect of the Online Lending market. We are a global team who are driving change in the finance industry.</p>
				</v-flex>
			</v-container>
		</article>
		<article class="parallax-wrapper">
			<ParallaxContainer>
				<ParallaxImage
					:width="432"
					:height="289"
					:factor="0.5"
				>
					<img class="filter-gray" src="~/assets/img/Winvestify-equipo.jpg" alt="">
				</ParallaxImage>
			</ParallaxContainer>
		</article>
		<article class="landing">
			<v-container grid-list-md>
				<v-flex text-xs-center class="static-section" xs12 offset-lg1 lg10>
					<div class="title-section">
						Executive Team
					</div>
					<v-layout row wrap>
						<v-flex lg3 class="team-item">
							<span class="team-name">Manuel Millan</span>
							<div class="team-img">
								<img class="filter-gray" src="~/assets/img/team1.jpg" alt="">
							</div>
							<span class="team-position">CEO & Founder</span>
						</v-flex>
						<v-flex lg3 class="team-item">
							<span class="team-name">Olena Tatarin</span>
							<div class="team-img">
								<img class="filter-gray" src="~/assets/img/team2.jpg" alt="">
							</div>
							<span class="team-position">CFO & Founder</span>
						</v-flex>
						<v-flex lg3 class="team-item">
							<span class="team-name">Antoine de Poorter</span>
							<div class="team-img">
								<img class="filter-gray" src="~/assets/img/team3.jpg" alt="">
							</div>
							<span class="team-position">CTO & Founder</span>
						</v-flex>
						<v-flex lg3 class="team-item">
							<span class="team-name">Klaus Kukovetz</span>
							<div class="team-img">
								<img class="filter-gray" src="~/assets/img/team4.jpg" alt="">
							</div>
							<span class="team-position">Investor Relations</span>
						</v-flex>
					</v-layout>
				</v-flex>						
				<v-flex text-xs-center class="static-section" xs12 offset-lg2 lg8>
					<div class="title-section">
						Work Culture
					</div>
					<p>At Winvestify, each team member is just as important as the products we build. We’ve combined the best parts of  lending data and technology to create a team that fuses an insider’s understanding of incumbent financial processes with an uncompromising focus on technology.</p>
					<p>We believe smart people can succeed at almost anything, so we encourage on-the-job learning and taking real ownership of your work. Our fast paced environment necessitates a desire and willingness to grow both personally and professionally. We see value in effort and output, which is why we encourage every team member to take measured risks and never back away from a challenge.</p>
					<p>Our current solution addresses the online lending market in Europe, but our ambitions are much larger: we want to bring transparency to all  lending data.</p>
					<p>Why does it matter? Because a more transparent market is less volatile, which benefits all participants like you.</p>
					<p>Data, data analysis, and data modeling are the cornerstones of our business.</p>
				</v-flex>				
			</v-container>
		</article>
		<footer-simple />
	</div>
</template>
<script>
	import HeaderSimple from '~/components/ui/Header'
	import FooterSimple from '~/components/ui/Footer'
	import ParallaxContainer from '~/components/ui/ParallaxContainer';
	import ParallaxElement from '~/components/ui/ParallaxElement';
	import ParallaxImage from '~/components/ui/ParallaxImage';

	export default {
		head () {
			return {
				title: 'Winvestify - About us'
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
			HeaderSimple,
			FooterSimple,
			ParallaxContainer,
			ParallaxElement,
			ParallaxImage
		},
		layout: 'landing'
	}
</script>

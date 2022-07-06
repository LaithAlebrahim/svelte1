<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="home">
		<div class="over-lay">
			<div class="home-content">
				<h1 class="title">Welcome in my site</h1>
				<p class="home-discription">Let's Start by introducing myself.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.home {
		height: 100vh;
		background-size: cover;
		background-image: url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');

		position: relative;
		color: red;
	}
	.over-lay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.1);
	}
	.home-content {
		position: absolute;
		top: 50%;
		width: 65%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.home .title {
		color: ghostwhite;
		font-size: 45px;
		text-transform: uppercase;
		font-family: montserrat, sans-serif;
	}

	.home-discription {
		margin: 20px 0px;
		color: ghostwhite;
		letter-spacing: 2px;
		line-height: 1.5px;
	}
</style>

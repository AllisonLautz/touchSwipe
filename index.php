<!DOCTYPE html>
<html>
<head>
	<title>touchSwipe</title>
	<link rel="stylesheet" type="text/css" href="styles/touchSwipe.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>




	<?php

	$resources = array(
		// 'e91e63',
		// 'bada55', 
		// '00CED1',
		// '00bcd4',
		// '2196f3',
		// '9c27b0',
		'f44336',
		'ffa000',
		'ffeb3b',
		'009688',
		'03a9f4',
		'9c27b0',
	);


	$posts = array(
		// '0f6ab3', 
		// '501f43', 
		// 'd06a32',
		'f44336',
		'ffa000',
		'ffeb3b',
	);


	?>


	<section class="resources count-<?=count($resources);?>">
		<div class="wrapper">

			<?php foreach($resources as $k => $v): ?>

				<article>
					<img src="https://api.fnkr.net/testimg/350x200/<?=$v;?>/FFF/?text=img+placeholder">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>consectetur adipiscing elit. Nunc rutrum leo at dui placerat, id tincidunt libero sollicitudin. Nulla ultricies eleifend porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis diam odio, et auctor nibh aliquam eu. Proin ultrices molestie augue nec sollicitudin. Quisque vitae euismod justo. Ut viverra, ante eget efficitur sodales, purus ipsum sollicitudin dolor, non mollis est risus quis lectus. Duis sagittis pulvinar imperdiet.</p>
				</article>

			<?php endforeach;?>

		</div>
	</section>


	<section class="posts count-<?=count($posts);?>">
		<div class="wrapper">
			
			<?php foreach($posts as $k => $v): ?>

				<article>
					<img src="https://api.fnkr.net/testimg/350x200/<?=$v;?>/FFF/?text=img+placeholder">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>consectetur adipiscing elit. Nunc rutrum leo at dui placerat, id tincidunt libero sollicitudin. Nulla ultricies eleifend porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce venenatis diam odio, et auctor nibh aliquam eu. Proin ultrices molestie augue nec sollicitudin. Quisque vitae euismod justo. Ut viverra, ante eget efficitur sodales, purus ipsum sollicitudin dolor, non mollis est risus quis lectus. Duis sagittis pulvinar imperdiet.</p>
				</article>

			<?php endforeach;?>

		</div>
	</section>





	<script src="libs/touchSwipe.js"></script>
	<!-- <script src="min/touchSwipe.min.js"></script> -->

</body>
</html>
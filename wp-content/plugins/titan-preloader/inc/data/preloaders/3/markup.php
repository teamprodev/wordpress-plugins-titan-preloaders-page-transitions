<?php
/**
 * Markup for preloader.
 *
 * @package titan-preloader
 */

$preloader_id = basename( __DIR__ ); ?>
<div class="gfx_preloader">
	<div class="gfx_preloader--logo <?php echo esc_attr( $preloader_id ); ?>_titan_pl_rotate_switch">
		__IMAGE__
	</div>
	<div class="gfx_preloader--text"><?php echo esc_attr( $preloader_id ); ?>_titan_pl_loading_text</div>
	<div class="gfx_preloader--progress">
		<div class="gfx_preloader--progress-bar">
			<div class="gfx_preloader--counter">0%</div>
		</div>
	</div>
</div>

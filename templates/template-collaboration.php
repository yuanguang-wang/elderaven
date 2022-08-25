<?php
/*
Template Name: Collaboration
*/
?>

<?php get_header(); ?>

<div class="container p-3 mt-3 text-center">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <?php the_content(); ?>

    <?php endwhile;
    endif; ?>
</div>

<?php get_footer(); ?>
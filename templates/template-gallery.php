<?php
/*
Template Name: Gallery
*/
?>

<?php get_header(); ?>

<div class="row">
    <div class="col-lg-6">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                <?php the_content(); ?>

        <?php endwhile;
        endif; ?>
    </div>

    <div class="col-lg-6">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                <?php the_content(); ?>

        <?php endwhile;
        endif; ?>
    </div>

</div>

<?php get_footer(); ?>
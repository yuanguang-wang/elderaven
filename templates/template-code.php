<?php
/*
Template Name: Code
*/
?>

<?php get_header(); ?>

<div id="code-container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <?php the_content(); ?>
    <?php endwhile;
    endif; ?>
</div>

<script>
    AddCodeStyle("code-container");
</script>

<?php get_footer(); ?>
<?php get_header(); ?>

<article class="container">
    <?php

    if (have_posts()) {
        while (have_posts()) {
            the_post();
            get_template_part('template-parts/content', 'gallery');
        }
    }

    ?>
</article>


<?php get_footer(); ?>
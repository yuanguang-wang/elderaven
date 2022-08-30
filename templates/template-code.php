<?php
/*
Template Name: Code
*/
?>

<?php get_header(); ?>

<div class="container p-3 mt-3 text-white bg-dark">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <?php the_content(); ?>

    <?php endwhile;
    endif; ?>
</div>

<script>

    let codeBlock = document.querySelectorAll("span");
    for (var i = 0; i < codeBlock.length; i++) {

        var child = codeBlock[i];

        white = child.style.color;
        if (white == "black") {
            console.log("black")
            child.style.color = "white";
        }
    }
</script>

<?php get_footer(); ?>
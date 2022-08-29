<?php
/*
Template Name: Code
*/
?>

<?php get_header(); ?>

<script>
    hljs.highlightAll();
</script>

<div class="container p-3 mt-3">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <?php the_content(); ?>

    <?php endwhile;
    endif; ?>
</div>

<script>
    let codeBlock = document.querySelectorAll("code")[0];
    //codeBlock.setAttribute("style", "atom-one-dark");
    codeBlock.classList.add("atom-one-dark");
    console.log(codeBlock);
</script>

<?php get_footer(); ?>
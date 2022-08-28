<?php get_header(); ?>

<script>
    // Implement Swtich Background //
    window.onload = SwitchBackground();

    // Override Front-page Bg-Opacity //
    navfp = document.getElementById("rvn-navbar").classList;
    if (navfp.contains("bg-opacity-100")) {
        navfp.remove("bg-opacity-100");
        navfp.add("bg-opacity-25");
    }
</script>

<?php get_footer(); ?>
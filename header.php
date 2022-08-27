<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Load head function from function.php -->
    <?php
    wp_head();
    ?>

    <nav class="navbar navbar-expand-md bg-opacity-50 border-bottom border-secondary border-opacity-50" role="navigation" id="rvn-navbar">
        <div class="container d-flex flex-row-reverse px-1">
            <!-- Brand and toggle get grouped for better mobile display -->
            <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'your-theme-slug'); ?>">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand elderaven-font px-2" href="https://elderaven.com">elderaven</a>
            <?php
            wp_nav_menu(array(
                'theme_location'    => 'primary',
                'depth'             => 2,
                'container'         => 'div',
                'container_class'   => 'collapse navbar-collapse px-2',
                'container_id'      => 'bs-example-navbar-collapse-1',
                'menu_class'        => 'nav navbar-nav',
                'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                'walker'            => new WP_Bootstrap_Navwalker(),
            ));
            ?>
        </div>
    </nav>


</head>

<body <?php body_class(); ?>>
    <script>
        window.onload = DarkMode()
    </script>
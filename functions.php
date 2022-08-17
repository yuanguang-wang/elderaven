<?php

// Add the custom functionality assigned by wordpress ////////////////////////////
function rvn_theme_support()
{
    add_theme_support('title-tag');
    //add_theme_support('custom-background');
}

add_action('after_setup_theme', 'rvn_theme_support');

// Add the stylesheets into header.php ////////////////////////////
function rvn_load_styles()
{
    $version = wp_get_theme()->get("Version");
    wp_enqueue_style('bootstrap_style', "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css", array(), '5.2.0', 'all');
    wp_enqueue_style('fontawesome_style', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css", array(), '6.1.2', 'all');
    wp_enqueue_style('wp_style', get_template_directory_uri() . "/style.css", array("bootstrap_style"), $version, 'all');
    wp_enqueue_style('main_style', get_template_directory_uri() . "/assets/css/main.css", array(), $version, 'all');
}

add_action('wp_enqueue_scripts', 'rvn_load_styles');

// Add the js into footer.php /////////////////////////////////////
function rvn_load_scripts()
{
    $version = wp_get_theme()->get("Version");
    wp_enqueue_script('jquery_script', "https://code.jquery.com/jquery-3.6.0.slim.min.js", array(), '3.6.0', true);
    wp_enqueue_script('popper_script', "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js", array(), '2.9.2', true);
    wp_enqueue_script('bootstrap_script', "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js", array(), '5.2.0', true);
    wp_enqueue_script('main_script', get_template_directory_uri() . "/assets/js/main.js", array(), $version, true);
}

add_action('wp_enqueue_scripts', 'rvn_load_scripts');

// Add Menu to wp-admin dashboard /////////////////////////////////
function rvn_menus()
{
    $locations = array(
        "primary" => "Top Right"
    );
    register_nav_menus($locations);
}

add_action("init", "rvn_menus");

// Register Custom Navigation Walker //////////////////////////////
function register_navwalker()
{
    require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';
}
add_action('after_setup_theme', 'register_navwalker');

// Fix Dropdown for BS5 ///////////////////////////////////////////
add_filter('nav_menu_link_attributes', 'prefix_bs5_dropdown_data_attribute', 20, 3);
/**
 * Use namespaced data attribute for Bootstrap's dropdown toggles.
 *
 * @param array    $atts HTML attributes applied to the item's `<a>` element.
 * @param WP_Post  $item The current menu item.
 * @param stdClass $args An object of wp_nav_menu() arguments.
 * @return array
 */
function prefix_bs5_dropdown_data_attribute($atts, $item, $args)
{
    if (is_a($args->walker, 'WP_Bootstrap_Navwalker')) {
        if (array_key_exists('data-toggle', $atts)) {
            unset($atts['data-toggle']);
            $atts['data-bs-toggle'] = 'dropdown';
        }
    }
    return $atts;
}

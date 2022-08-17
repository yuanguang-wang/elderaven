<?php

function rvn_load_styles()
{
    $version = wp_get_theme()->get("Version");
    wp_enqueue_style('bootstrap_style', "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css", array(), '5.2.0', 'all');
    wp_enqueue_style('fontawesome_style', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css", array(), '6.1.2', 'all');
    wp_enqueue_style('main_style', get_template_directory_uri() . "/style.css", array("bootstrap_style"), $version, 'all');
}

add_action('wp_enqueue_scripts', 'rvn_load_styles');

function rvn_load_scripts()
{
    
}
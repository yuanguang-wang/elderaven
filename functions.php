<?php

function rvn_theme_support()
{
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'rvn_theme_support');

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
    $version = wp_get_theme()->get("Version");
    wp_enqueue_script('jquery_script', "https://code.jquery.com/jquery-3.6.0.slim.min.js", array(), '3.6.0', true);
    wp_enqueue_script('popper_script', "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js", array(), '2.9.2', true);
    wp_enqueue_script('bootstrap_script', "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js", array(), '5.2.0', true);
    wp_enqueue_script('main_script', get_template_directory_uri() . "/assets/js/main.js", array(), $version, true);
}

add_action('wp_enqueue_scripts', 'rvn_load_scripts');

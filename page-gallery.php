<?php get_header(); ?>
<div class="container">

    <br class="mt-2">
    <div class="m-2 text-center rounded">
        <h4>Project Gallery</h4>
    </div>
    <hr>

    <div id="row-style" class="row row-cols-md-4 g-4 pt-4">
        <div class="col-sm">
            <div class="card rounded-0">
                <a href="https://elderaven.com/15-minus-and-counting/">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc01.jpg" alt="15 Minutes and Counting" class="card-img-top rounded-0">
                </a>
                <div class="card-footer d-sm-none d-md-none d-lg-block">15 Minutes and Counting</div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card rounded-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc02.jpg" alt="Cryptocurrency Mining" class="card-img-top rounded-0">
                <div class="card-footer d-sm-none d-md-none d-lg-block">Cryptocurrency Mining</div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card rounded-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc03.jpg" alt="UPS Hub" class="card-img-top rounded-0">
                <div class="card-footer d-sm-none d-md-none d-lg-block">UPS Hub</div>
            </div>
        </div>
        <script>
            galleryCardGen("#", "<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc04.jpg", "Empty Pot");
        </script>


    </div>
    <div class="row row-cols-md-4 g-4 pt-4">
        <div class="col-sm">
            <div class="card rounded-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc05.jpg" alt="Empty Pot" class="card-img-top rounded-0">
                <div class="card-footer d-sm-none d-md-none d-lg-block">Computational Geometry</div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card rounded-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc06.jpg" alt="Empty Pot" class="card-img-top rounded-0">
                <div class="card-footer d-sm-none d-md-none d-lg-block">Ice Block</div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card rounded-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc07.jpg" alt="Empty Pot" class="card-img-top rounded-0">
                <div class="card-footer d-sm-none d-md-none d-lg-block">Cascade Plateau</div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card rounded-0">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallerycard/gc08.jpg" alt="Empty Pot" class="card-img-top rounded-0">
                <div class="card-footer d-sm-none d-md-none d-lg-block">Folklore Museum</div>
            </div>
        </div>
    </div>


</div>


<?php get_footer(); ?>
<?php get_header(); ?>


<div class="container">

    <br>
    <div id="repo-title-1">
        <script>
            AddRepoTitle("repo-title-1", "Pre-Cast Plugins", "fa-solid fa-circle-nodes");
        </script>

    </div>

    <div id="row-1">
        <script>
            AddRepoPlugInCard("row-1",
                "Deviant Inspector",
                "Detect, markup and add up several types of bad objects in a rhino model.",
                "https://elderaven.com/404",
                "Readme",
                "https://github.com/yuanguang-wang/Deviant-Inspector",
                "Github",
                "https://www.food4rhino.com/en/app/deviant-inspector",
                "Food4Rhino",
                "V1.0.2",
                "C#",
                "Rhino",
                "fa-solid fa-binoculars"
            );
            AddRepoPlugInCard("row-1",
                "elderaven",
                "An online vault storing some sundries of yuanguang wang.",
                "https://elderaven.com/404",
                "Readme",
                "https://github.com/yuanguang-wang/elderaven",
                "Github",
                "https://elderaven.com/",
                "elderaven",
                "V0.9.9",
                "Javascript",
                "php",
                "fa-solid fa-crow"
            );
            AddRepoPlugInCard("row-1",
                "MultiCut",
                "Under construction.",
                "https://elderaven.com/404",
                "Readme",
                "https://github.com/yuanguang-wang/Multi-Cut",
                "Github",
                "https://elderaven.com/404",
                "Food4Rhino",
                "Under Construction",
                "C#",
                "Rhino",
                "fa-solid fa-scissors"
            );
            //AddBlankCard("row-1")
        </script>
    </div>

    <br>
    <br>
    <div id="repo-title-2">
        <script>
            AddRepoTitle("repo-title-2", "Cast-In-Place Codes", "fa-solid fa-code");
        </script>

    </div>

    <div id="row-2">
        <script>
            AddRepoCodeCard("row-2",
                "GFA Calculator",
                "Calculate the GFA of given massing by catching the bottom face.",
                "https://elderaven.com/gfacalculator",
                "Readme",
                "python",
                "Rhino",
                "fa-solid fa-gavel"
            )
        </script>
    </div>

</div>


<?php get_footer(); ?>
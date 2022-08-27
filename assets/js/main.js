const galleryStyleCollection = 
{
    rowStyle : "row row-cols-md-4 g-4 mt-1",
    colomnStyle : "col-sm",
    cardStyle : "card border-dark border-opacity-50",
    imgStyle : "card-img border-light",
    overlayStyle : "card-img-overlay d-sm-none d-md-none d-lg-flex d-flex align-items-end p-0 text-decoration-none",
    textStyle : "card-title bg-dark text-white bg-opacity-50 py-1 px-2 m-0 flex-fill rounded-bottom"
    
}

function AddGalleryCard(content, rowId, href, imgSrc) 
{
    // Image Create //
    let image = document.createElement("img");
    image.className = galleryStyleCollection.imgStyle;
    image.alt = content;
    image.src = imgSrc;

    // Overlay Create //
    let overlay = document.createElement("a");
    overlay.className = galleryStyleCollection.overlayStyle;
    overlay.href = href;
    let text = document.createElement("div");
    text.className = galleryStyleCollection.textStyle;
    text.innerText = content;

    // Card Create //
    let card = document.createElement("div");
    card.className = galleryStyleCollection.cardStyle;

    // Four Column Create //
    let singleCol = document.createElement("div");
    singleCol.className = galleryStyleCollection.colomnStyle;

    // Hierarchy
    overlay.appendChild(text);
    card.appendChild(image);
    card.appendChild(overlay);
    singleCol.appendChild(card);
    document.getElementById(rowId).appendChild(singleCol);
}

function AddGalleryRowStyle(rowId)
{
    let singleRow = document.getElementById(rowId);
    singleRow.className = galleryStyleCollection.rowStyle;
}

function SwitchBackground()
{
    const spring = [1,2,3];
    const summer = [4,5,6];
    const autumn = [7,8,9];
    const winter = [10,11,0];

    const dawn = [5,6,18,19];
    const noon = [7,8,9,10,11,12,13,14,15,16,17];
    const dark = [20,21,22,23,0,1,2,3,4];

    const date = new Date();
    const month = date.getMonth();
    const time = date.getHours();

    if (autumn.includes(month))
    {
        if (dawn.includes(time))
        {
            document.body.classList.add("rvnbg-dawn-autumn");
        }
        else if (noon.includes(time))
        {
            document.body.classList.add("rvnbg-noon-autumn");
        }
        else if (dark.includes(time))
        {
            document.body.classList.add("rvnbg-dark-autumn");
        }
        else
        {
            document.body.classList.add("rvnbg-fallback");
        }
    }
    else
    {
        document.body.classList.add("rvnbg-fallback");
    }
    
}

// Dark Mode /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function HomePageException(classarray)
{
    if (classarray.contains("home"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function SwitchtoDark(classarray, light, dark)
{
    if (classarray.contains(light))
    {
        classarray.remove(light);
    }
    if (!classarray.contains(dark))
    {
        classarray.add(dark);
    }
}

function SwitchtoLight(classarray, light, dark)
{
    if (classarray.contains(dark))
    {
        classarray.remove(dark);
    }
    if (!classarray.contains(light))
    {
        classarray.add(light);
    }
}

function DarkMode()
{
    // Declare Constants ///////////////////
    const noon = [6,7,8,9,10,11,12,13,14,15,16,17,18];

    date = new Date();
    currentTime = date.getHours();

    const lightstyle =
    {
        navbar : "navbar-light",
        navbarbg : "bg-body",
        bodycss : "bg-body",
        text : "text-dark",
    }
    const darkstyle = 
    {
        navbar : "navbar-dark",
        navbarbg : "bg-dark",
        bodycss : "bg-dark",
        text : "text-white",
    }

    // Navbar Switch //////////////
    const navbar = document.getElementById('rvn-navbar').classList;
  
    if (noon.includes(currentTime))
    {
        SwitchtoLight(navbar, lightstyle.navbar, darkstyle.navbar);
        SwitchtoLight(navbar, lightstyle.navbarbg, darkstyle.navbarbg);
    }
    else
    {
        SwitchtoDark(navbar, lightstyle.navbar, darkstyle.navbar);
        SwitchtoDark(navbar, lightstyle.navbarbg, darkstyle.navbarbg);
    }

    // HomePage Exception ////////////////////
    const bodystyle = document.body.classList;
    const hashome = HomePageException(bodystyle);
    if (hashome)
    {
        return;
    }

    // Body Switch ////////////////
    if (noon.includes(currentTime))
    {
        SwitchtoLight(bodystyle, lightstyle.bodycss, darkstyle.bodycss);
        SwitchtoLight(bodystyle, lightstyle.text, darkstyle.text);
    }
    else
    {
        SwitchtoDark(bodystyle, lightstyle.bodycss, darkstyle.bodycss);
        SwitchtoDark(bodystyle, lightstyle.text, darkstyle.text);
    }

}





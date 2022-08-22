const styleCollection = 
{
    rowStyle : "row row-cols-md-4 g-4 pt-2",
    colomnStyle : "col-sm",
    cardStyle : "card rounded-0",
    imgStyle : "card-img-top rounded-0",
    footerStyle : "card-footer d-sm-none d-md-none d-lg-block"
}

function galleryCardGen (href, imgSrc, content)
{
    // Four Column Create //
    let singleCol = document.createElement("div");
    singleCol.className = styleCollection.colomnStyle;

    //Card Create //
    let card = document.createElement("div");
    card.className = styleCollection.cardStyle;
    
    // Anchor Create //
    let anchor = document.createElement("a");
    anchor.href = href;
    
    // Image Create //
    let image = document.createElement("img");
    image.className = styleCollection.imgStyle;
    image.alt = content;
    image.src = imgSrc;
    
    // Footer Create //
    let footer = document.createElement("div");
    footer.className = styleCollection.footerStyle;
    footer.innerHTML = content;

    // Hierarchy
    anchor.appendChild(image);
    card.appendChild(anchor);
    card.appendChild(footer);
    singleCol.appendChild(card);

}

function rowStyle ()
{
    let singleRow = document.getElementById("row-style");
    singleRow.className = styleCollection.rowStyle;
}



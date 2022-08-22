const galleryStyleCollection = 
{
    rowStyle : "row row-cols-md-4 g-4 mt-1",
    colomnStyle : "col-sm",
    cardStyle : "card border-light",
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




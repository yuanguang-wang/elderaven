function cardFooter (style, content)
{
    let footerDiv = document.createElement("div");
    footerDiv.className = style;
    footerDiv.innerHTML = content;

    return footerDiv;
}

function galleryCard (colomnStyle, cardStyle, href, imgSrc, imgAlt, imgStyle, footerStyle, footerContent)
{
    cardFooter(footerStyle, footerContent);

}


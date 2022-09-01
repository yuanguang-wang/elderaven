// Invert Code Color/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function InvertColor(rgb)
{
    if (rgb === "white")
    {
        rgb = "rgb(255, 255, 255)";
    }
    if (rgb === "black")
    {
        rgb = "rgb(0, 0, 0)";
    }
    let index = rgb.indexOf("(");
    let coerceRgb = rgb.slice(index);
    coerceRgb = coerceRgb.slice(1,-1);
    coerceRgb = coerceRgb.split(", ");
    let r = coerceRgb[0];
    let g = coerceRgb[1];
    let b = coerceRgb[2];
    let rr = 255 - parseInt(r);
    let rg = 255 - parseInt(g);
    let rb = 255 - parseInt(b);
    let newrgb = "rgb(" + rr + ", " + rg + ", " + rb + ")";

    return newrgb;
}

function InvertCodeColor(codeBody, light)
{
    if (light){return;}
    let codeList = document.getElementById(codeBody).querySelectorAll("span");
    codeList.forEach(span => {
        colorOriginal = span.style.color;
        newColor = InvertColor(colorOriginal);
        span.style.color = newColor;        
    });
}

const CodeDK = {style : "container p-3 mt-3 mx-auto px-3 bg-secondary bg-opacity-10 rounded-2"};
const CodeLT = {style : "container p-3 mt-3 mx-auto px-3 bg-light rounded-2"};
const CodeCM = {};
let CodeCss;

function AddCodeStyle(divid)
{
    let codeStyleSlicer = CodeCss.style.split(" ");
    let codeClassList = document.getElementById(divid).classList;
    codeStyleSlicer.forEach( n => {codeClassList.add(n);})
     
    InvertCodeColor("cody-body", LightBoolean);
}

// Collaboration & 404 /////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const CollabCss =
{
    container : "container py-2 text-center",
    img : "p-4 mt-2 img-fluid rounded-circle",
    title : "px-4 pt-3 pb-1 my-0",
    content : "px-4 py-1",
    p1 : "fw-semibold mt-2 mb-0 py-2",
    p2 : "my-2 fst-italic",
}

function AddPara(content)
{
    //Para Create //
    let para = document.createElement("p");
    para.innerText = content;
    return para;
}

function AddCollaboration(containerID, imgSrc, title, p1c, p2c, p3c, p4c, p5c)
{
    // Container Create //
    let container = document.createElement("div");
    container.className = CollabCss.container;

    // Globaltext Create //
    let img = document.createElement("img");
    img.className = CollabCss.img;
    img.src = imgSrc;
    img.style.width = "350px";

    // Ttile Create //
    let h5title = document.createElement("h5");
    h5title.className = CollabCss.title;
    h5title.innerText = title;

    // para Function Run //
    let p1 = AddPara(p1c);
    p1.className = CollabCss.p1;
    let p2 = AddPara(p2c);
    p2.className = CollabCss.p2;
    let p3 = AddPara(p3c);
    p3.className = CollabCss.p1;
    let p4 = AddPara(p4c);
    p4.className = CollabCss.p2;
    let p5 = AddPara(p5c);
    p5.className = CollabCss.p2;

    // Cascade //
    container.appendChild(img);
    container.appendChild(h5title);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);
    container.appendChild(p5);

    containerParent = document.getElementById(containerID);
    containerParent.appendChild(container);
}

// Gallery /////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const GalleryCss = 
{
    rowStyle : "row row-cols-sm-4 g-4 mt-1",
    colomnStyle : "col-sm",
    cardStyle : "card border-0 rounded-0 h-100",
    imgStyle : "card-img border-0 rounded-0",
    overlayStyle : "card-img-overlay d-sm-none d-md-none d-lg-flex d-flex align-items-end p-0 text-decoration-none",
    textStyle : "card-title bg-dark text-white bg-opacity-50 py-1 px-2 m-0 flex-fill"    
}

function AddGalleryCard(content, rowId, href, imgSrc) 
{
    // Image Create //
    let image = document.createElement("img");
    image.className = GalleryCss.imgStyle;
    image.alt = content;
    image.src = imgSrc;

    // Overlay Create //
    let overlay = document.createElement("a");
    overlay.className = GalleryCss.overlayStyle;
    overlay.href = href;
    let text = document.createElement("div");
    text.className = GalleryCss.textStyle;
    text.innerText = content;

    // Card Create //
    let card = document.createElement("div");
    card.className = GalleryCss.cardStyle;

    // Four Column Create //
    let singleCol = document.createElement("div");
    singleCol.className = GalleryCss.colomnStyle;

    // Hierarchy
    overlay.appendChild(text);
    card.appendChild(image);
    card.appendChild(overlay);
    singleCol.appendChild(card);

    let singleRow = document.getElementById(rowId);
    singleRow.className = GalleryCss.rowStyle;
    singleRow.appendChild(singleCol);
}

const GalleryInfoDK = 
{
    cardStyle : "card border-0 border-top border-bottom border-white rounded-0 py-2 px-1 bg-dark",
}
const GalleryInfoLT = 
{
    cardStyle : "card border-0 border-top border-bottom border-dark rounded-0 py-2 px-1v bg-body",
}
const GalleryInfoCM = 
{
    imgStyle : "card-img border-0 rounded-0",
    overlayStyle : "card-img-overlay text-decoration-none",
    titleStyle : "card-title fw-semibold",
    textStyle : "card-text d-sm-none d-md-none d-lg-block fs-6"
}
let GalleryInfoCss;

function AddGalleryInfo(title, content, rowId)
{
    // Body Create //
    let infoTitle = document.createElement("h6");
    infoTitle.className = GalleryInfoCss.titleStyle;
    infoTitle.innerHTML = title;

    let infoContent = document.createElement("p");
    infoContent.className = GalleryInfoCss.textStyle;
    infoContent.innerText = content;

    // Card Create //
    let card = document.createElement("div");
    card.className = GalleryInfoCss.cardStyle;

    // Four Column Create //
    let singleCol = document.createElement("div");
    singleCol.className = GalleryCss.colomnStyle;

    // Hierarchy //
    card.appendChild(infoTitle);
    card.appendChild(infoContent);
    singleCol.appendChild(card);

    let singleRow = document.getElementById(rowId);
    singleRow.className = GalleryCss.rowStyle;
    singleRow.appendChild(singleCol);
}

// Repository //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const RepoCardDK = 
{  
    card : "card text-bg-secondary bg-opacity-10 text-white border-secondary border-opacity-50 h-100",
    body : "card-body bg-dark",
    badge : "badge rounded-pill text-bg-secondary fw-normal me-2 my-1",
    li : "list-group-item bg-dark border-secondary border-opacity-50",
    a : "text-decoration-none text-white",
}
const RepoCardLT = 
{
    card : "card text-bg-light text-dark border-secondary border-opacity-50 h-100",
    body : "card-body bg-body",
    badge : "badge rounded-pill text-bg-light fw-normal me-2 my-1",
    li : "list-group-item bg-body border-secondary border-opacity-50",
    a : "text-decoration-none text-dark",
}
const RepoCardCM = 
{
    row : "row row-cols-1 row-cols-lg-4 g-4 mt-1",
    colomn : "col px-4",
    header : "card-header border-secondary border-opacity-50",
    footer : "card-footer border-secondary border-opacity-50",
    content : "card-text",
    ul : "list-group list-group-flush",
    icon : "fa-solid fa-link fa-xs me-2",
}
let RepoCardCss;

function AddRepoCardIcon(iconClass)
{
    let repoCardIcon = document.createElement("i");
    repoCardIcon.className = iconClass + " pe-2 fa-md";
    repoCardIcon.style.color = IconCss.iconPrimary;
    return repoCardIcon.outerHTML; 
}

function AddRepoLinkList(href, text)
{
    let singleLi = document.createElement("li");
    let singleAnchor = document.createElement("a");
    let linkIcon = document.createElement("i");
    linkIcon.className = RepoCardCss.icon;
    linkIcon.style.color = IconCss.iconSecondary;
    singleAnchor.href = href;
    singleAnchor.className = RepoCardCss.a;
    singleLi.className = RepoCardCss.li;
    singleAnchor.innerText = text;
    singleLi.appendChild(linkIcon);
    singleLi.appendChild(singleAnchor);
    
    return singleLi;
}

function AddRopeCardBadge(content)
{
    let repoBadge = document.createElement("span");
    repoBadge.className = RepoCardCss.badge;
    repoBadge.innerText = content;

    return repoBadge;
}

function AddRepoPlugInCard(
    rowid,
    headtext, contenttext,
    readmeLink, readmeText,
    gitLink, gitText,
    foodLink, foodText,
    version,
    lang,
    platform,
    iconClass
    )
{
    // Colomn Create //
    let singleCol = document.createElement("div");
    singleCol.className = RepoCardCss.colomn;

    // Card Create //
    let repoCard = document.createElement("div");
    repoCard.className = RepoCardCss.card;

    // Header Create //
    let cardHead = document.createElement("h6");
    cardHead.className = RepoCardCss.header;
    cardHead.innerHTML = AddRepoCardIcon(iconClass) + headtext;

    // Body Create //
    let cardBody = document.createElement("div");
    cardBody.className = RepoCardCss.body;

    // Footer Create //
    let cardFooter = document.createElement("div");
    cardFooter.className = RepoCardCss.footer;

    // Content Create //
    let cardPara = document.createElement("p");
    cardPara.className = RepoCardCss.content;
    cardPara.innerText = contenttext;

    // UL Create //
    let linkUl = document.createElement("ul");
    linkUl.className = RepoCardCss.ul;

    // List Item Create //
    let readmeli = AddRepoLinkList(readmeLink, readmeText);
    let gitli = AddRepoLinkList(gitLink, gitText);
    let foodli = AddRepoLinkList(foodLink, foodText);

    // Badge Create //
    let versionbdg = AddRopeCardBadge(version);
    let langbdg = AddRopeCardBadge(lang);
    let platformbdg = AddRopeCardBadge(platform);

    // Cascade //
    linkUl.appendChild(readmeli);
    linkUl.appendChild(gitli);
    linkUl.appendChild(foodli);
    cardBody.appendChild(cardPara);
    cardFooter.appendChild(versionbdg);
    cardFooter.appendChild(langbdg);
    cardFooter.appendChild(platformbdg);
    repoCard.appendChild(cardHead);
    repoCard.appendChild(cardBody);
    repoCard.appendChild(linkUl);
    repoCard.appendChild(cardFooter);
    singleCol.appendChild(repoCard);

    let singleRow = document.getElementById(rowid);
    singleRow.className = RepoCardCss.row;
    singleRow.appendChild(singleCol);

}

function AddRepoCodeCard(
    rowid,
    headtext, contenttext,
    readmeLink, readmeText,
    lang,
    platform,
    iconClass
    )
{
    // Colomn Create //
    let singleCol = document.createElement("div");
    singleCol.className = RepoCardCss.colomn;

    // Card Create //
    let repoCard = document.createElement("div");
    repoCard.className = RepoCardCss.card;

    // Header Create //
    let cardHead = document.createElement("h6");
    cardHead.className = RepoCardCss.header;
    cardHead.innerHTML = AddRepoCardIcon(iconClass) + headtext;

    // Body Create //
    let cardBody = document.createElement("div");
    cardBody.className = RepoCardCss.body;

    // Footer Create //
    let cardFooter = document.createElement("div");
    cardFooter.className = RepoCardCss.footer;

    // Content Create //
    let cardPara = document.createElement("p");
    cardPara.className = RepoCardCss.content;
    cardPara.innerText = contenttext;

    // UL Create //
    let linkUl = document.createElement("ul");
    linkUl.className = RepoCardCss.ul;

    // List Item Create //
    let readmeli = AddRepoLinkList(readmeLink, readmeText);

    // Badge Create //
    let langbdg = AddRopeCardBadge(lang);
    let platformbdg = AddRopeCardBadge(platform);

    // Cascade //
    linkUl.appendChild(readmeli);
    cardBody.appendChild(cardPara);
    cardFooter.appendChild(langbdg);
    cardFooter.appendChild(platformbdg);
    repoCard.appendChild(cardHead);
    repoCard.appendChild(cardBody);
    repoCard.appendChild(linkUl);
    repoCard.appendChild(cardFooter);
    singleCol.appendChild(repoCard);

    let singleRow = document.getElementById(rowid);
    singleRow.className = RepoCardCss.row;
    singleRow.appendChild(singleCol);

}

function AddBlankCard(rowid)
{
    // Colomn Create //
    let singleCol = document.createElement("div");
    singleCol.className = RepoCardCss.colomn;

    // Card Create //
    let repoCard = document.createElement("div");
    repoCard.className = "card border-0 rounded-0 h-100";

    singleCol.appendChild(repoCard);

    let singleRow = document.getElementById(rowid);
    singleRow.className = RepoCardCss.row;
    singleRow.appendChild(singleCol);
}

const RepoTitleCss = 
{
    title : "text-sm-left mt-3",
    text : "fw-normal m-0",
    icon : "me-2 fa-sm",
    breakline : "mb-0"
}

function AddRepoTitle(divid, content, iconClass)
{
    let titleContainer = document.createElement("div");
    titleContainer.className = RepoTitleCss.title;

    let titleContent =  document.createElement("h5");
    titleContent.className = RepoTitleCss.text;

    let titleIcon = document.createElement("i");
    titleIcon.className = iconClass + " " + RepoTitleCss.icon;
    titleIcon.style.color = IconCss.iconPrimary;

    titleContent.innerHTML = titleIcon.outerHTML + content;

    let titleHr = document.createElement("hr");
    titleHr.className = RepoTitleCss.breakline;
    
    titleContainer.appendChild(titleContent);
    titleContainer.appendChild(titleHr);
    document.getElementById(divid).appendChild(titleContainer);
}

// Front Page //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// Icon ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const IconDK = 
{
    iconPrimary : "white",
    iconSecondary : "#f5f5f5"
};
const IconLT = 
{
    iconPrimary : "black",
    iconSecondary : "#696969"
};
const IconCM = {
    iconHide : "d-sm-none d-md-none d-lg-flex",
};
let IconCss;

function AddIconStyle()
{

}

// Body and Navbar /////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const GlobalDK = 
{
    navbar : "navbar-dark",
    navbarBg : "bg-secondary",
    navOpc : "bg-opacity-10",
    bodyCss : "bg-dark",
    text : "text-white"
};
const GlobalLT =
{
    navbar : "navbar-light",
    navbarBg : "bg-light",
    navOpc : "bg-opacity-100",
    bodyCss : "bg-body",
    text : "text-dark"
};
const GlobalCM = {};
let GlobalCss;

function AddNavbarStyle()
{
    let navbarClassList = document.getElementById("rvn-navbar").classList;
    navbarClassList.add(GlobalCss.navbar);
    navbarClassList.add(GlobalCss.navbarBg);
    navbarClassList.add(GlobalCss.navOpc);

    let bodyClassList = document.body.classList;
    if (bodyClassList.contains("home")){
        return;
    }
    bodyClassList.add(GlobalCss.bodyCss);
    bodyClassList.add(GlobalCss.text);

}

// Dark Mode ///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const LightInterval = [6,7,8,9,10,11,12,13,14,15,16,17,18];
let LightBoolean;

function ModeSiwtcher()
{
    const dateObj = new Date();
    const cuurentHour = dateObj.getHours();

    if (LightInterval.includes(cuurentHour)){
        LightBoolean = true;
        IconCss = {...IconLT, ...IconCM};
        RepoCardCss = {...RepoCardLT, ...RepoCardCM};
        GlobalCss = {...GlobalLT, ...GlobalCM};
        GalleryInfoCss = {...GalleryInfoLT, ...GalleryInfoCM};
        CodeCss = {...CodeLT, ...CodeCM};

    }
    else{
        LightBoolean = false;
        IconCss = {...IconDK, ...IconCM};
        RepoCardCss = {...RepoCardDK, ...RepoCardCM};
        GlobalCss = {...GlobalDK, ...GlobalCM};
        GalleryInfoCss = {...GalleryInfoDK, ...GalleryInfoCM};
        CodeCss = {...CodeDK, ...CodeCM};
    }
    
}


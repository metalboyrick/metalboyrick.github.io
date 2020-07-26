<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Antic&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link rel="icon" href="./img/logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="styles/header-footer-style.css">
    <link rel="stylesheet" type="text/css" href="styles/home-style.css">
    <title>Home - Jacquettes</title>
</head>
<body>
    <header class="nav-bar" status="no-background">
        <div class="logo">
            Jacquettes.
        </div>
        <ul id="nav-list-container" is-shown="false">
            <li><a href="#" class="nav-item">home</a></li>
            <li><a href="#" class="nav-item">about</a></li>
            <li><a href="#" class="nav-item">collections</a></li>
            <li><a href="#" class="nav-item">visit us</a></li>
        </ul>
        <div class="burger">
            <i id="nav-button" class="fa fa-bars"></i>
        </div>
    </header>
    <div class="container">
        <div class="content-column" id="home-bg"></div>
        <div class="content-column" id="home-about-us">
            <div class="text"  id="content-1">
                <div class="section-header" id="header-1">About Us.</div>
                <p class="section-content">Ut consequat vel velit euismod aliquam. Quisque faucibus ullamcorper magna sed accumsan. Nunc fringilla aliquet purus in ultrices. Sed felis elit, euismod sit amet odio ac, eleifend maximus lacus...</p>
                <div class="read-more-btn" hover="false" id="rmbtn-1">See More</div>
            </div>
            <img src="img/home_image_1.png" class="home-image" id="image-1">
            <div class="circle" id="green"></div>
        </div>
        <div class="content-column" id="home-collections">
            <div class="text"  id="content-2">
                <div class="section-header" id="header-2">Collections.</div>
                <p class="section-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus pharetra elit, id tincidunt felis bibendum sed. Quisque vitae nibh elit...</p>
                <div class="read-more-btn" hover="false" id="rmbtn-2">See More</div>
            </div>
            <img src="img/home_image_3.png" class="home-image" id="image-2">
            <div class="circle" id="orange"></div>
        </div>
        <div class="content-column" id="home-visitus">
            <div class="text"  id="content-3">
                <div class="section-header" id="header-3">Visit Us.</div>
                <p class="section-content">Nulla eu venenatis justo. Mauris mattis eros sed mauris pharetra, sit amet cursus turpis congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <div class="read-more-btn" hover="false" id="rmbtn-3">See More</div>
            </div>
            <img src="img/home_image_2.png" class="home-image" id="image-3">
            <div class="circle" id="red"></div>
        </div>
    </div>
    <script src="./scripts/header-footer-script.js"></script>
    <script src="./scripts/home-script.js"></script>
    <footer class="footer-bar">
        <div id="social-medias">
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-pinterest"></i>
        </div>
        <div class="footer-entry" id="email">info@jacquettes.com</div>
        <div class="footer-entry" id="address">4569 Dovetail Estates, Covington</div>
        <div class="footer-entry" id="phone">686863886</div>
        <ul class="footer-entry" id="nav-footer">
            <li><a href="#" class="nav-footer-item">home</a></li>
            <li><a href="#" class="nav-footer-item">about</a></li>
            <li><a href="#" class="nav-footer-item">collections</a></li>
            <li><a href="#" class="nav-footer-item">visit us</a></li>
        </div>
    </footer>
    <div id="copyright-bar">Copyright &#169; Rick Zhang, All Rights Reserved.</div>
</body>
</html>

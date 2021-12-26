<template>
     <header id="header">
         <div class="main_nav">
            <div class="container">
                <div class="mobile-toggle"> <span></span> <span></span> <span></span> </div>
                <nav class="navMenu">
                    <ul>
                        <li><router-link to="/">Menu</router-link></li>
                        <li><router-link to="/Pole">Pole</router-link></li>
                        <li><router-link to="/Contact">Contact</router-link></li>
                        <li><router-link to="/Live">Live</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
         <div id="video-container">
            <video preload="auto" autoplay loop muted width="1440" height="810">
                <source src="../assets/test.mp4" type="video/mp4" />
                <source src="../assets/test.mp4" type="video/webm" />
                <source src="../assets/test.mp4" type="video/ogv" />
            </video>
        </div>
        <div class="title">
            <div><span class="typcn typcn-heart-outline icon heading"></span></div>
            <div class="smallsep heading"></div>
            <h1 class="heading"> D N F</h1>
            <h2 class="heading">Le future de l'esport en France.</h2>
            <a class="smoothscroll" href="#about">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </a>
        </div>
        <a class="smoothscroll" href="#about">
            <div class="scroll-down"></div>
        </a>
    </header>
</template>




<style>


.main_nav {
    position: fixed;
    top: 0px;
    max-height: 50px;
    z-index: 999;
    width: 100%;
    padding-top: 17px;
    background: none;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    opacity: 0;
    top: -100px;
    padding-bottom: 6px;
}

@media only screen and (max-width: 766px) {
    .main_nav {
        padding-top: 25px;
    }
}

.open-nav {
    max-height: 400px !important;
}

.sticky {
    background-color: #ffffff;
    opacity: 1;
    top: 0px;
}

nav {
    width: 100%;
    margin-top: 5px;
}

@media only screen and (max-width: 766px) {
    nav {
        width: 100%;
    }
}

nav ul {
    list-style: none;
    overflow: hidden;
    text-align: center;
}

@media only screen and (max-width: 766px) {
    nav ul {
        padding-top: 0px;
        margin-bottom: 22px;
        text-align: center;
        width: 100%;
    }
}

nav ul li {
    display: inline-block;
    margin-left: 35px;
    line-height: 1.5;
    letter-spacing: 1px;
}

@media only screen and (max-width: 766px) {
    nav ul li {
        width: 100%;
        padding: 7px 0;
        margin: 0;
    }
    nav ul li:first-child {
        margin-top: 70px;
    }
}

nav ul a {
    text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
}

nav ul a:hover {
    color: #cfcfcf;
}

header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
}

#video-container {
    overflow: hidden;
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

video {
    width: 100%;
    height: 100%;
}

.touch video {
    display: none;
}

.title {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    padding: 2rem;
    max-width: 960px;
    text-align: center;
    z-index: 20;
}

.title .smallsep {
    background: #fff;
    height: 2px;
    width: 70px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}

.title h1 {
    font-size: 80px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 0.85;
    margin-bottom: 28px;
    margin: 0;
    padding: 0;
    color: #ffffff;
}

.title h2 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 50px;
}

@media only screen and (max-height: 700px) {
    .title h1 {
        font-size: 80px;
    }
}

.title p {
    max-width: 600px;
    margin: 0 auto;
    line-height: 150%;
}

@media only screen and (max-width: 500px) {
    .title h1 {
        font-size: 65px;
    }
}

.title .icon {
    color: #ffffff;
    font-size: 50px;
}


.mobile-toggle {
    display: none;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 22px;
    top: 0;
    width: 30px;
}

@media only screen and (max-width: 766px) {
    .mobile-toggle {
        display: block;
    }
}

.mobile-toggle span {
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    background: #000000;
    display: block;
}

.scroll-down {
    position: absolute;
    left: 50%;
    bottom: 5vh;
    display: block;
    text-align: center;
    font-size: 20px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0;
    width: 13px;
    height: 13px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    z-index: 9;
    -webkit-transform: translate(-50%, 0%) rotate(45deg);
    -moz-transform: translate(-50%, 0%) rotate(45deg);
    transform: translate(-50%, 0%) rotate(45deg);
    -webkit-animation: fade_move_down 2s ease-in-out infinite;
    -moz-animation: fade_move_down 2s ease-in-out infinite;
    animation: fade_move_down 2s ease-in-out infinite;
}


/*animated scroll arrow animation*/

@-webkit-keyframes fade_move_down {
    0% {
        -webkit-transform: translate(0, -10px) rotate(45deg);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: translate(0, 10px) rotate(45deg);
        opacity: 0;
    }
}

@-moz-keyframes fade_move_down {
    0% {
        -moz-transform: translate(0, -10px) rotate(45deg);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -moz-transform: translate(0, 10px) rotate(45deg);
        opacity: 0;
    }
}

@keyframes fade_move_down {
    0% {
        transform: translate(0, -10px) rotate(45deg);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(0, 10px) rotate(45deg);
        opacity: 0;
    }
}



</style>
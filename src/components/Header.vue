<template>
    <header>
        <a class="icomenumovil" v-on:click="menumovil"><img src="../assets/img/menu.svg" alt="" title=""></a>
        <a href="/dashboard"><img src="../assets/img/logo.png" alt="" title=""></a>
        <div>
            <a v-on:click="modoluz" id="light_dark">
                <img class="icomenu" src="../assets/img/circle-half-stroke.svg" alt="" title="">
            </a>
            <a href="">
                <img class="icomenu" src="../assets/img/notifications.svg" alt="" title="">
            </a>
            <a href="">
                <img class="icomenu" src="../assets/img/user.svg" alt="" title="">
            </a>
        </div>
    </header>
</template>

<script>
    export default {
        methods: {
            menumovil() {
                event.preventDefault();
                var a = document.getElementsByTagName('nav')[0];
                if (a.style.left == "15px") {
                    a.style.left = "-300px";
                    document.getElementsByClassName('icomenumovil')[0].getElementsByTagName('img')[0].src =
                        "../img/menu.svg";
                } else {
                    a.style.left = "15px";
                    document.getElementsByClassName('icomenumovil')[0].getElementsByTagName('img')[0].src =
                        "../img/menu_cerrar.svg";
                }
            },
            modoluz() {
                event.preventDefault();
                if (document.getElementById("light_dark").getElementsByTagName("img")[0].style.filter == "" || document.getElementById("light_dark").getElementsByTagName("img")[0].style.filter == "none") {
                    document.getElementsByTagName("body")[0].className = "dark";
                    while (document.getElementsByClassName("icomenu")[0] != undefined) {
                        document.getElementsByClassName("icomenu")[0].className = "icomenudark";
                    }
                    while (document.getElementsByClassName("contenlight")[0] != undefined) {
                        document.getElementsByClassName("contenlight")[0].className = "contendark";
                    }
                    for (let i = 0; i < (document.getElementsByClassName("fordata").length - 1); i++) {
                        if (document.getElementsByClassName("fordata")[i].getElementsByTagName("input")[0] != undefined) {
                            document.getElementsByClassName("fordata")[i].getElementsByTagName("input")[0].style.color = "#ffff";
                        }
                        if (i == 6) {
                            document.getElementsByClassName("fordata")[i].getElementsByTagName("textarea")[0].style.color = "#ffff";
                        }
                    }
                    document.getElementById("light_dark").getElementsByTagName("img")[0].style.filter = "invert(1)";
                    document.getElementsByClassName("icomenumovil")[0].style.filter = "invert(1)";
                    document.getElementById("calen").innerHTML = '<style>input[type="date"]::-webkit-calendar-picker-indicator{filter: contrast(0);}</style>';
                    document.getElementsByTagName("header")[0].getElementsByTagName("a")[1].getElementsByTagName("img")[0].style.filter = "contrast(0)";
                    document.getElementsByTagName("footer")[0].getElementsByTagName("img")[1].style.filter = "contrast(0)";
                } else {
                    document.getElementsByTagName("body")[0].className = "light";
                    while (document.getElementsByClassName("icomenudark")[0] != undefined) {
                        document.getElementsByClassName("icomenudark")[0].className = "icomenu";
                    }
                    while (document.getElementsByClassName("contendark")[0] != undefined) {
                        document.getElementsByClassName("contendark")[0].className = "contenlight";
                    }
                    for (let i = 0; i < (document.getElementsByClassName("fordata").length - 1); i++) {
                        if (document.getElementsByClassName("fordata")[i].getElementsByTagName("input")[0] != undefined) {
                            document.getElementsByClassName("fordata")[i].getElementsByTagName("input")[0].style.color = "initial";
                        }
                        if (i == 6) {document.getElementsByClassName("fordata")[6].getElementsByTagName("textarea")[0].style.color = "initial";
                        }
                    }
                    document.getElementById("light_dark").getElementsByTagName("img")[0].style.filter = "none";
                    document.getElementsByClassName("icomenumovil")[0].style.filter = "none";
                    document.getElementById("calen").innerHTML = '';
                    document.getElementsByTagName("header")[0].getElementsByTagName("a")[1].getElementsByTagName("img")[0].style.filter = "none";
                    document.getElementsByTagName("footer")[0].getElementsByTagName("img")[1].style.filter = "";
                }
            }
        },
    }
</script>
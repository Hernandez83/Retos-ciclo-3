<template>
    <div class="menu">
            <img class="alinear" src="../assets/img/logo.png" alt="Logo" title="Logo">
            <a class="icomenu" @click="menu">
                <svg class="icomenu" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            </a>
            <nav class="alinear">
                <ul>
                    <li class="alinear">
                        <a class="icomenu" @click="cerrarmenu">
                            <svg class="icomenu" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                        </a>
                    </li>
                    <li class="alinear margeniz">
                        <a href="/">Inicio</a>
                    </li>
                    <li class="alinear">
                        <a href="/nosotros">Nosotros</a>
                    </li>
                    <li class="alinear">
                        <button @click="login">Iniciar sesión</button>
                    </li>
                    <li class="alinear">
                        <button @click="crearcta">Crear cuenta</button>
                    </li>
                </ul>
            </nav>
            <div class="bgModal" id="inisesion">
            <div class="mainModal">
                <span class="cerrar" @click="cerrarmenu">X</span><br>
                <form>
                    <h3>Inicia Sesión</h3>
                    <input type="text" name="usuario" required placeholder="Usuario">
                    <input type="password" name="contraseña" required placeholder="Contraseña">
                    <button type="submit">Iniciar</button>
                    <a class="miniBoton">Olvide mi contraseña&nbsp;</a>
                    <a class="miniBoton" @click="crearcta">&nbsp;Crear cuenta</a>
                </form>
            </div>
        </div>
        <div class="bgModal" id="registrar">
            <div class="mainModal">
                <span class="cerrar" @click="cerrarmenu">X</span><br>
                <form>
                    <h3>Crear Cuenta</h3>
                    <input type="text" name="nombre" required placeholder="Nombre">
                    <input type="email" name="email" required placeholder="Correo">
                    <input type="password" name="confirmarcontraseña" required placeholder="Contraseña">
                    <input type="password" name="confirmarcontraseña" required placeholder="Confirmar">
                    <button type="submit">Crear</button>
                    <a class="miniBoton" @click="cerrarmenu(); login()">Inicia sesión</a>
                </form>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'HeaderPrincipal',
    methods: {
        menu: function () {
            document.getElementsByClassName('alinear')[1].style.display = 'block';
            document.getElementsByClassName('alinear')[1].style.top = 0;
            document.getElementsByClassName('alinear')[2].style.textAlign = 'right';
        },
        login: function () {
            document.getElementById('inisesion').style.top = 0;
            document.getElementsByTagName("body")[0].style.overflow = "hidden"
        },
        crearcta: function () {
            document.getElementById('registrar').style.top = 0;
            document.getElementsByTagName("body")[0].style.overflow = "hidden"
        },
        cerrarmenu: function () {
            document.getElementsByClassName('alinear')[1].style.top = '-150%';
            document.getElementById('inisesion').style.top = '-200%';
            document.getElementById('registrar').style.top = '-200%';
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        }
    }
}
</script>
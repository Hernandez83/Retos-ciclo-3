<template>
    <article>
        <div class="contendash">
            <div class="contenlight">
                <form action="" class="formeditperfil">
                    <h2>Editar Perfil</h2>
                    <div class="fordata">
                        <label for="nombre">Nombre</label><br>
                        <input type="text" id="nombre" name="nombre" required placeholder="Nombre" />
                    </div>
                    <div class="fordata">
                        <label for="">Apellido</label><br>
                        <input type="text" id="apellido" name="apellido" required placeholder="Apellido" />
                    </div>
                    <div class="fordata">
                        <label for="">Email</label><br>
                        <input type="email" id="email" name="email" required placeholder="Email" />
                    </div>
                    <div class="fordata">
                        <label for="">Dirección</label><br>
                        <input type="text" id="direccion" name="direccion" required placeholder="Direccion" />
                    </div>
                    <div class="fordata">
                        <label for="">Ciudad</label><br>
                        <input type="text" id="ciudad" name="ciudad" required placeholder="Ciudad" />
                    </div>
                    <div class="fordata">
                        <label for="">Fecha de nacimiento</label><br>
                        <input type="date" id="fecha" name="fecha" required placeholder="Fecha de nacimiento" />
                    </div>
                    <div class="fordata textarea">
                        <label for="mi">Sobre Mí</label><br>
                        <textarea name="mi" rows="2"></textarea>
                    </div>
                    <div class="fordata">
                        <button>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="contenlight">
            <div class="targetauser">
                <img src="../assets/img/juan.png" alt="" title="">
                <h3>Juan Algo<br><span>Estudiante</span></h3>
                <p>Descripcion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, libero pariatur accusamus
                    aliquid iure voluptatibus velit recusandae consectetur quidem assumenda sapiente doloribus ab vitae
                    esse maxime voluptas beatae similique eos.</p>
            </div>
        </div>
    </article>
</template>
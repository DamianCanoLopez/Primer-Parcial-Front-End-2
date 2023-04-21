/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

const fila = document.getElementById("fila");


function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    let nombre = prompt(`por favor ingrese su nombre:`);
    let añoDeNacimiento = parseInt(prompt(`por favor ingrese su año de nacimiento:`));
    let ciudad = prompt(`por favor ingrese su ciudad:`);
    let le_Interesa_Javascript = confirm(`Le interesa aprender Javascript?`);

    if(Number.isInteger(añoDeNacimiento)){
      datosPersona.edad = 2022 - añoDeNacimiento;
    }else{
      alert("Tiene que ingresar un valor numerico");
      añoDeNacimiento = parseInt(prompt(`Ingrese su año de nacimiento:`));
    }


    return datosPersona.nombre = nombre, datosPersona.edad = 2022 - añoDeNacimiento, datosPersona.ciudad = ciudad, datosPersona.interesPorJs = le_Interesa_Javascript;

}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerHTML = datosPersona.nombre;
  document.getElementById("edad").innerHTML = datosPersona.edad;
  document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
  document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;

}



function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach((tarjetas) =>{
    fila.innerHTML += `
    <ul class="caja" type= "none">
      <li>
        <img src="${tarjetas.imgUrl}" alt="${tarjetas.lenguajes}">
        <h2>${tarjetas.lenguajes}</h2>
        <p>${tarjetas.bimestre}</p>
      </li>
    </ul>
    `
  });

  return materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

const body = document.querySelector("#sitio")

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  body.classList.toggle('dark');

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown", function(e){
  if(e.key=="f"||e.key=="F"){
    mostrarMas()
  }
});

function mostrarMas(){
  document.querySelector("#sobre-mi").className="null";
};
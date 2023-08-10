import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'bootstrap';
import sendero from "../src/images/snedero.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/images/logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import pigs from "../src/images/bannern1.png";

import "aos/dist/aos.css"
import emailjs from '@emailjs/browser';
/////imagenes del carrucel

import b2 from "../src/images/b2.jpeg";
import b3 from "../src/images/b3.jpeg";
import b4 from "../src/images/b4.jpeg";
//produtos
import m from "../src/images/M.png"
import c from "../src/images/C.png"
import l from "../src/images/L.png"
import t from "../src/images/T.png"
import g from "../src/images/G.png"

import mora from "../src/images/mora.jpeg"
import lulo from "../src/images/lulo.jpeg"
import tomate from "../src/images/tomate.jpg"

/// beneficios
import salud from "../src/images/salud.jpg"
import salud2 from "../src/images/salud2.jpg"

import n1 from "../src/images/n1.jpeg";
import n2 from "../src/images/n2.jpeg";
import n3 from "../src/images/n3.jpeg";
import n4 from "../src/images/n4.jpeg";

import whataspp from "../src/images/w.png";
import facebook from "../src/images/f.png";
import instagram from "../src/images/i.png";
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x8chgp7', 'template_pf2fdwq', form.current, 'tL_5_LssMfxChReg0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  useEffect(() => {

    Aos.init({ duration: 2000 })
  }, []);

  return (
    <div className="App">


      <nav class="navbar fixed-top navbar-expand-lg" >

        <div class="container-fluid">
          <img src={logo} className='logo'></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class=" navbar-nav  navbar-collapse justify-content-end">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#inicio">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#nosotros">NOSOTROS</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#productos">PRODUCTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#beneficios">BENEFICIOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">CONTACTO</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div class="col-md-12" id="inicio">
        <img src={pigs} data-aos="fade-up" class="imgs" />

      </div>
      <br id='nosotros'></br><br /><br /><br />

      <br />
      <div class="row" >
        <div class="col-md-6 how-img ">
          <span className='pc'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
              <div class="carousel-inner" >
                <div class="carousel-item active">
                  <div className="content">
                    <img src={mora} className='pro' alt="..." />

                  </div>
                </div>
                <div class="carousel-item">
                  <div className="content">
                    <img src={b2} className='pro' alt="..." />

                  </div>
                </div>
                <div class="carousel-item">
                  <div className="content">
                    <img src={lulo} className='pro' alt="..." />

                  </div>
                </div>
                <div class="carousel-item">
                  <div className="content">
                    <img src={tomate} className='pro' alt="..." />

                  </div>
                </div>

              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </span>

        </div>
        <div class="col-md-6" >

          <h4 class="subheading" data-aos="zoom-in-up"></h4>
          <h1 class="mb-1" data-aos="zoom-in-up">"Mantente saludable y equilibrado con frutas frescas"</h1>
        </div>

      </div>
      <br />
      <blockquote class="blockquote text-center">
        <h3 class="mb-0" data-aos="fade-up"> ¿QUIENES SOMOS?</h3>

      </blockquote>

      <div class="how-section1">
        <div class="row">
          <div class="col-md-6">
            <img src={b4} className='img' alt="" />
          </div>
          <div class="col-md-6" >

            <h4 class="subheading" data-aos="zoom-in-up">MISIÓN</h4>
            <p className='nosotros' data-aos="zoom-in-up">Ofrecer frutas frescas de calidad que se adapten a las necesidades de los consumidores regionales, nacionales o internacionales, y a su vez que contribuyan al desarrollo socioeconómico del sector rural colombiano y a la económico de los asociados.  </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">

            <h4 class="subheading" data-aos="zoom-in-up">VISIÓN</h4>
            <p className='nosotros' data-aos="zoom-in-up">Generar presencia a nivel local, regional, nacional e internacional a través de la producción, transformación y distribución de nuestras frutas frescas. </p>
          </div>
          <div class="col-md-6 ">
            <div className='center'>
              <img src={b3} className='img' alt="" /></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ">
            <div class="row2">
              <div class="col-md-12">
                <img src={n1} className='img-c2' alt="" /></div>
              <div class="col-md-4 ">
                <img src={n2} className='img' alt="" />
              </div>
              <div class="col-md-4 ">
                <img src={n3} className='img' alt="" />
              </div>
              <div class="col-md-4 ">
                <img src={n4} className='img' alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6">

            <h4 class="subheading" data-aos="zoom-in-up">NUESTRA HISTORIA</h4>
            <p id='productos' className='nosotros' data-aos="zoom-in-up">Nuestra asociación nació hace 9 años, a partir de la necesidad de agruparnos cómo socios agricultores de frutas en nuestra región con el fin de dar a conocer la buena calidad de nuestros productos, cultivados en el campo de forma artesanal.
              Gracias al trabajo en equipo de nuestros asociados se ha estandarizado los precios y mejorado la calidad de las frutas que se ofrecen al consumidor.
            </p>
          </div>
        </div>

      </div>

      <blockquote class="blockquote text-center" >
        <h3 class="mb-0" data-aos="fade-up" > PRODUCTOS</h3>
      </blockquote>
      <p className='centrar'>
        <div class="row">
          <div class="col-md-4" >
            <div class="row">
              <div class="col-md-6" >
                <div>
                  <div class="img__wrap">
                    <img src={m} className="p-img" />
                    <div class="text-center">
                      <i class="img__description"> CARACTERISTICAS:<br />
                        Rendimiento:  75 %<br />
                        brix: 6<br />
                        acidez: 4.0<br />
                      </i>
                    </div>

                  </div>
                </div> </div>
              <div class="col-md-6" >
                <div>
                  <div class="img__wrap">
                    <img src={l} className="p-img" alt="Apple Computer" />
                    <div class="text-center">
                      <i class="img__description"> CARACTERISTICAS:<br />
                        Rendimiento:  45 %<br />
                        brix: 5<br />
                        acidez: 4.0<br />
                      </i>
                    </div>

                  </div>
                </div>
              </div>  </div>
          </div>
          <div class="col-md-4" >
            <div class="row"> 
              <div class="col-md-6" >
                <div>
                  <div class="img__wrap">
                    <img src={c} className="p-img" alt="Apple Computer" />
                    <div class="text-center">
                      <i class="img__description"> CARACTERISTICAS:<br />
                        Rendimiento:  50 %<br />
                        brix: 9<br />
                        acidez: 1.5<br />
                      </i>
                    </div>

                  </div>
                </div> </div>
              <div class="col-md-6" >
                <div>
                  <div class="img__wrap">
                    <img src={g} className="p-img" alt="Apple Computer" />
                    <div class="text-center">
                      <i class="img__description"> CARACTERISTICAS:<br />
                        Variedad: Comun <br />
                        Familia: Passifloraceae<br />
                        Color: Amarilla<br />

                      </i>
                    </div>

                  </div>
                </div>
              </div>  </div>
          </div>
          <div class="col-md-4" >
            <div class="row">
              <div class="col-md-6" >
                <div>
                  <div class="img__wrap">
                    <img src={t} className="p-img" alt="Apple Computer" />
                    <div class="text-center">
                      <i class="img__description"> CARACTERISTICAS:<br />
                        Variedad: Chonto <br />
                        Familia: Solanáceas<br />
                        Color: Rojo<br />

                      </i>
                    </div>

                  </div>
                </div> </div>
            </div>
          </div>






        </div>
      </p>

      <blockquote class="blockquote text-center" >
        <h3 class="mb-0" data-aos="fade-up" > Beneficios de comer mora</h3>
      </blockquote>
      <div class="row">
        <div class="col-md-6">
          <img src={salud} data-aos="zoom-in-up" className='img-c1' alt="" />
        </div>
        <div class="col-md-6" data-aos="zoom-in-up" >
          <div className='ac'>
            <h2 >Mejoran la salud cardiovascular</h2>
            <p data-aos="zoom-in-up">Gracias a las antocianinas, que tienen acción antioxidante y antiinflamatoria, las moras son grandes aliadas de la salud cardiovascular. Por ende, no es de extrañar que sean un apoyo para cuidar el corazón y el resto del sistema cardiovascular, incluyendo sus células más pequeñas.</p>
            <p data-aos="zoom-in-up">Por otra parte, como vimos, son bajas en grasas, por lo que comer moras dentro de una dieta balanceada podría ayudar a reducir los niveles de colesterol alto, según indica un estudio reciente.</p>

          </div>  </div>
      </div>
      <div class="row">

        <div class="col-md-6" data-aos="zoom-in-up" >
          <div className='ac'>
            <h2 >Estimulan la digestión</h2>

            <p data-aos="zoom-in-up">Al aportar nutrientes como la vitamina K, vitamina B6, niacina y riboflavina, estas pequeñas frutas también ayudan a mejorar los procesos digestivos. Sus propiedades favorecen la descomposición de los alimentos difíciles de digerir, como las proteínas, las grasas y los carbohidratos.</p>
            <p data-aos="zoom-in-up">Por otro lado, como se señaló, también contienen una cantidad significativa de fibra, la cual estimula la limpieza de los intestinos y colon, evitando el estreñimiento.</p>
          </div>
        </div>
        <div class="col-md-6">
          <img src={salud2} data-aos="zoom-in-up" className='img-c1' alt="" />
        </div>
      </div>


      <blockquote class="blockquote text-center" id='contacto'>
        <h1 class="mb-0" data-aos="fade-up">CONTACTO</h1>

      </blockquote>
      <br />
      <div class="contac">
        <div className='map' data-aos="fade-up">


          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8066742190563!2d-74.40075748045983!3d4.257818349644229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f037741ca2b19%3A0x8ab28abad286b580!2sVereda%20de%20San%20Antonio%2C%20Arbel%C3%A1ez%20(Cundinamarca)!5e0!3m2!1ses!2sco!4v1686255619587!5m2!1ses!2sco"
            className='mapa' style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>

        <div className='form' data-aos="fade-up">


          <div className='center'>
            <form ref={form} onSubmit={sendEmail} className='form-controller'>
              <input class="text" name='from_name' type='text' placeholder='Nombre completo' />
              <input class="text" name='correo' type='text' placeholder='Correo electronico' />
              <input class="text" name='telefono' type='number' placeholder='Numero de telefono' />
              <textarea class="textm" name='message' type="text" placeholder='Mensaje' />
              <div className='center'>      <button type='submit' class="btn btn-success">Enviar</button></div>

            </form>
          </div>




        </div>
      </div>
      <br></br>
 
      <div className='espacio'>
      <div class="row">
        <div class="col-md-3" >
          <p>Correo: <br />  contacto@asprofrutas.com</p>
        </div>
        <div class="col-md-3" >

          <p >Telefono: <br /> (+57)3205723516<br />
          (+57)3126699347</p>
        </div>
        <div class="col-md-3" >
          <p >Dirección: <br /> Vereda san Luis alto sector<br /> Berlín SECTOR BERLIN FINCA EL RETIRO</p>
        </div>
        <div class="col-md-3" >
          <p >Horario: <br /> lunes a viernes: 7:30 am a 12:00m <br/> 1:00 pm a 5:00 pm
            <br /> sábados: 7:30 am a 1:00 pm</p>
        </div>

      </div></div>
      <footer class=" text-center text-lg-start">

      <div className='row'>
          <div class="col-md-8" >
            <div className='dereca'>
              <div class="text-center p-3" >

                <a class="text-white">© 2023 Copyright:  APAC   </a>

              </div>
            </div>
          </div>
          <div class="col-md-4" >

            <div className='dereca'>
              <div className='m-a-c'> Por: Ecoproyectsas</div>
            </div>
          </div>
        </div>

      </footer>
      <div id='delegar' fill="currentColor" >
        <a href='https://instagram.com/asprofrutasberlin?igshid=MzNlNGNkZWQ4Mg=='>
          <img className='i1' src={instagram}></img>
        </a>
      </div>

      <div id='delegar1' fill="currentColor" >
        <a href='https://www.facebook.com/profile.php?id=100092685490748&mibextid=ZbWKwL'>
          <img className='i2' src={facebook}></img>
        </a>
      </div>
      <div id='delegar2' fill="currentColor" >
        <a href='https://wa.link/p61m04'>
          <img className='i3' src={whataspp}></img>
        </a>
      </div>

    </div>
  );
}

export default App;

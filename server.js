const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Configurar el middleware para el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("hola")

app.post('/send-email', (req, res) => {
  const { nombre, correo, telefono, servicio, comentarios } = req.body;

  // const transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   auth: {
  //     user: 'aidakc92@gmail.com', 
  //     pass: 'zzhg eufq wiku gsfp', 
  //   },
  // });

    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'alicanteaireacondicionado@gmail.com', 
      pass: 'qyyu ifqh cfvt nfwd', 
    },
  });

  const mailOptions = {
    from: 'alicanteaireacondicionado@gmail.com',
    to: 'alicanteaireacondicionado@gmail.com',
    subject: 'Nuevo contacto desde el formulario',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nServicio: ${servicio}\nComentarios: ${comentarios}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log("Envío de correo")
    console.log("Transporter: ", transporter)
    if (error) {
      console.log(error);
      // res.redirect('http://127.0.0.1:5500/ConfirmacionMail.html');
      res.redirect('https://www.aireacondicionadoalicante1.es/ConfirmacionMail.html');
    //   res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
    //   res.status(200).send('Correo enviado');
      // res.redirect('http://127.0.0.1:5500/ConfirmacionMail.html');
      res.redirect('https://www.aireacondicionadoalicante1.es/ConfirmacionMail.html');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

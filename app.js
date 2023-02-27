// import { jsPDF } from "jspdf";
// const pdfMake = require('pdfmake/build/pdfmake.js');
// const pdfMake = require('./pdfmake-master/build/pdfmake.js');
// const pdfFonts = require('./pdfmake-master/build/vfs_fonts.js');


// Default export is a4 paper, portrait, using millimeters for units
const form = document.querySelector('form');

const monthes = ['січня', "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]

const generatePDF = function(e){
  e.preventDefault();

  const name = Array.from(document.querySelector('#name').value)[0].toUpperCase();
  console.log(name)
  const midName = Array.from(document.querySelector('#midName').value)[0].toUpperCase();
  const lastName = document.querySelector('#lastName').value;
  const postal = document.querySelector('#postalIndex').value;
  const licenceNumber = document.querySelector('#licenceNumber').value;
  const region = document.querySelector('#region').value;
  const city = document.querySelector('#city').value;
  const street = document.querySelector('#street').value;
  const houseNumber = document.querySelector('#houseNumber').value;


  const namePlace = document.querySelector('#namePlace');
  const licenceNumberPlace = document.querySelector('#licenceNumberPlace');
  const postalIndexPlace = document.querySelector('#postalIndexPlace');
  const regionPlace = document.querySelector('#regionPlace');
  const cityPlace = document.querySelector('#cityPlace');
  const streetPlace = document.querySelector('#streetPlace');
  const housePlace = document.querySelector('#housePlace');
  const datePlace = document.querySelector('#datePlace');


  
  // namePlace.innerHTML = `${lastName} ${name}. ${midName}.`
  // licenceNumberPlace.innerHTML = licenceNumber;
  // postalIndexPlace.innerHTML = postal;
  // regionPlace.innerHTML = region;
  // cityPlace.innerHTML = city;
  // streetPlace.innerHTML = street;
  // housePlace.innerHTML = houseNumber;

  const fullName = `${lastName} ${name}. ${midName}.`;
  
  const date = new Date();

  const fullDate = `«${date.getDate()}» ${monthes[date.getMonth()]} ${date.getFullYear()}`;



  // function fetchHtml() {
  //   // const fetched = fetch('./letter/letter.html').then(response => response.text())
  //   // console.log(fetched);

  //   fetch('./letter/letter.html')
  //   .then((response) => {
  //     return response.text();
  //   })
  //   .then((htmlFile) => {
  //     document.body.innerHTML = htmlFile;     
  //   });
  // }


  // const doc = new jsPDF();

  // doc.html(document.body, {
  //    callback: function (doc) {
  //      doc.save();
  //    },
  //    x: 10,
  //    y: 10
  // });
  const docInfo = {

    info: {
      title:'Текстовий документ PDF',
      autor:'Website',
      subject:'Theme',
      keywords:'ключові'
    },

    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [50, 75, 50, 75],

    content: [
      {
        text: 'Головному управлінню ДПС',
        alignment: 'right'
        
      },
      {
        text: 'у Хмельницькій області',
        alignment: 'right'
      },
      {
        text: 'ПАТ «АГРОЗБРУЧ» ',
        alignment: 'right'
      },
      {
        text: '31200, Хмельницька область, місто Волочиськ,',
        alignment: 'right'
      },
      {
        text: 'вул. Незалежності, буд. 25,',
        alignment: 'right'
      },
      {
        text: 'тел. 0211112233 ЄДРПОУ 11111111',
        alignment: 'right'
      },
      {
        text: 'Заява',
        alignment: 'center',
        margin: [0, 100, 0, 0],
        bold: 'true'
      },
      {
        text: 'на одержання дубліката ліцензії на право роздрібної торгівлі пальним',
        alignment: 'center',
      },
      {
        text: `Прошу видати дублікат ліцензії на право роздрібної торгівлі пальним, реєстраційний номер №${licenceNumber}, термін дії ліцензій з 15.02.2021, видану на місце торгівлі, що знаходиться за адресою: ${postal}, ${region}, ${city}, вул. ${street}, ${houseNumber}, у зв’язку із втратою. Платіжне доручення додається.`,
        alignment: 'justify',
        margin: [0, 25, 0, 0]
      },
      {
        text: 'Підпис заявника',
        alignment: 'left',
      },
      {
        text: '(Керівник підприємства/фізична особа – підприємець/уповноважена особа по договору про спільну діяльність)',
        alignment: 'left',
      },
      {
        text: ' ',
        margin: [0, 25, 0, 0]
      },
      {
        text: `${fullName}`,
        alignment: 'left'
      },
      {
        text: `${fullDate}`,
        alignment:'right',
        margin: [0, -15, 0, 0]
      } 
    ]

  }

  pdfMake.createPdf(docInfo).download('a4.pdf');
  
};


form.addEventListener('submit', generatePDF, true)








// function logFetch(resource) {
//   console.log('Fetching', resource);
//   return fetch(resource);
// }

// logFetch("http://localhost:8080/letter/letter.html");
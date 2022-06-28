const workerInfo= 
[
    // ? primo
    {
      name: 'Wayne Barnett',
      role:'Founder & CEO',
      photo: 'wayne-barnett-founder-ceo.jpg'
    },
    // ? secondo
    {
        name: 'Angela Caroll',
        role:'Chief Editor',
        photo:'angela-caroll-chief-editor.jpg'
    },
    // ? terzo
    {
    name: 'Walter Gordon',
    role:'Office Manager',
    photo:'walter-gordon-office-manager.jpg'
    },
    // ? quarto
    {
        name:'Angela Lopez',
        role:'Social Media Manager',
        photo:'angela-lopez-social-media-manager.jpg'
    },
     // ? quinto
    {
        name: 'Scott Estrada',
        role:'Developer',
        photo:'scott-estrada-developer.jpg'
    },
    // ? sesto
    {
    name: 'Barbara Ramos',
    role:'Graphic Designer',
    photo:'barbara-ramos-graphic-designer.jpg'
    },
];

const output= document.getElementById('dom-output');

for (let i= 0; i< workerInfo.length; i++) {
    output.innerHTML +=`
    nome -> ${workerInfo[i].name}
    ruolo -> ${workerInfo[i].role} 
    <img src="./img/${workerInfo[i].photo}" alt="NON TROVATO">
    `;
    
}
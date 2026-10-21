export const projects = [
    {
        id: 1,
    number: '01',
    type:'Team  project ~ Full Stack',
    title:'Modern Tech Soutions',
    description:'A full-stack HR web application built by a student team, covering employees, attendance, leave and dashboards',
    role:'I built the attendance module: the MySQL schema and a secured REST API with filtering, pagination and endpoints, connected to the Vue frontend.',
    tag:['Vue 3','Node.js','Express','MySQL'],
    image:'images/ModernTech.png',
    links :[
        {label: 'Live site', url : 'https://chefmanie27-pixel.github.io/project-modern-tech-solutions-/'},
        {label:'Source code', url:'https://github.com/chefmanie27-pixel/project-modern-tech-solutions-'}
    ],

    },
    {
        id:2,
        number:'02',
        type:'Team project ~ Backend',
        title:'RePrint',
        description:
        'A 3D printing platform with a Vue frontend backed by its own REST API.',
        role:'I built the backend: the REST API that powers  the platform.',
        tags:['Node.js','Express','REST API'],
        image:'images/RePrint.png',
        links:[
            {label:'Live site',url:'https://reprint-kappa.vercel.app/'},
        {label:'backend',url:'https://github.com/imaanabrahams/RePrint-API'},
        {label: 'Frontend',url:'https://github.com/imaanabrahams/RePrint'},

        ]
        
  

    
    }
]
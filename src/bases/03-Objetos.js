const persona = {
    nombre: 'Karina',
    apellido: 'Villa',
    edad: 32,
    direccion:{
        ciudad: 'Hermosillo',
        zip: 85440,
        numero: 88,
        calle: 'Guadalajara'
    }
}

const persona2 = {...persona}

persona2.nombre='Alejandra'

console.log(persona, persona2)
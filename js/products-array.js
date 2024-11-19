var categoriesJson = [
  {
    id: 1, 
    title: "Urbano",
    description: "Colección de moda urbana moderna y versátil",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
    collectionId: "urban",
  },
  {
    id: 2, 
    title: "Nupcial",
    description: "Diseños exclusivos para novias contemporáneas",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800",
    collectionId: "bridal"
  },
  {
    id: 3, 
    title: "Gala",
    description: "Vestidos elegantes para ocasiones especiales",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    collectionId: "gala"
  },
  {
    id: 4, 
    title: "Accesorios",
    description: "Complementos que realzan cada diseño",
    image: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?w=800",
    collectionId: "accessories"
  },
]

var productJson = [
  /*Categoria Urbano */
    {
      id: "1",
      title: "Estilo Urbano Moderno",
      collection: "Colección Primavera 2024",
      author: "Autor 1",
      collectionId: "urban",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Noviembre 2024",
      matricula: "aaaa1000",
      description: {
        text: "Un diseño inspirado en los estilos urbanos más modernos.",
        materials: "Algodón y poliéster",
        dimensions: "90x120 cm",
        modelMeasurements: "Altura: 180 cm, Pecho: 95 cm"
      }
    },
    {
      id: "2",
      title: "Vestido de Novia Elegante",
      collection: "Colección Nupcial 2024",
      collectionId: "urban",
      author: "Autor 2",
      images: [
        "Products/2.jpeg",
        "Products/1.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "bridal",
      date: "Febrero 2024",
      matricula: "bbbb2000",
      description: {
        text: "Un vestido diseñado para ocasiones especiales.",
        materials: "Encaje y seda",
        dimensions: "100x150 cm",
        modelMeasurements: "Altura: 175 cm, Cintura: 70 cm"
      }
    },
    {
      id: "3",
      title: "Look Casual de Verano",
      collection: "Colección Verano 2024",
      collectionId: "urban",
      author: "Autor 3",
      images: [
        "Products/5.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "casual",
      date: "Abril 2024",
      matricula: "cccc3000",
      description: {
        text: "Perfecto para los días soleados de verano.",
        materials: "Lino y algodón",
        dimensions: "80x100 cm",
        modelMeasurements: "Altura: 165 cm, Cadera: 95 cm"
      }
    },
    {
      id: "4",
      title: "Estilo Formal de Oficina",
      collection: "Colección Otoño 2024",
      collectionId: "urban",
      author: "Autor 4",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "formal",
      date: "Septiembre 2024",
      matricula: "dddd4000",
      description: {
        text: "Diseñado para destacar en entornos laborales.",
        materials: "Lana y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 88 cm"
      }
    },
    {
      id: "5",
      title: "Abrigo de Invierno Clásico",
      collection: "Colección Invierno 2024",
      collectionId: "urban",
      author: "Autor 5",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "winter",
      date: "Diciembre 2024",
      matricula: "eeee5000",
      description: {
        text: "Abrigo ideal para protegerse del frío.",
        materials: "Lana y cachemira",
        dimensions: "120x150 cm",
        modelMeasurements: "Altura: 185 cm, Cintura: 85 cm"
      }
    },
    {
      id: "6",
      title: "Traje de Noche Glamouroso",
      collection: "Colección Noche 2024",
      collectionId: "urban",
      author: "Autor 6",
      images: [
        "Products/3.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "evening",
      date: "Octubre 2024",
      matricula: "ffff6000",
      description: {
        text: "Elegancia y glamour para eventos nocturnos.",
        materials: "Seda y pedrería",
        dimensions: "110x140 cm",
        modelMeasurements: "Altura: 172 cm, Pecho: 92 cm"
      }
    },
    {
      id: "7",
      title: "Ropa Deportiva Activa",
      collection: "Colección Deportiva 2024",
      collectionId: "urban",
      author: "Autor 7",
      images: [
        "Products/5.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "sportswear",
      date: "Julio 2024",
      matricula: "gggg7000",
      description: {
        text: "Perfecto para quienes buscan comodidad y funcionalidad.",
        materials: "Poliéster y elastano",
        dimensions: "85x95 cm",
        modelMeasurements: "Altura: 180 cm, Cintura: 75 cm"
      }
    },
    {
      id: "8",
      title: "Vestido de Fiesta Corto",
      collection: "Colección Fiesta 2024",
      collectionId: "urban",
      author: "Autor 8",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "party",
      date: "Agosto 2024",
      matricula: "hhhh8000",
      description: {
        text: "Un vestido corto para destacar en cualquier fiesta.",
        materials: "Seda y tul",
        dimensions: "70x100 cm",
        modelMeasurements: "Altura: 168 cm, Pecho: 85 cm"
      }
    },
    {
      id: "9",
      title: "Chaqueta de Mezclilla Desgastada",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 9",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Marzo 2024",
      matricula: "kkkk17000",
      description: {
        text: "Estilo desenfadado perfecto para el día a día.",
        materials: "Mezclilla y algodón",
        dimensions: "90x120 cm",
        modelMeasurements: "Altura: 175 cm, Cintura: 80 cm"
      }
    },
    {
      id: "10",
      title: "Pantalones Cargo Multiuso",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 10",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Abril 2024",
      matricula: "llll18000",
      description: {
        text: "Funcionales y versátiles para cualquier ocasión.",
        materials: "Algodón y poliéster",
        dimensions: "85x115 cm",
        modelMeasurements: "Altura: 180 cm, Cadera: 90 cm"
      }
    },
    {
      id: "11",
      title: "Sudadera con Estampado Graffiti",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 11",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Mayo 2024",
      matricula: "mmmm19000",
      description: {
        text: "Un diseño fresco inspirado en el arte callejero.",
        materials: "Algodón y elastano",
        dimensions: "100x130 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 85 cm"
      }
    },
    {
      id: "12",
      title: "Gorra Snapback Clásica",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 12",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Junio 2024",
      matricula: "nnnn20000",
      description: {
        text: "El accesorio urbano por excelencia.",
        materials: "Poliéster y algodón",
        dimensions: "Diámetro: 60 cm",
        modelMeasurements: "Altura: 175 cm, Cintura: 78 cm"
      }
    },
    {
      id: "13",
      title: "Camiseta Oversized Estilo Urbano",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 13",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Julio 2024",
      matricula: "oooo21000",
      description: {
        text: "Comodidad y estilo en un diseño oversized.",
        materials: "Algodón 100%",
        dimensions: "120x150 cm",
        modelMeasurements: "Altura: 185 cm, Pecho: 95 cm"
      }
    },
    {
      id: "14",
      title: "Conjunto Deportivo Retro",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 14",
      images: [
        "Products/8.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Agosto 2024",
      matricula: "pppp22000",
      description: {
        text: "Un guiño al estilo deportivo de los 90s.",
        materials: "Nylon y poliéster",
        dimensions: "130x160 cm",
        modelMeasurements: "Altura: 180 cm, Cintura: 82 cm"
      }
    },
    {
      id: "15",
      title: "Chamarra Bomber Minimalista",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 15",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Septiembre 2024",
      matricula: "qqqq23000",
      description: {
        text: "Diseño versátil para complementar cualquier outfit.",
        materials: "Nylon y algodón",
        dimensions: "100x120 cm",
        modelMeasurements: "Altura: 172 cm, Pecho: 88 cm"
      }
    },
    {
      id: "16",
      title: "Pantalón Jogger Contemporáneo",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 16",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Octubre 2024",
      matricula: "rrrr24000",
      description: {
        text: "Cómodo y moderno, ideal para el día a día.",
        materials: "Algodón y spandex",
        dimensions: "85x110 cm",
        modelMeasurements: "Altura: 165 cm, Cintura: 75 cm"
      }
    },
    {
      id: "17",
      title: "Zapatillas Urbanas Edición Limitada",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 17",
      images: [
        "Products/3.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Noviembre 2024",
      matricula: "ssss25000",
      description: {
        text: "Un calzado urbano con estilo único y detalles exclusivos.",
        materials: "Cuero y malla",
        dimensions: "Talla estándar: 42",
        modelMeasurements: "Altura: 178 cm, Pie: 27 cm"
      }
    },
    {
      id: "18",
      title: "Camiseta Estilo Básico",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 18",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Febrero 2024",
      matricula: "URB202418",
      description: {
        text: "Diseño clásico y cómodo para uso diario.",
        materials: "Algodón 100%",
        dimensions: "90x120 cm",
        modelMeasurements: "Altura: 180 cm, Cintura: 75 cm"
      }
    },
    {
      id: "19",
      title: "Joggers Minimalistas",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 19",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Marzo 2024",
      matricula: "URB202419",
      description: {
        text: "Pantalones cómodos y funcionales con un estilo urbano.",
        materials: "Poliéster y algodón",
        dimensions: "85x115 cm",
        modelMeasurements: "Altura: 170 cm, Cintura: 80 cm"
      }
    },
    {
      id: "20",
      title: "Sudadera Casual",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 20",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Abril 2024",
      matricula: "URB202420",
      description: {
        text: "Un complemento esencial para días frescos.",
        materials: "Algodón y spandex",
        dimensions: "100x130 cm",
        modelMeasurements: "Altura: 165 cm, Pecho: 85 cm"
      }
    },
    {
      id: "21",
      title: "Chaqueta Ligera",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 21",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Mayo 2024",
      matricula: "URB202421",
      description: {
        text: "Ideal para combinar con cualquier look urbano.",
        materials: "Nylon y algodón",
        dimensions: "110x140 cm",
        modelMeasurements: "Altura: 175 cm, Cintura: 78 cm"
      }
    },
    {
      id: "22",
      title: "Shorts Deportivos",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 22",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Junio 2024",
      matricula: "URB202422",
      description: {
        text: "Comodidad y estilo para días de verano.",
        materials: "Poliéster y malla",
        dimensions: "40x50 cm",
        modelMeasurements: "Altura: 170 cm, Cadera: 85 cm"
      }
    },
    {
      id: "23",
      title: "Gorra Estilo Urbano",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 23",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Julio 2024",
      matricula: "URB202423",
      description: {
        text: "El accesorio perfecto para completar tu outfit.",
        materials: "Algodón y poliéster",
        dimensions: "Tamaño ajustable",
        modelMeasurements: "Altura: 180 cm, Cintura: 77 cm"
      }
    },
    {
      id: "24",
      title: "Zapatillas Casual",
      collection: "Colección Urbana 2024",
      collectionId: "urban",
      author: "Autor 24",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urban",
      date: "Agosto 2024",
      matricula: "URB202424",
      description: {
        text: "Calzado urbano diseñado para máximo confort.",
        materials: "Cuero y goma",
        dimensions: "Talla estándar: 42",
        modelMeasurements: "Altura: 178 cm, Pie: 27 cm"
      }
    },
    {
      id: "25",
      title: "Outfit moderno",
      collection: "Colección Urbana 2018",
      collectionId: "urban",
      author: "Autor 25",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "urbano",
      date: "Enero 2018",
      matricula: "jjjj10000",
      description: {
        text: "Un conjunto que combina estilo clásico y formalidad.",
        materials: "Algodón y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 90 cm"
      }
    },  

/*Categoria Gala */
    {
      id: "26",
      title: "Traje moderno",
      collection: "Colección Gala 2024",
      collectionId: "gala",
      author: "Autor 26",
      images: [
        "Products/5.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "beachwear",
      date: "Junio 2024",
      matricula: "iiii9000",
      description: {
        text: "Perfecto para disfrutar en la playa.",
        materials: "Lino y algodón",
        dimensions: "80x110 cm",
        modelMeasurements: "Altura: 165 cm, Cintura: 72 cm"
      }
    },
    {
      id: "27",
      title: "Conjunto Clásico",
      collection: "Colección Clásica 2024",
      collectionId: "gala",
      author: "Autor 27",
      images: [
        "Products/6.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "formal",
      date: "Enero 2025",
      matricula: "jjjj10000",
      description: {
        text: "Un conjunto que combina estilo clásico y formalidad.",
        materials: "Algodón y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 90 cm"
      }
    }, 
    {
      id: "28",
      title: "Vestido clasico de gala",
      collection: "Colección Clásica 2024",
      collectionId: "gala",
      author: "Autor 28",
      images: [
        "Products/7.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "formal",
      date: "Enero 2018",
      matricula: "jjjj10000",
      description: {
        text: "Un conjunto que combina estilo clásico y formalidad.",
        materials: "Algodón y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 90 cm"
      }
    },
 /*Categoria Nupcial */ 
    {
      id: "29",
      title: "Vestido Nupcial Creativo",
      collection: "Colección Mariposa",
      collectionId: "bridal",
      author: "Autor 29",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "formal",
      date: "Enero 2017",
      matricula: "jjjj10000",
      description: {
        text: "Un conjunto que combina estilo clásico y formalidad.",
        materials: "Algodón y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 90 cm"
      }
    },
    {
      id: "30",
      title: "Vestido Nupcial Creativo",
      collection: "Colección Mariposa",
      collectionId: "bridal",
      author: "Autor 30",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "formal",
      date: "Enero 2017",
      matricula: "jjjj10000",
      description: {
        text: "Un conjunto que combina estilo clásico y formalidad.",
        materials: "Algodón y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 90 cm"
      }
    },
    {
      id: "31",
      title: "Cartera creativa",
      collection: "Colección Mariposa",
      collectionId: "accessories",
      author: "Autor 31",
      images: [
        "Products/1.jpeg",
        "Products/2.jpeg",
        "Products/3.jpeg",
        "Products/4.jpeg",
        "Products/5.jpeg",
        "Products/6.jpeg",
        "Products/7.jpeg",
        "Products/8.jpeg"
      ],
      category: "formal",
      date: "Enero 2017",
      matricula: "jjjj10000",
      description: {
        text: "Un conjunto que combina estilo clásico y formalidad.",
        materials: "Algodón y poliéster",
        dimensions: "95x110 cm",
        modelMeasurements: "Altura: 170 cm, Pecho: 90 cm"
      }
    }
  ];
  
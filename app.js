"use strict";
(() => {

  /* ---------------------------------------------------------------- */
  /* Data                                                              */
  /* ---------------------------------------------------------------- */

  const CATS = {
    bio:   {name:'Biología marina', short:'Biología marina', accent:'#17A398', bgLight:'#E1F5EE', dark:'#085041', emoji:'🐟', tintA:'#e6f4f1', tintB:'#dcefeb'},
    eco:   {name:'Ecología marina y conservación', short:'Ecología', accent:'#4C9A63', bgLight:'#E7F3E9', dark:'#2E5F3B', emoji:'🌿', tintA:'#e9f3ea', tintB:'#e0ece2'},
    micro: {name:'Microbiología marina', short:'Microbiología', accent:'#7B5EA7', bgLight:'#EDE7F5', dark:'#4A3766', emoji:'🧫', tintA:'#efe9f6', tintB:'#e7dff1'},
    biot:  {name:'Biotecnología marina', short:'Biotecnología', accent:'#F2665E', bgLight:'#FCEBE9', dark:'#7A2E28', emoji:'💧', tintA:'#fceceb', tintB:'#f8e0de'},
    quim:  {name:'Química y bioquímica marina', short:'Química', accent:'#D98E2B', bgLight:'#FBF0DD', dark:'#6B4614', emoji:'🧪', tintA:'#fbf1de', tintB:'#f6e8cd'},
    gen:   {name:'Genética y genómica marina', short:'Genética', accent:'#C9558B', bgLight:'#FBEAF0', dark:'#6E2C4B', emoji:'🧬', tintA:'#fbeef0', tintB:'#f7e6e9'},
    ocea:  {name:'Oceanografía y geología marina', short:'Oceanografía', accent:'#4A6B8A', bgLight:'#E7EDF2', dark:'#2A3E50', emoji:'🌊', tintA:'#e7edf2', tintB:'#dee6ed'},
    acui:  {name:'Acuicultura y ciencias pesqueras', short:'Acuicultura', accent:'#5C8A6B', bgLight:'#E9F1EA', dark:'#2F4A38', emoji:'🐠', tintA:'#e9f1ea', tintB:'#e0ebe2'}
  };

  const TYPES = {
    noticia: {label:'Noticia', emoji:'📰', accent:'#0B3D57', bgLight:'#E7ECEF', dark:'#0B3D57'},
    tecnica: {label:'Técnica', emoji:'🔬', accent:'#17A398', bgLight:'#E1F5EE', dark:'#085041'}
  };

  const ARTICLES = [
    {slug:'vibrio-tcbs', cat:'micro', type:'tecnica', date:'14 julio 2026', read:'7 min',
     title:'Vibrio en la costa de Alicante: qué aparece en una placa de TCBS',
     excerpt:'Cultivo selectivo, confirmación por PCR y por qué el color de la colonia cambia toda la lectura de una muestra costera.',
     bites:['El medio TCBS separa los Vibrio del resto de la microbiota costera por su tolerancia a la sal y al pH alcalino.','El color de la colonia (amarillo o verde) da una primera pista de especie, pero no es un diagnóstico: hace falta confirmación molecular.','Con temperaturas del agua más altas en verano, la ventana en la que estos géneros son detectables se alarga.'],
     body:[
       'Cuando uno siembra agua de mar en una placa de TCBS, lo primero que sorprende es lo poco que crece. El medio está diseñado para eso: pH alcalino, sales biliares y alta concentración de cloruro sódico dejan fuera a la mayor parte de la microbiota costera y dejan pasar, sobre todo, al género Vibrio.',
       'Lo que sí crece se separa por color. Las colonias amarillas fermentan la sacarosa del medio y acidifican el indicador; las verdes no. Es una primera criba útil en el laboratorio, pero conviene decirlo claro: el color no identifica una especie. Distintos aislados pueden compartir apariencia y comportarse de forma muy distinta.',
       'Por eso el segundo paso no es opcional. Sobre las colonias aisladas se hace extracción de ADN y una PCR dirigida a genes marcadores, y solo entonces se puede hablar de una identificación con cierta seguridad. En muestras de la costa alicantina, ese doble paso es lo que separa "aquí hay algo compatible con Vibrio" de "aquí hay esta especie concreta".',
       'La parte interesante no es el microorganismo aislado, sino el contexto. La abundancia de estos géneros responde a la temperatura del agua, a la salinidad y a la materia orgánica disponible; en veranos largos y cálidos, la ventana temporal en la que se detectan con facilidad se alarga. Eso importa para la acuicultura y para la vigilancia sanitaria costera, que es donde acaba aterrizando este tipo de muestreo.'],
     ref:['Baker-Austin, C., Oliver, J. D., Alam, M., Ali, A., Waldor, M. K., Qadri, F., & Martinez-Urtaza, J. (2018). Vibrio spp. infections. Nature Reviews Disease Primers, 4(1), 8. https://doi.org/10.1038/s41572-018-0005-8']},

    {slug:'pacbio-16s', cat:'gen', type:'tecnica', date:'2 julio 2026', read:'9 min',
     title:'Leer el 16S de un tirón: qué cambia con PacBio',
     excerpt:'Del fragmento corto al gen completo, y por qué eso sube la resolución taxonómica hasta el nivel de especie.',
     bites:['La mayoría de estudios de microbiota amplifican solo una o dos regiones variables del gen 16S; PacBio permite leer el gen entero en una sola lectura.','Más longitud significa mejor resolución taxonómica: donde antes se llegaba a género, ahora se puede afinar a especie.','No es magia: los sesgos de extracción, de PCR y de base de datos siguen ahí.'],
     body:[
       'El gen 16S del ARN ribosómico lleva décadas siendo la regla de medir de la ecología microbiana. Tiene regiones muy conservadas, útiles para diseñar cebadores universales, y regiones variables que cambian entre grupos y sirven para clasificar.',
       'El problema clásico es de longitud. Las plataformas de lectura corta obligan a elegir un trozo, normalmente V3-V4, y a partir de ahí clasificar. Funciona razonablemente bien hasta género, pero por debajo la señal se agota: dos especies distintas pueden ser idénticas en la región elegida.',
       'La secuenciación de lectura larga cambia esa ecuación. Al leer el gen completo de una sola vez, y con lecturas circulares de alta fidelidad, la clasificación gana resolución y muchas asignaciones que antes se quedaban en "género sp." pasan a tener nombre y apellido.',
       'Conviene no sobrevender el salto. Sigue habiendo sesgos en la extracción de ADN, en la amplificación y en las bases de datos de referencia, que están mejor pobladas para unos ambientes que para otros. Lo que cambia es la resolución del último paso, no la fiabilidad de toda la cadena.'],
     ref:['Callahan, B. J., Wong, J., Heiner, C., Oh, S., Theriot, C. M., Gulati, A. S., McGill, S. K., & Dougherty, M. K. (2019). High-throughput amplicon sequencing of the full-length 16S rRNA gene with single-nucleotide resolution. Nucleic Acids Research, 47(18), e103. https://doi.org/10.1093/nar/gkz569']},

    {slug:'hediste-pienso', cat:'acui', type:'noticia', date:'21 junio 2026', read:'6 min',
     title:'Un poliqueto en el pienso: el caso de Hediste diversicolor',
     excerpt:'Dieta, agua tratada con luz ultravioleta y una microbiota que responde a las dos cosas.',
     bites:['Hediste diversicolor se cultiva como fuente de proteína y ácidos grasos para piensos acuícolas.','La dieta y el tratamiento UV del agua de cultivo modifican la microbiota del gusano de forma medible.','Controlar esa microbiota es parte del control de calidad del ingrediente, no un detalle secundario.'],
     body:[
       'La acuicultura lleva años buscando cómo salir de la harina de pescado. Entre los candidatos, los poliquetos tienen una ventaja incómoda de ignorar: crecen rápido, aprovechan residuos orgánicos y tienen un perfil de ácidos grasos que interesa a las dietas de reproductores.',
       'Hediste diversicolor es el ejemplo más trabajado en Europa. Vive en sedimentos intermareales, tolera cambios fuertes de salinidad y se puede cultivar en sistemas relativamente sencillos. La pregunta operativa no es si crece, sino qué se lleva dentro cuando entra en la cadena del pienso.',
       'Ahí entra la microbiota. Lo que el gusano come y cómo se trata el agua de cultivo se reflejan en la comunidad bacteriana que alberga. Un tratamiento con luz ultravioleta reduce la carga microbiana del agua de entrada, y esa presión se nota aguas abajo, en el propio animal.',
       'La conclusión práctica es poco espectacular pero útil: si el poliqueto se va a usar como ingrediente, su microbiota forma parte de la especificación del producto. Medirla con secuenciación es hoy más barato que asumir que da igual.'],
     ref:'Wang, H., Hagemann, A., Reitan, K. I., Ejlertsson, J., Wollan, H., Handå, A., & Malzahn, A. M. (2019). Potential of the polychaete Hediste diversicolor fed on aquaculture and biogas side streams as an aquaculture food source. Aquaculture Environment Interactions, 11, 551-562. https://doi.org/10.3354/aei00330'},

    {slug:'bomba-carbono', cat:'ocea', type:'noticia', date:'9 junio 2026', read:'8 min',
     title:'La bomba biológica de carbono, en tres pasos',
     excerpt:'Cómo el carbono que fija el plancton en superficie acaba, con suerte, en el fondo del océano durante siglos.',
     bites:['El fitoplancton fija CO2 en superficie; una fracción pequeña de ese carbono escapa del reciclado y se hunde.','La profundidad a la que se remineraliza determina cuánto tiempo queda el carbono fuera de la atmósfera.','Es uno de los procesos peor restringidos en los modelos climáticos actuales.'],
     body:[
       'La llamada bomba biológica es, en esencia, un ascensor de bajada. El fitoplancton fija carbono en la capa iluminada, parte de esa materia orgánica se agrega en partículas o pasa por el intestino del zooplancton, y esas partículas se hunden.',
       'La mayor parte del carbono no llega lejos: bacterias y zooplancton lo remineralizan en los primeros cientos de metros y vuelve a estar disponible en superficie en cuestión de meses o pocos años. El destino climático se juega en la profundidad exacta a la que ocurre esa remineralización.',
       'Si el carbono se descompone por encima de la termoclina permanente, vuelve pronto. Si atraviesa esa barrera, puede quedar aislado de la atmósfera durante siglos. Unas decenas de metros de diferencia cambian el orden de magnitud del tiempo de residencia.',
       'Por eso es un proceso incómodo para los modelos: pequeño en porcentaje, enorme en efecto acumulado, y difícil de medir directamente. Las campañas con trampas de sedimento y flotadores autónomos han mejorado mucho las estimaciones, pero el margen de incertidumbre sigue siendo amplio.'],
     ref:'Boyd, P. W., Claustre, H., Levy, M., Siegel, D. A., & Weber, T. (2019). Multi-faceted particle pumps drive carbon sequestration in the ocean. Nature, 568(7752), 327-335. https://doi.org/10.1038/s41586-019-1098-2'},

    {slug:'quitosano-hongos', cat:'biot', type:'tecnica', date:'28 mayo 2026', read:'7 min',
     title:'Quitosano y hongos de control biológico: hablar en volátiles',
     excerpt:'Un polisacárido del caparazón de los crustáceos que modifica lo que dos hongos usados frente a plagas emiten al aire.',
     bites:['El quitosano se obtiene de la quitina del caparazón de crustáceos, un residuo abundante del sector pesquero.','Añadirlo al medio altera el perfil de compuestos volátiles que emiten Pochonia chlamydosporia y Purpureocillium lilacinum.','Esos volátiles no son un subproducto: participan en la interacción del hongo con plantas y plagas.'],
     body:[
       'La quitina es el segundo biopolímero más abundante del planeta y, en buena parte, acaba en el contenedor: caparazones de gamba, cangrejo y langostino. El quitosano es su derivado desacetilado, soluble y biológicamente activo, y ese origen residual es parte de su atractivo.',
       'Pochonia chlamydosporia y Purpureocillium lilacinum se usan como agentes de control biológico frente a nematodos fitoparásitos. Son hongos que colonizan la rizosfera y que, además de parasitar huevos, se comunican químicamente con su entorno.',
       'Cuando se añade quitosano al medio de cultivo, el perfil de compuestos orgánicos volátiles que emiten estos hongos cambia. Aparecen y desaparecen compuestos, y varían las proporciones, lo que sugiere una respuesta metabólica al polisacárido y no un simple efecto de dosis.',
       'La relevancia está en el uso agrícola: si el quitosano modula lo que el hongo emite, también puede modular su eficacia en campo. Es un ejemplo bastante limpio de biotecnología marina aplicada fuera del mar, con un residuo pesquero como punto de partida.'],
     ref:['Escudero, N., Lopez-Moya, F., Ghahremani, Z., Zavala-Gonzalez, E. A., Alaguero-Cordovilla, A., Ros-Ibañez, C., Lacasa, A., Sorribas, F. J., & Lopez-Llorca, L. V. (2017). Chitosan increases tomato root colonization by Pochonia chlamydosporia and their combination reduces root-knot nematode damage. Frontiers in Plant Science, 8, 1415. https://doi.org/10.3389/fpls.2017.01415']},

    {slug:'microplasticos-seychelles', cat:'eco', type:'noticia', date:'15 mayo 2026', read:'10 min',
     title:'Microplásticos en islas remotas: lo que cuenta el Raman',
     excerpt:'Muestras ambientales de las Seychelles analizadas con espectroscopía Raman: qué polímeros aparecen lejos de cualquier ciudad.',
     bites:['La espectroscopía Raman identifica el polímero de partículas muy pequeñas, donde la inspección visual ya no sirve.','Las islas remotas acumulan plástico que no han generado: llega por corrientes y por la pesca.','Lo que se cuenta depende del tamaño mínimo que el método puede detectar; sin ese dato, las cifras no son comparables.'],
     body:[
       'Contar microplásticos parece sencillo hasta que se hace. Bajo la lupa, muchas partículas sospechosas resultan ser fibras naturales o restos minerales, y muchas partículas reales pasan desapercibidas por tamaño o color.',
       'La espectroscopía Raman resuelve buena parte de ese problema: mide cómo dispersa la luz una partícula y devuelve una huella espectral que se compara con una biblioteca de polímeros. Con ella se puede decir si aquello es polietileno, polipropileno o poliéster, y no solo "plástico".',
       'Aplicado a muestras de las Seychelles, el ejercicio tiene un componente casi incómodo: son islas con poca población y una industria mínima, y aun así aparecen polímeros de uso masivo y restos asociados a artes de pesca. Lo que llega, llega por mar.',
       'La lección metodológica es tan importante como la ambiental. Las cifras de abundancia solo son comparables si se declara el tamaño mínimo detectable, el método de separación y el criterio de identificación. Sin eso, dos estudios del mismo lugar pueden diferir en un orden de magnitud sin que ninguno esté equivocado.'],
     ref:'Araujo, C. F., Nolasco, M. M., Ribeiro, A. M. P., & Ribeiro-Claro, P. J. A. (2018). Identification of microplastics using Raman spectroscopy: Latest developments and future prospects. Water Research, 142, 426-440. https://doi.org/10.1016/j.watres.2018.05.060'},

    {slug:'ficobiliproteinas', cat:'quim', type:'tecnica', date:'30 abril 2026', read:'6 min',
     title:'Ficobiliproteínas: el color que las algas le venden a la industria',
     excerpt:'Pigmentos fluorescentes de cianobacterias y algas rojas que acabaron como colorante alimentario y como reactivo de laboratorio.',
     bites:['Las ficobiliproteínas captan luz en longitudes de onda que la clorofila aprovecha mal.','Su fluorescencia intensa las convirtió en marcadores estándar en citometría de flujo.','El cuello de botella industrial no es producirlas, es estabilizarlas.'],
     body:[
       'En el agua, la luz roja se extingue en los primeros metros y lo que queda abajo es azul y verde. Las cianobacterias y las algas rojas resolvieron ese problema con ficobiliproteínas: complejos proteína-pigmento que absorben justo donde la clorofila es ineficaz y transfieren esa energía al centro de reacción.',
       'La ficocianina es azul; la ficoeritrina, rosa. Ambas son intensamente fluorescentes, y eso les abrió una segunda vida fuera de la fotosíntesis: como marcadores en citometría de flujo y en inmunoensayos, donde su brillo supera al de muchos fluoróforos sintéticos.',
       'En paralelo, la ficocianina se ha ganado un hueco como colorante alimentario natural, sobre todo en productos que buscan evitar los azules sintéticos. La producción a partir de Arthrospira a escala industrial ya está resuelta.',
       'El problema real es la estabilidad. Son proteínas: el calor, la luz y el pH ácido las degradan y el color se va. Buena parte de la investigación aplicada actual no busca producir más, sino encapsularlas y formularlas para que aguanten el proceso y la vida útil del producto.'],
     ref:['Pagels, F., Guedes, A. C., Amaro, H. M., Kijjoa, A., & Vasconcelos, V. (2019). Phycobiliproteins from cyanobacteria: Chemistry and biotechnological applications. Biotechnology Advances, 37(3), 422-443. https://doi.org/10.1016/j.biotechadv.2019.02.010']},

    {slug:'tiburon-peregrino', cat:'bio', type:'noticia', date:'18 abril 2026', read:'8 min',
     title:'El tiburón peregrino en el Mediterráneo: avistamientos y datos',
     excerpt:'El segundo pez más grande del mundo se alimenta de plancton y aparece cada primavera frente a la costa. Qué sabemos y qué no.',
     bites:['Cetorhinus maximus puede superar los 8 metros y se alimenta filtrando zooplancton.','Los avistamientos costeros se concentran en primavera, cuando florece su alimento.','La ciencia ciudadana ha multiplicado los registros, pero un avistamiento no equivale a un individuo.'],
     body:[
       'Cada primavera reaparece la misma noticia con la misma foto borrosa: una aleta grande cerca de la costa. Casi siempre es Cetorhinus maximus, el tiburón peregrino, un animal que puede pasar de los ocho metros y que se alimenta exclusivamente de plancton.',
       'Su biología explica el calendario. Filtra grandes volúmenes de agua para capturar zooplancton, así que sigue las concentraciones de alimento; cuando el plancton florece cerca de la costa, el tiburón se acerca a la costa. No hay nada más detrás del titular.',
       'Los datos mediterráneos son escasos comparados con los del Atlántico nororiental. Las series históricas provienen en buena parte de capturas accidentales, y los registros recientes dependen mucho de avistamientos oportunistas y de redes de ciencia ciudadana.',
       'Ese es también su límite. Un avistamiento no es un individuo: sin marcaje o identificación fotográfica no se puede saber si son diez animales o el mismo diez veces. Para una especie catalogada como amenazada, esa diferencia no es menor a la hora de estimar tendencias.'],
     ref:'Sims, D. W. (2008). Sieving a living: A review of the biology, ecology and conservation status of the plankton-feeding basking shark Cetorhinus maximus. Advances in Marine Biology, 54, 171-220. https://doi.org/10.1016/S0065-2881(08)00003-5'}
  ];

  const BIO = [
   'Me llamo Alejandro Galán, soy graduado en Ciencias del Mar y acabo de terminar el Máster en Biotecnología para la Salud y la Sostenibilidad en la Universidad de Alicante. Entre ambas etapas, mi formación ha ido de lo más amplio del océano, ecosistemas, especies, dinámicas marinas, a lo más pequeño y aplicado: microorganismos, biomoléculas, procesos biotecnológicos con potencial real para la salud y la sostenibilidad.',
   'Durante el grado participé en un proyecto de investigación sobre microplásticos en islas remotas, analizando muestras ambientales de las Seychelles mediante espectroscopía Raman en el Parque Científico de Alicante, la cual fue mi primera toma de contacto con cómo el laboratorio puede responder preguntas muy concretas sobre el impacto humano en el mar. Mi TFG fue un paso más allá: estudié cómo el quitosano, un polisacárido derivado del caparazón de los crustáceos, afecta a dos hongos usados como agentes de control biológico frente a plagas, Pochonia chlamydosporia y Purpureocillium lilacinum, analizando los compuestos volátiles que emiten.',
   'Ya en el máster, mi trabajo se ha orientado hacia la biotecnología marina aplicada a la acuicultura. En el laboratorio de Microbiología de la UA trabajé en el aislamiento y caracterización de bacterias del género Vibrio en muestras costeras de Alicante, combinando cultivo selectivo en medio TCBS con confirmación molecular por PCR. Esa línea de trabajo desembocó en mi Trabajo de Fin de Máster, donde evalué cómo la dieta y el tratamiento con luz ultravioleta del agua de cultivo afectan a la microbiota de Hediste diversicolor, un poliqueto con potencial como ingrediente en piensos acuícolas, mediante secuenciación completa del gen 16S ARNr con tecnología PacBio.',
   'Fuera del laboratorio, también me acerco al mar buceando; siempre he dicho que soy más de aleta que de bota. Tengo las titulaciones Advanced Open Water y Enriched Air Diver, las cuales me permiten un contacto directo con el ecosistema que estudio desde el laboratorio.',
   'BlueBioBites nace de las ganas de no dejar esa lectura científica en la carpeta del ordenador. Terminado el máster, sigo leyendo artículos por gusto — y este espacio es la forma de convertir esa costumbre en algo que también le sirva a otra persona.',
   'Aquí no vas a encontrar titulares sensacionalistas ni promesas de "revolucionar" nada. Solo ciencia marina explicada con el mismo rigor con el que se lee en el laboratorio o en el barco, pero sin la jerga que sobra.',
   'Además de los artículos, voy recopilando charlas, congresos y eventos sobre biología, biotecnología y microbiología marina en Alicante, Elche, Murcia y alrededores, porque parte de la ciencia también pasa por estar ahí, en persona.'
  ];

  const EVENTS = [
   {day:'18', month:'sep', year:'2026', type:'Charla', title:'Microbiota y acuicultura: del laboratorio al pienso', place:'Aula Magna, Facultad de Ciencias', org:'Universidad de Alicante', time:'18:00', url:'#', upcoming:true},
   {day:'02', month:'oct', year:'2026', type:'Congreso', title:'III Jornadas de Biotecnología Azul', place:'Edificio Altet', org:'Universidad Miguel Hernández, Elche', time:'09:30', url:'#', upcoming:true},
   {day:'21', month:'oct', year:'2026', type:'Taller', title:'Identificación molecular de Vibrio spp. en muestras costeras', place:'Centro Oceanográfico de Murcia', org:'IEO-CSIC', time:'16:00', url:'#', upcoming:true},
   {day:'14', month:'nov', year:'2026', type:'Charla', title:'Microplásticos: del muestreo al espectro Raman', place:'Sede Ciudad de Alicante', org:'Universidad de Alicante', time:'19:00', url:'#', upcoming:true},
   {day:'27', month:'mar', year:'2026', type:'Congreso', title:'Encuentro de Jóvenes Investigadores del Mar', place:'Facultad de Ciencias del Mar', org:'Universidad de Alicante', time:'', url:'#', upcoming:false},
   {day:'12', month:'feb', year:'2026', type:'Taller', title:'Introducción al análisis de amplicones 16S', place:'Parque Científico de Alicante', org:'PCA', time:'', url:'#', upcoming:false},
   {day:'05', month:'dic', year:'2025', type:'Charla', title:'Poliquetos, residuos y economía circular en acuicultura', place:'Campus de Santiago Bernabéu', org:'UPCT, Cartagena', time:'', url:'#', upcoming:false}
  ];

  const SEED_COMMENTS = {
    general: [
      {name:'Marta R.', when:'hace 3 días', color:'#17A398', text:'Justo estoy con TCBS en prácticas y lo del viraje del color me ha aclarado bastante. ¿Habrá segunda parte con la PCR?'},
      {name:'Jorge P.', when:'hace 1 semana', color:'#0B3D57', text:'¿Añadirás eventos de Murcia? En la UPCT hay un ciclo de acuicultura este otoño que encajaría bien.'}
    ],
    'vibrio-tcbs': [
      {name:'Lucía M.', when:'hace 5 días', color:'#7B5EA7', text:'Muy claro lo de que el color no es diagnóstico. En clase se explica al revés y luego pasa lo que pasa.'}
    ],
    'pacbio-16s': [
      {name:'Dani S.', when:'hace 2 semanas', color:'#C9558B', text:'¿Merece la pena el coste extra de lectura larga para un TFM, o compensa quedarse en V3-V4?'}
    ]
  };

  const NAV_ITEMS = [['inicio','Inicio'],['sobre','Sobre mí'],['articulos','Artículos'],['agenda','Agenda']];
  const PER_PAGE = 6;

  /* ---------------------------------------------------------------- */
  /* State                                                             */
  /* ---------------------------------------------------------------- */

  const state = {
    page: 'inicio', slug: null, cats: [], types: [], query: '', pageNum: 1,
    searchOpen: false, menuOpen: false, draft: '', email: '', subscribed: false,
    comments: JSON.parse(JSON.stringify(SEED_COMMENTS))
  };

  let suppressHashHandling = false;

  /* ---------------------------------------------------------------- */
  /* Helpers                                                           */
  /* ---------------------------------------------------------------- */

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function deco(a) {
    const c = CATS[a.cat];
    const t = TYPES[a.type];
    return Object.assign({}, a, {
      catName: c.name, catShort: c.short, accent: c.accent, bgLight: c.bgLight,
      dark: c.dark, emoji: c.emoji, tintA: c.tintA, tintB: c.tintB,
      typeLabel: t.label, typeEmoji: t.emoji, typeAccent: t.accent, typeBgLight: t.bgLight, typeDark: t.dark
    });
  }

  function filteredArticles() {
    const q = state.query.trim().toLowerCase();
    return ARTICLES.filter(a => {
      if (state.cats.length && state.cats.indexOf(a.cat) === -1) return false;
      if (state.types.length && state.types.indexOf(a.type) === -1) return false;
      if (!q) return true;
      return (a.title + ' ' + a.excerpt + ' ' + CATS[a.cat].name).toLowerCase().indexOf(q) !== -1;
    });
  }

  function currentArticle() {
    return ARTICLES.find(a => a.slug === state.slug) || ARTICLES[0];
  }

  function commentsKey() {
    return state.page === 'articulo' ? currentArticle().slug : 'general';
  }

  function parseHash() {
    const h = (location.hash || '').replace(/^#\/?/, '');
    if (!h) return {page: 'inicio', slug: null};
    const parts = h.split('/');
    if (parts[0] === 'articulo' && parts[1]) return {page: 'articulo', slug: decodeURIComponent(parts[1])};
    if (['sobre', 'articulos', 'agenda', 'inicio'].indexOf(parts[0]) !== -1) return {page: parts[0], slug: null};
    return {page: 'inicio', slug: null};
  }

  function syncHash() {
    const target = state.page === 'inicio' ? '#/'
      : state.page === 'articulo' ? '#/articulo/' + encodeURIComponent(state.slug)
      : '#/' + state.page;
    suppressHashHandling = true;
    location.hash = target;
  }

  function go(page, extra) {
    Object.assign(state, {page, menuOpen: false, draft: ''}, extra || {});
    syncHash();
    window.scrollTo(0, 0);
    render();
  }

  function pageTitle() {
    switch (state.page) {
      case 'sobre': return 'Sobre mí — BlueBioBites';
      case 'articulos': return 'Artículos — BlueBioBites';
      case 'articulo': return currentArticle().title + ' — BlueBioBites';
      case 'agenda': return 'Agenda — BlueBioBites';
      default: return 'BlueBioBites — El mar, explicado a bocados';
    }
  }

  /* ---------------------------------------------------------------- */
  /* Render: header / footer                                          */
  /* ---------------------------------------------------------------- */

  function renderHeader() {
    const navItem = (id, label, mobile) => {
      const active = state.page === id || (id === 'articulos' && state.page === 'articulo');
      const bar = active ? '#17A398' : 'transparent';
      const op = state.page === id ? '1' : '.62';
      return mobile
        ? `<span data-action="nav" data-page="${id}" role="button" tabindex="0" style="cursor:pointer;padding:11px 4px;font-size:16px;opacity:${op}">${esc(label)}</span>`
        : `<span data-action="nav" data-page="${id}" role="button" tabindex="0" style="cursor:pointer;padding-bottom:3px;border-bottom:2px solid ${bar};opacity:${op}">${esc(label)}</span>`;
    };

    return `
<header style="position:sticky;top:0;z-index:20;background:#0B3D57;color:#fff">
  <div class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:14px;padding-bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:24px">
    <div data-action="nav" data-page="inicio" role="button" tabindex="0" style="display:flex;align-items:center;gap:12px;cursor:pointer"><img src="assets/logo.png" alt="BlueBioBites" style="width:40px;display:block;filter:brightness(0) invert(1)"><span style="font-size:19px;letter-spacing:-.01em">bluebiobites</span></div>
    <nav class="bbb-nav" style="gap:30px;font-size:15px">
      ${NAV_ITEMS.map(([id, label]) => navItem(id, label, false)).join('')}
    </nav>
    <div style="display:flex;align-items:center;gap:10px">
      ${state.searchOpen ? `<input data-bind="query" value="${esc(state.query)}" placeholder="Buscar artículos…" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.28);color:#fff;border-radius:999px;padding:9px 16px;font-size:14px;outline:none;width:210px">` : ''}
      <div data-action="toggle-search" role="button" tabindex="0" style="cursor:pointer;flex:none;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.3);display:grid;place-items:center;font-size:15px">⌕</div>
      <div class="bbb-burger" data-action="toggle-menu" role="button" tabindex="0" style="cursor:pointer;flex:none;width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.3);place-items:center;font-size:15px">☰</div>
    </div>
  </div>
  ${state.menuOpen ? `
  <div style="border-top:1px solid rgba(255,255,255,.15);padding:10px 22px 16px;display:flex;flex-direction:column;gap:2px">
    ${NAV_ITEMS.map(([id, label]) => navItem(id, label, true)).join('')}
  </div>` : ''}
</header>`;
  }

  function renderFooter() {
    return `
<footer style="background:#08293f;color:#fff">
  <div class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:46px;padding-bottom:22px">
    <div class="bbb-row bbb-row-center" style="display:flex;gap:32px;padding:26px 28px;margin-bottom:38px;border:1px solid rgba(255,255,255,.18);border-radius:14px;background:rgba(23,163,152,.1)">
      <div style="flex:1;min-width:240px">
        <div style="font-size:19px;letter-spacing:-.01em">Un bocado al mes en tu correo</div>
        <p style="margin:6px 0 0;font-size:14.5px;line-height:1.55;opacity:.72;max-width:46ch">Los artículos nuevos y los eventos de la agenda. Sin spam, y te puedes dar de baja cuando quieras.</p>
      </div>
      ${state.subscribed ? `
      <div style="flex:none;display:flex;align-items:center;gap:10px;font-size:15px;color:#17A398">✓ <span style="color:#fff;opacity:.85">Apuntado. Gracias.</span></div>` : `
      <div style="flex:none;display:flex;flex-direction:column;gap:6px">
        <form class="bbb-row" data-newsletter-form action="https://buttondown.com/api/emails/embed-subscribe/bluebiobites" method="post" target="bbb-subscribe-frame" style="display:flex;gap:10px">
          <input type="email" name="email" required data-bind="email" value="${esc(state.email)}" placeholder="tu@correo.com" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.28);color:#fff;border-radius:8px;padding:13px 16px;font-size:14.5px;outline:none;width:250px">
          <button type="submit" style="cursor:pointer;background:#F2665E;color:#fff;border:none;padding:13px 26px;border-radius:8px;font-size:14.5px;text-align:center;white-space:nowrap">Suscribirme</button>
        </form>
        <a href="https://buttondown.com/refer/bluebiobites" target="_blank" rel="noopener" style="font-size:11px;color:#fff;opacity:.45;text-decoration:none;align-self:flex-end">Powered by Buttondown.</a>
      </div>`}
    </div>
    <div class="bbb-3col bbb-3col-footer" style="display:grid;gap:40px">
      <div><img src="assets/logo.png" alt="" style="width:64px;display:block;filter:brightness(0) invert(1);opacity:.9"><p style="margin:14px 0 0;font-size:15px;opacity:.75"><i>El mar, explicado a bocados.</i></p></div>
      <div style="display:flex;flex-direction:column;gap:9px;font-size:14.5px">
        ${NAV_ITEMS.map(([id, label]) => `<span data-action="nav" data-page="${id}" role="button" tabindex="0" style="cursor:pointer;opacity:.8">${esc(label)}</span>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:9px;font-size:14.5px">
        <a href="https://www.instagram.com/bluebiobites" target="_blank" rel="noopener" style="color:#fff;opacity:.8;text-decoration:none">Instagram @bluebiobites</a>
        <a href="https://www.linkedin.com/in/alejandro-galan" target="_blank" rel="noopener" style="color:#fff;opacity:.8;text-decoration:none">LinkedIn · Alejandro Galán</a>
        <a href="mailto:hola@bluebiobites.com" style="color:#fff;opacity:.8;text-decoration:none">hola@bluebiobites.com</a>
      </div>
    </div>
    <div style="margin-top:34px;padding-top:16px;border-top:1px solid rgba(255,255,255,.15);font-size:13px;opacity:.6">© 2026 BlueBioBites</div>
  </div>
</footer>`;
  }

  function renderComments(key) {
    const list = state.comments[key] || [];
    return `
<div style="display:flex;flex-direction:column;gap:14px${state.page === 'articulo' ? '' : ';max-width:780px'}">
  ${list.map(c => `
  <div style="display:flex;gap:14px"><span style="flex:none;width:38px;height:38px;border-radius:50%;color:#fff;display:grid;place-items:center;font-size:14px;background:${c.color}">${esc(c.name.charAt(0))}</span><div style="background:${state.page === 'articulo' ? '#F7F1E3' : '#fff'};border-radius:4px 14px 14px 14px;padding:14px 18px"><div style="font-size:13.5px;color:#0B3D57;margin-bottom:5px">${esc(c.name)} · ${esc(c.when)}</div><p style="margin:0;font-size:14.5px;line-height:1.6;color:#12293A;opacity:.85">${esc(c.text)}</p></div></div>`).join('')}
  <div class="bbb-row" style="display:flex;gap:12px;margin-top:${state.page === 'articulo' ? '6' : '8'}px">
    <input data-bind="draft" value="${esc(state.draft)}" placeholder="Escribe un comentario…" style="flex:1;background:#fff;border:1px solid #e2ddd2;border-radius:10px;padding:14px 18px;font-size:14.5px;color:#12293A;outline:none">
    <span data-action="submit-comment" role="button" tabindex="0" style="cursor:pointer;background:#0B3D57;color:#fff;padding:14px 26px;border-radius:10px;font-size:14.5px;text-align:center">Enviar</span>
  </div>
</div>`;
  }

  /* ---------------------------------------------------------------- */
  /* Render: pages                                                     */
  /* ---------------------------------------------------------------- */

  function renderInicio() {
    const featured = deco(ARTICLES[0]);
    const secondary = ARTICLES.slice(1, 4).map(deco);
    const nextEvent = EVENTS.filter(e => e.upcoming)[0];

    return `
<main>
  <div style="position:relative;background:linear-gradient(180deg,#0B3D57 0%,#0a3550 55%,#08293f 100%);color:#fff;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(circle at 18% 28%,rgba(23,163,152,.28),transparent 44%),radial-gradient(circle at 84% 74%,rgba(242,102,94,.16),transparent 46%)"></div>
    <div style="position:absolute;left:60%;top:12%;width:10px;height:10px;border-radius:50%;background:#17A398;opacity:.7"></div>
    <div style="position:absolute;left:52%;top:62%;width:18px;height:18px;border-radius:50%;background:#17A398;opacity:.28"></div>
    <div style="position:absolute;left:92%;top:38%;width:7px;height:7px;border-radius:50%;background:#17A398;opacity:.55"></div>
    <div class="bbb-pad bbb-hero" style="position:relative;max-width:1180px;margin:0 auto;padding-top:84px;padding-bottom:92px;display:grid;gap:56px;align-items:center">
      <div>
        <div style="font-size:12px;letter-spacing:.2em;color:#17A398;margin-bottom:22px">Por Alejandro Galán, Ciencias del Mar + Máster en Biotecnología (UA).</div>
        <h1 class="bbb-h1" style="margin:0;line-height:1;letter-spacing:-.035em;font-weight:500;text-wrap:balance;font-style:italic;text-decoration-line:none">El mar,<br>explicado a bocados.</h1>
        <p style="margin:26px 0 0;max-width:52ch;font-size:19px;line-height:1.6;opacity:.78;text-wrap:pretty">Ciencias marinas contadas con el rigor del laboratorio y sin la jerga que sobra.&nbsp;</p>
        <div style="display:flex;gap:14px;margin-top:36px;align-items:center;flex-wrap:wrap">
          <span data-action="nav" data-page="articulos" role="button" tabindex="0" style="cursor:pointer;background:#F2665E;color:#fff;padding:15px 30px;border-radius:6px;font-size:15px">Ver artículos</span>
          <span data-action="nav" data-page="sobre" role="button" tabindex="0" style="cursor:pointer;border:1px solid rgba(255,255,255,.35);padding:15px 26px;border-radius:6px;font-size:15px">Sobre mí</span>
        </div>
      </div>
      <div style="justify-self:center;position:relative;width:400px;max-width:100%;aspect-ratio:1;display:grid;place-items:center">
        <div style="position:absolute;inset:0;border-radius:50%;background-color:#FFFFFFEB;width:403px;height:406px"></div>
        <img src="assets/logo.png" alt="BlueBioBites" style="position:relative;width:78%;display:block">
      </div>
    </div>
  </div>

  <div class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:66px;padding-bottom:0">
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:20px;margin-bottom:22px">
      <h2 style="margin:0;font-size:15px;letter-spacing:.16em;font-weight:500;color:#17A398">últimos artículos</h2>
      <span data-action="nav" data-page="articulos" role="button" tabindex="0" style="cursor:pointer;font-size:14px;color:#0B3D57">Ver todos →</span>
    </div>
    <div class="bbb-feat" style="display:grid;gap:26px">
      <div data-action="open-article" data-slug="${esc(featured.slug)}" role="button" tabindex="0" style="cursor:pointer;border:2px solid #12293A;border-radius:16px;overflow:hidden">
        <div style="height:280px;background:repeating-linear-gradient(135deg,${featured.tintA} 0 12px,${featured.tintB} 12px 24px);display:grid;place-items:center"><span style="font:11px ui-monospace,Menlo,monospace;color:${featured.accent}">imagen destacada · 3:2</span></div>
        <div style="padding:22px 26px 26px">
          <div style="display:inline-flex;align-items:center;gap:7px;border-radius:999px;padding:5px 12px 5px 5px;font-size:12.5px;background:${featured.bgLight};color:${featured.dark}"><span style="width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:12px;background:${featured.accent}">${featured.emoji}</span>${esc(featured.catName)}</div>
          <h3 style="margin:14px 0 10px;font-size:33px;line-height:1.13;letter-spacing:-.025em;font-weight:500;color:#12293A;text-wrap:balance">${esc(featured.title)}</h3>
          <p style="margin:0;font-size:16px;line-height:1.6;color:#12293A;opacity:.72">${esc(featured.excerpt)}</p>
          <div style="margin-top:16px;font-size:13px;color:#12293A;opacity:.5">${esc(featured.date)} · ${esc(featured.typeLabel)} · ${esc(featured.read)} de lectura</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:22px">
        ${secondary.map(a => `
        <div data-action="open-article" data-slug="${esc(a.slug)}" role="button" tabindex="0" style="cursor:pointer;border:1px solid #e2ddd2;border-radius:14px;overflow:hidden;display:flex">
          <div style="flex:none;width:108px;background:repeating-linear-gradient(135deg,${a.tintA} 0 10px,${a.tintB} 10px 20px)"></div>
          <div style="padding:15px 17px">
            <div style="display:inline-flex;align-items:center;gap:6px;font-size:12px;margin-bottom:6px;color:${a.dark}"><span style="width:18px;height:18px;border-radius:50%;display:grid;place-items:center;font-size:10px;background:${a.accent}">${a.emoji}</span>${esc(a.catShort)}</div>
            <h3 style="margin:0 0 5px;font-size:17px;line-height:1.25;font-weight:500;color:#12293A">${esc(a.title)}</h3>
            <div style="font-size:12.5px;color:#12293A;opacity:.5">${esc(a.date)} · ${esc(a.typeLabel)}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:54px;padding-bottom:60px">
    <div class="bbb-row" style="display:flex;border-radius:14px;overflow:hidden;border:1px solid #0B3D57">
      <div style="flex:none;width:140px;background:#0B3D57;color:#fff;display:grid;place-content:center;text-align:center;padding:26px 0">
        <div style="font-size:44px;line-height:1">${esc(nextEvent.day)}</div><div style="font-size:13px;letter-spacing:.16em;opacity:.8">${esc(nextEvent.month)} ${esc(nextEvent.year)}</div>
      </div>
      <div style="flex:1;padding:26px 30px;background:#F7F1E3">
        <div style="font-size:12px;letter-spacing:.14em;color:#17A398;margin-bottom:8px">Próximo evento · ${esc(nextEvent.type)}</div>
        <div style="font-size:24px;color:#12293A;letter-spacing:-.015em">${esc(nextEvent.title)}</div>
        <div style="font-size:14.5px;color:#12293A;opacity:.65;margin-top:6px">${esc(nextEvent.place)} · ${esc(nextEvent.time)}</div>
      </div>
      <div style="flex:none;display:grid;place-items:center;padding:22px 30px;background:#F7F1E3"><span data-action="nav" data-page="agenda" role="button" tabindex="0" style="cursor:pointer;background:#F2665E;color:#fff;padding:13px 24px;border-radius:6px;font-size:14.5px;white-space:nowrap">Ver agenda</span></div>
    </div>
  </div>

  <div style="background:#F7F1E3">
    <div class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:58px;padding-bottom:64px">
      <h2 style="margin:0 0 6px;font-size:15px;letter-spacing:.16em;font-weight:500;color:#17A398">comentarios</h2>
      <p style="margin:0 0 24px;font-size:16px;color:#12293A;opacity:.7">El buzón general del blog: dudas, correcciones y temas que te gustaría leer.</p>
      ${renderComments('general')}
    </div>
  </div>
</main>`;
  }

  function renderSobre() {
    return `
<main class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:64px;padding-bottom:80px">
  <div style="display:flex;flex-direction:column;align-items:center;text-align:center">
    <div style="width:190px;height:190px;border-radius:50%;overflow:hidden;border:3px solid #17A398"><img src="assets/foto.png" alt="Alejandro Galán" style="width:100%;height:100%;object-fit:cover;display:block"></div>
    <h1 style="margin:26px 0 0;font-size:44px;font-weight:500;letter-spacing:-.03em;color:#0B3D57">Alejandro Galán Galián</h1>
    <p style="margin:10px 0 0;font-size:17px;color:#12293A;opacity:.7">Ciencias del Mar · Biotecnología para la Salud y la Sostenibilidad</p>
    <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;justify-content:center">
      <span style="border:1px solid #cfe9e5;background:#E1F5EE;color:#085041;border-radius:999px;padding:8px 16px;font-size:13.5px">Grado en Ciencias del Mar</span>
      <span style="border:1px solid #f6d5d1;background:#FCEBE9;color:#7A2E28;border-radius:999px;padding:8px 16px;font-size:13.5px">Máster en Biotecnología</span>
    </div>
  </div>
  <div style="max-width:66ch;margin:48px auto 0;display:flex;flex-direction:column;gap:22px">
    ${BIO.map(t => `<p style="margin:0;font-size:17.5px;line-height:1.75;color:#12293A;opacity:.88;text-wrap:pretty">${esc(t)}</p>`).join('')}
    <a href="mailto:hola@bluebiobites.com" style="align-self:flex-start;margin-top:14px;background:#F2665E;color:#fff;padding:14px 30px;border-radius:6px;font-size:15px;text-decoration:none">Escríbeme</a>
  </div>
</main>`;
  }

  function renderArticulos() {
    const list = filteredArticles();
    const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    const pageNum = Math.min(state.pageNum, totalPages);
    const pageItems = list.slice((pageNum - 1) * PER_PAGE, pageNum * PER_PAGE).map(deco);
    const resultLabel = list.length === ARTICLES.length
      ? ARTICLES.length + ' artículos publicados'
      : list.length + ' de ' + ARTICLES.length + ' artículos';
    const noResults = list.length === 0;

    const catRows = Object.keys(CATS).map(id => {
      const on = state.cats.indexOf(id) !== -1;
      const c = CATS[id];
      return `
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px 8px;border-radius:9px;font-size:13.5px;line-height:1.25;background:${on ? c.bgLight : 'transparent'};color:${on ? c.dark : '#12293A'}">
        <input type="checkbox" ${on ? 'checked' : ''} data-cat-toggle="${id}" style="accent-color:${c.accent};width:15px;height:15px;flex:none">
        <span style="width:24px;height:24px;flex:none;border-radius:50%;display:grid;place-items:center;font-size:12px;background:${c.accent}">${c.emoji}</span>
        ${esc(c.name)}
      </label>`;
    }).join('');

    const typeRows = Object.keys(TYPES).map(id => {
      const on = state.types.indexOf(id) !== -1;
      const t = TYPES[id];
      return `
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px 8px;border-radius:9px;font-size:13.5px;line-height:1.25;background:${on ? t.bgLight : 'transparent'};color:${on ? t.dark : '#12293A'}">
        <input type="checkbox" ${on ? 'checked' : ''} data-type-toggle="${id}" style="accent-color:${t.accent};width:15px;height:15px;flex:none">
        <span style="width:24px;height:24px;flex:none;border-radius:50%;display:grid;place-items:center;font-size:12px;background:${t.accent}">${t.emoji}</span>
        ${esc(t.label)}s
      </label>`;
    }).join('');

    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return `
<main class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:52px;padding-bottom:76px">
  <h1 style="margin:0 0 6px;font-size:44px;font-weight:500;letter-spacing:-.03em;color:#0B3D57">Artículos</h1>
  <p style="margin:0 0 32px;font-size:16.5px;color:#12293A;opacity:.7">${esc(resultLabel)}</p>
  <div class="bbb-arts" style="display:grid;gap:40px;align-items:start">
    <aside class="bbb-side" style="top:96px;border:1px solid #e2ddd2;border-radius:14px;padding:20px;background:#fff">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px">
        <span style="font-size:12px;letter-spacing:.16em;color:#17A398">Categorías</span>
        <span data-action="clear-filters" role="button" tabindex="0" style="cursor:pointer;font-size:12.5px;color:#0B3D57;opacity:.7">Limpiar filtros</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:3px">${catRows}</div>
      <div style="font-size:12px;letter-spacing:.16em;color:#17A398;margin:22px 0 14px">Tipo de contenido</div>
      <div style="display:flex;flex-direction:column;gap:3px">${typeRows}</div>
    </aside>
    <div>
      <div class="bbb-list" style="display:grid;gap:26px">
        ${pageItems.map(a => `
        <div data-action="open-article" data-slug="${esc(a.slug)}" role="button" tabindex="0" style="cursor:pointer;border:1px solid #e2ddd2;border-radius:14px;overflow:hidden;background:#fff;display:flex;flex-direction:column">
          <div style="height:168px;background:repeating-linear-gradient(135deg,${a.tintA} 0 12px,${a.tintB} 12px 24px);display:grid;place-items:center"><span style="font:11px ui-monospace,Menlo,monospace;color:${a.accent}">imagen destacada</span></div>
          <div style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:10px;flex:1">
            <div style="display:inline-flex;align-self:flex-start;align-items:center;gap:7px;border-radius:999px;padding:5px 12px 5px 5px;font-size:12px;background:${a.bgLight};color:${a.dark}"><span style="width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:11px;background:${a.accent}">${a.emoji}</span>${esc(a.catName)}</div>
            <h3 style="margin:0;font-size:20px;line-height:1.24;font-weight:500;color:#12293A">${esc(a.title)}</h3>
            <p style="margin:0;font-size:14px;line-height:1.55;color:#12293A;opacity:.7;flex:1">${esc(a.excerpt)}</p>
            <div style="font-size:12.5px;color:#12293A;opacity:.5">${esc(a.date)} · ${esc(a.typeLabel)} · ${esc(a.read)}</div>
          </div>
        </div>`).join('')}
      </div>
      ${noResults ? `<div style="border:1px dashed #cfc8b8;border-radius:14px;padding:44px;text-align:center;color:#12293A;opacity:.6;font-size:15.5px">Ningún artículo coincide con los filtros. <span data-action="clear-filters" role="button" tabindex="0" style="cursor:pointer;color:#17A398">Limpiar filtros</span></div>` : ''}
      <div style="display:flex;gap:8px;justify-content:center;margin-top:38px">
        ${pages.map(n => `<span data-action="go-page" data-page-num="${n}" role="button" tabindex="0" style="cursor:pointer;min-width:40px;text-align:center;padding:10px 12px;border-radius:9px;font-size:14px;border:1px solid ${n === pageNum ? '#0B3D57' : '#e2ddd2'};background:${n === pageNum ? '#0B3D57' : '#fff'};color:${n === pageNum ? '#fff' : '#12293A'}">${n}</span>`).join('')}
      </div>
    </div>
  </div>
</main>`;
  }

  function renderArticulo() {
    const art = deco(currentArticle());
    const related = ARTICLES.filter(a => a.slug !== art.slug)
      .sort((a, b) => (b.cat === art.cat ? 1 : 0) - (a.cat === art.cat ? 1 : 0))
      .slice(0, 3).map(deco);

    return `
<main class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:36px;padding-bottom:80px">
  <span data-action="nav" data-page="articulos" role="button" tabindex="0" style="cursor:pointer;font-size:14px;color:#0B3D57;opacity:.7">← Todos los artículos</span>
  <article style="max-width:72ch;margin:26px auto 0">
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <span style="display:inline-flex;align-items:center;gap:7px;border-radius:999px;padding:5px 13px 5px 5px;font-size:12.5px;background:${art.bgLight};color:${art.dark}"><span style="width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:12px;background:${art.accent}">${art.emoji}</span>${esc(art.catName)}</span>
      <span style="display:inline-flex;align-items:center;gap:7px;border-radius:999px;padding:5px 13px 5px 5px;font-size:12.5px;background:${art.typeBgLight};color:${art.typeDark}"><span style="width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:12px;background:${art.typeAccent}">${art.typeEmoji}</span>${esc(art.typeLabel)}</span>
      <span style="font-size:13.5px;color:#12293A;opacity:.55">${esc(art.date)} · ${esc(art.read)} de lectura</span>
    </div>
    <h1 style="margin:20px 0 0;font-size:46px;line-height:1.08;letter-spacing:-.03em;font-weight:500;color:#0B3D57;text-wrap:balance">${esc(art.title)}</h1>
    <div style="margin-top:16px;display:flex;align-items:center;gap:11px">
      <span style="width:34px;height:34px;border-radius:50%;overflow:hidden;display:block"><img src="assets/foto.png" alt="" style="width:100%;height:100%;object-fit:cover;display:block"></span>
      <span style="font-size:14.5px;color:#12293A;opacity:.75">Por Alejandro Galán</span>
    </div>
    <div style="margin-top:30px;height:340px;border-radius:14px;background:repeating-linear-gradient(135deg,${art.tintA} 0 14px,${art.tintB} 14px 28px);display:grid;place-items:center"><span style="font:11px ui-monospace,Menlo,monospace;color:${art.accent}">imagen destacada</span></div>

    <div style="margin-top:32px;border:2px solid ${art.accent};border-radius:14px;padding:24px 26px;background:${art.bgLight}">
      <div style="font-size:12px;letter-spacing:.16em;margin-bottom:14px;color:${art.dark}">en bocados</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${art.bites.map(t => `<div style="display:flex;gap:12px;align-items:flex-start"><span style="flex:none;width:8px;height:8px;border-radius:50%;margin-top:8px;background:${art.accent}"></span><span style="font-size:16px;line-height:1.55;color:${art.dark}">${esc(t)}</span></div>`).join('')}
      </div>
    </div>

    <div style="margin-top:34px;display:flex;flex-direction:column;gap:22px">
      ${art.body.map(t => `<p style="margin:0;font-size:18px;line-height:1.75;color:#12293A;opacity:.9;text-wrap:pretty">${esc(t)}</p>`).join('')}
    </div>

    <div style="margin-top:38px;border:1px solid #e2ddd2;border-left:4px solid #0B3D57;border-radius:10px;padding:20px 24px;background:#F7F1E3">
      <div style="font-size:12px;letter-spacing:.16em;color:#17A398;margin-bottom:10px">${Array.isArray(art.ref) && art.ref.length > 1 ? 'referencias' : 'referencia'}</div>
      ${Array.isArray(art.ref)
        ? `<div style="display:flex;flex-direction:column;gap:12px">${art.ref.map((r, i) => `<p style="margin:0;font-size:15px;line-height:1.65;color:#12293A;opacity:.85">${art.ref.length > 1 ? `<span style="opacity:.55">${i + 1}. </span>` : ''}${esc(r)}</p>`).join('')}</div>`
        : `<p style="margin:0;font-size:15px;line-height:1.65;color:#12293A;opacity:.85">${esc(art.ref)}</p>`}
    </div>

    <div style="margin-top:44px">
      <h2 style="margin:0 0 6px;font-size:15px;letter-spacing:.16em;font-weight:500;color:#17A398">comentarios</h2>
      <p style="margin:0 0 20px;font-size:15px;color:#12293A;opacity:.65">¿Dudas o correcciones sobre este artículo?</p>
      ${renderComments(art.slug)}
    </div>
  </article>

  <div style="max-width:1180px;margin:56px auto 0;border-top:1px solid #e2ddd2;padding-top:32px">
    <h2 style="margin:0 0 20px;font-size:15px;letter-spacing:.16em;font-weight:500;color:#17A398">artículos relacionados</h2>
    <div class="bbb-3col bbb-3col-related" style="display:grid;gap:24px">
      ${related.map(a => `
      <div data-action="open-article" data-slug="${esc(a.slug)}" role="button" tabindex="0" style="cursor:pointer;border:1px solid #e2ddd2;border-radius:14px;overflow:hidden">
        <div style="height:110px;background:repeating-linear-gradient(135deg,${a.tintA} 0 10px,${a.tintB} 10px 20px)"></div>
        <div style="padding:15px 17px 17px">
          <div style="display:inline-flex;align-items:center;gap:6px;font-size:12px;margin-bottom:7px;color:${a.dark}"><span style="width:18px;height:18px;border-radius:50%;display:grid;place-items:center;font-size:10px;background:${a.accent}">${a.emoji}</span>${esc(a.catShort)}</div>
          <h3 style="margin:0 0 6px;font-size:16.5px;line-height:1.28;font-weight:500;color:#12293A">${esc(a.title)}</h3>
          <div style="font-size:12.5px;color:#12293A;opacity:.5">${esc(a.date)} · ${esc(a.typeLabel)}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</main>`;
  }

  function renderAgenda() {
    const upcoming = EVENTS.filter(e => e.upcoming);
    const past = EVENTS.filter(e => !e.upcoming);

    const row = (e, isUpcoming) => `
    <div class="bbb-row bbb-row-center" style="display:flex;gap:24px;border:1px solid ${isUpcoming ? '#e2ddd2' : '#ece8df'};border-radius:14px;padding:20px 24px${isUpcoming ? '' : ';background:#faf8f3'}">
      <div style="flex:none;width:78px;height:82px;border-radius:12px;background:${isUpcoming ? '#0B3D57' : '#e6e1d5'};color:${isUpcoming ? '#fff' : '#12293A'};display:grid;place-content:center;text-align:center;line-height:1.05${isUpcoming ? '' : ';opacity:.8'}"><div style="font-size:30px">${esc(e.day)}</div><div style="font-size:12px;letter-spacing:.1em${isUpcoming ? ';opacity:.85' : ''}">${esc(e.month)}</div></div>
      <div style="flex:1${isUpcoming ? '' : ';opacity:.72'}">
        <div style="font-size:12px;letter-spacing:.14em;color:${isUpcoming ? '#17A398' : '#12293A'}${isUpcoming ? '' : ';opacity:.6'};margin-bottom:6px">${esc(e.type)}</div>
        <div style="font-size:21px;color:#12293A;letter-spacing:-.015em">${esc(e.title)}</div>
        <div style="font-size:14px;color:#12293A;opacity:${isUpcoming ? '.65' : '.7'};margin-top:5px">${esc(e.place)} · ${esc(e.org)}</div>
      </div>
      ${isUpcoming
        ? `<a href="${esc(e.url)}" style="flex:none;background:#F2665E;color:#fff;padding:13px 26px;border-radius:6px;font-size:14.5px;text-decoration:none;white-space:nowrap">Inscribirse</a>`
        : `<span style="flex:none;border:1px solid #d9d3c4;color:#12293A;opacity:.6;padding:11px 22px;border-radius:6px;font-size:14px;white-space:nowrap">Finalizado</span>`}
    </div>`;

    return `
<main class="bbb-pad" style="max-width:1180px;margin:0 auto;padding-top:52px;padding-bottom:80px">
  <h1 style="margin:0 0 6px;font-size:44px;font-weight:500;letter-spacing:-.03em;color:#0B3D57">Agenda</h1>
  <p style="margin:0 0 40px;font-size:16.5px;color:#12293A;opacity:.7;max-width:60ch">Charlas, congresos y talleres sobre ciencia marina en Alicante, Elche, Murcia y alrededores. Eventos de ejemplo mientras se completa la agenda real.</p>

  <h2 style="margin:0 0 18px;font-size:15px;letter-spacing:.16em;font-weight:500;color:#17A398">próximos</h2>
  <div style="display:flex;flex-direction:column;gap:16px">${upcoming.map(e => row(e, true)).join('')}</div>

  <div style="height:1px;background:#d9d3c4;margin:52px 0 40px"></div>

  <h2 style="margin:0 0 18px;font-size:15px;letter-spacing:.16em;font-weight:500;color:#12293A;opacity:.5">pasados</h2>
  <div style="display:flex;flex-direction:column;gap:16px">${past.map(e => row(e, false)).join('')}</div>
</main>`;
  }

  function renderMain() {
    switch (state.page) {
      case 'sobre': return renderSobre();
      case 'articulos': return renderArticulos();
      case 'articulo': return renderArticulo();
      case 'agenda': return renderAgenda();
      default: return renderInicio();
    }
  }

  /* ---------------------------------------------------------------- */
  /* Render root + focus preservation                                 */
  /* ---------------------------------------------------------------- */

  function render() {
    document.title = pageTitle();
    const root = document.getElementById('app');
    root.innerHTML = renderHeader() + renderMain() + renderFooter();
  }

  function renderPreserveFocus() {
    const active = document.activeElement;
    let bind = null, selStart = null, selEnd = null;
    if (active && active.dataset && active.dataset.bind) {
      bind = active.dataset.bind;
      selStart = active.selectionStart;
      selEnd = active.selectionEnd;
    }
    render();
    if (bind) {
      const el = document.querySelector('[data-bind="' + bind + '"]');
      if (el) {
        el.focus();
        if (selStart != null && el.setSelectionRange) {
          try { el.setSelectionRange(selStart, selEnd); } catch (e) { /* ignore */ }
        }
      }
    }
  }

  /* ---------------------------------------------------------------- */
  /* Actions                                                           */
  /* ---------------------------------------------------------------- */

  function submitComment() {
    const t = state.draft.trim();
    if (!t) return;
    const key = commentsKey();
    state.comments[key] = (state.comments[key] || []).concat([
      {name: 'Tú', when: 'ahora mismo', color: '#F2665E', text: t}
    ]);
    state.draft = '';
    render();
  }

  /* ---------------------------------------------------------------- */
  /* Event delegation                                                  */
  /* ---------------------------------------------------------------- */

  function onClick(e) {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;
    if (action === 'nav') { go(el.dataset.page); return; }
    if (action === 'open-article') { go('articulo', {slug: el.dataset.slug}); return; }
    if (action === 'toggle-search') { state.searchOpen = !state.searchOpen; render(); return; }
    if (action === 'toggle-menu') { state.menuOpen = !state.menuOpen; render(); return; }
    if (action === 'clear-filters') { state.cats = []; state.types = []; state.query = ''; state.pageNum = 1; render(); return; }
    if (action === 'go-page') { state.pageNum = Number(el.dataset.pageNum); window.scrollTo(0, 0); render(); return; }
    if (action === 'submit-comment') { submitComment(); return; }
  }

  // The newsletter form posts for real to Buttondown, targeting a hidden
  // iframe so the visitor never leaves the page. We can't read the
  // cross-origin response, so "load" on that iframe is our only success
  // signal; awaitingNewsletterResponse gates against the iframe's own
  // initial about:blank load firing that same event.
  let awaitingNewsletterResponse = false;

  function onSubmit(e) {
    const form = e.target.closest('[data-newsletter-form]');
    if (!form) return;
    if ((state.email || '').trim().indexOf('@') <= 0) {
      e.preventDefault();
      return;
    }
    awaitingNewsletterResponse = true;
  }

  function onNewsletterFrameLoad() {
    if (!awaitingNewsletterResponse) return;
    awaitingNewsletterResponse = false;
    state.subscribed = true;
    render();
  }

  function onKeydown(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target.closest('[role="button"]');
    if (!el) return;
    if (e.target.tagName === 'INPUT') return;
    e.preventDefault();
    el.click();
  }

  function onInput(e) {
    const el = e.target;
    const bind = el.dataset.bind;
    if (!bind) return;
    if (bind === 'query') {
      state.query = el.value;
      state.page = 'articulos';
      state.pageNum = 1;
      syncHash();
      renderPreserveFocus();
    } else if (bind === 'draft') {
      state.draft = el.value;
    } else if (bind === 'email') {
      state.email = el.value;
    }
  }

  function onChange(e) {
    const el = e.target;
    const catId = el.dataset.catToggle;
    const typeId = el.dataset.typeToggle;
    if (catId) {
      const idx = state.cats.indexOf(catId);
      if (idx === -1) state.cats.push(catId); else state.cats.splice(idx, 1);
      state.pageNum = 1;
      render();
    } else if (typeId) {
      const idx = state.types.indexOf(typeId);
      if (idx === -1) state.types.push(typeId); else state.types.splice(idx, 1);
      state.pageNum = 1;
      render();
    }
  }

  function onHashChange() {
    if (suppressHashHandling) { suppressHashHandling = false; return; }
    const {page, slug} = parseHash();
    Object.assign(state, {page, slug, menuOpen: false});
    render();
  }

  /* ---------------------------------------------------------------- */
  /* Bootstrap                                                         */
  /* ---------------------------------------------------------------- */

  function init() {
    const root = document.getElementById('app');
    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKeydown);
    root.addEventListener('input', onInput);
    root.addEventListener('change', onChange);
    root.addEventListener('submit', onSubmit);
    window.addEventListener('hashchange', onHashChange);

    const frame = document.getElementById('bbb-subscribe-frame');
    if (frame) frame.addEventListener('load', onNewsletterFrameLoad);

    const initial = parseHash();
    Object.assign(state, initial);
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

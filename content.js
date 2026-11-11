    const PIECES = [
      {
        id:'sustancia', tipo:'tesis', feat:true, tag:'Tesis interactiva', inst:'UAH',
        title:"La compulsividad, no el tiempo: habitus tecnológico y deterioro de la salud mental en estudiantes universitarios de primer año",
        desc:'Una investigación sobre hábitos tecnológicos y salud mental al comenzar la universidad.',
        finding:'¿Qué nos dice contar las horas de pantalla y qué necesitamos saber sobre la forma de usarlas?',
        autor:'Ángel Darío Muñoz Rañiman', year:2026, accent:'#79d3b3'
      },
      {
        id:'alas', tipo:'cobertura', tag:'Cobertura especial', inst:'Vitrina',
        title:'ALAS 2026: América Latina se piensa a sí misma',
        desc:'Despacho desde el Congreso de la Asociación Latinoamericana de Sociología, Río de Janeiro.',
        finding:'La sociología latinoamericana busca nuevas formas de hablar en voz alta.',
        autor:'Ángel Darío Muñoz Rañiman', year:2026, accent:'#f1b4a6'
      },
      {
        id:'arq', tipo:'visualizacion', tag:'Visualización geoespacial', inst:'UAH',
        title:'Arquitectura hostil en Santiago',
        desc:'Mapa interactivo del diseño urbano como instrumento de exclusión social.',
        finding:'El espacio público no es neutral: excluye por diseño.',
        autor:'Francesca Roco Rojas', year:2026, accent:'#75b8ff'
      },
      {
        id:'tecno', tipo:'dashboard', tag:'Dashboard político', inst:'UAH',
        title:'Tecnopopulismo en Chile',
        desc:'Análisis computacional del discurso populista en plataformas digitales chilenas.',
        finding:'La comunicación populista se adapta a los algoritmos, no al revés.',
        autor:'Antonia Bravo Carmona', year:2026, accent:'#c993f0'
      },
      {
        id:'derecha', tipo:'narrativa', tag:'Narrativa crítica', inst:'UAH',
        title:'Jóvenes, género y la nueva derecha',
        desc:'Cómo mujeres jóvenes construyen identidad política en el giro conservador latinoamericano.',
        finding:'El antifeminismo no es ausencia de política: es política activa.',
        autor:'Gabriela Mardones Gómez', year:2026, accent:'#e0a17f'
      },
      {
        id:'bosque', tipo:'documental', tag:'Documental', inst:'UAH',
        title:'Defender la tierra',
        desc:'Registro de la violencia sistemática contra defensores del medio ambiente en Chile y Brasil.',
        finding:'Defender el territorio sigue siendo uno de los actos más peligrosos en América Latina.',
        autor:'Diego Navarro Gutiérrez', year:2026, accent:'#8ab6a2'
      }
    ];

    const I18N = {
      es:{
        navResearch:'Investigación',navDepth:'Profundidad',navInstitutions:'Instituciones',navProcess:'Proceso',
        eyebrow:'Plataforma editorial de investigación latinoamericana',
        heroTitle:'La investigación<br>también puede <em>explorarse.</em>',
        heroSub:'Vitrina transforma artículos, tesis y datos de investigación en experiencias públicas que permiten leer, comparar, preguntar y volver a mirar.',
        explore:'Explorar investigación ↓',surprise:'Sorpréndeme ↗',
        depthLabel:'Profundidad de lectura',depth1:'Idea',depth2:'Evidencia',depth3:'Método',depth4:'Datos',
        depthHelp:'Empieza por la idea central. Luego abre capas para ver qué la sostiene.',
        researchKicker:'Vitrina · piezas',researchTitle:'Leer los datos desde distintas formas.',
        all:'Todas',fTesis:'Tesis interactiva',fViz:'Visualización',fDash:'Dashboard',fNarr:'Narrativa',fDoc:'Documental',fCov:'Cobertura',
        lens1Title:'Mismo objeto, otra entrada',lens1Text:'Una investigación puede comenzar como hallazgo, mapa, historia, contraste o pregunta.',
        lens2Title:'La forma también enseña',lens2Text:'La organización visual cambia qué relaciones aparecen primero y qué preguntas se vuelven posibles.',
        lens3Title:'Profundidad sin jerga',lens3Text:'La interfaz permite entrar desde una lectura rápida y avanzar hacia método, variables y evidencia.',
        instKicker:'Red de producción',instTitle:'La investigación no vive sola.',
        processKicker:'Del artículo a la experiencia',processTitle:'Traducir no es recortar. Es reorganizar.',
        s1Title:'Pregunta',s1Text:'Extraemos la pregunta que puede mover una conversación fuera del paper.',
        s2Title:'Estructura',s2Text:'Ordenamos conceptos, variables, hallazgos y contexto en una arquitectura navegable.',
        s3Title:'Interacción',s3Text:'La audiencia filtra, compara, abre capas y decide cuánto quiere profundizar.',
        s4Title:'Retorno',s4Text:'La pieza deja visible su procedencia y permite volver al estudio original.',
        ctaKicker:'Convocatoria',ctaTitle:'Saca tu investigación del repositorio y conviértela en una experiencia.',
        ctaText:'Vitrina propone una mediación donde el público no recibe una versión simplificada: entra a una investigación por rutas distintas.',
        contact:'Conversemos →',footer1:'Piloto 2026',footer2:'Plataforma editorial independiente · Multi-institucional · Sin fines de lucro',
        centralFinding:'Hallazgo central',chartNote:'Visualización de interfaz de demostración: el gráfico real se reemplaza por la evidencia del estudio correspondiente.',
        by:'Autoría',institution:'Institución',readingMode:'Modo de lectura',whatChanges:'Qué cambia al abrir otra capa'
      },
      pt:{
        navResearch:'Pesquisa',navDepth:'Profundidade',navInstitutions:'Instituições',navProcess:'Processo',
        eyebrow:'Plataforma editorial de pesquisa latino-americana',
        heroTitle:'A pesquisa<br>também pode ser <em>explorada.</em>',
        heroSub:'A Vitrina transforma artigos, teses e dados de pesquisa em experiências públicas que permitem ler, comparar, perguntar e voltar a olhar.',
        explore:'Explorar pesquisa ↓',surprise:'Surpreenda-me ↗',
        depthLabel:'Profundidade de leitura',depth1:'Ideia',depth2:'Evidência',depth3:'Método',depth4:'Dados',
        depthHelp:'Comece pela ideia central. Depois abra camadas para ver o que a sustenta.',
        researchKicker:'Vitrina · peças',researchTitle:'Ler os dados a partir de diferentes formas.',
        all:'Todas',fTesis:'Tese interativa',fViz:'Visualização',fDash:'Dashboard',fNarr:'Narrativa',fDoc:'Documentário',fCov:'Cobertura',
        lens1Title:'Mesmo objeto, outra entrada',lens1Text:'Uma pesquisa pode começar como descoberta, mapa, história, contraste ou pergunta.',
        lens2Title:'A forma também ensina',lens2Text:'A organização visual muda quais relações aparecem primeiro e quais perguntas se tornam possíveis.',
        lens3Title:'Profundidade sem jargão',lens3Text:'A interface permite entrar por uma leitura rápida e avançar para método, variáveis e evidências.',
        instKicker:'Rede de produção',instTitle:'A pesquisa não vive sozinha.',
        processKicker:'Do artigo à experiência',processTitle:'Traduzir não é cortar. É reorganizar.',
        s1Title:'Pergunta',s1Text:'Extraímos a pergunta capaz de mover uma conversa para fora do paper.',
        s2Title:'Estrutura',s2Text:'Organizamos conceitos, variáveis, achados e contexto em uma arquitetura navegável.',
        s3Title:'Interação',s3Text:'O público filtra, compara, abre capas e decide quanto quer aprofundar.',
        s4Title:'Retorno',s4Text:'A peça torna sua origem visível e permite voltar ao estudo original.',
        ctaKicker:'Chamada',ctaTitle:'Tire sua pesquisa do repositório e transforme-a em uma experiência.',
        ctaText:'A Vitrina propõe uma mediação em que o público não recebe uma versão simplificada: entra em uma pesquisa por diferentes caminhos.',
        contact:'Vamos conversar →',footer1:'Piloto 2026',footer2:'Plataforma editorial independente · Multi-institucional · Sem fins lucrativos',
        centralFinding:'Achado central',chartNote:'Visualização de interface de demonstração: o gráfico real é substituído pelas evidências do estudo correspondente.',
        by:'Autoria',institution:'Instituição',readingMode:'Modo de leitura',whatChanges:'O que muda ao abrir outra camada'
      }
    };

    const DEPTH_TEXT = {
      idea:['Uma ideia clara permite entrar sem conhecer a linguagem acadêmica.','A peça começa pelo problema e pelo achado, não pelo jargão.'],
      evidence:['A evidência torna visível de onde vem a afirmação.','Gráficos, contrastes e magnitudes aparecem como objetos que podem ser interrogados.'],
      method:['O método explica como a afirmação foi construída.','A interface pode revelar desenho, amostra, variáveis e decisões analíticas.'],
      data:['Os dados deixam de ser um fim e viram matéria para pensar.','Abrir esta camada permite observar distribuições, relações e limites.']
    };


    I18N.en = {"navResearch":"Research","navDepth":"Reading depth","navInstitutions":"Institutions","navProcess":"Process","eyebrow":"Latin American research editorial platform","heroTitle":"Research<br>can also be <em>explored.</em>","heroSub":"Vitrina turns papers, theses and research data into public experiences that invite people to read, compare, ask questions and look again.","explore":"Explore research ↓","surprise":"Surprise me ↗","depthLabel":"Reading depth","depth1":"Idea","depth2":"Evidence","depth3":"Method","depth4":"Data","depthHelp":"Start with the central idea. Then explore the evidence behind it.","researchKicker":"Vitrina · stories","researchTitle":"Different ways to explore research.","all":"All","fTesis":"Interactive thesis","fViz":"Visualization","fDash":"Dashboard","fNarr":"Narrative","fDoc":"Documentary","fCov":"Coverage","fProject":"Applied research","lens1Title":"One subject, different starting points","lens1Text":"A research story can begin with a finding, a map, a story, a comparison or a question.","lens2Title":"Form also teaches","lens2Text":"Visual organization shapes which relationships become visible first and which questions become possible.","lens3Title":"Depth without jargon","lens3Text":"Start with a quick read and move on to methods, variables and evidence.","instKicker":"Production network","instTitle":"Research does not happen in isolation.","processKicker":"From paper to experience","processTitle":"Translation means reorganizing knowledge.","s1Title":"Question","s1Text":"We identify the question that can spark a conversation beyond the paper.","s2Title":"Structure","s2Text":"We organize concepts, variables, findings and context into a navigable structure.","s3Title":"Interaction","s3Text":"Readers filter, compare, open layers and choose how deeply to explore.","s4Title":"Sources","s4Text":"Each story shows where it comes from and provides a path back to the original study.","ctaKicker":"Research communication services","ctaTitle":"Turn your research into an experience people can explore.","ctaText":"We create research stories, interactive visualizations and multimedia coverage for researchers and teams. Each proposal is tailored to your materials, audience and editorial and technical needs.","contact":"Request a proposal →","footer1":"2026 pilot","footer2":"Independent editorial platform · Research communication","centralFinding":"Editorial summary","chartNote":"Pilot content: the full study, verified evidence and original sources are still being incorporated.","by":"Author","institution":"Institution / project","readingMode":"Reading mode","whatChanges":"About this reading layer","openPiece":"Open story","piece":"story","pieces":"stories","entry":"Purpose","layer":"Layer","close":"Close","theme":"Change theme","dark":"Dark theme","light":"Light theme","banner":"Vitrina production network","question":"question","evidence":"evidence","context":"context","visit":"Explore project ↗","helpEvidence":"Explore the evidence behind the finding.","helpMethod":"Explore the research design and analytical decisions.","helpData":"Explore distributions, relationships and limitations.","pageTitle":"Vitrina · Research you can explore","meta":"Latin American research transformed into public, interactive and accessible experiences.","pending":"Content in preparation"};
    Object.assign(I18N.es, {"ctaKicker":"Difusión de investigaciones","ctaTitle":"Convierte tu investigación en una experiencia que otras personas puedan explorar.","ctaText":"Creamos relatos web, visualizaciones interactivas y coberturas multimedia para investigadores y equipos. Cada propuesta se cotiza según los materiales, el público y el alcance editorial y técnico.","contact":"Solicitar propuesta →","footer2":"Plataforma editorial independiente · Difusión de investigaciones","centralFinding":"Síntesis editorial","chartNote":"Contenido piloto: estamos incorporando el estudio completo, la evidencia verificada y sus fuentes originales.","institution":"Institución / proyecto","openPiece":"Abrir pieza","piece":"pieza","pieces":"piezas","entry":"Propósito","layer":"Capa","close":"Cerrar","theme":"Cambiar tema","dark":"Tema oscuro","light":"Tema claro","banner":"Red de producción de Vitrina","question":"pregunta","evidence":"evidencia","context":"context","visit":"Explorar proyecto ↗","fProject":"Investigación aplicada","helpEvidence":"Mira las evidencias que sostienen el hallazgo.","helpMethod":"Abre el diseño de investigación y las decisiones analíticas.","helpData":"Explora distribuciones, relaciones y límites.","pageTitle":"Vitrina · Investigación que se puede explorar","meta":"Investigación latinoamericana transformada en experiencias públicas, interactivas y accesibles.","pending":"Contenido en preparación"});
    Object.assign(I18N.pt, {"ctaKicker":"Divulgação de pesquisas","ctaTitle":"Transforme sua pesquisa em uma experiência que outras pessoas possam explorar.","ctaText":"Criamos narrativas web, visualizações interativas e coberturas multimídia para pesquisadores e equipes. Cada proposta considera os materiais, o público e o escopo editorial e técnico.","contact":"Solicitar proposta →","footer2":"Plataforma editorial independente · Divulgação de pesquisas","centralFinding":"Síntese editorial","chartNote":"Conteúdo piloto: estamos incorporando o estudo completo, as evidências verificadas e suas fontes originais.","institution":"Instituição / projeto","openPiece":"Abrir peça","piece":"peça","pieces":"peças","entry":"Propósito","layer":"Camada","close":"Fechar","theme":"Mudar tema","dark":"Tema escuro","light":"Tema claro","banner":"Rede de produção da Vitrina","question":"pergunta","evidence":"evidência","context":"context","visit":"Explorar projeto ↗","fProject":"Pesquisa aplicada","helpEvidence":"Explore as evidências que sustentam o achado.","helpMethod":"Explore o desenho da pesquisa e as decisões analíticas.","helpData":"Explore distribuições, relações e limites.","pageTitle":"Vitrina · Pesquisa que pode ser explorada","meta":"Pesquisa latino-americana transformada em experiências públicas, interativas e acessíveis.","pending":"Conteúdo em preparação"});
    const PIECE_EN = {"sustancia": {"tag": "Interactive thesis", "title": "La compulsividad, no el tiempo: habitus tecnológico y deterioro de la salud mental en estudiantes universitarios de primer año", "desc": "A study of technological habits and mental health during the first year of university.", "finding": "What does counting screen hours tell us, and what do we need to know about how those hours are spent?"}, "alas": {"tag": "Special coverage", "title": "ALAS: Latin America reflects on itself", "desc": "A multimedia story from the Latin American Sociology Association congress. Photographs and video are being prepared.", "finding": "A space for encounters, debates and perspectives from Latin American sociology."}, "arq": {"tag": "Geospatial visualization", "title": "Hostile architecture in Santiago", "desc": "An interactive map of urban design as an instrument of social exclusion.", "finding": "Public space is not neutral: exclusion can be built into its design."}, "tecno": {"tag": "Political dashboard", "title": "Technopopulism in Chile", "desc": "Computational analysis of populist discourse on Chilean digital platforms.", "finding": "Populist communication adapts to algorithms, not the other way around."}, "derecha": {"tag": "Critical narrative", "title": "Young people, gender and the new right", "desc": "How young women construct political identities amid Latin America's conservative turn.", "finding": "Antifeminism is not an absence of politics: it is active politics."}, "bosque": {"tag": "Documentary", "title": "Defending the land", "desc": "Documenting systematic violence against environmental defenders in Chile and Brazil.", "finding": "Defending territory remains one of the most dangerous activities in Latin America."}, "trama": {"tag": "Applied research", "title": "TRAMA", "desc": "Sociotechnical infrastructure for circular territories: practices, actors, material flows and territorial governance.", "finding": "How can digital infrastructure support situated economic practices without stripping away their context?"}};
    const DEPTH_LOCAL = {"es":{"idea":["Una idea clara permite entrar sin conocer el lenguaje académico.","La pieza comienza por el problema y su relevancia."],"evidence":["Esta capa reúne la evidencia que sostiene una afirmación.","Los resultados de cada estudio se incorporarán tras su revisión."],"method":["El método explica cómo se construyó el conocimiento.","Aquí se documentarán diseño, muestra y decisiones analíticas."],"data":["Esta capa permite volver a los datos y sus fuentes.","Se indicarán disponibilidad, restricciones y límites de interpretación."]},"en":{"idea":["A clear idea provides an entry point without specialist terminology.","The story begins with the problem and why it matters."],"evidence":["This layer brings together the evidence behind a claim.","Study results will be added after editorial verification."],"method":["Methods explain how knowledge was produced.","This layer will document design, sampling and analytical decisions."],"data":["This layer provides a route back to data and sources.","Availability, access restrictions and limitations will be documented."]}};
    DEPTH_LOCAL.pt = DEPTH_TEXT;
    PIECES.push({id:'trama',tipo:'proyecto',tag:'Investigación aplicada',inst:'TRAMA',title:'TRAMA',desc:'Infraestructura sociotécnica para territorios circulares: prácticas, actores, flujos materiales y gobernanza territorial.',finding:'¿Cómo pueden las infraestructuras digitales transformar prácticas económicas situadas sin descontextualizarlas?',autor:'Ángel Darío Muñoz Rañiman',year:2026,accent:'#79d3b3',url:'https://nglmnz.github.io/trama/'});
    Object.assign(PIECES.find(p=>p.id==='alas'), {title:'ALAS: América Latina se piensa a sí misma',desc:'Crónica multimedia del Congreso de la Asociación Latinoamericana de Sociología. Fotografías y video en preparación.',finding:'Un espacio de encuentros, debates y perspectivas de la sociología latinoamericana.'});
    function localized(piece){return lang==='en' ? {...piece,...PIECE_EN[piece.id]} : piece;}


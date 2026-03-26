export interface ClusterPage {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  content: string[];
  services: { title: string; description: string }[];
}

export interface SiteConfig {
  domain: string;
  fag: string;
  by: string;
  primaryKeyword: string;
  phone: string;
  email: string;
  address: string;
  cvr: string;
  companyName: string;
  schemaType: string;
  colors: {
    primary: string;
    accent: string;
  };
  homepage: {
    title: string;
    metaDescription: string;
    h1: string;
    subtitle: string;
    aboutTitle: string;
    aboutText: string[];
    services: { title: string; description: string; icon: string }[];
    usps: { title: string; description: string }[];
    heroContent: string;
    contentSections: { title: string; paragraphs: string[] }[];
    faq: { question: string; answer: string }[];
  };
  clusterPages: ClusterPage[];
}

const config: SiteConfig = {
  domain: "toemrerherning.dk",
  fag: "Tømrer",
  by: "Herning",
  primaryKeyword: "tømrer herning",
  phone: "+45 XX XX XX XX",
  email: "info@toemrerherning.dk",
  address: "Bredgade 31, 7400 Herning",
  cvr: "CVR: 12345678",
  companyName: "Tømrer Herning",
  schemaType: "GeneralContractor",
  colors: {
    primary: "#1e3a5f",
    accent: "#f97316",
  },
  homepage: {
    title: "Tømrer Herning — Erfaren tømrermester til tag, tilbygning og renovering",
    metaDescription:
      "Dygtig tømrer i Herning med mange års erfaring. Tagarbejde, tilbygninger, carporte og køkkenmontage til faste priser. Få et gratis tilbud.",
    h1: "Tømrer i Herning",
    subtitle:
      "Lokalt tømrerfirma i Herning med erfarne håndværkere — faste priser, godt håndværk og hurtig opstart",
    aboutTitle: "Dit lokale tømrerfirma i Herning",
    aboutText: [
      "Vi er et tømrerfirma med base i Herning, og vi har betjent boligejere og erhvervskunder i området i mange år. Vores team af uddannede tømrere håndterer opgaver i alle størrelser — fra en simpel reparation af et vinduesparti til en komplet tilbygning med nyt tag og facade. Vi arbejder grundigt, overholder deadlines og afleverer altid et resultat, du kan være tilfreds med.",
      "Størstedelen af vores kunder kommer til os via anbefalinger. Det skyldes, at vi prioriterer kvalitet og ærlighed i alt vi gør. Du får altid en fast pris inden arbejdet begynder, og vi orienterer dig løbende, hvis der opstår uforudsete forhold undervejs. Ingen overraskelser på fakturaen — bare ordentligt håndværk til den aftalte pris.",
      "Vi samarbejder tæt med lokale VVS-firmaer, elektrikere og malere i Herning, så vi kan tilbyde en samlet løsning, når dit projekt kræver flere faggrupper. Du får én kontaktperson, én tidsplan og ét samlet tilbud. Det sparer dig tid og giver overblik over hele byggeprocessen.",
      "Ring til os eller udfyld kontaktformularen, så vender vi tilbage med et uforpligtende tilbud inden for 24 timer. Vi dækker hele Herning og de omkringliggende byer.",
      "Vi tager os af hele processen fra det første møde til det færdige resultat. Det betyder rådgivning om materialevalg og konstruktionsmetoder, et detaljeret tilbud med fast pris, en realistisk tidsplan og løbende opdateringer undervejs. Vi søger byggetilladelse, når det er nødvendigt, og vi koordinerer med andre faggrupper.",
    ],
    services: [
      {
        title: "Tagarbejde og tagrenovering",
        description:
          "Nyt tag, tagreparation og udskiftning af tagrender. Vi arbejder med tegl, betontagsten, skifer og ståltag og sikrer en tæt og holdbar tagkonstruktion over dit hjem i Herning.",
        icon: "🏠",
      },
      {
        title: "Tilbygning og udvidelse",
        description:
          "Har du brug for flere kvadratmeter? Vi bygger tilbygninger der passer til din eksisterende bolig i Herning — fra nyt fundament og bærende konstruktioner til færdig indvendig aptering.",
        icon: "🔨",
      },
      {
        title: "Carport og garage",
        description:
          "Skræddersyede carporte og garager i træ eller stål. Vi designer og opfører efter dine mål og ønsker, inklusiv byggetilladelse og korrekt afvanding.",
        icon: "🚗",
      },
      {
        title: "Køkkenmontage",
        description:
          "Professionel montering af dit nye køkken uanset leverandør. Vi tilpasser, monterer og sørger for at alle detaljer sidder lige i skabet — fra sokkel til bordplade.",
        icon: "🍳",
      },
      {
        title: "Vinduer og døre",
        description:
          "Udskiftning af vinduer og døre med moderne energiruder. Vi opmåler, leverer og monterer med fokus på tæthed, isolering og et flot finish.",
        icon: "🪟",
      },
      {
        title: "Boligrenovering",
        description:
          "Komplet renovering af din bolig fra gulv til loft. Vi koordinerer tømrer-, maler- og gulvarbejde og sikrer et sammenhængende resultat i Herning.",
        icon: "🏗️",
      },
    ],
    usps: [
      {
        title: "Lokale håndværkere",
        description:
          "Vi bor og arbejder i Herning og kender området. Kort afstand betyder hurtig responstid og nem dialog gennem hele projektet.",
      },
      {
        title: "Faste priser",
        description:
          "Du kender den endelige pris inden vi starter. Vores tilbud er detaljerede, og vi fakturerer aldrig mere end det aftalte beløb.",
      },
      {
        title: "Uddannede tømrere",
        description:
          "Alle opgaver udføres af faglærte tømrere med svendebrev. Vi holder os opdateret på bygningsreglement og nye materialer.",
      },
      {
        title: "Hurtig opstart",
        description:
          "De fleste projekter kan vi starte inden for en til to uger. Vi planlægger effektivt og holder den aftalte tidsplan hele vejen.",
      },
    ],
    heroContent:
      "Skal du bruge en tømrer i Herning? Vores erfarne tømrere udfører alt fra tagrenovering og tilbygninger til vinduesudskiftning og køkkenmontage. Vi arbejder med faste priser, og du får altid et gratis og uforpligtende tilbud inden vi går i gang. Ring til os eller udfyld formularen her på siden.",
    contentSections: [
      {
        title: "Hvad kan vi hjælpe med som tømrer i Herning?",
        paragraphs: [
          "Som tømrer i Herning dækker vi et bredt spektrum af opgaver inden for byggeri og renovering. Vores kernekompetencer ligger i trækonstruktioner, tagarbejde, facaderenovering og indvendig aptering — men vi påtager os også mindre opgaver som reparation af vinduer, udskiftning af døre eller montering af hylder og skabe.",
          "Vi påtager os både fagentrepriser og mindre hovedentrepriser i Herning-området. Det betyder, at vi kan stå for hele dit byggeprojekt som hovedentreprenør, eller vi kan indgå som tømrerfaget i et større byggeri. Uanset projektets størrelse leverer vi det samme håndværk og den samme grundige planlægning.",
        ],
      },
      {
        title: "Godt håndværk og høj kvalitet",
        paragraphs: [
          "Godt håndværk handler om at vælge de rigtige materialer, bruge gennemprøvede konstruktionsmetoder og tage sig tid til de detaljer, der gør forskellen. Hos os er kvalitet standarden i hvert eneste projekt vi udfører.",
          "Vi bruger materialer fra anerkendte danske og europæiske producenter og følger gældende bygningsreglement og anbefalinger fra Træinformation og Dansk Standard. Vores tømrere har den fulde uddannelse og holder sig ajour med nye teknikker og lovkrav.",
        ],
      },
      {
        title: "Hvad koster en tømrer i Herning?",
        paragraphs: [
          "Prisen på tømrerarbejde i Herning afhænger af opgavens omfang, materialevalg og kompleksitet. En tømrer koster typisk mellem 350 og 550 kroner i timen eksklusiv moms, men de fleste kunder foretrækker et fast tilbud på hele opgaven. På den måde kender du den samlede pris fra starten.",
          "Vi udarbejder altid et detaljeret og gratis tilbud, hvor alle poster er specificeret — timer, materialer, kørsel og eventuelle underentreprenører. Hvis der opstår behov for ændringer undervejs, aftaler vi det med dig inden vi udfører ekstraarbejdet.",
        ],
      },
      {
        title: "Pålidelig service fra dit lokale tømrerfirma i Herning",
        paragraphs: [
          "Når du vælger et lokalt tømrerfirma i Herning, får du en samarbejdspartner der er nem at få fat i, og som kender de lokale byggetraditioner og materialer. Vi møder op til tiden, rydder op efter os og holder vores aftaler.",
          "Vi tilbyder også service efter projektet er afsluttet. Har du spørgsmål om vedligeholdelse, eller opdager du en detalje der skal justeres, er vi klar til at hjælpe. Vi betragter hvert projekt som starten på et langt kundeforhold.",
        ],
      },
    ],
    faq: [
      {
        question: "Hvad koster en tømrer i timen i Herning?",
        answer: "En tømrer i Herning koster typisk mellem 350 og 550 kroner i timen eksklusiv moms. Prisen afhænger af opgavens art og om der er tale om akut arbejde eller et planlagt projekt. Vi anbefaler altid at få et fast tilbud på hele opgaven, så du undgår uforudsete udgifter og kender den endelige pris fra starten.",
      },
      {
        question: "Hvor hurtigt kan I starte på mit projekt?",
        answer: "Vi kan som regel starte inden for en til to uger afhængigt af sæsonen og vores ordrebog. Ved akutte opgaver som stormskader eller vandskader rykker vi ud hurtigst muligt — ofte inden for få dage. Ring til os, så finder vi en startdato der passer dig.",
      },
      {
        question: "Hvilke typer opgaver udfører I som tømrer i Herning?",
        answer: "Vi udfører alle former for tømrerarbejde — tagarbejde, tilbygninger, carporte, vinduesudskiftning, køkkenmontage, trapper, altandøre og komplet boligrenovering. Vi håndterer både små reparationer og store byggeprojekter for private og erhvervskunder i hele Herning-området.",
      },
      {
        question: "Giver I garanti på jeres arbejde?",
        answer: "Ja, vi giver garanti på alt vores tømrerarbejde i henhold til AB Forbruger. Du er dækket af vores ansvarsforsikring, og vi står altid klar til at udbedre eventuelle fejl eller mangler. Vi følger op på alle projekter og sikrer at du er fuldt tilfreds med resultatet.",
      },
      {
        question: "Kan I hjælpe med byggetilladelse?",
        answer: "Ja, vi hjælper gerne med at søge byggetilladelse og udarbejde de nødvendige tegninger til dit projekt. Vi kender reglerne i Herning Kommune og sørger for, at alle dokumenter er i orden inden arbejdet begynder. Det sparer dig tid og sikrer at byggeriet overholder lovgivningen.",
      },
      {
        question: "Kan I stå for hele byggeriet som hovedentreprenør?",
        answer: "Ja, vi fungerer som hovedentreprenør på mange projekter i Herning. Vi koordinerer alle involverede faggrupper — murer, VVS, elektriker og maler — og du har kun én kontaktperson. Vi udarbejder en samlet tidsplan og sikrer effektivt samarbejde mellem alle fag.",
      },
      {
        question: "Dækker I kun Herning eller også omkringliggende byer?",
        answer: "Vi dækker hele Herning Kommune og de omkringliggende byer. Vores base er i Herning, og vi kører gerne ud til kunder i hele området. Kørslen er inkluderet i vores tilbud, så du kender den fulde pris uanset din adresse.",
      },
    ],
  },
  clusterPages: [
    {
      slug: "toemrerarbejde-herning",
      keyword: "tømrerarbejde odense",
      title: "Tømrerarbejde i Herning — Professionelt håndværk til alle opgaver",
      metaDescription:
        "Professionelt tømrerarbejde i Herning. Alt fra små reparationer til store projekter. Få et gratis tilbud i dag.",
      h1: "Tømrerarbejde i Herning",
      intro:
        "Har du brug for professionelt tømrerarbejde i Herning? Vi håndterer alle typer tømreropgaver — fra mindre reparationer og vedligeholdelse til store nybyggerier og renoveringer.",
      content: [
        "Tømrerarbejde dækker en bred vifte af opgaver inden for byggeri og renovering. Som lokalt tømrerfirma i Herning har vi specialiseret os i at levere håndværk af høj kvalitet til private boligejere og erhvervskunder. Vores tømrerarbejde spænder fra traditionelt konstruktionsarbejde med bærende vægge og spær til moderne løsninger med laminerede bjælker og kompositmaterialer.",
        "Typiske tømreropgaver i Herning omfatter opførelse af trækonstruktioner til nybygning, montering af lofter og skillevægge, installation af vinduer og døre, opsætning af køkkener og skabe samt reparation og udskiftning af slidte trækonstruktioner. Vi udfører også udvendig beklædning med træ eller cementfiberplader.",
        "Når du bestiller tømrerarbejde hos os, starter vi med en grundig gennemgang af opgaven på stedet. Vi tager mål, vurderer eksisterende konstruktioner og drøfter dine ønsker. Derefter modtager du et skriftligt tilbud med fast pris, hvor alle poster er specificeret.",
        "Vi arbejder med alle typer træ og træbaserede materialer — fra gran og fyr til hårdttræ, MDF og OSB-plader. Vores tømrere rådgiver dig om det rette materialevalg baseret på opgavens krav til styrke, holdbarhed og æstetik.",
        "Tømrerarbejde kræver ofte koordinering med andre faggrupper. Vi samarbejder med lokale murere, VVS-installatører og elektrikere i Herning, så hele dit byggeprojekt forløber effektivt. Ring til os for en uforpligtende snak om dit næste tømrerprojekt.",
      ],
      services: [
        {
          title: "Konstruktionsarbejde",
          description: "Opførelse af trækonstruktioner til nybygning og renovering.",
        },
        {
          title: "Reparationer",
          description: "Hurtige og holdbare reparationer af alle typer trækonstruktioner.",
        },
        {
          title: "Vedligeholdelse",
          description: "Forebyggende vedligeholdelse der forlænger levetiden på dit træværk.",
        },
      ],
    },
    {
      slug: "toemrermester-herning",
      keyword: "tømrermester odense",
      title: "Tømrermester i Herning — Autoriseret håndværk med garanti",
      metaDescription:
        "Autoriseret tømrermester i Herning. Mange års erfaring med byggeri og renovering. Kontakt os for et uforpligtende tilbud.",
      h1: "Tømrermester i Herning",
      intro:
        "En autoriseret tømrermester i Herning sikrer dig kvalitetsarbejde med garanti. Vores tømrermestre har årelang erfaring og leverer professionelt håndværk til tiden.",
      content: [
        "At vælge en tømrermester i Herning med mesterbrev giver dig tryghed for, at arbejdet udføres efter gældende regler og standarder. Vores tømrermestre har gennemført den fulde uddannelse og har mange års praktisk erfaring med boligbyggeri og erhvervsprojekter i Herning-området.",
        "En tømrermester adskiller sig fra en tømrersvend ved at have dybere viden om projektledelse, byggeteknik og lovgivning. Det betyder, at vi kan påtage os det fulde ansvar for dit projekt fra rådgivning og projektering til udførelse og aflevering.",
        "Hos os får du en personlig kontaktperson, der følger dit projekt hele vejen. Du modtager løbende opdateringer om fremdrift, og vi involverer dig i beslutninger om materialer og løsninger undervejs. Vi dokumenterer alt arbejde og afleverer med en grundig gennemgang.",
        "Vores tømrermestre har erfaring med alt fra lette renoveringer af ældre villaer til krævende nybyggerier med komplekse spærkonstruktioner. Vi kender de lokale byggetraditioner i Herning og ved, hvordan man arbejder med både ældre og moderne byggeri.",
        "Vi følger AB Forbruger-reglerne og giver garanti på alt udført arbejde. Skulle der opstå fejl eller mangler, udbedrer vi dem uden ekstra omkostninger. Ring til os og få en faglig vurdering af dit projekt.",
      ],
      services: [
        {
          title: "Projektstyring",
          description: "Professionel ledelse af dit byggeprojekt fra start til slut.",
        },
        {
          title: "Byggerådgivning",
          description: "Ekspertrådgivning om materialer, konstruktion og byggereglement.",
        },
        {
          title: "Kvalitetssikring",
          description: "Grundig kvalitetskontrol i alle faser af byggeprocessen.",
        },
      ],
    },
    {
      slug: "tagarbejde-herning",
      keyword: "tagarbejde odense",
      title: "Tagarbejde i Herning — Nyt tag, reparation og vedligeholdelse",
      metaDescription:
        "Alt i tagarbejde i Herning. Nyt tag, tagreparation og vedligeholdelse. Erfarne tømrere med garanti på arbejdet.",
      h1: "Tagarbejde i Herning",
      intro:
        "Har du brug for tagarbejde i Herning? Vi tilbyder alt fra nyt tag og tagreparation til løbende vedligeholdelse. Vores erfarne tømrere sikrer et tæt og holdbart tag.",
      content: [
        "Et godt tag beskytter din bolig mod regn, sne og blæst og er afgørende for husets isolering. Som specialister i tagarbejde i Herning har vi mange års erfaring med alle typer tagkonstruktioner — fra klassiske tegltage og betontagsten til moderne ståltagløsninger og tagpap.",
        "Vores tagarbejde i Herning dækker alle faser: inspektion af det eksisterende tag, vurdering af spærkonstruktionen, fjernelse af gammelt tagmateriale, reparation af spær og lægter, montering af nyt undertag og lægning af det nye tagmateriale. Vi sørger også for tagrender, nedløb og inddækninger.",
        "Tagreparation er en hyppig opgave. Utætheder kan opstå efter storme, når tagsten forskubber sig, eller når inddækninger slides. Vi finder årsagen til utætheden, reparerer skaden og sikrer, at tagfladen er tæt igen. Ved akutte skader rykker vi ud hurtigt.",
        "Efterisolering af taget er en af de mest effektive energiforbedringer. Vi tilbyder isolering af skråvægge, hanebåndsloft og skunkrum med mineraluld eller papiruld. En velisoleret tagkonstruktion kan reducere dit varmeforbrug med op til 20 procent.",
        "Vi monterer også nye tagrender og nedløb i zink, kobber eller plastik. Tagrender leder regnvand væk fra fundamentet, og defekte tagrender kan føre til fugtskader. Vi dimensionerer korrekt og sikrer ordentligt fald mod nedløbsrørene.",
      ],
      services: [
        {
          title: "Nyt tag",
          description: "Komplet tagudskiftning med alle typer tagmaterialer.",
        },
        {
          title: "Tagreparation",
          description: "Hurtig reparation af utætheder og skader på dit tag.",
        },
        {
          title: "Tagisolering",
          description: "Efterisolering af taget for lavere varmeudgifter og bedre komfort.",
        },
      ],
    },
    {
      slug: "carport-herning",
      keyword: "carport odense",
      title: "Carport i Herning — Skræddersyet carport til din bolig",
      metaDescription:
        "Få bygget en skræddersyet carport i Herning. Professionelt design og opførelse. Ring for et gratis tilbud.",
      h1: "Carport i Herning",
      intro:
        "Drømmer du om en ny carport i Herning? Vi designer og bygger skræddersyede carporte der passer perfekt til din bolig og dine behov.",
      content: [
        "En carport beskytter din bil mod regn, sne, hagl og UV-stråler og kan samtidig fungere som overdækket udeareal. Vi har bygget carporte i Herning i mange år og tilbyder løsninger i alle størrelser — fra en enkelt bilplads til dobbeltcarporte med integreret redskabsrum.",
        "Vores carporte bygges typisk i trykimprægneret eller varmebehandlet træ, men vi tilbyder også konstruktioner i stål eller en kombination. Taget kan udføres i tagpap, trapezplader, polycarbonat eller tagsten — afhængigt af din boligs stil og dine ønsker til holdbarhed.",
        "Inden vi begynder byggeriet, udarbejder vi tegninger med mål og placering. I de fleste kommuner kræver en carport ikke byggetilladelse, hvis den er under 50 kvadratmeter og overholder afstandskrav. Vi tjekker reglerne og søger tilladelse, hvis det er nødvendigt.",
        "Selve opførelsen tager typisk to til fire dage afhængigt af størrelse og kompleksitet. Vi støber eller skruer stolperne fast i fundament, monterer remme og spær, lægger tag og sørger for korrekt afvanding. Vi kan også installere belysning og elstik.",
        "Prisen på en carport i Herning varierer afhængigt af størrelse, materialer og tilvalg. En standard enkeltcarport i træ starter fra omkring 40.000 kroner. Vi giver dig et præcist tilbud efter et besøg på din adresse.",
      ],
      services: [
        {
          title: "Fritstående carport",
          description: "Individuelle carporte der kan placeres frit på din grund.",
        },
        {
          title: "Tilbygget carport",
          description: "Carporte der bygges sammen med din bolig for nem adgang.",
        },
        {
          title: "Dobbelt carport",
          description: "Større carporte med plads til to biler eller ekstra opbevaring.",
        },
      ],
    },
    {
      slug: "tilbygning-herning",
      keyword: "tilbygning odense",
      title: "Tilbygning i Herning — Få mere plads med professionel tilbygning",
      metaDescription:
        "Professionel tilbygning i Herning. Vi bygger tilbygninger der passer til din bolig. Fast pris og garanti på arbejdet.",
      h1: "Tilbygning i Herning",
      intro:
        "Mangler du plads i din bolig? En tilbygning i Herning giver dig de ekstra kvadratmeter du har brug for. Vi bygger tilbygninger der harmonerer med din eksisterende bolig.",
      content: [
        "En tilbygning er en effektiv måde at skabe mere plads i din bolig. Mange familier i Herning oplever, at boligen med tiden bliver for lille — børnene vokser, der er brug for et ekstra badeværelse, eller køkkenet er for trangt. En tilbygning løser problemet og øger samtidig boligens værdi.",
        "Vi har bred erfaring med tilbygninger — fra mindre udvidelser af køkken eller stue til store tilbygninger med nye værelser eller dobbelthøje rum. Vi bygger i træ, letbeton eller bindingsværk afhængigt af den eksisterende konstruktion og dine ønsker.",
        "Processen starter med et besøg hos dig, hvor vi gennemgår dine ønsker og vurderer mulighederne. Vi tager mål og drøfter placeringen. Derefter udarbejder vi tegninger og et tilbud med fast pris. Vi søger byggetilladelse hos Herning Kommune og koordinerer med ingeniør ved behov.",
        "Under byggeriet sørger vi for at minimere generne. Vi planlægger arbejdet, så åbningen til det eksisterende hus laves sidst — du bor i et tæt hus så længe som muligt. Vi koordinerer med VVS, elektriker og maler efter samme tidsplan.",
        "Overgangen mellem gammelt og nyt er afgørende. Vi matcher tagmateriale, mursten eller facadebeklædning, så tilbygningen ser ud som en naturlig del af huset. Indvendigt harmonerer gulvniveauer, dørbredder og loftshøjder.",
      ],
      services: [
        {
          title: "Stue-udvidelse",
          description: "Udvid din stue og få mere dagslys og plads til familien.",
        },
        {
          title: "Ekstra værelser",
          description: "Byg et ekstra soveværelse, kontor eller hobbyrum.",
        },
        {
          title: "Køkken-tilbygning",
          description: "Få plads til det store køkken-alrum du drømmer om.",
        },
      ],
    },
    {
      slug: "altandoer-herning",
      keyword: "altandør odense",
      title: "Altandør i Herning — Montering og udskiftning af altandøre",
      metaDescription:
        "Ny altandør i Herning? Vi leverer og monterer altandøre i høj kvalitet. Få bedre isolering og mere dagslys.",
      h1: "Altandør i Herning",
      intro:
        "Skal du have ny altandør i Herning? Vi leverer og monterer altandøre i alle materialer og størrelser. En ny altandør giver bedre isolering, mere dagslys og nem adgang til din have eller altan.",
      content: [
        "En ny altandør forbedrer din boligs energieffektivitet og komfort. Ældre altandøre med enkelt- eller tolagsglas taber store mængder varme. Moderne altandøre med trelagsglas og termisk brudt profil reducerer varmetabet med op til 50 procent.",
        "Vi tilbyder altandøre i træ, aluminium og komposit. Trædøre giver et klassisk udtryk og passer godt til ældre villaer. Aluminiumsdøre er vedligeholdelsesfri, mens kompositmaterialer kombinerer træets æstetik med aluminiums holdbarhed.",
        "Vi monterer alle typer altandøre i Herning — fra standard sidehengte døre til brede skydedøre og foldedøre. Skydedøre sparer plads, mens foldedøre giver den største åbning mod haven. Vi kan også levere franske altandøre med glas fra gulv til loft.",
        "Udskiftning af en altandør tager typisk én arbejdsdag. Vi fjerner den gamle dør og karm, forbereder muråbningen, monterer den nye dør med korrekt tætning og isolering og efterbehandler indvendigt og udvendigt.",
        "En ny altandør giver mere dagslys og en bedre visuel forbindelse til haven. Mange kunder kombinerer en ny altandør med nye vinduer i samme materiale for et sammenhængende udtryk. Vi tilbyder rabat ved samlet bestilling.",
      ],
      services: [
        {
          title: "Enkelt altandør",
          description: "Klassisk altandør med glas og fylding i alle materialer.",
        },
        {
          title: "Skydedør",
          description: "Pladsbesparende skydedøre til terrasse og altan.",
        },
        {
          title: "Foldedør",
          description: "Store foldedøre der åbner hele væggen op mod haven.",
        },
      ],
    },
    {
      slug: "vinduesudskiftning-herning",
      keyword: "vinduesudskiftning odense",
      title: "Vinduesudskiftning i Herning — Nye vinduer med garanti",
      metaDescription:
        "Vinduesudskiftning i Herning. Energibesparende vinduer med professionel montering. Få et gratis tilbud i dag.",
      h1: "Vinduesudskiftning i Herning",
      intro:
        "Trænger dine vinduer til udskiftning? Vi leverer og monterer nye energibesparende vinduer i Herning. Spar op til 30% på varmeregningen med moderne vinduer.",
      content: [
        "Vinduer er en af de største kilder til varmetab i ældre boliger. Moderne vinduer med trelagsglas og lavemissionsbelægning reducerer varmetabet drastisk og forbedrer lydisolering og komfort. En vinduesudskiftning i Herning er en investering der betaler sig over tid.",
        "Vi samarbejder med anerkendte danske vinduesproducenter og leverer vinduer i træ, træ-alu og aluminium. Trævinduer giver et klassisk udseende. Træ-alu vinduer har en udvendig aluminiumsbeklædning der eliminerer udvendig vedligeholdelse. Aluminiumsvinduer er slanke og moderne.",
        "Processen starter med et hjemmebesøg, hvor vi opmåler hvert vindue og gennemgår dine ønsker til materiale, farve og åbningstype. Vi udarbejder et tilbud med fast pris der dækker vinduer, montering, efterbehandling og bortskaffelse af de gamle vinduer.",
        "Selve udskiftningen udføres typisk på én til to dage for et normalt parcelhus med 10-15 vinduer. Vi fjerner de gamle vinduer, monterer de nye med korrekt tætning og isolering, og afslutter med nye vinduesplader og bundstykker.",
        "Alle vores vinduer leveres med energimærke og producentgaranti. Vi giver desuden garanti på monteringsarbejdet. Du kan i mange tilfælde opnå tilskud til vinduesudskiftning gennem dit energiselskab.",
      ],
      services: [
        {
          title: "Energivinduer",
          description: "Moderne lavenergivinduer der reducerer varmetabet markant.",
        },
        {
          title: "Ovenlysvinduer",
          description: "Tagvinduer der bringer dagslys ned i boligen.",
        },
        {
          title: "Specialvinduer",
          description: "Vinduer i specialmål og -former til unikke løsninger.",
        },
      ],
    },
    {
      slug: "koekkenmontage-herning",
      keyword: "køkkenmontage odense",
      title: "Køkkenmontage i Herning — Professionel montering af dit køkken",
      metaDescription:
        "Professionel køkkenmontage i Herning. Vi monterer køkkener fra alle leverandører. Præcist arbejde og hurtig montering.",
      h1: "Køkkenmontage i Herning",
      intro:
        "Skal du have monteret nyt køkken i Herning? Vores erfarne tømrere sikrer en perfekt montering af dit køkken — uanset leverandør og størrelse.",
      content: [
        "Et nyt køkken er en af de største investeringer i dit hjem, og en professionel montering sikrer at resultatet lever op til forventningerne. Vi har monteret hundredvis af køkkener i Herning og har erfaring med alle de store producenter.",
        "Køkkenmontage dækker hele processen: nedtagning af det gamle køkken, forberedelse af vægge og gulv, montering af skabe og skuffer, tilpasning og montering af bordplade, installation af vask og armatur og tilslutning af hvidevarer.",
        "Præcision er nøgleordet. Skabe skal hænge i lod og vage, bordpladen skal slutte tæt til væggen, og skuffer skal glide blødt. Vi bruger laser-nivellement til ophæng af overskabe og sikrer, at alle fuger og samlinger er tætte og pæne.",
        "De fleste køkkener monterer vi på to til fire dage afhængigt af størrelse og kompleksitet. Et standardkøkken tager typisk to dage. Større køkkener med køkkenø eller ekstra VVS-arbejde kan tage tre til fire dage. Vi giver en præcis tidsplan inden opstart.",
        "Vi monterer også køkkener du selv har købt online eller i udlandet. Du leverer elementerne, og vi sørger for den professionelle montering. Kontakt os for et tilbud på køkkenmontage i Herning.",
      ],
      services: [
        {
          title: "Komplet montering",
          description: "Montering af alle køkkenelementer fra skabe til bordplade.",
        },
        {
          title: "Demontering",
          description: "Nedtagning og bortskaffelse af dit gamle køkken.",
        },
        {
          title: "Tilpasning",
          description: "Specialtilpasning af køkkenelementer til dit rum.",
        },
      ],
    },
    {
      slug: "trapper-herning",
      keyword: "trapper og gelænder odense",
      title: "Trapper og Gelænder i Herning — Design og montering",
      metaDescription:
        "Nye trapper og gelænder i Herning. Skræddersyede løsninger i træ og stål. Professionel design og montering.",
      h1: "Trapper og Gelænder i Herning",
      intro:
        "Skal du have ny trappe eller gelænder i Herning? Vi designer og bygger skræddersyede trapper og gelændere i træ, stål og glas — tilpasset din boligs stil.",
      content: [
        "En trappe er både en funktionel forbindelse mellem etager og et markant designelement. Vi bygger trapper i Herning der forener sikkerhed og æstetik — fra klassiske kvartsvingstrapper i massiv eg til moderne ligeløbstrapper med stålvanger og glastrin.",
        "Alle vores trapper bygges efter mål og overholder gældende bygningsregler for trinhøjde, trinbredde, frigang og gelænderhøjde. Vi beregner trappens geometri nøjagtigt, så den passer til den tilgængelige plads og giver en behagelig gang.",
        "Gelænderet er en vigtig del af trappens udtryk og sikkerhed. Vi tilbyder gelændere i massivt træ, stål med vandret eller lodret fyldning, og glasgelændere med hærdet glas. Vi kan kombinere materialer for et personligt udtryk.",
        "Renovering af eksisterende trapper er en hyppig opgave. Vi kan udskifte individuelle trin, montere nye gelændere, slibe og lakere overflader eller foretage en komplet omlægning af trappens konstruktion.",
        "Vi rådgiver om materialevalg og overfladebehandling. Træ kan leveres i eg, ask, bøg eller fyr og behandles med lak, olie eller bejdse. Stål kan pulverlakeres i enhver RAL-farve. Vi udarbejder tegninger inden byggeriet starter.",
      ],
      services: [
        {
          title: "Nye trapper",
          description: "Skræddersyede trapper i træ, stål eller kombinationer.",
        },
        {
          title: "Gelændere",
          description: "Moderne og sikre gelændere i alle materialer.",
        },
        {
          title: "Renovering",
          description: "Opfriskning og renovering af eksisterende trapper.",
        },
      ],
    },
    {
      slug: "renovering-herning",
      keyword: "boligrenovering odense",
      title: "Boligrenovering i Herning — Komplet renovering af din bolig",
      metaDescription:
        "Komplet boligrenovering i Herning. Vi håndterer hele projektet fra rådgivning til færdigt resultat. Få et gratis tilbud.",
      h1: "Boligrenovering i Herning",
      intro:
        "Drømmer du om en komplet boligrenovering i Herning? Vi tager os af hele projektet — fra indledende rådgivning og planlægning til det færdige resultat. Ét firma, én kontaktperson, ingen bekymringer.",
      content: [
        "En boligrenovering kan forvandle dit hjem og øge dets værdi markant. Vi har gennemført mange renoveringsprojekter i Herning — fra totalrenovering af ældre villaer til modernisering af lejligheder.",
        "Totalrenovering indebærer typisk nedrivning af eksisterende overflader, udskiftning af installationer, ny isolering, nye gulve, vægge og lofter samt nyt køkken og badeværelse. Vi fungerer som hovedentreprenør og koordinerer alle faggrupper.",
        "Ved delvis renovering koncentrerer vi os om de rum du prioriterer. Mange starter med køkken og badeværelse, fordi det er de rum der har størst effekt på funktionalitet og værdi. Andre prioriterer energirenovering med nye vinduer og efterisolering.",
        "Processen starter med et møde, hvor vi gennemgår boligen sammen. Vi identificerer hvad der skal renoveres, drøfter ønsker og udarbejder en tidsplan. Du modtager et tilbud med fast pris der specificerer alle poster.",
        "Under renoveringen holder vi dig orienteret med ugentlige opdateringer. Vi dokumenterer arbejdet med fotos og sikrer, at du godkender alle valg undervejs. En boligrenovering er også en mulighed for at energioptimere dit hjem.",
      ],
      services: [
        {
          title: "Totalrenovering",
          description: "Komplet renovering af hele boligen fra gulv til loft.",
        },
        {
          title: "Delvis renovering",
          description: "Renovering af udvalgte rum som køkken, bad eller stue.",
        },
        {
          title: "Energirenovering",
          description: "Efterisolering, nye vinduer og klimaskærm for lavere energiforbrug.",
        },
      ],
    },
  ],
};

export default config;

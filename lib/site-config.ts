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
    title: "Tømrer Herning — Lokal tømrermester med hurtig service",
    metaDescription:
      "Leder du efter en dygtig tømrer i Herning? Vi tilbyder alt fra tagarbejde og tilbygninger til køkkenmontage. Ring i dag for et uforpligtende tilbud.",
    h1: "Tømrer Herning",
    subtitle:
      "Din lokale tømrermester i Herning — kvalitetsarbejde, faste priser og hurtig opstart",
    aboutTitle: "Din lokale tømrer i Herning",
    aboutText: [
      "Vi er et lokalt tømrerfirma med base i Herning, der har betjent kunder på hele Fyn i mange år. Vores team af erfarne tømrere og tømrermestre håndterer alt fra mindre reparationer til store byggeprojekter med samme grundighed og professionalisme.",
      "Hos os får du altid en fast pris inden arbejdet starter, og vi holder hvad vi lover. Vi tror på, at godt håndværk taler for sig selv, og derfor er størstedelen af vores kunder kommet til os via anbefalinger fra tilfredse kunder i Herning-området.",
      "Uanset om du skal have bygget en ny carport, renoveret dit badeværelse eller udskiftet taget, står vi klar til at hjælpe dig. Vi rådgiver dig gerne og finder den bedste løsning til dit projekt og budget.",
    ],
    services: [
      {
        title: "Tagarbejde",
        description:
          "Nyt tag, tagreparation og tagudskiftning. Vi arbejder med alle typer tagmaterialer og sikrer et tæt og holdbart tag over dit hoved.",
        icon: "🏠",
      },
      {
        title: "Tilbygning",
        description:
          "Mangler du plads? Vi bygger tilbygninger der passer perfekt til din eksisterende bolig — fra fundament til færdigt resultat.",
        icon: "🔨",
      },
      {
        title: "Carport & Garage",
        description:
          "Skræddersyede carporte og garager i høj kvalitet. Vi designer og bygger efter dine ønsker og behov.",
        icon: "🚗",
      },
      {
        title: "Køkkenmontage",
        description:
          "Professionel montering af dit nye køkken. Vi sørger for præcis tilpasning og en flot finish på alle detaljer.",
        icon: "🍳",
      },
      {
        title: "Vinduesudskiftning",
        description:
          "Nye vinduer sparer energi og forskønner din bolig. Vi leverer og monterer vinduer i alle størrelser og materialer.",
        icon: "🪟",
      },
      {
        title: "Boligrenovering",
        description:
          "Komplet renovering af din bolig. Vi koordinerer alle fag og sikrer et smukt og funktionelt resultat fra start til slut.",
        icon: "🏗️",
      },
    ],
    usps: [
      {
        title: "Lokalt firma i Herning",
        description:
          "Vi kender området og er altid tæt på. Kort responstid og lokalt kendskab gør en forskel for dit projekt.",
      },
      {
        title: "Fast pris uden overraskelser",
        description:
          "Du kender prisen inden vi starter. Ingen skjulte omkostninger eller ubehagelige overraskelser på fakturaen.",
      },
      {
        title: "Erfarne tømrermestre",
        description:
          "Vores hold består af uddannede tømrermestre med mange års erfaring i alle typer tømrerarbejde.",
      },
      {
        title: "Hurtig opstart",
        description:
          "Vi ved at tid er vigtig. Derfor starter vi dit projekt hurtigt og holder tidsplanen til punkt og prikke.",
      },
    ],
    heroContent:
      "Har du brug for en pålidelig tømrer i Herning? Vores erfarne tømrermestre står klar til at hjælpe dig med alt fra små reparationer til store byggeprojekter. Vi tilbyder kvalitetsarbejde til faste priser og er kendt for vores hurtige service og høje håndværksmæssige standard i hele Herning-området.",
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
        "Leder du efter professionelt tømrerarbejde i Herning? Vi håndterer alle typer tømreropgaver — fra mindre reparationer og vedligeholdelse til store nybyggerier og renoveringer.",
      content: [
        "Tømrerarbejde dækker over en bred vifte af opgaver i byggebranchen. Som din lokale tømrer i Herning har vi specialiseret os i at levere håndværk af højeste kvalitet til private boligejere og erhvervskunder i hele Herning-området. Vores tømrerarbejde spænder fra traditionelt konstruktionsarbejde til moderne løsninger med nye materialer og teknikker.",
        "Når du vælger os til dit tømrerarbejde i Herning, får du et dedikeret team der tager ansvar for hele processen. Vi starter med en grundig gennemgang af opgaven, udarbejder et detaljeret tilbud med fast pris, og udfører arbejdet til aftalt tid og kvalitet. Vi rydder selvfølgelig op efter os, så du kan nyde resultatet med det samme.",
        "Vores tømrerarbejde omfatter blandt andet opførelse af trækonstruktioner, montering af lofter og vægge, installation af døre og vinduer, samt tilpasning og reparation af eksisterende trækonstruktioner. Vi arbejder med alle typer træ og træbaserede materialer og rådgiver gerne om den bedste løsning til netop dit projekt.",
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
        "At vælge en autoriseret tømrermester i Herning giver dig tryghed og sikkerhed for at arbejdet udføres korrekt og efter gældende bygningsregler. Vores tømrermestre har gennemgået den fulde uddannelse og har mange års praktisk erfaring med alt fra boligbyggeri til erhvervsprojekter i Herning-området.",
        "Som tømrermester i Herning påtager vi os det fulde ansvar for de projekter vi udfører. Det betyder at du får en grundig rådgivning inden projektstart, professionel projektledelse undervejs, og et færdigt resultat der lever op til de højeste standarder. Vi sørger for alle nødvendige tilladelser og sikrer at alt arbejde overholder bygningsreglementet.",
        "Vores tømrermestre i Herning er specialiseret i at finde de bedste løsninger til hver enkelt kunde. Uanset om du skal have bygget nyt, renoveret eller repareret, kan vi rådgive dig om materialevalg, konstruktionsmetoder og budgetoptimering. Vi tror på åben kommunikation og holder dig opdateret gennem hele processen.",
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
        "Et godt tag er afgørende for din boligs tilstand og værdi. Som specialister i tagarbejde i Herning har vi mange års erfaring med alle typer tagkonstruktioner — fra klassiske tegltage til moderne tagløsninger med integrerede solceller. Vi arbejder med alle tagmaterialer og kan rådgive dig om den bedste løsning.",
        "Vores tagarbejde i Herning omfatter komplet tagudskiftning, delvis reparation af beskadigede tagflader, udskiftning af tagrender og nedløb, samt isolering af tagkonstruktionen. Vi udfører også akutte tagreparationer ved stormskader eller utætheder, så du hurtigt kan få lukket dit tag igen.",
        "Når vi udfører tagarbejde i Herning, sørger vi altid for at inspicere den underliggende tagkonstruktion for råd, svamp eller insektangreb. På den måde sikrer vi at dit nye tag får det bedst mulige fundament. Vi tilbyder også energioptimering af dit tag med moderne isoleringsmaterialer der kan reducere dine varmeudgifter markant.",
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
        "En carport beskytter din bil mod vejr og vind og tilføjer samtidig værdi til din ejendom. Vi har mange års erfaring med at bygge carporte i Herning og tilbyder løsninger i alle størrelser og materialer. Uanset om du ønsker en fritstående carport eller en der er bygget sammen med din bolig, finder vi den rigtige løsning.",
        "Vores carporte i Herning bygges i robuste materialer der holder i mange år. Vi tilbyder carporte i både træ og stål, med mulighed for integreret opbevaring, cykelskur eller overdækket terrasse. Alle vores carporte designes individuelt, så de passer til din boligs arkitektur og dine specifikke ønsker.",
        "Fra den første idé til den færdige carport tager vi os af hele processen. Vi udarbejder tegninger, søger eventuelle byggetilladelser, forbereder underlaget og opfører carporten. Vi sørger også for korrekt afvanding og eventuelt belysning, så din nye carport i Herning er funktionel fra dag ét.",
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
        "En tilbygning er en af de bedste måder at skabe mere plads i din bolig uden at flytte. Vi har bred erfaring med tilbygninger i Herning — fra små udvidelser af køkken eller stue til store tilbygninger med nye værelser, badeværelse eller dobbelthøje rum. Vores tilbygninger bygges altid med respekt for den eksisterende byggestil.",
        "Processen starter med et uforpligtende møde hvor vi besøger din bolig, tager mål og drøfter dine ønsker og budget. Vi udarbejder derefter et detaljeret forslag med tegninger og fast pris. Vi hjælper også med byggetilladelse og koordinerer alle nødvendige faggrupper, så du kun har én kontaktperson.",
        "Når vi bygger tilbygninger i Herning, sørger vi for at overgangen mellem gammelt og nyt er sømløs. Det gælder både konstruktionen, isoleringen og de æstetiske detaljer. Vi bruger materialer der matcher din eksisterende bolig og sikrer at tilbygningen føles som en naturlig del af huset.",
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
        "En ny altandør kan gøre en stor forskel for din bolig. Moderne altandøre har langt bedre isoleringsevne end ældre modeller, hvilket både reducerer dine varmeudgifter og forbedrer komforten indenfor. Vi tilbyder altandøre i træ, aluminium og kompositmaterialer fra førende danske og europæiske producenter.",
        "Vi monterer alle typer altandøre i Herning — fra klassiske enkeltdøre til store skydedøre og foldedøre der åbner hele væggen op mod haven. Vores erfarne tømrere sikrer en præcis montering med korrekt tætning og isolering, så du undgår kuldebroer og træk.",
        "Udskiftning af en altandør i Herning tager typisk én arbejdsdag. Vi fjerner den gamle dør, forbereder åbningen, monterer den nye dør og efterbehandler indefra og udefra. Vi sørger for at alt er tæt og funktionelt inden vi forlader dit hjem, og vi rydder selvfølgelig op efter os.",
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
        "Gamle vinduer er en af de største kilder til varmetab i danske boliger. Ved at udskifte dine vinduer med moderne energiruder kan du reducere dit varmeforbrug markant og samtidig forbedre komforten i din bolig. Vi tilbyder vinduesudskiftning i Herning med vinduer fra anerkendte danske producenter.",
        "Vores vinduesudskiftning i Herning dækker alle typer vinduer — fra standard sidehengte vinduer til ovenlysvinduer, kviste og specialmål. Vi rådgiver dig om valg af materiale, glastype og åbningsmekanisme baseret på din boligs behov og dit budget. Alle vores vinduer leveres med energimærke og garanti.",
        "Processen for vinduesudskiftning starter med et uforpligtende hjemmebesøg hvor vi opmåler og rådgiver. Vi udarbejder et komplet tilbud med fast pris der dækker vinduer, montering, efterbehandling og oprydning. Selve udskiftningen udføres typisk på en til to dage afhængig af antal vinduer.",
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
        "Et nyt køkken er en stor investering, og en professionel montering sikrer at resultatet lever op til dine forventninger. Vi har monteret hundredvis af køkkener i Herning og har erfaring med alle de store køkkenproducenter — fra IKEA og HTH til Svane og Kvik. Uanset dit køkkens kompleksitet sørger vi for en præcis og flot montering.",
        "Vores køkkenmontage i Herning dækker hele processen: nedtagning af det gamle køkken, forberedelse af vægge og gulv, montering af nye skabe, bordplade, vask og hvidevarer, samt tilslutning af vand og afløb. Vi koordinerer om nødvendigt med VVS og elektriker, så alt fungerer fra første dag.",
        "Vi ved at et køkkenprojekt kan virke overvældende, men med os som montør kan du læne dig tilbage og nyde processen. Vi arbejder effektivt og holder dit hjem rent undervejs. De fleste køkkener monterer vi på to til tre dage, og vi sørger for at dit køkken er fuldt funktionelt inden vi forlader stedet.",
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
        "En trappe er ikke bare en funktionel forbindelse mellem etager — den er et centralt designelement i din bolig. Vi bygger trapper i Herning der forener æstetik med funktion, og vi tilpasser altid designet til din boligs arkitektur og dine personlige præferencer. Fra klassiske trætrapper til moderne løsninger i stål og glas.",
        "Vores trapper og gelændere i Herning bygges efter mål og leveres i den højeste kvalitet. Vi arbejder med massivt træ, lamineret træ, stål og glas, og vi kan kombinere materialer for et unikt udtryk. Alle vores trapper overholder gældende bygningsregler for sikkerhed og dimensioner.",
        "Udover nye trapper tilbyder vi også renovering af eksisterende trapper i Herning. Det kan være udskiftning af slidte trin, montering af nyt gelænder, eller en komplet omlægning af trappens konstruktion. Vi rådgiver dig om mulighederne og finder den løsning der giver mest værdi for dit budget.",
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
        "En boligrenovering kan forvandle dit hjem og øge dets værdi markant. Vi har gennemført mange store og små renoveringsprojekter i Herning og har den erfaring der skal til for at håndtere alle udfordringer undervejs. Vores team af tømrere, projektledere og samarbejdspartnere sikrer at dit renoveringsprojekt forløber glat.",
        "Vores boligrenovering i Herning dækker alt fra totalrenovering af ældre ejendomme til opdatering af enkelte rum. Vi håndterer tømrerarbejde, gulve, vægge, lofter, vinduer og døre, og koordinerer med VVS, elektriker og maler så du kun behøver at forholde dig til os. Vi sørger for byggetilladelser og overholder alle regler.",
        "Vi starter altid med et grundigt overblik over dit projekt. Sammen gennemgår vi dine ønsker, muligheder og budget, og vi udarbejder en realistisk tidsplan og et fast tilbud. Under renoveringen holder vi dig løbende opdateret og sikrer at du altid ved hvad der sker. Vores mål er at levere en boligrenovering i Herning der overgår dine forventninger.",
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

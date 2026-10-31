/**
 * PORTFOLIO - FLOORTJE VAN DER BRUGGEN
 * Volledige en gecorrigeerde JavaScript inclusief Lightbox Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global media variabele voor de lightbox
  let currentMedia = [];

  // ==========================================================================
  // 1. PROJECT DATA
  // ==========================================================================
  const projectsData = {
    'project-1': {
      title: 'Zie het gebaar, stop het gevaar',
      subtitle: 'Ontwerpopdracht Collectief 1, Leerjaar 1',
      heading: 'Opdracht en eindwerk',
      description: 'Voor Graphic Matters ontwierp ik deze poster rondom het thema "Stop!". Het uitgangspunt van mijn concept is het tegengaan van geweld tegen vrouwen...',
      tags: ['Grafisch Ontwerp', 'Visual Storytelling', 'Typografie', 'Campagneposter'],
      mainType: 'image',
      mainImage: 'images/Poster p1.png',
      downloadLink: 'images/Poster p1.pdf',
      downloadText: 'Bekijk poster (PDF)',
      thumbnails: [
        { 
          type: 'image', 
          src: 'images/Poster p1.png', 
          alt: 'Eindposter Zie het gebaar',
          heading: 'Opdracht en eindwerk',
          description: 'Voor Graphic Matters ontwierp ik deze poster rondom het thema "Stop!". Het uitgangspunt van mijn concept is het tegengaan van geweld tegen vrouwen en de noodzaak om in actie te komen wanneer dit plaatsvindt. Het centrale beeld toont een vrouwelijk lichaam dat wordt vastgegrepen, terwijl zij met haar handen het internationale SOS-handgebaar maakt om hulp te vragen.'
        },
        { 
          type: 'image', 
          src: 'images/Mockup p1.png',
          alt: 'Beschrijving van de afbeelding',
          heading: 'Poster mockup',
          description: 'Hier zie je mijn mockup van mijn poster. Ik heb de poster in een realistische omgeving neergezet. In het openbaar vervoer wordt ook geweld gebruikt en juist hier moeten toeschouwers opletten en actie ondernemen.',
        },
        { 
          type: 'image', 
          src: 'images/Experiment p1 compositie.png', 
          alt: 'Compositie experimenten',
          heading: 'Compositie & Indeling',
          description: 'Hier zie je een van mijn compositieexperimenten. Ik heb geëxperimenteerd met hhoe de verhouding tussen tekst en beeld het krachtigst overkomt. Hierbij heb ik ook geëxperimenteerd met kleur en contrast. Toch heb ik gekozen utieindelijk voor een simpele witte tekst, omdat dit duidelijker naar voren kwam.'
        },
        { 
          type: 'image', 
          src: 'images/Experiment p1 tekst.png', 
          alt: 'Typografie experimenten',
          heading: 'Typografisch Onderzoek',
          description: 'Tijdens deze fase heb ik verschillende lettertypes en zinvorming getest. Ik ben begonnen met de tekst "Zie het gebaar, stop het gevaar.", maar ik kwam er al snel achter dat ik dit te lang vond. Ik wilde iets korts en kernachtigs om de boodschap zo duidelijk mogelijk over te laten komen. Ik heb uiteindelijk gekozen voor de tekst "Zie gebaar stop gevaar." waarbij ik de eerste twee woorden naast elkaar heb egzet en de rest onder elkaar.'
        },
        { 
          type: 'image', 
          src: 'images/Experiment p1.png', 
          alt: 'Illustratie experiment',
          heading: 'Illustratiestijl & Kleur',
          description: 'Dit is een van mijn eerste ontwerpen die uiteindelijk de basis hebben laid voor mijn eindontwerp. Ik ben hier begonnen met de vrouwelijk vorm en de beslissing gemaakt om het lichaam zwart te maken en de armen wit zodat deze meer opvallen. De nagels had ik hier nog roze omdat je dit vaak terugziet bij jonge vrouwen, wie vaak slachtoffers zijn van geweld.'
        }
      ]
    },
    'project-2': {
      title: 'Live Action Optiteling Whiplash',
      subtitle: 'Ontwerpopdracht Media Desgin 2, Leerjaar 1',
      heading: 'Concept & Scèneopbouw',
      description: 'Voor de film Whiplash heb ik een live-action optiteling ontworpen en gefilmd...',
      tags: ['Optiteling', 'Cinematografie', 'Live Action', 'Video Editing' ],
      mainType: 'image',
      videoSrc: 'images/Filmpje p2.mp4',
      videoPoster: 'images/Foto p2.png',
      mainImage: 'images/Foto p2.png',
      downloadLink: 'images/Filmpje p2.mp4',
      downloadText: 'Download video (MP4)',
      thumbnails: [
        { 
          type: 'image', 
          src: 'images/Foto p2.png', 
          alt: 'Whiplash Title Still',
          heading: 'Concept',
          description: 'Voor media desgin 2 heb ik de opdracht gekregen om een optiteling te maken. Ik heb ervoor gekozen om voor een live-action optiteling te gaan, omdat ik een groeiende interesse heb in film. Wat nu in beeld is is het eindshot van mijn optiteling. Hier wordt het duidelijk dat je het gaat om de film Whiplash.'
        },
        { 
          type: 'video', 
          src: 'images/Foto p2.png', 
          videoSrc: 'images/Filmpje p2.mp4', 
          alt: 'Live Action Video Whiplash (MP4)',
          heading: 'Live-Action Video',
          description: 'Hier zie je mijn eindwerk; de volledige videomontage. Voor mijn video heb ik gekozen voor slowmotion close-up shots om de details te laten zien. Ik heb ervoor gekozen om de spanning te laten opbouwen door richting het einde van de video een zwart beeld te weergeven, en daarna alle shots in een snel tempo te laten zien. De muziek bouwt zich ook op.'
        },
        { 
          type: 'image', 
          src: 'images/Storyboard p2.png', 
          alt: 'Storyboard Whiplash',
          heading: 'Storyboard',
          description: 'Voordat ik begon met filmen heb ik eerst mijn ideeën uitgewerkt in een storyboard. Op mijn storyboard heb ik elk shot uitgeschetst, en kort bijgeschreven wat er op het beeld te zien is en hoelang het shot moet duren. Dit was voor mij een goede richtilijn en ik ehb mijn video kunnen filmen volgens mijn storyboard.',
        },
        { 
          type: 'image', 
          src: 'images/Schets p2.png', 
          alt: 'Schetsen scèneopbouw',
          heading: 'Eerste Schetsen',
          description: 'Het eerste wat ik voor de opdracht heb gedaan is natuurlijk de film "Whiplash" gekeken. Ik ben daarna begonnen met de eerste schetsen waarin ik kenmerkende beelden heb geschetst waar ik later mijn keuze voor de shots op heb gebasseerd.'
        },
        { 
          type: 'image', 
          src: 'images/Inspiratie p2.png', 
          alt: 'Inspiratieboard',
          heading: 'Inspiratie',
          description: 'In mijn video heb ik ervoor gekozen om shots uit de film "na te maken" op een manier waar het in het begin noch niet duidelijk is, maar na het zien van de film herken je de beelden. Ik had voor mijzelf kort opgeschreven op welk stuk uit de film ik mijn shots heb gebasseerd, zodat ik makkelijk terug kon kijken voor inspiratie uit de film.',
        }
      ]
    },
    'project-3': {
      title: 'R3cover herstelwater',
      subtitle: 'Ontwerpopdracht Media Desgin 2, Leerjaar 1',
      heading: 'Concept & Scèneopbouw',
      description: 'Voor de film Whiplash heb ik een live-action optiteling ontworpen en gefilmd...',
      tags: ['Brand identity', 'Grafisch ontwerp', 'Thema' ],
      mainType: 'image',
      mainImage: 'images/Blikje 3.png',
      downloadLink: 'images/Brandbook p3.pdf',
      downloadText: 'Bekijk brandbook (PDF)',
      thumbnails: [
         { 
          type: 'image', 
          src: 'images/Logo p3.png', 
          alt: 'poster pdf',
          heading: 'Logo en concept',
          description: 'Voor media desgin 2 heb ik de opdracht gekregen om een brand identiteit te maken volgens het thema "Beheerst (herstel)water". Ik heb door te schetsen de beslissing gemaakt om mij te focussen op de beheersing van water, en druppels die in water vallen en waterkringen creëren. Voor mijn naam en logo heb ik mij gefocust op het beheersen, en heb dit vertaald naar recovery. Om in het water het herstel aspect  naar voren te laten komen heb ik de 3 ingrediënten; Magnesium, Kamille-extract en Elektrolyten. 3 Ingrediënten, vandaar de R3covery.',
        },
        { 
          type: 'image', 
          src: 'images/Poster p3.png', 
          alt: 'poster pdf',
          heading: 'Ontwerp Poster',
          description: 'Voor mijn poster heb ik de waterkringen hierin verwerkt, en ik heb voor een blauw-wit kleurcombinatie gegaan, omdat ik blauw associeer met water en wit een mooie contrast geeft en het niet te druk maakt. Ik heb de druppels die omhoogkomen zo gepositioneerd dat de druppel uit het logo het bij aansluit. Dit maakt het één geheel. ',
        },
        { 
          type: 'image', 
          src: 'images/Mockup 2 p3.png', 
          alt: 'mockup poster',
          heading: 'Mockup Poster',
          description: 'Om mijn poster zo professioneel mogelijk te laten lijken heb ik mijn posterontwerp in een mockup geplaatst van een billboard op straat. Door de witte kleur springt mijn ontwerp er erg uit, en het contrast met de blauw bovenkant laat het ontwerp al helemaal eruit poppen.'
        },
        { 
          type: 'image', 
          src: 'images/Blikje p3.png', 
          alt: 'Blikje pdf',
          heading: 'Ontwerp Blikje',
          description: 'Naast de poster heb ik ook ontwerp gemaakt voor een blikje (water). Voor mijn blikje mocht ik geen ontwerp maken identiek een mijn poster. Ik heb er dus voor gekozen om mijn blikje simpeler te maken en de letterlijke waterkringen weg te laten. Ik heb ervoor gekozen om 3 dunne blauw lijnen door het witte vlak te laten lopen, en verder mijn logo, kleurenthema etc. hetzelfde te houden.'
        },
        { 
          type: 'image', 
          src: 'images/Mockup p3.png', 
          alt: 'mockup blikje',
          heading: 'Mockup Blikje',
          description: 'Om het ontwerp voor mijn blikje goed te kunnen zien op een rond rond voorwerp heb ik mijn ontwerp in een mockup van een blikje gezet. Hierdoor kon ik goed zien hoe mijn 360 graden ontwerp in elkaar overloopt. '
        },
        { 
          type: 'image', 
          src: 'images/Moodboard p3.png', 
          alt: 'moodboard pdf',
          heading: 'Moodboard thema',
          description: 'Om tot mijn uiteindelijk ontwerp te komen heb ik eerst een moodboard gemaakt met hierin ideeën voor kleuren, lettertypes en vormgeving. Dit moodboard heeft mij geholpen met het kiezen en aanscherpen van mijn idee, zodat ik niet van de kern af zou dwalen. '
        },
        { 
          type: 'image', 
          src: 'images/Schets p3.png', 
          alt: 'schets',
          heading: 'Eerste brede schets',
          description: 'In de eerste schetsfase heb ik alleen maar associaties moeten schetsen. Hier heb ik alle kanten van wat "beheersing" voor mij betekend geschetst.',
        },
        { 
          type: 'image', 
          src: 'images/Schets 2 p3.png', 
          alt: 'schets',
          heading: 'Tweede schets',
          description: 'In de tweede schetsfase heb ik mij meer verdiept op de structuur, klanken, en golven. Ik ben uiteindelijk verder gegaan met de golven en heb dit gekoppeld aan de watergolven.',
        }
      ]
    },
    'project-4': {
      title: 'Kweek & eet',
      subtitle: 'Ontwerpopdracht Discursive Design 1, Leerjaar 1',
      heading: 'Concept & Scèneopbouw',
      description: 'Voor de film Whiplash heb ik een live-action optiteling ontworpen en gefilmd...',
      tags: ['Installatie', 'Eetbaar verhaal', 'Onconventioneel', 'Natuur' ],
      mainType: 'image',
      mainImage: 'images/Tafel p4.png',
      downloadLink: 'images/Posters p4.pdf',
      downloadText: 'Bekijk Eindposters (PDF)',
      thumbnails: [
        { 
          type: 'image', 
          src: 'images/Tafel p4.png', 
          alt: 'Whiplash Title Still',
          heading: 'Setting',
          description: 'Voor discurisve design 1 heb ik de opdracht gekregen om een eetbaar verhaal te ontwerpen dat een maatschappelijk vraagstuk op een ervaarbare manier zichtbaar maakt. Door mijn originele object (een cactuslamp) te analyseren, ontdekte ik dat mensen natuur gebruiken als decoratie, zonder daadwerkelijk iets aan de natuur bij te dragen. Ik heb dit inzicht gekoppeld aan de eetcultuur en heb de beslissen gemaakt om te focussen op de relatie tussen voedsel, consumptie en bijdragen aan de natuur. Dit heb ik vertaald naar een eetervaring waarbij gasten eerst een plantje in de aarde moeten planten voordat ze bij hun eten kunnen. Hiermee wil ik men laten ervaren dat we niet alleen uit de natuur moeten consumeren, maar ook iets moeten teruggeven. '
        },
        { 
          type: 'image', 
          src: 'images/Portie p4.png', 
          alt: 'Live Action Video Whiplash (MP4)',
          heading: 'Product',
          description: 'Hier zie je het plantje die je geseveerd krijgt. Het plantje zit in een afbreekbaar papieren bekertje met hierop het simpele logo van "Kweek & eet".'
        },
        { 
          type: 'image', 
          src: 'images/Proces p4.png', 
          alt: 'Storyboard Whiplash',
          heading: 'Actie',
          description: 'Voordat je toegang krijgt tot het eten, moet je het plantje uit de beker halen. Bij het eruithalen van het plantje zie je dat het plantje in nog een apart afbreekbaar bakje zit. Je kan het plantje met dit bekertje planten, of zonder.',
        },
        { 
          type: 'image', 
          src: 'images/Rijst p4.png', 
          alt: 'Schetsen scèneopbouw',
          heading: 'Inhoud',
          description: 'Bij het verwijderen van het plantje uit de beker zal het gesealde eten tevoorschijnkomen. De voedselsoorten die hierin zouden komen te zitten kan variëren. In dit geval zit er rijst in die gesealed is.'
        },
        { 
          type: 'image', 
          src: 'images/Presentatie p4.png', 
          alt: 'Inspiratieboard',
          heading: 'Presentatie',
          description: 'Voor de eindpresentatie heb ik de setting op school nagemaakt. Ik heb de tafel gedekt met bordjes en de plantbekers en ik heb het bakje aarde neergezet zodat de docenten deze konden planten, wat ze ook echt hebben gedaan. Naast de bekers heb ik ook eindposters gemaakt waar in het kort uitleg over mijn proces staat.',
        },
        { 
          type: 'image', 
          src: 'images/Schets p4.png', 
          alt: 'Inspiratieboard',
          heading: 'Schets',
          description: 'Voor het eindwerk heb ik verschillende richtingen onderzocht. Ik heb binnen het eetbare verhaal verschillende ideeën bedacht, zoals een systeem dat je de natuur water moet geven om je eten te krijgen. Ik vond het de kweek & eet toch het sterkst en realistisch.', 
        }
      ]
    },
    'project-5': {
      title: 'Mora Ontbijtkroket',
      subtitle: 'Ontwerpopdracht Collectief 5, Leerjaar 2',
      heading: 'Concept & Scèneopbouw',
      description: 'Voor de film Whiplash heb ik een live-action optiteling ontworpen en gefilmd...',
      tags: ['1 Aprilcampgane', 'Marketing', 'Tijdlijn' ],
      mainType: 'image',
      mainImage: 'images/Fightclub p5.png',
      downloadLink: 'images/Presentatie p5.pdf',
      downloadText: 'Bekijk Eindpresentatie (PDF)',
      thumbnails: [
        { 
          type: 'image', 
          src: 'images/Fightclub p5.png', 
          alt: 'opdracht',
          heading: 'Opdracht',
          description: 'Voor Collectief 5 heb ik de keuze mogen maken tussen verschillende opdrachtgevers. Ik ben uiteindelijk geplaatst bij mijn eerste keuze; Fightclub Agency. Van Fightclub heb ik de opdracht gekregen om een originele geloofwaardige 1 aprilcampagne te bedenken voor de merken Mora, Red Band of Venco.'
        },
        { 
          type: 'image', 
          src: 'images/Schets beste p5.png', 
          alt: 'schetsen',
          heading: 'Schetsen',
          description: 'Ik ben begonnen met voor elk merk uit te zoeken waar zij voor staan, en ben hiermee ook gaan schetsen. Ik heb geprobeerd om breed te schetsen d.m.v. een Crazy 8 uit te voeren. Ik heb een selectie gemaakt van sterkste 6 ideeën en heb deze gepresenteerd aan de opdrachtgever. Van de opdracht heb ik als feedback gekregen dat mijn campagne ideeën goed waren, maar niet grappig en twijfelachtig genoeg om een 1 aprilgrap te zijn. Ik ben na overleg met de opdrachtgever verder gegaan met een van mijn ideeën, namelijk de ontbijtkroket van Mora.'
        },
        { 
          type: 'image', 
          src: 'images/Ontbijtkroket 2 p5.png', 
          alt: 'Storyboard Whiplash',
          heading: 'Omelet kroket',
          description: 'Aangezien de doelgroep van Mora best breed is, heb ik mijn gefocust op meerdere doelgroepen. Door onderzoek te doen naar trends die nu gaande zijn en te kijken naar de doelgroep die hierbij hoort, heb ik besloten om 2 soorten ontbijtkroketten te maken. Voor ontbijtkroket 1 heb ik mijn gefocust op de proteïnetrend die nu gaande is, en hierbij kan de doelgroep twee richtingen op gaan. De ontbijtkroket is voor de stappers die een nachtje doorhalen en in de ochtend thuiskomen en honger hebben. Zij krijgen op deze manier toch eiwitten binnen en andere voedingsstoffen. De andere doelgroep is de sporters die af en toe ook een snack willen. De eerste ontbijtkroket is de omelet kroket waar kaas bij zit en veel proteïne. De ontbijtkroket is een gezonder alternatief van een normale kroket met meer eiwitten. ',
        },
        { 
          type: 'image', 
          src: 'images/Ontbijtkroket 1 p5.png', 
          alt: 'Schetsen scèneopbouw',
          heading: 'Havermout kroket',
          description: 'Voor ontbijtkroket 2 heb ik mij gefocust op de overnight oats trend. Ik heb mij hierbij ook gefocust op de doelgroep van de overnight oats trend, wat voornamelijk mensen zijn die een makkelijk en voedzaam ontbijt willen als ze bijvoorbeeld haast hebben om naar hun werk te gaan. Deze kroket kan je opwarmen in de magnetron, maar ook in de airfryer als je hem crunchy wil houden. De tweede ontbijtkroket is dan ook een havermout kroket waar veel vezels, vitamines en bosvruchten in zitten. De finishing touch bij deze kroket is de zoete korst.'
        },
        { 
          type: 'image', 
          src: 'images/Teaser p5.png', 
          alt: 'Inspiratieboard',
          heading: 'Teaser',
          description: 'Voor mijn campagne heb ik moeten nadenken over de tijdlijn van wat ik wanneer post/laat gebeuren. Ik heb gekozen voor 3 momenten om mijn campagne neer te zetten. Het eerste moment zal een socialpost worden waar Mora een foto upload van een nieuwe kroketsmaak, maar waar de smaak nog wazig is op de verpakking. Deze post heb ik ook d.m.v. Photoshop gemaakt. Deze post zal 1,5 week voor 1 april online komen. Ik heb bewust voor de social media gekozen als eerste teaser, omdat het heel toegankelijk is en snel kan worden verspreid door de doelgroep wat gratis aandacht is.',
        },
        { 
          type: 'image', 
          src: 'images/Cora p5.png', 
          alt: 'Inspiratieboard',
          heading: 'A day in Coras Life',
          description: 'Voor de tweede onthulling heb ik wederom ingespeeld op een trend. Ik heb ervoor gekozen om als tweede onthulling een korte video te uploaden waar je een "a day in my life" ziet van Cora van Mora. Je ziet hier hoe Cora beide doelgroepen naspeelt. Eerst zal je dus een stuk zien waar Cora in de ochtends thuiskomt van feestje en waar ze een heerlijke omelet kroket. Daarna zie je hoe ze gehaast wakker wordt en bijna te laat is voor haar werk, en dus een havermout kroket snel opwarmt en opeet. Aan het eind van de video komen de twee smaken in beeld. ', 
        },
          { 
          type: 'image', 
          src: 'images/Proeverij p5.png', 
          alt: 'Inspiratieboard',
          heading: 'Onthulling 1 arpilgrap',
          description: 'De derde en laatste onthulling zal op 1 april plaatsvinden. In supermarkten door het hele land zullen proeverijen plaatsvinden waar klanten zogenaamd de ontbijtkroketten kunnen proeven. Bij het kraampje kunnen ze een klein stukje kroket pakken met een prikkertje erin. De grap is hier dat ze helemaal geen ontbijtkroketten aan het eten zijn, maar gewoon de originele rundvleeskroketten. Op de prikkertjes staat ook dat het een 1 april grap is. Het doel van mensen de originele kroketten laten proeven is dat je op deze manier toch mensen eraan herinnert dat kroketten bestaan en ze wellicht overhaalt om toch een doosje kroketten mee te nemen. ', 
        }
      ]
    }
  };

  // ==========================================================================
  // 2. VERTICALE TIJDLIJN POSITIONERING
  // ==========================================================================
  const timelineTrack = document.querySelector('.timeline-track');
  const dotAbout = document.querySelector('#about .section-dot');
  const dotDetail = document.querySelector('#project-detail .section-dot');
  const dotProjects = document.querySelector('#projects .section-dot');
  const mainWrapper = document.querySelector('.main-wrapper');

  function positionTimelineTrack() {
    if (!timelineTrack || !dotAbout || !dotDetail || !mainWrapper) return;

    const mainRect = mainWrapper.getBoundingClientRect();
    const dotAboutRect = dotAbout.getBoundingClientRect();
    const detailHidden = document.querySelector('#project-detail').classList.contains('is-hidden');
    const endDot = (detailHidden && dotProjects) ? dotProjects : dotDetail;
    const dotDetailRect = endDot.getBoundingClientRect();
    const topPos = (dotAboutRect.top + dotAboutRect.height / 2) - mainRect.top;
    const endPos = (dotDetailRect.top + dotDetailRect.height / 2) - mainRect.top;

    timelineTrack.style.top = `${topPos}px`;
    timelineTrack.style.height = `${Math.max(0, endPos - topPos)}px`;
    timelineTrack.style.bottom = 'auto';
  }

  positionTimelineTrack();
  window.addEventListener('load', positionTimelineTrack);
  window.addEventListener('resize', positionTimelineTrack);

  // ==========================================================================
  // 3. SLIMME HEADER & LOGO CONTRAST
  // ==========================================================================
  const header = document.querySelector('.site-header');
  const heroSection = document.querySelector('#hero');
  let lastScrollY = window.scrollY;

  function updateNavbar() {
    if (!header) return;
    const currentScrollY = window.scrollY;
    const heroHeight = heroSection ? heroSection.offsetHeight : 600;

    if (currentScrollY < heroHeight - 80) {
      header.classList.remove('theme-light', 'nav-scrolled-light');
      header.classList.add('theme-dark');
      if (currentScrollY > 40) {
        header.classList.add('nav-scrolled-dark');
      } else {
        header.classList.remove('nav-scrolled-dark');
      }
    } else {
      header.classList.remove('theme-dark', 'nav-scrolled-dark');
      header.classList.add('theme-light', 'nav-scrolled-light');
    }

    if (currentScrollY > 150) {
      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        header.classList.add('nav-hidden');
      } else if (currentScrollY < lastScrollY) {
        header.classList.remove('nav-hidden');
      }
    } else {
      header.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // ==========================================================================
  // 4. PROJECT DETAIL WEERGAVE & THUMBNAILS
  // ==========================================================================
  const projectTitleEl = document.querySelector('#projectTitle');
  const projectSubtitleEl = document.querySelector('#projectSubtitle');
  const projectHeadingEl = document.querySelector('#projectHeading');
  const projectDescEl = document.querySelector('#projectDesc');
  const projectTagsEl = document.querySelector('#projectTags');
  const mainProjectImage = document.querySelector('#mainProjectImage');
  const thumbnailRow = document.querySelector('#thumbnailRow');
  const downloadBtn = document.querySelector('#projectDownloadBtn');
  const downloadBtnText = document.querySelector('#downloadBtnText');
  const mainProjectVideo = document.querySelector('#mainProjectVideo');

  
  // Volgorde van projecten + pijltjes vorig/volgend
  const projectOrder = Object.keys(projectsData);
  let currentProjectId = null;
  const prevProjectBtn = document.querySelector('#prevProjectBtn');
  const nextProjectBtn = document.querySelector('#nextProjectBtn');

  function updateProjectNav() {
    const index = projectOrder.indexOf(currentProjectId);
    const prevId = projectOrder[index - 1];
    const nextId = projectOrder[index + 1];

    if (prevProjectBtn) {
      prevProjectBtn.classList.toggle('is-hidden-btn', !prevId);
      prevProjectBtn.title = prevId ? 'Vorig project: ' + projectsData[prevId].title : '';
    }
    if (nextProjectBtn) {
      nextProjectBtn.classList.toggle('is-hidden-btn', !nextId);
      nextProjectBtn.title = nextId ? 'Volgend project: ' + projectsData[nextId].title : '';
    }
  }

  function displayProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    currentProjectId = projectId;
    updateProjectNav();

    // UPDATE VAN DE AFBEELDINGEN-LIJST VOOR DE LIGHTBOX
    currentMedia = project.thumbnails || [];

    // 1. Actieve status op puzzelstukjes updaten
    document.querySelectorAll('.puzzle-group').forEach(g => {
      const isTarget = g.getAttribute('data-project') === projectId;
      const piece = g.querySelector('.puzzle-piece');
      if (isTarget) {
        g.classList.add('is-active');
        if (piece) piece.classList.add('is-active');
      } else {
        g.classList.remove('is-active');
        if (piece) piece.classList.remove('is-active');
      }
    });

    // 2. Basisteksten en tags instellen
    const firstThumb = project.thumbnails && project.thumbnails[0];

    if (projectTitleEl) projectTitleEl.textContent = project.title;
    if (projectSubtitleEl) projectSubtitleEl.textContent = project.subtitle;
    if (projectHeadingEl) projectHeadingEl.textContent = (firstThumb && firstThumb.heading) || project.heading;
    if (projectDescEl) projectDescEl.textContent = (firstThumb && firstThumb.description) || project.description;

    if (projectTagsEl) {
      projectTagsEl.innerHTML = '';
      project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag-pill';
        span.textContent = tag;
        projectTagsEl.appendChild(span);
      });
    }

    if (downloadBtn) {
      if (project.downloadLink) {
        downloadBtn.style.display = 'inline-flex';
        downloadBtn.href = project.downloadLink;
        if (downloadBtnText) downloadBtnText.textContent = project.downloadText;
      } else {
        downloadBtn.style.display = 'none';
      }
    }

    // 3. Eerste thumbnail/afbeelding direct correct inladen
    const initialSrc = (firstThumb && firstThumb.src) || project.mainImage;

    if (mainProjectVideo) {
      mainProjectVideo.pause();
      mainProjectVideo.style.display = 'none';
    }

    if (mainProjectImage) {
      if (initialSrc) {
        mainProjectImage.src = initialSrc;
        mainProjectImage.alt = project.title;
        mainProjectImage.style.display = 'block';
        mainProjectImage.style.opacity = '1';
        mainProjectImage.style.transform = 'scale(1)';
      } else {
        mainProjectImage.style.display = 'none';
      }
    }

    // 4. Thumbnails opbouwen
    if (thumbnailRow && project.thumbnails) {
      thumbnailRow.innerHTML = '';

      project.thumbnails.forEach((thumb, index) => {
        const isVideo = thumb.type === 'video';
        const box = document.createElement('div');
        box.className = `thumbnail-box${index === 0 ? ' active' : ''}${isVideo ? ' video-thumb' : ''}`;
        box.title = thumb.alt || (isVideo ? 'Speel video af' : `Foto ${index + 1}`);

        const img = document.createElement('img');
        img.src = thumb.src;
        img.alt = thumb.alt || project.title;
        box.appendChild(img);

        box.addEventListener('click', () => {
          thumbnailRow.querySelectorAll('.thumbnail-box').forEach(b => b.classList.remove('active'));
          box.classList.add('active');

          box.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

          if (thumb.description && projectDescEl) {
            projectDescEl.textContent = thumb.description;
          } else if (projectDescEl) {
            projectDescEl.textContent = project.description;
          }

          if (thumb.heading && projectHeadingEl) {
            projectHeadingEl.textContent = thumb.heading;
          } else if (projectHeadingEl) {
            projectHeadingEl.textContent = project.heading;
          }

          if (isVideo && mainProjectVideo) {
            if (mainProjectImage) mainProjectImage.style.display = 'none';
            
            const source = mainProjectVideo.querySelector('source');
            const newSrc = thumb.videoSrc || project.videoSrc;
            
            if (source && newSrc) {
              source.src = newSrc;
              mainProjectVideo.load();
            }

            mainProjectVideo.style.display = 'block';
            mainProjectVideo.play().catch(() => {});
          } else {
            if (mainProjectVideo) {
              mainProjectVideo.pause();
              mainProjectVideo.style.display = 'none';
            }

            if (mainProjectImage) {
              mainProjectImage.style.display = 'block';
              mainProjectImage.style.opacity = '0';
              mainProjectImage.style.transform = 'scale(0.97)';
              
              setTimeout(() => {
                mainProjectImage.src = thumb.src;
                mainProjectImage.alt = thumb.alt || project.title;
                mainProjectImage.style.opacity = '1';
                mainProjectImage.style.transform = 'scale(1)';
                positionTimelineTrack();
              }, 120);
            }
          }
        });

        thumbnailRow.appendChild(box);
      });
    }

    setTimeout(positionTimelineTrack, 250);
  }

  // ==========================================================================
  // 5. PUZZELSTUKKEN INTERACTIE & AUTOMATISCH SCROLLEN
  // ==========================================================================
  const puzzleGroups = document.querySelectorAll('.puzzle-group');
  const puzzleTooltip = document.querySelector('#puzzleTooltip');
  const projectDetailSection = document.querySelector('#project-detail');

  puzzleGroups.forEach(group => {
    const projectId = group.getAttribute('data-project');

    group.addEventListener('click', (e) => {
      e.preventDefault();
      const project = projectsData[projectId];

           if (project) {
        if (projectDetailSection) projectDetailSection.classList.remove('is-hidden');
        displayProject(projectId);
        if (projectDetailSection) {
          projectDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        if (puzzleTooltip) {
          puzzleTooltip.textContent = 'Binnenkort beschikbaar - Ik ben nog aan het puzzelen!';
          puzzleTooltip.style.color = 'var(--color-coral)';
          puzzleTooltip.style.opacity = '1';
          setTimeout(() => {
            puzzleTooltip.textContent = 'Klik op een puzzelstukje om het project te bekijken';
            puzzleTooltip.style.color = '';
          }, 2400);
        }
      }
    });
  });
  // Pijltjes: naar vorig / volgend project
  function goToProject(offset) {
    const index = projectOrder.indexOf(currentProjectId);
    const newId = projectOrder[index + offset];
    if (!newId) return;

    displayProject(newId);
    if (projectDetailSection) {
      projectDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (prevProjectBtn) prevProjectBtn.addEventListener('click', () => goToProject(-1));
  if (nextProjectBtn) nextProjectBtn.addEventListener('click', () => goToProject(1));
  // ==========================================================================
  // 6. SCROLL TO TOP & CV MODAL
  // ==========================================================================
  const scrollTopBtn = document.querySelector('#scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const cvBtn = document.querySelector('#cvBtn');
  const cvModal = document.querySelector('#cvModal');
  const closeCvModal = document.querySelector('#closeCvModal');
  const closeCvBtn = document.querySelector('#closeCvBtn');

  function openModal(e) {
    if (e) e.preventDefault();
    if (cvModal) {
      cvModal.classList.add('is-open');
      cvModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeModal() {
    if (cvModal) {
      cvModal.classList.remove('is-open');
      cvModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (cvBtn) cvBtn.addEventListener('click', openModal);
  if (closeCvModal) closeCvModal.addEventListener('click', closeModal);
  if (closeCvBtn) closeCvBtn.addEventListener('click', closeModal);
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal && cvModal.classList.contains('is-open')) {
      closeModal();
    }
  });

// ==========================================================================
  // 7. LIGHTBOX INTERACTIE (SLIDESHOW, ZOOM, SLEPEN & ROTEREN)
  // ==========================================================================
  const lightbox = document.querySelector('#imageLightbox');
  const lightboxImg = document.querySelector('#lightboxImage');
  const lightboxWrapper = document.querySelector('#lightboxImageWrapper');
  const lightboxVideo = document.querySelector('#lightboxVideo');
  const lightboxClose = document.querySelector('#lightboxCloseBtn');
  const rotateBtn = document.querySelector('#rotateBtn');
  const resetZoomBtn = document.querySelector('#resetZoomBtn');
  const prevBtn = document.querySelector('#lightboxPrevBtn');
  const nextBtn = document.querySelector('#lightboxNextBtn');

  let currentMediaIndex = 0;
  let isZoomed = false;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let rotationDegree = 0;

  // Drag & drop variabelen
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let dragDistance = 0;

  function updateTransform() {
    if (!lightboxImg || !lightboxWrapper) return;
    
    // Rotatie op de buitenste wrapper
    lightboxWrapper.style.transform = `rotate(${rotationDegree}deg)`;
    
    // Zoom & Verschuiving op de afbeelding zelf
    lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    
    if (isZoomed) {
      lightboxImg.classList.add('is-zoomed');
    } else {
      lightboxImg.classList.remove('is-zoomed');
      lightboxImg.classList.remove('is-dragging');
    }
  }

  function resetZoomOnly() {
    isZoomed = false;
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  }

  function resetAll() {
    rotationDegree = 0;
    resetZoomOnly();
  }

  function renderLightboxItem() {
    if (!currentMedia || !currentMedia.length) return;
    
    resetAll();

    const item = currentMedia[currentMediaIndex];

    if (item.type === 'video') {
      if (lightboxWrapper) lightboxWrapper.style.display = 'none';
      if (lightboxVideo) {
        lightboxVideo.style.display = 'block';
        const source = lightboxVideo.querySelector('source');
        if (source) source.src = item.videoSrc || item.src;
        lightboxVideo.load();
        lightboxVideo.play().catch(() => {});
      }
      if (rotateBtn) rotateBtn.style.display = 'none';
      if (resetZoomBtn) resetZoomBtn.style.display = 'none';
    } else {
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.style.display = 'none';
      }
      if (lightboxWrapper) lightboxWrapper.style.display = 'flex';
      if (lightboxImg) {
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt || 'Uitvergroot beeld';
        lightboxImg.style.display = 'block';
      }
      if (rotateBtn) rotateBtn.style.display = 'inline-flex';
      if (resetZoomBtn) resetZoomBtn.style.display = 'inline-flex';
    }
  }

  function openLightbox(index) {
    if (!currentMedia || !currentMedia.length) return;
    currentMediaIndex = index;
    renderLightboxItem();

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lightboxVideo) lightboxVideo.pause();
    resetAll();
  }

  function nextItem() {
    if (!currentMedia || !currentMedia.length) return;
    currentMediaIndex = (currentMediaIndex + 1) % currentMedia.length;
    renderLightboxItem();
  }

  function prevItem() {
    if (!currentMedia || !currentMedia.length) return;
    currentMediaIndex = (currentMediaIndex - 1 + currentMedia.length) % currentMedia.length;
    renderLightboxItem();
  }

  // Openen via hoofd-afbeelding
  if (mainProjectImage) {
    mainProjectImage.addEventListener('click', () => {
      const activeThumb = thumbnailRow.querySelector('.thumbnail-box.active');
      const allThumbs = Array.from(thumbnailRow.querySelectorAll('.thumbnail-box'));
      let index = allThumbs.indexOf(activeThumb);
      if (index === -1) index = 0;

      openLightbox(index);
    });
  }

  // --- INTERACTIE: ZOOMAANSTURING & DRAG ---
  if (lightboxImg) {
    lightboxImg.addEventListener('mousedown', (e) => {
      if (!isZoomed) return;
      e.preventDefault();
      isDragging = true;
      dragDistance = 0;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      lightboxImg.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      dragDistance += Math.abs(e.movementX) + Math.abs(e.movementY);
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateTransform();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        if (lightboxImg) lightboxImg.classList.remove('is-dragging');
      }
    });

    lightboxImg.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dragDistance > 5) return; // Geen zoom bij slepen

      if (!isZoomed) {
        scale = 2.2;
        isZoomed = true;
      } else {
        resetZoomOnly();
      }
      updateTransform();
    });

    lightboxImg.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      resetZoomOnly();
    });
  }

  // Knop: Reset / Terug
  if (resetZoomBtn) {
    resetZoomBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetAll();
    });
  }

  // Draaiknop: Werkt nu onafhankelijk van het inzoomen!
  if (rotateBtn) {
    rotateBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      rotationDegree += 90; // Blijft doortellen: 270 -> 360 -> 450...
      updateTransform();
    });
  }

  // Navigatie & Sluiten
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextItem(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevItem(); });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-viewport')) {
        closeLightbox();
      }
    });
  }

  // Toetsenbord
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextItem();
    if (e.key === 'ArrowLeft') prevItem();
    if (e.key === 'r' || e.key === 'R') {
      rotationDegree += 90;
      updateTransform();
    }
  });


  setTimeout(positionTimelineTrack, 300);
});

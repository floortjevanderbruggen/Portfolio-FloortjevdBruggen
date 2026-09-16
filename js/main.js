/**
 * PORTFOLIO - FLOORTJE VAN DER BRUGGEN
 * Volledige en gecorrigeerde JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. PROJECT DATA
  // ==========================================================================
  const projectsData = {
    'project-1': {
  title: 'Zie het gebaar, stop het gevaar',
  subtitle: 'Campagneposter & Typografisch Onderzoek, 2024',
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
      src: 'images/Experiment p1 compositie.png', 
      alt: 'Compositie experimenten',
      heading: 'Compositie & Indeling',
      description: 'Hier zie je de eerste schetsen en compositiestudies. Ik heb geëxperimenteerd met de plaatsing van de handen en hoe de verhouding tussen tekst en beeld het krachtigst overkomt.'
    },
    { 
      type: 'image', 
      src: 'images/Experiment p1 tekst.png', 
      alt: 'Typografie experimenten',
      heading: 'Typografisch Onderzoek',
      description: 'Tijdens deze fase heb ik verschillende lettertypes en zetwijzen getest om de boodschap "Zie gebaar, stop gevaar" zo duidelijk en dwingend mogelijk over te laten komen.'
    },
    { 
      type: 'image', 
      src: 'images/Experiment p1.png', 
      alt: 'Illustratie experiment',
      heading: 'Illustratiestijl & Kleur',
      description: 'Kleurstudies en illustratieve uitwerkingen van de grijpende hand. De focus lag op het vinden van een rauw maar helder contrast.'
    }
  ]
},
'project-2': {
  title: 'Live Action Optiteling Whiplash',
  subtitle: 'Film & Cinematografie, 2024',
  heading: 'Concept & Scèneopbouw',
  description: 'Voor de film Whiplash heb ik een live-action optiteling ontworpen en gefilmd...',
  tags: ['Video', 'Optiteling', 'Live Action', 'Cinematografie'],
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
      heading: 'Concept & Still',
      description: 'Een stilstaand beeld uit de titelreeks. Door de scherpediepte en het sterke contrast met het zwarte achterdoek wordt de sfeer van de film neergezet.'
    },
    { 
      type: 'video', 
      src: 'images/Foto p2.png', 
      videoSrc: 'images/Filmpje p2.mp4', 
      alt: 'Live Action Video Whiplash (MP4)',
      heading: 'Live-Action Video',
      description: 'Bekijk de volledige video. Door middel van sfeervolle macro-shots en ritmische montage wordt de spanning, obsessie en intensiteit van de film direct voelbaar gemaakt.'
    },
    { 
      type: 'image', 
      src: 'images/Storyboard p2.png', 
      alt: 'Storyboard Whiplash',
      heading: 'Storyboard',
      description: 'Het storyboard waarmee de shots vooraf zijn uitgedacht. Elk shot is afgestemd op het ritme van de muziek.'
    },
    { 
      type: 'image', 
      src: 'images/Schets p2.png', 
      alt: 'Schetsen scèneopbouw',
      heading: 'Scèneopbouw & Schetsen',
      description: 'Eerste schetsen voor de opstelling van de camera, de belichting en de posities van de attributen.'
    },
    { 
      type: 'image', 
      src: 'images/Inspiratie p2.png', 
      alt: 'Inspiratieboard',
      heading: 'Inspiratie & Moodboard',
      description: 'Visuele inspiratie en kleurpaletten die als basis dienden voor de sfeer en belichting van het filmproject.'
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
  const mainWrapper = document.querySelector('.main-wrapper');

  function positionTimelineTrack() {
    if (!timelineTrack || !dotAbout || !dotDetail || !mainWrapper) return;

    const mainRect = mainWrapper.getBoundingClientRect();
    const dotAboutRect = dotAbout.getBoundingClientRect();
    const dotDetailRect = dotDetail.getBoundingClientRect();

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

  function displayProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Actieve status op puzzelstukjes updaten
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

    if (projectTitleEl) projectTitleEl.textContent = project.title;
    if (projectSubtitleEl) projectSubtitleEl.textContent = project.subtitle;
    if (projectHeadingEl) projectHeadingEl.textContent = project.heading;
    if (projectDescEl) projectDescEl.textContent = project.description;

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

    if (project.mainType === 'video' && mainProjectVideo) {
      if (mainProjectImage) mainProjectImage.style.display = 'none';
      mainProjectVideo.style.display = 'block';
      const source = mainProjectVideo.querySelector('source');
      if (source && project.videoSrc) {
        source.src = project.videoSrc;
        mainProjectVideo.load();
      }
    } else {
      if (mainProjectVideo) {
        mainProjectVideo.pause();
        mainProjectVideo.style.display = 'none';
      }
      if (mainProjectImage) {
        mainProjectImage.style.display = 'block';
        mainProjectImage.style.opacity = '0.3';
        setTimeout(() => {
          mainProjectImage.src = project.mainImage;
          mainProjectImage.alt = project.title;
          mainProjectImage.style.opacity = '1';
        }, 120);
      }
    }

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

          // 1. UPDATE DE TEKST EN KOPTEKST RECHTS
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

          // 2. SCHAKELEN TUSSEN VIDEO EN AFBEELDING
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
              mainProjectImage.style.opacity = '0.3';
              mainProjectImage.style.transform = 'scale(0.98)';
              setTimeout(() => {
                mainProjectImage.src = thumb.src;
                mainProjectImage.alt = thumb.alt;
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
      // 1. Laad het gekozen project in
      displayProject(projectId);
      
      // 2. Scroll vloeiend naar de detailsectie eronder
      if (projectDetailSection) {
        projectDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Melding bij "Coming Soon" vakjes
      if (puzzleTooltip) {
        puzzleTooltip.textContent = 'Binnenkort beschikbaar — Er wordt gewerkt aan nieuwe projecten!';
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

  // Initieel Project 1 direct inladen
  displayProject('project-1');
  setTimeout(positionTimelineTrack, 300);
});


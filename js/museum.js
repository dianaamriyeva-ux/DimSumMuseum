// The Lake Museum: entrance, room and close-up view.
(function () {
    const root = document.documentElement;
    const objects = MUSEUM_OBJECTS;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ENTER_MS = reduceMotion ? 250 : 1700;
    const ZOOM_MS = reduceMotion ? 0 : 650;

    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    /* ---------- Entrance ---------- */

    const enterBtn = document.querySelector('.enter');
    const leaveBtn = document.querySelector('.leave');

    // On tall phone screens show the whole building instead of cropping it.
    const art = document.querySelector('.lake-art');
    function fitArt() {
        const portrait = window.innerWidth / window.innerHeight < 1.15;
        art.setAttribute('viewBox', portrait ? '360 -40 880 940' : '0 0 1600 900');
        root.classList.toggle('is-portrait', portrait);
        art.setAttribute('preserveAspectRatio', portrait ? 'xMidYMax meet' : 'xMidYMax slice');
    }
    fitArt();
    window.addEventListener('resize', fitArt);

    function enter() {
        if (root.classList.contains('is-entering')) return;
        // Zoom towards the open door.
        const d = document.getElementById('door').getBoundingClientRect();
        art.style.transformOrigin = `${d.left + d.width / 2}px ${d.top + d.height * 0.6}px`;
        root.classList.add('is-entering');
        setTimeout(() => {
            root.classList.remove('landing-on', 'is-entering');
            window.dispatchEvent(new Event('resize'));
            try { sessionStorage.setItem('lakeMuseumInside', '1'); } catch (e) {}
            window.scrollTo(0, 0);
            document.querySelector('.top h1').focus({ preventScroll: true });
        }, ENTER_MS);
    }
    function leave() {
        try { sessionStorage.removeItem('lakeMuseumInside'); } catch (e) {}
        root.classList.add('landing-on', 'is-leaving');
        setTimeout(() => { root.classList.remove('is-leaving'); enterBtn.focus(); }, 700);
    }
    enterBtn.addEventListener('click', enter);
    leaveBtn.addEventListener('click', leave);

    /* ---------- The room ---------- */

    const cases = document.getElementById('cases');
    const lamps = document.getElementById('lamps');
    const room = document.getElementById('room');

    cases.innerHTML = objects.map((o, i) => `
        <button type="button" class="vitrine vitrine--${o.shape}" data-i="${i}" aria-label="${esc(o.name)}, ${esc(o.culture)}. Look closer">
            <span class="case"><img src="${esc(o.image)}" alt="" loading="lazy"></span>
            <span class="plinth"><span class="plate">No. ${esc(o.box)}</span></span>
            <span class="caption"><span class="cap-name">${esc(o.name)}</span><span class="cap-from">${esc(o.culture)}</span></span>
        </button>`).join('');
    lamps.innerHTML = objects.map(() => '<span class="lamp"></span>').join('');

    // The room fills the screen under the header: tell the CSS how tall the header is.
    const top = document.querySelector('.top');
    const setTopH = () => root.style.setProperty('--top-h', top.offsetHeight + 'px');
    setTopH();
    window.addEventListener('resize', setTopH);

    /* ---------- Close-up ---------- */

    const detail = document.getElementById('detail');
    const dImg = document.getElementById('d-img');
    const dPlate = document.getElementById('d-plate');
    const dText = document.getElementById('d-text');
    const dCount = document.getElementById('d-count');
    const prevBtn = detail.querySelector('.nav-prev');
    const nextBtn = detail.querySelector('.nav-next');
    let current = -1;
    let opener = null;

    function fill(i) {
        const o = objects[i];
        current = i;
        detail.style.setProperty('--card', o.card);
        dImg.src = o.image;
        dImg.alt = o.name;
        dPlate.textContent = 'No. ' + o.box;
        dText.innerHTML = `
            <p class="eyebrow">${esc(o.culture)} · Found in ${esc(o.found)}</p>
            <h2 id="d-name">${esc(o.name)}</h2>
            <p class="native">${esc(o.native)}</p>
            <dl class="facts">
                <div><dt>Made of</dt><dd>${esc(o.madeOf)}</dd></div>
                <div><dt>Used for</dt><dd>${esc(o.usedFor)}</dd></div>
                <div><dt>Capsule</dt><dd>Box No. ${esc(o.box)} · sealed 2026 · opened 2126</dd></div>
            </dl>
            <section>
                <h3>History</h3>
                ${o.history.map((p) => `<p>${esc(p)}</p>`).join('')}
            </section>
            <section>
                <h3>The card found inside</h3>
                <figure class="note-card">
                    <blockquote>${esc(o.note.text)}</blockquote>
                    <figcaption>${esc(o.note.from)}, 2026</figcaption>
                </figure>
            </section>
            <section class="now">
                <h3>What it means to us, 2126</h3>
                <p>${esc(o.now)}</p>
            </section>
            ${o.sources ? `<p class="sources">Sources: ${esc(o.sources)}</p>` : ''}`;
        dText.scrollTop = 0;
        detail.scrollTop = 0;
        const prev = objects[(i - 1 + objects.length) % objects.length];
        const next = objects[(i + 1) % objects.length];
        prevBtn.querySelector('span').textContent = prev.name;
        nextBtn.querySelector('span').textContent = next.name;
        dCount.textContent = `${i + 1} / ${objects.length}`;
    }

    function open(i, btn) {
        opener = btn;
        fill(i);
        // Camera move: zoom the room towards the chosen case, then show the close-up.
        const r = btn.getBoundingClientRect();
        const s = room.getBoundingClientRect();
        room.style.transformOrigin = `${r.left + r.width / 2 - s.left}px ${r.top + r.height / 2 - s.top}px`;
        root.classList.add('is-zooming');
        btn.classList.add('is-chosen');
        setTimeout(() => {
            detail.hidden = false;
            requestAnimationFrame(() => detail.classList.add('is-open'));
            root.classList.add('detail-on');
            detail.querySelector('.detail-close').focus({ preventScroll: true });
        }, ZOOM_MS * 0.7);
    }

    function close() {
        if (detail.hidden) return;
        detail.classList.remove('is-open');
        root.classList.remove('detail-on');
        setTimeout(() => {
            detail.hidden = true;
            root.classList.remove('is-zooming');
            document.querySelectorAll('.vitrine.is-chosen').forEach((v) => v.classList.remove('is-chosen'));
            if (opener) opener.focus({ preventScroll: true });
        }, reduceMotion ? 0 : 300);
    }

    function step(d) {
        const i = (current + d + objects.length) % objects.length;
        document.querySelectorAll('.vitrine.is-chosen').forEach((v) => v.classList.remove('is-chosen'));
        opener = cases.querySelector(`[data-i="${i}"]`);
        opener.classList.add('is-chosen');
        detail.classList.add('is-swapping');
        setTimeout(() => { fill(i); detail.classList.remove('is-swapping'); }, reduceMotion ? 0 : 180);
    }

    cases.addEventListener('click', (e) => {
        const btn = e.target.closest('.vitrine');
        if (btn) open(Number(btn.dataset.i), btn);
    });
    detail.querySelector('.detail-close').addEventListener('click', close);
    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));

    document.addEventListener('keydown', (e) => {
        if (root.classList.contains('landing-on')) {
            return;
        }
        if (detail.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
        if (e.key === 'Tab') { // keep focus inside the close-up
            const f = detail.querySelectorAll('button');
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });
})();

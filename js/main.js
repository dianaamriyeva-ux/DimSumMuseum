/* Future Fortune Museum – rendering & interactions */

(function () {
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const AVATAR_COLORS = ["#b5793f", "#6f8a6a", "#5a7f99", "#a2574f", "#8a6fa0", "#c49a3a", "#4f8a87"];
  const avatarColor = (name) =>
    AVATAR_COLORS[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % AVATAR_COLORS.length];

  /* ---------- comments ---------- */

  function commentHTML(c) {
    if (c.type === "hidden") {
      return `
        <li class="comment comment--hidden">
          <div class="hidden-bar">
            <span class="hidden-icon" aria-hidden="true">⦸</span>
            <span>Comment hidden by Auspice Trust &amp; Safety.<br><small>Reason: ${esc(c.reason)}.</small></span>
            <button type="button" class="reveal" aria-expanded="false">View anyway</button>
          </div>
          <div class="hidden-body" hidden>
            <div class="comment-head">
              <span class="avatar" style="background:${avatarColor(c.user)}">${esc(c.user[0].toUpperCase())}</span>
              <span class="user">@${esc(c.user)}</span>
              <span class="date">${esc(c.date)}</span>
            </div>
            <p>${esc(c.text)}</p>
            <p class="logged">This view has been logged.</p>
          </div>
        </li>`;
    }
    const curator = c.type === "curator";
    return `
      <li class="comment${curator ? " comment--curator" : ""}">
        <div class="comment-head">
          <span class="avatar" style="background:${curator ? "#1f2328" : avatarColor(c.user)}">${curator ? "A" : esc(c.user[0].toUpperCase())}</span>
          <span class="user">${curator ? esc(c.user) : "@" + esc(c.user)}</span>
          ${curator ? '<span class="badge">Official</span>' : ""}
          <span class="date">${esc(c.date)}</span>
        </div>
        <p>${esc(c.text)}</p>
        ${curator ? "" : `<button type="button" class="like" aria-pressed="false"><span aria-hidden="true">▲</span> <span class="n">${c.likes}</span></button>`}
      </li>`;
  }

  /* ---------- exhibits ---------- */

  function exhibitHTML(ex, i) {
    const theories = ex.comments.filter((c) => c.type !== "curator").length;
    return `
      <article class="exhibit${i % 2 ? " exhibit--flip" : ""} reveal-on-scroll" id="ex-${ex.id}" aria-labelledby="t-${ex.id}">
        <div class="alcove alcove--${ex.id}">
          <div class="lamp" aria-hidden="true"></div>
          <div class="stage">${ART[ex.id]}</div>
          <div class="plinth">
            <span class="price-tag"><span>Licensing value</span><strong>${esc(ex.price)}</strong></span>
          </div>
        </div>

        <div class="info">
          <div class="plaque">
            <div class="plaque-top">
              <span class="cat">FFM-2126-${ex.no}</span>
              <span class="sponsor">Presented by <strong>${esc(ex.sponsor)}</strong></span>
            </div>
            <h2 id="t-${ex.id}">${esc(ex.name)}</h2>
            <dl class="facts">
              <div><dt>Origin</dt><dd>${esc(ex.origin)}</dd></div>
              <div><dt>Dated</dt><dd>${esc(ex.dated)}</dd></div>
              <div><dt>Status</dt><dd>${esc(ex.status)}</dd></div>
            </dl>
            <div class="official">
              <span class="tag">Official interpretation</span>
              <p>${esc(ex.official)}</p>
            </div>
            <div class="verified"><span aria-hidden="true">✓</span> Verified by Auspice Analytics · Confidence ${esc(ex.confidence)}</div>
          </div>

          <div class="theories">
            <h3>Visitor theories <span class="count">${theories}</span></h3>
            <ul class="comments">${ex.comments.map(commentHTML).join("")}</ul>
            <form class="theory-form" autocomplete="off">
              <label class="sr-only" for="f-${ex.id}">Submit your theory about ${esc(ex.short)}</label>
              <input id="f-${ex.id}" name="theory" maxlength="220" placeholder="What do you think it was for?" required>
              <button type="submit">Submit theory</button>
            </form>
          </div>
        </div>
      </article>`;
  }

  const exhibitsEl = document.getElementById("exhibits");
  exhibitsEl.innerHTML = EXHIBITS.map(exhibitHTML).join("");

  document.getElementById("map").innerHTML = EXHIBITS.map(
    (ex) => `
      <li><a href="#ex-${ex.id}">
        <span class="map-no">${ex.no}</span>
        <span class="map-name">${esc(ex.short)}</span>
        <span class="map-sponsor">${esc(ex.sponsor)}</span>
      </a></li>`
  ).join("");

  /* ---------- interactions ---------- */

  exhibitsEl.addEventListener("click", (e) => {
    const reveal = e.target.closest(".reveal");
    if (reveal) {
      const body = reveal.closest(".comment--hidden").querySelector(".hidden-body");
      const open = body.hidden;
      body.hidden = !open;
      reveal.setAttribute("aria-expanded", String(open));
      reveal.textContent = open ? "Hide again" : "View anyway";
      reveal.closest(".comment--hidden").classList.toggle("is-open", open);
      if (open) spend(0.5);
      return;
    }
    const like = e.target.closest(".like");
    if (like) {
      const n = like.querySelector(".n");
      const on = like.getAttribute("aria-pressed") !== "true";
      like.setAttribute("aria-pressed", String(on));
      n.textContent = Number(n.textContent) + (on ? 1 : -1);
      if (on) spend(0.05);
    }
  });

  const PENDING_REPLIES = [
    "Your theory is pending corporate review.",
    "Thank you. Your theory has been sold to a sponsor.",
    "Theory received. Accuracy is not a ranking factor.",
    "Queued for review (estimated wait: 6–8 years).",
  ];

  exhibitsEl.addEventListener("submit", (e) => {
    const form = e.target.closest(".theory-form");
    if (!form) return;
    e.preventDefault();
    const input = form.querySelector("input");
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.className = "comment comment--pending";
    li.innerHTML = `
      <div class="comment-head">
        <span class="avatar" style="background:#c0262d">Y</span>
        <span class="user">@you</span>
        <span class="badge badge--pending">Pending</span>
        <span class="date">2126 · just now</span>
      </div>
      <p>${esc(text)}</p>
      <p class="logged">${PENDING_REPLIES[Math.floor(Math.random() * PENDING_REPLIES.length)]}</p>`;
    form.previousElementSibling.appendChild(li);
    const count = form.closest(".theories").querySelector(".count");
    count.textContent = Number(count.textContent) + 1;
    input.value = "";
    spend(0.25);
  });

  /* ---------- the balance only goes down ---------- */

  let balance = 41.2;
  const balanceEl = document.getElementById("balance");
  function spend(amount) {
    balance = Math.max(0, balance - amount);
    balanceEl.textContent = balance.toFixed(2) + " LC";
    balanceEl.classList.remove("tick");
    void balanceEl.offsetWidth;
    balanceEl.classList.add("tick");
  }
  setInterval(() => spend(0.01), 6000);

  /* ---------- ticker: duplicate for seamless loop ---------- */

  const ticker = document.getElementById("ticker");
  ticker.innerHTML += ticker.innerHTML;

  /* ---------- slatted wooden screens (generated) ---------- */

  function slatScreen(width, height) {
    const slatW = 9, gap = 4, step = slatW + gap;
    const n = Math.ceil(width / step);
    let slats = "";
    for (let i = 0; i < n; i++) slats += `<rect x="${i * step}" y="0" width="${slatW}" height="${height}"/>`;

    const mid = height / 2, s = height * 0.42;
    let motifs = "";
    for (let x = 0, k = 0; x < width + s * 2; x += s * 2.2, k++) {
      const cx = x;
      if (k % 2 === 0) {
        motifs += `<polygon points="${cx},${mid - s} ${cx + s},${mid} ${cx},${mid + s} ${cx - s},${mid}" fill="#6b4120"/>`;
        motifs += `<polygon points="${cx},${mid - s * 0.5} ${cx + s * 0.5},${mid} ${cx},${mid + s * 0.5} ${cx - s * 0.5},${mid}" fill="#e9c58e"/>`;
      } else {
        motifs += `<polygon points="${cx - s},${mid - s * 0.6} ${cx},${mid + s * 0.1} ${cx + s},${mid - s * 0.6} ${cx + s},${mid - s * 0.2} ${cx},${mid + s * 0.5} ${cx - s},${mid - s * 0.2}" fill="#7d4c25"/>`;
        motifs += `<rect x="${cx - s * 0.12}" y="${mid + s * 0.55}" width="${s * 0.24}" height="${s * 0.3}" fill="#7d4c25"/>`;
      }
    }
    return `
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <defs>
          <clipPath id="slat-clip-${width}">${slats}</clipPath>
          <linearGradient id="slat-wood-${width}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#e2bd86"/><stop offset="1" stop-color="#c89a5f"/>
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="#2b1a0e"/>
        <g clip-path="url(#slat-clip-${width})">
          <rect width="${width}" height="${height}" fill="url(#slat-wood-${width})"/>
          ${motifs}
        </g>
      </svg>`;
  }
  document.querySelectorAll("[data-slats]").forEach((el, i) => {
    el.innerHTML = slatScreen(1600 + i, 120);
  });

  /* ---------- reveal on scroll ---------- */

  const items = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      }),
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }
})();

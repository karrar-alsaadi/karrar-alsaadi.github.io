const $ = (id) => document.getElementById(id);
const el = (tag, text, cls) => {
  const n = document.createElement(tag);
  if (text) n.textContent = text;
  if (cls) n.className = cls;
  return n;
};
const safeUrl = (u) => {
  try { const x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : ""; } catch { return ""; }
};
const note = (box, msg) => box.append(el("p", msg, "empty"));

function cards(box, items, empty) {
  if (!items.length) return note(box, empty);
  items.forEach((p) => {
    const c = el("article", "", "card");
    if (p.status) c.append(el("small", "● " + p.status));
    c.append(el("h3", p.title), el("p", p.description));
    if (p.tags && p.tags.length) {
      const ul = el("ul", "", "tags");
      p.tags.forEach((t) => ul.append(el("li", t)));
      c.append(ul);
    }
    const href = safeUrl(p.link);
    if (href) {
      const a = el("a", "View repository");
      a.href = href; a.target = "_blank"; a.rel = "noopener";
      c.append(a);
    }
    box.append(c);
  });
}

function timelineList(box, items) {
  if (!items.length) return note(box, "Education, certificates and milestones will appear here.");
  items.forEach((a) => {
    const c = el("article", "", "card");
    c.append(el("small", a.date), el("h3", a.title));
    if (a.description) c.append(el("p", a.description));
    box.append(c);
  });
}

function skillList(box, groups) {
  groups.forEach((g) => {
    const c = el("article", "", "card");
    const ul = el("ul", "", "tags");
    g.items.forEach((i) => ul.append(el("li", i)));
    c.append(el("h3", g.group), ul);
    box.append(c);
  });
}

function linkList(box) {
  const add = (text, href, ext) => {
    const li = el("li"), a = el("a", text);
    a.href = href;
    if (ext) { a.target = "_blank"; a.rel = "noopener"; }
    li.append(a); box.append(li);
  };
  Object.entries(site.links).forEach(([n, u]) => safeUrl(u) && add(n, safeUrl(u), true));
  if (site.email) add("Email", "mailto:" + site.email);
  if (site.cv) add("Download CV", site.cv);
}

$("tagline").textContent = site.tagline;
$("about-text").textContent = site.about;
$("contact-text").textContent = site.contact;
cards($("projects-list"), projects, "Projects will appear here.");
cards($("research-list"), research, "Research will appear here.");
timelineList($("timeline-list"), timeline);
skillList($("skills-list"), skills);
linkList($("side-links"));
linkList($("contact-links"));
$("year").textContent = new Date().getFullYear();

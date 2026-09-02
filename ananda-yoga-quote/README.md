# Ananda Yoga Cagliari — percorsi e quote 2026-2027

Quattro slide 1080×1350 (4:5): copertina con l'iscrizione annuale, percorsi
mensili, percorsi liberi, percorsi Accademia.

Ricostruzione delle quattro slide preparate dal centro, con i testi ripresi alla
lettera e lo stile editoriale del carosello corsi (`../ananda-yoga-social`):
fondo avorio, medaglione a linee, titolo display, blocchi a tinta tenue,
filetti sottili, un colore per slide.

## Contenuto

- `*.dc.html` — le quattro tavole
- `canvas.json` — disposizione delle tavole sul canvas
- `build.mjs` — genera le tavole dai testi e dai prezzi
- `lib-color.mjs`, `lib-art.mjs` — palette ed emblemi, come nel progetto corsi
- `render.mjs` — pagine statiche in `preview/` per l'esportazione
- `ananda-percorsi-quote.html` — le quattro slide in un file, una per pagina
  (stampa PDF e importazione in Canva)
- `png/` — le quattro slide in PNG 1080×1350

## Rigenerare

```bash
node build.mjs && node render.mjs
```

## Correzioni rispetto all'originale

Due refusi del materiale di partenza sono stati corretti su richiesta:
«PER CHI E' IDEALE» → «PER CHI È IDEALE» (tre slide) e «Corso avanzata di
vinyasa» → «Corso avanzato di vinyasa». Tutto il resto è ripreso alla lettera.

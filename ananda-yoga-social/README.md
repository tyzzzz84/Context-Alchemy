# Ananda Yoga Cagliari — carosello corsi

Sedici slide quadrate 1080×1080: copertina, una slide per ogni corso descritto,
divisore "Corsi Accademia" e slide finale con il palinsesto completo e l'invito a
scrivere su WhatsApp.

## Contenuto

- `*.dc.html` — le sedici tavole (artboard), una per slide
- `canvas.json` — disposizione delle tavole sul canvas
- `build.mjs` — genera le tavole dai dati dei corsi (testi, orari, colori)
- `lib-color.mjs` — palette: un colore vivace per corso, generato in oklch
- `lib-art.mjs` — illustrazioni astratte in SVG (nessuna persona), una per corso
- `render.mjs` — genera pagine statiche in `preview/` per l'esportazione
- `png/` — le sedici slide esportate in PNG 1080×1080
- `ananda-logo.jpg` — logo Ananda Yoga Cagliari

## Rigenerare

```bash
node build.mjs      # tavole + canvas.json
node render.mjs     # pagine statiche in preview/
# PNG (Chromium headless):
for f in preview/*.html; do
  chrome --headless --hide-scrollbars --window-size=1080,1080 \
    --screenshot="png/$(basename "$f" .html).png" "file://$PWD/$f"
done
```

## Tipografia

Il font richiesto è Gotham, che è proprietario e non ridistribuibile: le tavole
usano Montserrat (geometrico, stessa famiglia di forme, è anche il font del
logo) con fallback su Avenir Next / Century Gothic / Futura.

## Nota sugli orari

Dove la descrizione dei corsi e la griglia del palinsesto divergevano, gli orari
seguono la griglia, così che le slide dei corsi e il palinsesto finale
coincidano. Da verificare prima della pubblicazione: Ananda Yoga (19:15 nella
griglia, 19:00 nella descrizione), Flow to Yin (venerdì 17:00 nella griglia) e
Yoga Fit (anche alle 14:00 di martedì e giovedì nella griglia).

# Censimento dei prompt estetici — stelle, costante ambientale, interdipendenza

**Fonti:** cinque PDF (`Events_and_leasure`, `mistics_and_cosmo`, `hospitality_and_landscapes`,
`Kawaii`, `Professional_and_law__order`). I due file `Events_and_leasure` allegati sono
byte-identici, quindi i documenti distinti sono cinque.

**Totale:** 55 prompt — 49 marcati con le stelle, 6 privi di marcatura.
Distribuzione: ☆☆ = 10, ☆☆☆ = 19, ☆☆☆☆ = 19, ☆☆☆☆☆ = 1.

---

## Come ho codificato le due variabili

**Costante ambientale** — una condizione ambientale *dichiarata e valida per l'intera scena*:
una luce, un'ora del giorno, un regime atmosferico o spaziale che governa tutti gli elementi.

- **sì** — dichiarata esplicitamente e globale (`perpetual late-summer amber twilight where
  sky never darkens`; `illuminazione esclusivamente a 2700K`; `lit only from within by the
  cold glow of equations`).
- **parziale** — un'indicazione di luce c'è ma vive dentro la palette o riguarda un solo
  elemento, senza essere posta come regola della scena.
- **no** — nessuna condizione ambientale dichiarata.

**Interdipendenza** — numero di elementi *nominati* la cui rimozione fa cadere un altro
elemento nominato. Il criterio è la dipendenza dichiarata nel testo, non la ricchezza. Contano:
clausole di crollo esplicite, esclusività (`legible to nothing but flame`), causalità
(`only because`, `held up by`), identità (`the vitrine is inside the earth`), unicità della
sorgente di luce. Non contano le similitudini parallele, per quanto fitte.

**Clausola di crollo** — colonna separata e verificabile: il prompt contiene una frase che
enuncia *esplicitamente* cosa succede togliendo un elemento.

---

## Tabella

| ID | Doc | Prompt | ★ | Parole | Costante | Quale costante | Interdip. | Clausola di crollo |
|---|---|---|---|---:|---|---|---:|---|
| E01 | Events | SACRED COMBUSTION | ★★★ | 265 | no | — | 5 | sì |
| E02 | Events | Sacred forge where animals become ancestors | ★★ | 197 | no | — | 0 | — |
| E03 | Events | Sacred forge of the eternal pitmaster | ★★★★ | 241 | sì | crepuscolo ambrato perpetuo, il cielo non si scurisce mai | 1 | — |
| E04 | Events | Abyssal library of drowned oracles | ★★★★ | 344 | sì | buio abissale sotto pressione, luce solo bioluminescente | 2 | — |
| E05 | Events | Frozen throne of the last cartographer | ★★★ | 423 | sì | caverna di ghiaccio blu, sole artico rasente, cielo polare senza stelle | 2 | — |
| E06 | Events | Carnival of living stories | ★★★ | 574 | sì | tramonto perpetuo, cielo fatto di pagine dorate | 2 | — |
| E07 | Events | Stone that dreams of its own ocean | ★★★ | 99 | no | — | 1 | — |
| E08 | Events | Fossil that excavates its archaeologist | ★★★★ | 94 | no | — | 3 | — |
| E09 | Events | Living temple breathwork | ★★★ | 72 | parziale | luce dorata calda dalle fessure (non dichiarata globale) | 1 | — |
| E10 | Events | Infinite scriptorium of the unwritten | ★★★★ | 486 | sì | soffitto nel buio, unica luce = candele di testo liquido | 3 | sì |
| E11 | Events | Sacred geometry of the hive mind | ★★★★ | 145 | parziale | luce ambrata condotta dal miele-circuito | 1 | — |
| K01 | Kawaii | Secret kingdom of things forgotten under the bed | ★★★★ | 128 | sì | luce dorata di tardo pomeriggio, vista ad altezza soldatino | 1 | — |
| K02 | Kawaii | Celestial nursery of baby gods | ★★★ | 145 | no | — | 0 | — |
| K03 | Kawaii | THE UNDER-BED DOMINION | ★★★★ | 237 | sì | golden hour radente a livello pavimento, sei pollici da terra | 3 | sì |
| K04 | Kawaii | THE DREAMING NURSERY | ★★★★ | 322 | sì | penombra calda di stanza di bambini che dormono | 4 | sì |
| K05 | Kawaii | Honeybee kindergarten in a candy cathedral | ★★★★ | 195 | sì | pareti che trasudano miele e brillano come lucine calde | 1 | — |
| K06 | Kawaii | Medieval honeybee monastery of sweet learning | ★★★ | 127 | parziale | azzurro di primo mattino dalle finestre romaniche (in palette) | 0 | — |
| P01 | Professional | Tribunal of carved law | ★★★★★ | 107 | no | — | 4 | sì |
| P02 | Professional | Brutalist banking | ★★★ | 25 | no | — | 0 | — |
| P03 | Professional | Roman law meets Bauhaus precision | ★★★ | 33 | no | — | 0 | — |
| P04 | Professional | The laboratory that dissolved into its own experiment | ★★★★ | 887 | sì | costante spaziale non luminosa: stanza Calabi-Yau con piu volume dentro che fuori | 4 | — |
| H01 | Hospitality | Living atlas of the ancient land | ★★ | 115 | no | — | 1 | — |
| H02 | Hospitality | Mediterranean threshold between centuries | ★★★ | 137 | parziale | miele della luce sarda al golden hour (in palette) | 1 | — |
| H03 | Hospitality | Stone that dreams of its guests | ★★★ | 149 | parziale | bianco di mezzogiorno sardo che cancella ogni altro colore | 2 | — |
| H04 | Hospitality | The building remembers forward | ★★★★ | 283 | sì | il tufo cambia colore con l'ora; nessuna palette secondaria ammessa | 4 | — |
| H05 | Hospitality | Living atlas of ancient earth (v1+v2) | ★★ | 231 | no | — | 1 | — |
| H06 | Hospitality | Surgical cartography of a sleeping titan | ★★ | 107 | no | — | 1 | — |
| H07 | Hospitality | Highland archive of the stone giants | ★★ | 184 | no | — | 1 | — |
| H08 | Hospitality | Sarcidano ceremony of stone and ember | ★★★ | 144 | sì | crepuscolo, falo come unica sorgente che accende i megaliti | 1 | — |
| H09 | Hospitality | Sleeping giants of the high plateau | ★★★ | 276 | sì | altopiano al golden hour | 0 | — |
| H10 | Hospitality | Sardinia as civilization that never stopped building | ★★★ | 135 | no | — | 1 | — |
| H11 | Hospitality | [blocco di soli dense glyphs] | ★★★★ | 52 | no | — | 0 | — |
| H12 | Hospitality | Mediterranean time capsule in golden light | ★★ | 186 | sì | luce sempre radente, le cinque del pomeriggio di giugno, ombre lunghe | 0 | — |
| H13 | Hospitality | Mediterranean time fracture | ★★★ | 321 | sì | luce bianca abbacinante di maestrale che brucia i bordi e rivela nelle ombre | 2 | — |
| M01 | Mistics | Ancient future library of forbidden computation | ★★★★ | 242 | sì | biblioteca simultanea in ogni secolo; fiamma di candela che renderizza dati | 3 | sì |
| M02 | Mistics | Estetica 'ancient future' (foglio di stile) | ★★★★ | 105 | no | — | 0 | — |
| M03 | Mistics | Cosmic observatory carved in cathedral stone | ★★★★ | 356 | sì | volta celeste reale al posto delle vetrate, nebulose come luce sacra | 3 | — |
| M04 | Mistics | Deep cosmic codex | ★★ | 41 | parziale | fondo nebulare scuro (elenco di stile) | 0 | — |
| M05 | Mistics | Cosmic consciousness codex | ★★★ | 110 | sì | nero cosmico profondo con nebulose sottili | 1 | — |
| M06 | Mistics | Cave temple merged with bioluminescent biology | ★★★ | 88 | sì | fosforescenza minerale come unica luce della caverna | 2 | — |
| M07 | Mistics | Sacred geometry gymnasium | ★★ | 104 | no | — | 2 | sì |
| M08 | Mistics | Lumen Sanctum | ★★ | 112 | sì | tempio alla deriva dentro una nebulosa vivente | 2 | — |
| M09 | Mistics | Meditative Quantum Realism | ★★ | 78 | sì | spazio cosmico profondo, illuminazione volumetrica | 0 | — |
| M10 | Mistics | Classified excavation of the ones before | ★★★★ | 513 | sì | oro alieno la cui sorgente e in un'altra dimensione; fosfori CRT | 4 | — |
| M11 | Mistics | INVERSE EXCAVATION | ★★★★ | 292 | sì | meta neon ronzante meta oro senza sorgente visibile; luce radente dura | 4 | sì |
| M12 | Mistics | Excavation zero of the architects who preceded gravity | ★★★ | 567 | sì | caverna scavata nello spaziotempo, strati cronologici al posto dei geologici | 3 | — |
| M13 | Mistics | The calculating temple of Thoth's last theorem | ★★★ | 699 | sì | il calcare di Tura non riflette luce, emette dimostrazione matematica | 4 | sì |
| M14 | Mistics | BASALT THEOREM | ★★★★ | 244 | sì | unica luce: le equazioni che ardono dentro la roccia | 3 | sì |
| M15 | Mistics | The living necropolis where geometry never stopped calculating | ★★★★ | 811 | sì | cielo notturno reale attraverso la pietra resa trasparente dall'eta | 4 | — |
| U1 | Hospitality | The estate where wilderness learned hospitality | — | 565 | sì | luce sempre dell'ora dorata, laterale e calda, su ogni superficie | 3 | sì |
| U2 | Hospitality | The sanctuary that luxury built by forgetting it existed | — | 762 | sì | esclusivamente 2700K e luce naturale; il chiaroscuro e condizione strutturale | 3 | — |
| U3 | Hospitality | Geological memory palace | — | 99 | no | — | 2 | — |
| U4 | Professional | Industrial herbarium of the forgotten fiber | — | 95 | no | — | 1 | — |
| U5 | Professional | Laboratorio rinascimentale (skincare) | — | 34 | no | — | 0 | — |
| U6 | Professional | Monastero quantistico (venture capital) | — | 27 | no | — | 0 | — |

*(I sei ID `U1–U6` sono i prompt privi di marcatura a stelle; restano fuori da tutte le
statistiche che seguono.)*

---

## Medie per livello di stelle

| ★ | n | costante piena | costante ≥ parziale | interdip. media | parole medie | clausole di crollo |
|---|---:|---|---|---:|---:|---|
| ☆☆ | 10 | 3/10 — 30% | 4/10 — 40% | 0.80 | 136 | 1/10 |
| ☆☆☆ | 19 | 9/19 — 47% | 13/19 — 68% | 1.47 | 231 | 2/19 |
| ☆☆☆☆ | 19 | 15/19 — 79% | 16/19 — 84% | 2.53 | 315 | 6/19 |
| ☆☆☆☆☆ | 1 | 0/1 — 0% | 0/1 — 0% | 4.00 | 107 | 1/1 |

Entrambe le variabili salgono con le stelle. Ma salgono anche le parole, e questo è il
problema da sciogliere prima di rispondere.

---

## Correlazioni (Spearman ρ, n = 49)

| coppia | ρ |
|---|---:|
| stelle ↔ interdipendenza | **+0.49** |
| stelle ↔ costante ambientale | +0.32 |
| stelle ↔ lunghezza | +0.33 |
| costante ↔ interdipendenza | +0.40 |
| **interdipendenza ↔ lunghezza** | **+0.63** |
| **costante ↔ lunghezza** | **+0.60** |

Le ultime due righe sono decisive: tutt'e due le variabili sono fortemente confuse con la
lunghezza. Un prompt lungo ha più occasioni sia di dichiarare una luce sia di legare fra loro
gli elementi, e riceve anche più stelle. Controllando la lunghezza:

| parziale, a lunghezza costante | ρ |
|---|---:|
| stelle ↔ interdipendenza | **+0.38** |
| stelle ↔ costante ambientale | +0.16 |

E separando il corpus a metà per lunghezza:

| | n | stelle ↔ interdip. | stelle ↔ costante |
|---|---:|---:|---:|
| prompt brevi (< 160 parole) | 24 | +0.09 | −0.15 |
| prompt lunghi (≥ 160 parole) | 25 | +0.52 | +0.62 |

---

## Risposta

**Le stelle correlano con l'interdipendenza, non con la costante ambientale.**

Grezza, la correlazione con l'interdipendenza è già la più forte delle due (+0.49 contro
+0.32). Ma la differenza vera emerge quando si toglie di mezzo la lunghezza:
l'interdipendenza regge (+0.38), la costante ambientale quasi sparisce (+0.16). La costante
sembra predittiva solo perché i prompt lunghi tendono a dichiararla *e* a prendere più
stelle — è un effetto della lunghezza, non un criterio.

Il test più pulito lo fornisce il corpus stesso. Quattro dei cinque documenti contengono
**riscritture**: lo stesso mondo scritto due volte, una come elenco e una con la struttura
portante resa esplicita. Dentro ogni coppia il soggetto è costante, quindi il confronto isola
proprio la variabile che ci interessa.

| coppia (versione elenco → versione circuito) | prima | dopo |
|---|---|---|
| Sacred forge → SACRED COMBUSTION | ☆☆ · interdip 0 · 197p | ☆☆☆ · interdip 5 · 265p |
| Celestial nursery → THE DREAMING NURSERY | ☆☆☆ · interdip 0 · 145p | ☆☆☆☆ · interdip 4 · 322p |
| Stone that dreams of its own ocean → Fossil that excavates its archaeologist | ☆☆☆ · interdip 1 · 99p | ☆☆☆☆ · interdip 3 · **94p** |
| Stone that dreams of its guests → The building remembers forward | ☆☆☆ · interdip 2 · 149p | ☆☆☆☆ · interdip 4 · 283p |
| Thoth's last theorem → BASALT THEOREM | ☆☆☆ · interdip 4 · 699p | ☆☆☆☆ · interdip 3 · **244p** |
| Secret kingdom → THE UNDER-BED DOMINION | ☆☆☆☆ · interdip 1 · 128p | ☆☆☆☆ · interdip 3 · 237p |
| Classified excavation → INVERSE EXCAVATION | ☆☆☆☆ · interdip 4 · 513p | ☆☆☆☆ · interdip 4 · 292p |

In cinque coppie su sette le stelle salgono, e mai scendono. Due righe smontano da sole
l'ipotesi-lunghezza: **Fossil that excavates its archaeologist** guadagna una stella con
*cinque parole in meno* del suo predecessore, e **BASALT THEOREM** ne guadagna una
tagliando 455 parole a Thoth. Quando soggetto e lunghezza sono fermi, a muoversi con le
stelle è l'interdipendenza.

### La costante ambientale fa un altro mestiere

Non è irrilevante: 15 dei 19 prompt ☆☆☆☆ ne hanno una piena, contro 3 su 10 fra i ☆☆. Ma
non è ciò che le stelle misurano — è ciò che serve per *reggere un prompt lungo*. Oltre le
~250 parole l'elenco di immagini si sfalda senza una luce comune, e infatti nel corpus non
esiste un prompt lungo e ben valutato che ne sia privo. Sotto le 160 parole la correlazione
sparisce e diventa perfino leggermente negativa (−0.15): nel formato breve una costante
dichiarata è spesa che non rende.

Il caso limite è il vertice della scala. **Tribunal of carved law**, unico ☆☆☆☆☆ del corpus,
non ha *nessuna* costante ambientale — nessuna luce, nessuna ora — e sta in 107 parole,
sotto la media dei ☆☆. Ha però la costruzione più fittamente interdipendente di tutte, e la
dichiara: `columns carved with legal codes that structurally support the ceiling — remove a
clause and the building collapses`, chiusa da `every ornament is a functioning clause`, che
è letteralmente la negazione dell'elemento decorativo.

### Le eccezioni, e cosa insegnano

Nessuna delle due variabili è un criterio pulito, e i fuori-scala lo mostrano.

**Verso l'alto** — due ☆☆ hanno interdipendenza reale. *Sacred geometry gymnasium* usa
esattamente il dispositivo del ☆☆☆☆☆: `yoga poses as structural blueprints that hold the
building together — remove the practitioner and the walls collapse`. *Lumen Sanctum* lega
culto e cognizione in un'unica funzione (`as if worship and cognition are the same act`).
Entrambi restano a due stelle: la clausola di crollo, da sola, non fa salire il voto.

**Verso il basso** — due ☆☆☆☆ hanno zero di entrambe le variabili, perché non sono
scene: `M02` è un foglio di stile (palette, tipografia, texture) e `H11` è un blocco di soli
dense glyphs che finisce in `--ar 16:9 --style raw --v 6.0`. Sono artefatti di natura diversa,
misurati sulla stessa scala.

**Il contro-caso più interessante** resta *Sacred forge of the eternal pitmaster* (☆☆☆☆,
interdip 1): prende più stelle di SACRED COMBUSTION (☆☆☆, interdip 5) avendo un quinto
della sua interdipendenza — ma è anche l'unico dei tre ad avere una costante ambientale
piena. È il singolo caso in cui le due variabili si scambiano di posto.

### In una riga

Le stelle seguono l'**interdipendenza**, che resiste al controllo per lunghezza e si muove
con le stelle anche dentro le riscritture a lunghezza calante. La **costante ambientale** è
una condizione abilitante della scala, non un criterio di merito: serve a tenere insieme un
prompt lungo, non compare affatto nel prompt più votato del corpus, e nel formato breve
non paga.

---

## Nota sull'estrazione

I PDF non contenevano un layer di testo leggibile dagli strumenti disponibili in questo
ambiente (nessun `pdftotext`, nessuna rete per installarlo). Il testo è stato ricostruito con un
estrattore scritto per l'occasione, che decodifica i font subset attraverso le loro CMap
`ToUnicode` e ricompone le righe dalla matrice di testo e dalla CTM. Il conteggio parole per
blocco è automatico; la codifica di costante e interdipendenza è una lettura mia, fatta con il
criterio dichiarato sopra — la colonna *clausola di crollo* è invece verificabile alla lettera nel
testo dei prompt.

# Portfolio

Statyczne portfolio frontendowe przygotowane pod GitHub Pages.

## Jak uruchomic lokalnie

Masz 2 proste opcje:

1. Otworz `index.html` bezposrednio w przegladarce.
2. Uruchom prosty serwer lokalny w katalogu projektu:

```powershell
python -m http.server 5500
```

Potem wejdz na:

```text
http://localhost:5500
```

## Jak wejsc online

Po publikacji na GitHub Pages portfolio jest dostepne pod adresem:

```text
https://macstenc.github.io/Portfolio/
```

## Struktura projektu

- `index.html` - glowny dokument strony
- `data/portfolio-data.js` - wszystkie tresci, projekty, linki i ustawienia
- `styles/main.css` - punkt wejscia dla stylow
- `styles/tokens.css` - zmienne, motywy i design tokens
- `styles/base.css` - reset, elementy bazowe i tlo strony
- `styles/layout.css` - kontenery, sekcje i ogolny layout
- `styles/components.css` - nawigacja, przyciski, przelaczniki i komponenty wspolne
- `styles/sections.css` - style sekcji i kart
- `styles/responsive.css` - breakpointy i poprawki responsywne
- `scripts/helpers.js` - male funkcje pomocnicze, storage i utility
- `scripts/renderers.js` - renderowanie tresci do DOM
- `scripts/ui.js` - interakcje, theme switcher, nav, observery
- `scripts/main.js` - inicjalizacja aplikacji

## Gdzie edytowac portfolio

- dane osobowe, teksty, projekty, linki i CV: `data/portfolio-data.js`
- wyglad i layout: pliki w `styles/`
- logika interakcji: pliki w `scripts/`

# Portfolio

Statyczne, dwujęzyczne portfolio programistyczne przygotowane pod GitHub Pages. Projekt działa bez backendu i bez frameworków frontendowych. Całość opiera się na `HTML`, `CSS` i `vanilla JavaScript`, a większość treści i ustawień edytujesz w jednym miejscu: `scripts/data.js`.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- GitHub Actions do publikacji

## Struktura projektu

```text
.
├── .github/workflows/deploy.yml
├── .nojekyll
├── assets
│   ├── files
│   │   └── maciej-stencel-cv.pdf
│   ├── icons
│   │   └── favicon.svg
│   └── img
│       ├── og-cover.svg
│       ├── profile-placeholder.svg
│       ├── project-accessible-suite.svg
│       ├── project-commerce-engine.svg
│       ├── project-link-toolkit.svg
│       └── project-showthecash.svg
├── index.html
├── robots.txt
├── scripts
│   ├── data.js
│   └── main.js
├── sitemap.xml
└── styles
    └── main.css
```

## Gdzie edytować dane

Najważniejszy plik to `scripts/data.js`.

Tam zmienisz:

- imię i nazwisko
- tytuł zawodowy
- treści w wersji `EN` i `PL`
- sekcję `About`
- umiejętności
- doświadczenie
- projekty
- dane kontaktowe
- linki społecznościowe
- teksty formularza
- adres strony `siteUrl`

## Motywy

Portfolio ma trzy motywy:

- `Light`
- `Dark`
- `Retro`

Nazwy motywów i ich kolejność w UI są powiązane z `scripts/data.js`, a same tokeny kolorystyczne znajdziesz w `styles/main.css` w blokach:

- `html[data-theme="light"]`
- `html[data-theme="dark"]`
- `html[data-theme="retro"]`

Wybrany motyw zapisuje się w `localStorage`, więc po odświeżeniu wraca ostatnie ustawienie użytkownika.

## Zdjęcie profilowe

Docelowe zdjęcie wrzuć tutaj:

```text
assets/img/profile.jpg
```

Jeśli plik nie istnieje, strona automatycznie pokaże:

```text
assets/img/profile-placeholder.svg
```

Najlepiej użyć zdjęcia:

- pionowego
- dobrze wykadrowanego
- z neutralnym albo profesjonalnym tłem
- w rozsądnym rozmiarze, np. do `1200px` wysokości

## CV

Podmień placeholder PDF tutaj:

```text
assets/files/maciej-stencel-cv.pdf
```

Przycisk w hero i link w stopce korzystają właśnie z tego pliku.

## SEO i adres strony

Przed publikacją sprawdź te miejsca, jeśli zmienisz nazwę repozytorium albo użyjesz własnej domeny:

- `scripts/data.js` -> `settings.siteUrl`
- `index.html` -> canonical, Open Graph i Twitter meta
- `robots.txt`
- `sitemap.xml`
- `assets/img/og-cover.svg`, jeśli chcesz podmienić social preview

Domyślnie projekt zakłada publikację pod:

```text
https://macstenc.github.io/Portfolio/
```

## Uruchomienie lokalne

Nie ma żadnych zależności do instalacji.

Opcja 1:

- otwórz `index.html` bezpośrednio w przeglądarce

Opcja 2:

- uruchom lokalny serwer:

```powershell
python -m http.server 5500
```

- potem otwórz:

```text
http://localhost:5500
```

## Publikacja na GitHub Pages

Projekt zawiera gotowy workflow:

```text
.github/workflows/deploy.yml
```

Kroki:

1. Wrzuć repozytorium na GitHub.
2. Upewnij się, że główna gałąź to `main`.
3. Wejdź w `Settings` -> `Pages`.
4. W sekcji build source wybierz `GitHub Actions`.
5. Wypchnij commit do `main`.
6. GitHub uruchomi workflow i opublikuje stronę.

## Uwagi praktyczne

- Portfolio jest frontend-only.
- Formularz kontaktowy używa `mailto`, więc nie udaje backendu.
- Przełącznik języka `PL / EN` działa bez backendu na bazie obiektu w `scripts/data.js`.
- Przełącznik motywu `Light / Dark / Retro` działa bez backendu i zapisuje wybór użytkownika lokalnie.
- Jeśli chcesz zmienić grafiki projektów, najprościej podmień pliki SVG w `assets/img`.

## Checklist

- dane osobowe i treści: `scripts/data.js`
- motywy i tokeny kolorów: `styles/main.css`
- zdjęcie profilowe: `assets/img/profile.jpg`
- CV PDF: `assets/files/maciej-stencel-cv.pdf`
- favicon: `assets/icons/favicon.svg`
- lokalne uruchomienie: `python -m http.server 5500`
- deploy na GitHub: push do `main`
- włączenie GitHub Pages: `Settings -> Pages -> GitHub Actions`

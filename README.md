# PhotoFetcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.


## Zadání

Programovací zadání má 2 části:
- Část A: HTML + CSS
- Část B: Typescript

Hodnotíme:
- Čistý a čitelný kód.
- Pixelová dokonalost.
- Struktura kódu na úrovni složek.

Vytvořte rozložení na základě dané obrazovky výše.
- Upravte rozložení konzistentně a designově pěkně, a co nejblíže návrhu.
- POZNÁMKA: Můžete použít libovolný preprocesor, který si přejete, nebo
napsat raw CSS.
- Využijte veřejné API pro získání dat z kategorie Sběratelství

  - POST https://backend.aukro.cz/backend-web/api/offers/searchItemsCommon?page=0&size=60
  - s JSON body `{
"categorySeoUrl": "sberatelstvi",
"fallbackItemsCount": 12,
"splitGroupKey": "listing",
"splitGroupValue": "A18"
}`

  - V propertě content se pak nachází seznam objektů držící data k jednotlivým nabídkám, kde najdete property titleImageUrl, která drží URL obrázku nabídky
    - titleImageUrl pro zobrazení obrázku
    - Fantazii se meze nekladou, a tak můžete do daného seznamu využít i další data z výsledných objektů
  - cors problem = try localhost:4200 nebo se s tím vypořádejte, existuje více možností, jak to udělat, když backend ještě není dokončen, ale struktura je již dána

- Zobrazte náhodné 4 fotografie v rozvržení HTML + CSS vytvořeném v kroku A, držte se rozvržení, umístěte informace tam, kam se hodí, responzivně.
  - Zamyslete se nad všemi možnými dopady vámi navrhnutého algoritmu

- Přepínač – pokud je povoleno, změní všechny viditelné fotografie na odstíny šedi.
- Tlačítko „Načíst nové fotografie“ zobrazí novou sadu náhodných 4 fotografií.
- Použijte Angular framework


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

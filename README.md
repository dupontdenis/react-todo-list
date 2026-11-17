# React Todo List

Cette mini-application React montre comment créer une liste de tâches simples avec React et Vite.

Elle sert d'exemple pour comprendre :
- la gestion d'état avec `useState`
- la création d'un formulaire contrôlé
- l'ajout et la suppression d'éléments dans une liste
- différentes approches pour stocker des données dans le state (tableau, objet, `Map`, `Immer`)

## Structure du projet

```text
react-todo-list/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx              # version principale de l'application
│   ├── AppArray.jsx         # exemple avec un tableau
│   ├── AppImmer.jsx         # exemple avec Immer
│   ├── AppMap.jsx           # exemple avec Map
│   ├── AppObj.jsx           # exemple avec un objet
│   ├── NewTodoForm.jsx      # formulaire d'ajout d'une tâche
│   ├── TodoItem.jsx         # rendu d'un élément de liste
│   ├── TodoList.jsx         # liste des tâches
│   ├── main.jsx             # point d'entrée React
│   └── styles.css           # styles du projet
└── README.md
```

## Fonctionnement de l'application

La version actuelle dans `src/App.jsx` permet :
- d'écrire une nouvelle tâche dans un formulaire
- d'ajouter la tâche à la liste
- de supprimer une tâche avec un bouton

Chaque tâche est stockée sous forme d'objet :

```js
{ id: crypto.randomUUID(), title: "Nom de la tâche" }
```

Le composant `NewTodoForm` gère le champ de saisie et appelle `onSubmit` lorsque l'utilisateur envoie le formulaire.

Les autres fichiers `AppArray.jsx`, `AppObj.jsx`, `AppMap.jsx` et `AppImmer.jsx` sont des variantes pédagogiques qui illustrent des façons différentes d'écrire l'état.

## Prérequis

Assurez-vous d'avoir installé :
- Node.js (version recommandée : 18 ou plus)
- npm

## Installation

Dans le dossier du projet, exécutez :

```bash
npm install
```

## Lancer le projet

Pour démarrer le serveur de développement Vite :

```bash
npm run dev
```

Ensuite, ouvrez l'URL affichée dans le terminal, généralement :

```text
http://localhost:5173
```

## Construire pour la production

```bash
npm run build
```

Le dossier `dist/` sera généré avec la version de production.

## Vérifier la version production localement

```bash
npm run preview
```

## Notes

- Le point d'entrée de l'application est `src/main.jsx`.
- `src/App.jsx` est la version principale utilisée par défaut.
- Les fichiers `App*.jsx` sont des variantes d'apprentissage et peuvent être testées individuellement selon le besoin.

## Technologies utilisées

- React
- Vite
- JavaScript
- CSS

///////////////////////// Etapes / difficultés\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

--Créé le dossier
--Créé l'app (react + tailwind) en ligne de commande:
            
            npm create vite@latest my-project -- --template react
            cd my-project
            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p

--Initialiser le repositoire et créé branche main et branche dev
--Créé une branche pour chaque feature (landing page, formulaire, etc)
--PR pour fusionner les branches sur dev, et fusion de dev sur main

Jusque là tout allait bien. 

MAIS. 

J'avais initialiser le repos sur le dossier de base, pas sur le dossier de l'app. Hors le worker github doit se trouver à la racine du repo. Il a fallu que je bouges tous les fichiers de l'app à la racine du repo pour que le worker ait acces au package.json. Et que je débug le worker, qui se lance uniquement sur un push ou une PR.

Le git flow en a pris un coup. 
J'ai travaillé sur la branche dev directement après ça, par soucis de temps.
            

///////////////////////// COMMANDS HISTORY (une partie) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

$ git reflog
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
06c5eb3 HEAD@{14}: pull --tags origin dev: Fast-forward
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
06c5eb3 HEAD@{14}: pull --tags origin dev: Fast-forward
8154505 HEAD@{15}: checkout: moving from feature/remove-partaker-from-form to dev
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
06c5eb3 HEAD@{14}: pull --tags origin dev: Fast-forward
8154505 HEAD@{15}: checkout: moving from feature/remove-partaker-from-form to dev
ddf51ce (origin/feature/remove-partaker-from-form, feature/remove-partaker-from-form) HEAD@{16}: commit: feat(front): adds button to remove a partaker
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
06c5eb3 HEAD@{14}: pull --tags origin dev: Fast-forward
8154505 HEAD@{15}: checkout: moving from feature/remove-partaker-from-form to dev
ddf51ce (origin/feature/remove-partaker-from-form, feature/remove-partaker-from-form) HEAD@{16}: commit: feat(front): adds button to remove a partaker
8154505 HEAD@{17}: checkout: moving from dev to feature/remove-partaker-from-form
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
06c5eb3 HEAD@{14}: pull --tags origin dev: Fast-forward
8154505 HEAD@{15}: checkout: moving from feature/remove-partaker-from-form to dev
ddf51ce (origin/feature/remove-partaker-from-form, feature/remove-partaker-from-form) HEAD@{16}: commit: feat(front): adds button to remove a partaker
8154505 HEAD@{17}: checkout: moving from dev to feature/remove-partaker-from-form
8154505 HEAD@{18}: pull --tags origin dev: Fast-forward
7da8181 HEAD@{19}: checkout: moving from feature/final-page to dev
:...skipping...
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{0}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (HEAD -> workflows/eslint, origin/workflows/eslint) HEAD@{1}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{2}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{3}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{4}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{5}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 (origin/dev, dev) HEAD@{6}: checkout: moving from dev to workflows/eslint
079b8e4 (origin/dev, dev) HEAD@{7}: checkout: moving from main to dev
0b6f36e (origin/main, main) HEAD@{8}: pull --tags origin main: Fast-forward
5a63a45 HEAD@{9}: checkout: moving from dev to main
079b8e4 (origin/dev, dev) HEAD@{10}: pull --tags origin dev: Fast-forward
06c5eb3 HEAD@{11}: checkout: moving from Fix/fix-background to dev
70cb25b (origin/Fix/fix-background, Fix/fix-background) HEAD@{12}: commit: fix(front): fix background
06c5eb3 HEAD@{13}: checkout: moving from dev to Fix/fix-background
06c5eb3 HEAD@{14}: pull --tags origin dev: Fast-forward
8154505 HEAD@{15}: checkout: moving from feature/remove-partaker-from-form to dev
ddf51ce (origin/feature/remove-partaker-from-form, feature/remove-partaker-from-form) HEAD@{16}: commit: feat(front): adds button to remove a partaker
8154505 HEAD@{17}: checkout: moving from dev to feature/remove-partaker-from-form
8154505 HEAD@{18}: pull --tags origin dev: Fast-forward
7da8181 HEAD@{19}: checkout: moving from feature/final-page to dev
5d08e29 (origin/feature/final-page, feature/final-page) HEAD@{20}: commit: feat(front): add last page with shuffle results
:
aeecb7e (HEAD -> dev, origin/dev) HEAD@{0}: pull --tags origin dev: Fast-forward
079b8e4 HEAD@{1}: checkout: moving from workflows/eslint to dev
75526d6 (origin/workflows/eslint, workflows/eslint) HEAD@{2}: rebase (finish): returning to refs/heads/workflows/eslint
75526d6 (origin/workflows/eslint, workflows/eslint) HEAD@{3}: rebase (squash): chore: add ESLint and Prettier workflow
9908522 HEAD@{4}: rebase (start): checkout HEAD~2
b402ae3 HEAD@{5}: pull --tags origin workflows/eslint: Merge made by the 'ort' strategy.
9908522 HEAD@{6}: commit (amend): chore: add ESLint and Prettier workflow
8cc7564 HEAD@{7}: commit: feature(workflow): add Prettier + Eslint git workflow
079b8e4 HEAD@{8}: checkout: moving from dev to workflows/eslint

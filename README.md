# JP Laclau React Personal Portfolio Template

This repository can be found live on code.jplaclau.com

## Description

Just a coding portfolio.

## Instalation and local edit

npm config set legacy-peer-deps true  
npm install --legacy-peer-deps  
npm run build --legacy-peer-deps  
npm start

## deploy to GCP GAE

Add .npmrc file in the root with legacy-peer-deps=true in the file

gcloud init  
gcloud app deploy

## Log Current version: v0.5

v0.5: Added good dlowdable & updated cv in .pdf
v0.4: hidden paths, and added stuff to portfolio
v0.3: First betatest, I've been told it is too personal, I have to reduce the personal "flavour" of the site and make it more "80% like any other professional NPC, and only 20% personal flavour". I'll see what I can do, for the moment I need to take a rest from this project and build other stuff to actually put on the portfolio.
v0.2: working contact forms with emailjs added
v0.1: it just works.

---

### End Notes

by the way, the base template was acquired from ib-themes, who were kind with me and helped me fix a problem related with an outdated repository. So here is my 50-cents to them: https://themeforest.net/user/ib-themes

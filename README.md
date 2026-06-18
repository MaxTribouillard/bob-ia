# Bob IA



<!--![Logo de BobIA](https://cdn.miiwiki.org/8/85/Default_Male_Mii.png)-->
<img src="https://cdn.miiwiki.org/8/85/Default_Male_Mii.png" width="250" alt="Logo de BobIA">
<img width="1230" height="360" alt="image" src="https://github.com/user-attachments/assets/eab259e8-7a47-4b9b-885c-197606af2ac2" />

Bob IA est un assistant virtuel personnel conçu pour être rapide, confidentiel et entièrement auto-hébergé. L'objectif de ce projet est d'apprendre à créer une interface de discussion fluide et moderne connectée à un grand modèle de langage (LLM) s'exécutant sur mon propre serveur, sans dépendre d'API payantes.

---

## L'Architecture du Projet

Le projet repose sur une **architecture découplée** pour séparer distinctement l'interface utilisateur de l'infrastructure IA.

```text
[ Client : React / Tailwind ] 
             │ (Requêtes HTTP)
             ▼
[ Serveur API : Spring Boot ]
             │ (Passerelle)
             ▼
[ Mon VPS : Ollama API ] ──► [ Modèle : Phi-3-Mini ]
```

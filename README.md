# DinoAcademy

Jogo educativo oficial para crianças a partir dos 5 anos, distribuído através da plataforma [DinoPlay](https://rjcferreira.github.io/dino-color-quiz/).

## Conteúdo

- 30 desafios em seis mundos: números, letras, lógica, memória, formas e natureza.
- Português de Portugal, português do Brasil, inglês, francês, alemão, espanhol e polaco.
- Progresso guardado pelo SDK do DinoPlay.
- Totalmente offline e sem publicidade, compras, rastreio ou ligações externas.

## Desenvolvimento local

```bash
node scripts/validate.mjs
python -m http.server 8080
```

Abre `http://localhost:8080`. Fora da plataforma, o jogo usa armazenamento local e o idioma do navegador.

## Publicação

Alterações entram por pull request. A validação automática confirma o manifesto, os recursos offline e as regras básicas de segurança. Uma versão aprovada pode depois ser integrada no catálogo oficial do DinoPlay.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) e [LICENSE](LICENSE).

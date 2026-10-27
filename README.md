# DinoAcademy

## Módulo 3–5 anos

- Cada nível contém 15 exercícios diferentes, sempre com uma única instrução por ecrã.
- Os conteúdos usam a posição global do exercício para evitar repetir os desafios dos níveis anteriores.
- Números de 0 a 9 e letras de A a Z apresentados individualmente.
- Alternância entre traçar, reconhecer, contar, pintar, ordenar, memorizar e associar.
- Apenas duas respostas visuais nas atividades de escolha.
- Narração automática lenta e calma, escolhendo a voz natural disponível no dispositivo.

Jogo educativo oficial para crianças dos 3 aos 7 anos, distribuído através da plataforma [DinoPlay](https://rjcferreira.github.io/DinoPlay/).

## Conteúdo

- Módulo 1, dos 3 aos 5 anos: aprendizagem visual e oral, com instruções faladas e atividades sem dependência da leitura.
- Módulo 2, dos 6 aos 7 anos: iniciação à leitura, números, adição, subtração, padrões e resolução de problemas.
- 60 desafios em seis mundos: números, letras, lógica, memória, formas e natureza.
- Português de Portugal, português do Brasil, inglês, francês, alemão, espanhol e polaco.
- Progresso guardado pelo SDK do DinoPlay.
- Totalmente offline e sem publicidade, compras, rastreio ou ligações externas.

## Base pedagógica

As atividades foram organizadas com base nas Orientações Curriculares para a Educação Pré-Escolar e nas Aprendizagens Essenciais do 1.º ano da Direção-Geral da Educação. O jogo é um apoio lúdico e não substitui o acompanhamento de responsáveis e educadores.

## Desenvolvimento local

```bash
node scripts/validate.mjs
python -m http.server 8080
```

Abre `http://localhost:8080`. Fora da plataforma, o jogo usa armazenamento local e o idioma do navegador.

## Publicação

Alterações entram por pull request. A validação automática confirma o manifesto, os recursos offline e as regras básicas de segurança. Uma versão aprovada pode depois ser integrada no catálogo oficial do DinoPlay.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) e [LICENSE](LICENSE).

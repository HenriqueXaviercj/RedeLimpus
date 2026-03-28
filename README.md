# RedeLimpus

## Estrutura de Pastas Profissional

- `src/`
  - `src/index.html` (HTML fonte)
  - `src/scss/` (arquivos Sass) 
  - `src/js/` (JavaScript fonte)
  - `src/imgs/` (imagens fonte)
- `dist/`
  - `dist/index.html` (versão de produção)
  - `dist/css/` (CSS compilado)
  - `dist/js/` (JS pronto)
  - `dist/imgs/` (imagens para deploy)
- `backup/` (arquivos originais movidos para segurança)

## Como usar

1. Compile Sass de `src/scss/` para `dist/css/` (e.g. `sass src/scss:dist/css`).
2. Copie/otimize `src/imgs/` para `dist/imgs/` se necessário.
3. Edite `src/index.html` e `src/js/main.js`.
4. Verifique `dist/index.html` no navegador local para pré-visualização.



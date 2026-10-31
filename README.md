# Challenger - Decodificador de Textos
Exercício de HTML, CSS e JavaScript do desafio Alura: transforma texto por substituição simples de vogais. Os rótulos da interface usam “criptografar” e “descriptografar”, mas o algoritmo não oferece segurança criptográfica ou proteção de mensagens.

Prótotipo do projeto🎨
https://www.figma.com/file/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---Lógica?type=design&node-id=2-213&mode=design&t=BMMK3eU1CbRcOQ0T-0

Badge do Challenguer⭐
![image](https://github.com/GuilhermeSerafim/decodificador-de-textos/assets/129989701/6a15cde6-3032-46a3-9a92-269c523fd00e)

## Regras e limites

`scripts/index.js` substitui `e → enter`, `i → imes`, `a → ai`, `o → ober` e `u → ufat`; a função inversa troca essas sequências pelas vogais. A interface orienta usar letras minúsculas sem acentos. As expressões regulares ignoram caixa e a saída usa vogais minúsculas, portanto não se promete preservar maiúsculas após ida e volta.

A página de entrada é `index.html`; não há manifesto de dependências ou build na árvore. O alerta SweetAlert é carregado por CDN. Existe uma referência adicional a `index.js` na raiz, ausente do repositório; o script principal fica em `scripts/index.js`.

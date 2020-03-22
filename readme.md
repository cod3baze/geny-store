# RegEx

  > Uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa.
  *O padrão de pesquisa pode ser usado para operações de pesquisa e substituição de texto.*

  ------------------------------------------------------------------------------

- Síntax
  `/pattern/modifiers;`
- Exemplo
  `var patt = /unaspht/i`

  - [X] Explicando o exemplo
  **/ unaspht / i** é uma expressão regular (o padrão de pesquisa).
  O *unaspht* é um padrão.
  O */ i* é um modificador : modifica a pesquisa para não diferenciar maiúscula de menúscula.

  ------------------------------------------------------------------------------

## Métodos frequêntes

- replace(): retorna uma string modificada onde o padrão é substituída.
- search(): usa uma expressão para procurar uma correspondência e retorna a posição da correspondência.

## Do

- [X] pesquisar uma parte em uma sequência.
  
  ```js
    var str = 'acesse unaspht'
    var parte = str.search("unaspht)
  ```

- [X] mesma pesquisa usando RegEx. Não diferencia maiúsculas de minúsculas.
  *Retorna a posição do elemento na sequência*

  ```js
    var str = 'acesse unaspht'
    var parte = str.search(/unaspht/i)
  ```

  ------------------------------------------------------------------------------

### Modificadores

- **i**: Executar correspondência que não diferencia maiúsculas de minúsculas.
- **g**: Realize uma correspondência global (encontre todas as correspondências em vez de parar após a primeira).
- **m**: Executa correspondência multilinha.

# Todo App

Aplicativo de lista de tarefas com tema claro e escuro, filtros, reordenação por arrastar e soltar e dados salvos no navegador. Desenvolvido com React e Tailwind CSS a partir do desafio **Todo App** do [Frontend Mentor](https://www.frontendmentor.io).

![Prévia do projeto](./docs/preview.png)
<!-- TODO: adicionar um print ou GIF em docs/preview.png mostrando a troca de tema e o arrastar de tarefas -->

**Demonstração:** [GitHub Pages](https://hangtime319.github.io/todo-app-main/)
**Repositório:** [GitHub](https://github.com/hangtime319/todo-app-main)

---

## Funcionalidades

- Criar tarefas digitando o texto e apertando **Enter** (tarefas vazias são ignoradas)
- Marcar e desmarcar tarefas como concluídas (pelo círculo ou clicando no texto)
- Excluir tarefas
- Filtrar por **All**, **Active** e **Completed**
- Contador de tarefas pendentes e botão **Clear Completed**
- **Reordenar tarefas arrastando**, com mouse e com toque no celular
- **Tema claro e escuro**, com a escolha lembrada na próxima visita
- Tarefas salvas no `localStorage`
- Layout responsivo (mobile e desktop)

## Tecnologias

- [React](https://react.dev) (Context API e hooks próprios)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [@dnd-kit](https://dndkit.com) (`core`, `sortable` e `utilities`)

## Destaques técnicos

### 1. Tema claro e escuro por classe, sem repassar props

O tema é guardado em um `ThemeContext`. Quando ele muda, um `useEffect` liga ou desliga a classe `dark` no elemento `<html>` e salva a escolha no `localStorage`. No Tailwind v4, o dark mode por classe é ensinado com uma linha no CSS:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Com isso, qualquer componente usa `dark:` livremente nas suas classes, sem receber o tema por props. Na troca de tema, só o botão que consome o contexto é re-renderizado. O restante da interface é atualizado pelo navegador, que reavalia os seletores de CSS.

O estado inicial do tema é lido do `localStorage` com **inicialização preguiçosa** do `useState`, para evitar o "flash" do tema errado ao abrir a página.

### 2. Estado centralizado no hook `useTodos`

Toda a lógica das tarefas fica em um único hook: estado da lista, filtro atual e as funções de criar, marcar, excluir, limpar concluídas e reordenar. O componente `Container` chama o hook uma vez e distribui os dados e as funções para os filhos por props.

A lista exibida na tela é **calculada a cada renderização** a partir da lista completa e do filtro atual, em vez de ser guardada em um terceiro estado. Isso evita dados duplicados que podem sair de sincronia. O contador de pendentes e o botão **Clear Completed** recebem a lista **completa**, para continuarem corretos mesmo com um filtro ativo.

### 3. Persistência no `localStorage`

A lista de tarefas é salva em JSON a cada alteração e lida uma única vez na abertura da página, também com inicialização preguiçosa. Quando não há nada salvo, o app começa com uma lista vazia.

### 4. Borda com gradiente no hover do círculo

A propriedade `border-color` não aceita gradiente. Para reproduzir o efeito do design, o círculo usa **duas camadas de fundo** sobrepostas: uma cor sólida, igual ao fundo do item, recortada só no miolo (`padding-box`), e o gradiente por baixo, que vai até a borda externa (`border-box`). Com a borda transparente, só o anel mostra o gradiente. A cor do miolo muda de acordo com o tema.

### 5. Arrastar e soltar com mouse e toque

A reordenação usa o `@dnd-kit`, com sensores configurados para cada tipo de entrada:

- **Mouse:** o arrasto só começa depois de o cursor andar 8px, para o clique de marcar a tarefa não ser confundido com um arrasto.
- **Toque:** o arrasto começa depois de segurar por 250 ms, para a rolagem normal da página no celular continuar funcionando.

A função `reorderTask` procura as posições dentro da lista **completa**, usando os `id`s das tarefas, e não as posições da tela. Assim, reordenar com um filtro ativo não embaralha as tarefas que estão escondidas.

### 6. Responsividade

- Os filtros aparecem no rodapé da lista no desktop e em um card separado no mobile, como no design. O componente `Filters` é renderizado duas vezes e a visibilidade alterna com `hidden` e `md:hidden`. Os dois usam o mesmo estado, e o `display: none` também os esconde dos leitores de tela.
- O botão de excluir fica sempre visível no mobile, onde não existe hover, e aparece no hover do item no desktop.

### 7. Acessibilidade

- Botões com nomes acessíveis (`aria-label`), incluindo o texto da tarefa, e estado do círculo informado com `aria-pressed`
- Imagens decorativas com `alt` vazio
- Campo de texto com `aria-label`
- Remoção do `role` que o `@dnd-kit` coloca por padrão nos itens, que conflitava com a semântica de lista (`<ul>` e `<li>`)
- Nota **96** na categoria Accessibility do Lighthouse

## Decisões e limitações

- Mantive as **cores originais do design**, ciente de que alguns textos (como tarefas concluídas e o contador) ficam abaixo da razão de contraste recomendada de 4,5:1.
- A reordenação funciona com **mouse e toque**. O arrasto por teclado ficou fora do escopo e pode ser uma melhoria futura com o `KeyboardSensor` do `@dnd-kit`.
- A largura do card no desktop ficou um pouco menor do que no design, por uma questão de preferência visual.

## Estrutura do projeto

```
src/
├── components/
│   ├── container/   # Container, TodoInput, TodoList, TodoItem, ListFooter,
│   │                # ItemsCounter, Filters, ClearCompletedButton
│   ├── header/      # Header, TodoTitle, ThemeToggle
│   └── footer/      # Footer
├── context/         # ThemeContext
├── hooks/           # useTodos, useTheme
├── App.jsx
└── main.jsx
public/              # imagens de fundo e ícones
```

## Como rodar o projeto

```bash
# clonar o repositório
git clone https://github.com/hangtime319/todo-app-main

# entrar na pasta
cd todo-app-main

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

O app abre em `http://localhost:5173`.

## Autor

**Leonardo** — desenvolvedor front-end

[LinkedIn](https://www.linkedin.com/in/leo-amaral-brito/)
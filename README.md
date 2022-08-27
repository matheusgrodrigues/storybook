# storybook

- [Introducao](#introducao)
- [O que é uma história](#o-que-e-uma-historia)
    - [Procurar história](#procurar-historia)
    - [Barras de ferramentas](#barras-de-ferramentas)
    - [Addons (Complementos)](#addons-ou-complementos)
    - [Configurar](#configurar)
- [Como escrever histórias](#como-escrever-historias)

## Introducao

- Ferramenta para desenvolvimento de interface de usuário
- Torna o desenvolvimento mais rápido e fácil isolando componentes.
- Utiliza o conceito de Atomic design
- Ajuda a documentar, testar visualmente, de uma forma automatica os componentes.
- Suportado por diversas tecnologias.

## Instalacao

> npx storybook init

- O comando acima fará as seguintes alterações em seu ambiente local
    - Instalação das dependencias necessárias
    - Configuração dos scripts necessário para executar o storybook
    - Configuração padrão do storybook
    - Adição de histórias padrão para começar
    - Configuração da telemetria para ajudar a melhorar a ferramenta.

## O que e uma historia

- Uma história captura o estado atual do componente. 
- Os desenvolvedores descrevem todos os estados "interessantes" que um componente pode suportar.
- Uma história é uma função que descreve como renderizar o componente em questão.

### Procurar historia

- Arquivos *.stories.js / tsx, define todas as histórias para um componente.
- Cada um desses arquivos correspondem a um item na barra lateral correspondente.
- Quando você clica em uma história, ele renderiza no Canvas um iframe de visualização isolado.

### Barras de ferramentas

- O Storybook possui atalhos que ajudam a economizar tempo para visualizar os componentes no Canvas.
- 🔍 O zoom dimensiona visualmente o componente para que você possa verificar os detalhes.
- 🖼 O plano de fundo altera o plano de fundo renderizado atrás de seu componente para que você possa verificar como seu componente é renderizado em diferentes contextos visuais.
- 📱 A viewport renderiza o componente em várias dimensões e orientações. É ideal para verificar a capacidade de resposta dos componentes. 
- A "Docs" mostra a documentação gerada automaticamente sobre os componentes (inferida apartir do código fonte). 
- Os "Docs" são úteis para compartilhar componentes reutilizáveis com sua equipe, por exemplo, em um design system ou biblioteca de componentes.
- A barra de ferramentas é customizável, você pode usar configurações globais para alterar rapidamente temas e idiomas, ou adicionar complementos (Addons) feitos pela comunidade.

### Addons ou complementos

Addons (Complementos), são plugins que estendem a funcionalidade principal do Storybook, Você pode encontrá-los no painel de complementos, um local reservado na interface do Storybook abaixo do Canvas. Cada guia mostra os metadados, logs ou análise gerados para a história selecionada pelo complemento.

- Controls: Permitem que você interaja com os argumentos (props) de um componente dinamicamente.
- Actions: Ajudam a verificar se as iterações produzem as saídas corretas por meio de retorno das funções (events).

### Configurar

- O Storybook não é opinativo sobre como você gera ou carrega CSS.
- Você pode ter que configurar suas ferramentas CSS para o ambiente de renderização do Storybook. Aqui estão algumas dicas sobre o que pode ajudar:
    - Css-in-JS como styled-components e Emotion
    - @import CSS em components
    - Estilos importados globais
    - Css externo ou webfonts no <head>
    - Carregar fontes ou imagens de um diretório local

## Como escrever historias

- 
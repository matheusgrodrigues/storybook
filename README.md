# storybook

- [Introducao](#introducao)
- [O que é uma história](#o-que-e-uma-historia)
    - [Procurar história](#procurar-historia)
    - [Barras de ferramentas](#barras-de-ferramentas)
    - [Addons (Complementos)](#addons-ou-complementos)
    - [Configurar](#configurar)
- [Como escrever histórias](#como-escrever-historias)
- [Documentos](#documentos)
    - [MDX](#mdx)
- [Testes](#testes)
- [Publicar storybook](#publicar-storybook)
- [Integrações com design](#integracoes-com-design)
- [Deploy no Chromatic](https://630ba585e462553a7ef93d70-iksemgvage.chromatic.com/?path=/story/matheus-buttons-storybook--page)

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

- Storybook usa o termo genérico argumentos (args) ao se referir em React Props.
- As histórias são definidas em um arquivo de histórias que fica ao lado do arquivo do componente. O arquivo de história é apenas para desenvolvimento e não será incluído em seu pacote de produção. 
    - Button.js | ts | jsx | tsx
    - Button.stories.js | ts | tsx | mdx
- Definimos histórias de acordo com o [Component Story Format - CSF](https://storybook.js.org/docs/react/api/csf), um padrão baseado em módulo ES6 que é fácil de escrever e portátil entre ferramentas.
- Os principais ingredientes são a exportação padrão que descreve componente e as exportações nomeadas que descrevem as histórias.

## Documentos

- Ao escrever histórias de componentes durante o desenvolvimento, você também cria documentação básica para revisar mais tarde.
- O storybook oferece ferramentas para expandir a documentação básica com prosa e layout que apresentam seus componentes e histórias com destaque. Isso permite que você crie diretrizes de uso da biblioteca de interface do usuário, sites de sistema de design e muito mais.

### MDX

- MDX é um formato de arquivo padrão que combina Markdown com JSX.
- Isso significa que você pode utilizar a sintaxe concisa do Mardown (como #titulo) para sua documentação, escrever histórias que compilam para o formato de história do nosso componente e incorporar blocos de componentes JSX livremente em qualquer ponto do arquivo. Tudo de uma vez.


## Testes

- O Storybook fornece um ambiente limpo para testar componentes isoladamente.
- As histórias facilitam a exploração de um componente em todas as suas variações, não importa o quão complexo seja.
- O Storybook tembém vem com ferramentas e um ecossistema JavaScript maior para expandir a cobertura de testes como por ex: Test runner, testes visuais, testes de acessibilidade, testes de iteração, testes instantâneos etc...

## Publicar storybook

- As equipes publicam o Storybook online para revisar e colaborar nos trabalhos em andamento.
- Isso permite que desenvolvedores, designers, PMs e outras partes interessadas verifiquem se a itnerface do usuário está correta sem tocarn o código ou exigit um ambiente de desenvolvimento local.
- O Storybook criará um aplicativo web estático capaz de ser servido por qualquer servidor web.
- Depois de criar o Storybook estático, você pode publica-lo em seu host.
- Recomendamos o [Chromatic](https://www.chromatic.com/) um serviço de publicação gratuito para Storybook que documenta versões, versiona e indexa seus componentes de interface de usuário com segurança na nuvem.
- Você pode configurar o CI para publicar os componentes automaticamente.

## Integracoes com design

- O Storybook se integra a ferramentas de design para acelerar seu fluxo de trabalho de desenvolvimento.
- Isso ajuda a depurar inconsistências no início do processo de design, descobrir componentes existentes para reutilização e comparar designs com histórias.
- O Storybook possui plugins que se integram com os diversoes softwares do mercado, como figma, adobe xd, sketch entre outros...


# Candidato Ideal - Quiz

Este projeto é um quiz interativo que ajuda os usuários a descobrir qual candidato à prefeitura de São Paulo melhor corresponde às suas opiniões com base nas propostas de cada candidato em diferentes áreas, como educação, saúde, segurança, transporte e meio ambiente.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **HTML/CSS**: Para estruturar e estilizar o projeto.
- **Google Analytics 4 (GA4)**: Para monitorar eventos e interações dos usuários.

## Funcionalidades

- O quiz exibe uma série de questões baseadas em áreas de políticas públicas e as propostas de diferentes candidatos.
- O usuário escolhe a proposta que mais combina com ele, e ao final o quiz revela qual candidato teve mais votos.
- O progresso é mostrado através de uma barra de pontos que representa o número de perguntas completadas.
- Tagueamento GA4 para monitoramento das interações no quiz.
- Opção de compartilhar o resultado via WhatsApp.

## Estrutura do Projeto

- **`Quiz.js`**: Componente principal que controla o fluxo do quiz.
- **`Question.js`**: Componente responsável por exibir cada pergunta e as opções de resposta. A resposta é selecionada ao clicar diretamente em uma das opções.
- **`ResultScreen.js`**: Exibe o resultado final do quiz e permite o compartilhamento via WhatsApp.
- **`StartScreen.js`**: Tela inicial com uma frase e um botão para começar o quiz.
- **`source.js`**: Contém os dados dos candidatos e suas propostas.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/quiz-candidato-ideal.git
   cd quiz-candidato-ideal

2. Clone este repositório:
    ```
    npm install

3. Clone este repositório:
    ```
    npm start

4. O aplicativo será executado em http://localhost:3000.


## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera uma versão otimizada do aplicativo para produção.

## Como Funciona

1. O usuário inicia o quiz clicando no botão de "Começar".
2. Para cada pergunta, o usuário deve selecionar uma das propostas clicando diretamente na opção.
3. A barra de progresso acima das perguntas indica quantas perguntas o usuário já completou.
4. Ao final, o candidato com mais votos é revelado, e o usuário pode compartilhar o resultado via WhatsApp.

## Google Analytics 4

O Google Analytics 4 está integrado para rastrear os eventos do quiz, incluindo:

- O início do quiz.
- O término do quiz.
- O candidato mais votado no final do quiz.

### Para configurar seu próprio GA4:

1. Adicione o código do Google Analytics 4 no arquivo `public/index.html`.
2. Certifique-se de substituir o ID de acompanhamento pelo seu próprio.

## Contribuindo

Contribuições são bem-vindas! Se você tiver alguma sugestão ou encontrar algum bug, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob os termos da [Licença MIT](LICENSE).
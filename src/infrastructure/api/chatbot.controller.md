# Funcionalidade: Gerenciar interações do usuário

Como um controlador de chatbot,
Eu quero gerenciar interações do usuário,
Para fornecer respostas através da API.

## Cenário: Receber mensagem do usuário e responder

- Dado que o usuário envia a mensagem "olá" através da API
- Quando o controlador processar a mensagem
- Então a resposta da API deve ser "Olá! Como posso ajudar?"

## Cenário: Pergunta não compreendida

- Dado que o usuário envia a mensagem "O que você sabe sobre gameplays diferenciadas" através da API
- Quando o controlador processar a mensagem
- Então a resposta da API deve ser "Desculpe, não sei nada sobre isso"

Data: 20/06/2025 10:00

Autor: Matheus Pereira

Descrição:
    nesse bloco de notas temos uma variedade de comandos e exemplos da linguagem MarkDown.
    linguagem MarkDown: facil de aprender e usar aplicavel em: README.md, ISSUES e PULL REQUEST'S,
    podemos converter facilmente para HTML.

OBS: todos esses comandos foram do curso de Git e GitGub do Canal Curso em Vídeo.

Playlist do curso: https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA

------------------------------------INICIO DO COMANDOS--------------------------------------

Comandos:
    definir tamanho do titulo: 
        # titulo 01 <-- ESSE E O MAIOR
        ## titulo 02 <-- ESSE E O MEDIO
        ### titulo 03 <-- ESSE E O MENOR

    colocar linha abaixo ou acima do titulo: ASSIM --- ou ***
    colocar texto em NEGRITO: ASSIM **seu texto aqui** ou __seu texto aqui__
    colocar texto em ITALICO: ASSIM *seu texto aqui* ou _seu texto aqui_
    colocar uma linha no meio do texto: ~~seu texto aqui~~
    misturando negrito com italico: __*seu texto aqui*__ esse texto estara em negrito e italico
    misturando negrito com italico e com a linha no meio: ~~__*seu texto aqui*__~~ 
    esse texto estara em negrito e italico e com a linha no meio

    Criando Listas Numeradas:
    OBS: mesmo que você coloque numeros nas sub-listas esses numeros seram trocados pela letra 'i' e sera sequencial
        1. 1º lista
            1. 1º sub-lista
            2. 2º sub-lista
            3. 3º sub-lista
        2. 2º lista
            1. 1º sub-lista
            2. 2º sub-lista
            3. 3º sub-lista
        3. 3º lista
            1. 1º sub-lista
            2. 2º sub-lista
            3. 3º sub-lista

    Criando Listas Demarcadas:
    OBS: o caractera pode ser '*' ou '-'
        * lista
            - 1º sub-lista
            - 2º sub-lista
            - 3º sub-lista
        * lista
            - 1º sub-lista
            - 2º sub-lista
            - 3º sub-lista
        * lista
            - 1º sub-lista
            - 2º sub-lista
            - 3º sub-lista


    Criando Listas de Tarefas:
    OBS: ao finalizar uma tarefa, basta colocar um 'X' dentro do colchetes, que ele ira aparecer um 'checkbox' marcado
        - [ ] Finalizar o cadastro
        - [ ] Fazer os pagamentos
        - [ ] Enviar os Emails

    Colocando Imagens:
        Notação: ![img_description](url_image_file)
        OBS: entre colchetes nós colocamos a descrição da imagem, e oque esta entre parenteses colocamos a URL da imagem

    Criando Links:
        Notação: [link_description](link_url)

    Criando tabelas:
        OBS: para criar as tabelas usando o MarkDown usamos o seguindes caracteres: (PIPE |), (TRAÇO --)
        Exemplo:
            ID | NOME | NOTA <== CABEÇALHO
            ---|---|---      <== LINHA DIVISORIA
            1 | Gustavo | 9  <== DADOS DESSA TABELA 
            2 | Matheus | 10
            3 | Renato  | 8
        
        ALINHAMENTOS: No exemplo abaixo, criamos uma nova tabela com alguns alinhamentos. 
            Ano | Curso | Professor | Aulas
            :---: | ---: | :--- | :---:
            2013 | HTML+CSS+JS | Gustavo Guanabara | 36
            2018 | Hardware | Alfredo Jr | 28
            2019 | Linux | Ricardo Pinheiro | 15
        
        TIPOS DE ALINHAMENTOS:
            --- Formatação padrão (alinhamento à esquerda)
            :--- Alinhamento à esquerda
            :---: Conteúdo Centralizado
            ---: Alinhamento à direit



    Criando comando no Comentario, para uma unica linha ou varias linhas:
        OBS: para que isso funcione devemos colocar o comando entre Crases [` comando aqui `] para uma unica linha,
        para varias devemos usar 3 Crases [``` comando aqui ```]

        Exemplo uma linha:
            Não entendo para que serve o comando `document.getElementById()` da linguagem JS
        
        Exemplo varias linhas:
        Olha meu programa em Python
        
        ```
            num = int(input('Digite um valor: ') 
            if num % 2 == 0: 
                print(f'O valor (num) é PAR') 
            else: 
                print(f'O valor (num) é ÍMPAR')        
        ```


# ANOTAÇÕES E COMANDOS DE GIT PARA VOCÊ PRATICAR
## TODOS ESSES COMANDOS FORAM ORGANIZADOS PARA FACILITAR SEU APRENDIZADO NO DIA Á DIA
### Nesse repositório, temos uma pequena aplicação e um bloco de notas com vários comandos para aprender e praticar Git.

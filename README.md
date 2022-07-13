<div align="center">

  ![Netlify Next.js Blog Template designed by Bejamas](https://dotgroup.com.br/wp-content/uploads/2022/03/dotgrouplogo.png)

  # Prova Front-End Pleno
</div>

### Objetivos Realizados

- Front-end desenvolvido de acordo com os arquivos PSD da prova;
- Resultado responsivo com versão mobile deve condizente ao arquivo PSD mobile;
- Código semântico, bem organizado, estruturado e correto;

<img 
  style="max-height: 28rem"
  src="https://user-images.githubusercontent.com/83969467/178772989-5e549b00-4d44-4e3a-88c8-e964f127b024.png"
  title="Thumb do projeto"
  alt="Thumb do projeto"
/>

### Observações
- Nenhum framework ou pré processadores CSS foram utilizados;
- O conteúdo final está totalmente funcional na última e penúltima versão dos principais navegadores, como o Google Chrome, Mozilla Firefox, Safari e Microsoft Edge, e Opera.
- Todas as funcionalidades requisitadas pela prova foram implementadas no projeto.

### Diferencial:
- O projeto faz o uso do automatizador de tarefas Gulp Js, sendo utilizado mais de 10 plugins nativos do gulp para operar nas funções;

- Efeitos animados em todos os elementos interativos:

  https://user-images.githubusercontent.com/83969467/178779720-30f5ea5f-431f-49e4-8e69-e2b5583aa713.mp4

  [alt: vídeo de ilustração dos principais efeitos animados]

<br/>



## Iniciando as Tarefas Gulp

Execute o seguinte comando em seu terminal para instalar as dependências gulp:

```
npm install
```

Estão disponíveis para uso as seguintes **tasks**: <br/>

- `gulp default` ou `gulp`

  - Constrói a pasta **dist** para receber o diretório **src** otimizado. A otimização oferece: arquivos de imagem, estilo e script minificados, concatenados, compilados, transpilados, com sourcemap e prefixes.

- `gulp watch`

  - "Assiste" a pasta **src**, logo, qualquer mudança dentro do diretório executará a tarefa `glup default`. É recomendado NÃO criar nenhum arquivo fora da pasta **assets**.
  
- `gulp clsdist` 

  - Deleta a pasta **dist**.

- `gulp imgmin`

  -  Minifica imagens em PNG, JPEG, GIF e SVG. Use ela apenas se estiver tendo problemas com o tinypng, pois o minificador do tiny já é executado por padrão a partir da **task** `gulp default`.

<br/>

## Performance

Como forma de mostrar o quão poderoso é o Gulp Js, logo abaixo estão os resultados de seu uso dentro do sistema:

<img 
  style="max-height: 24rem"
  src="https://user-images.githubusercontent.com/83969467/178782499-fca4d03d-1366-4a97-927c-cef61e4c1b90.png"
  title="Comparação entre a pasta 'src' e 'dist'"
  alt="Imagem de comparação entre a pasta 'src' e 'dist'"
/>

Podemos dizer que a pasta **dist** é o resultado da otimização completa sobre a pasta **src**, visto que, tivemos um ganho de **70% de performance** ao calcularmos a diferença entre o ***peso*** dos dois diretórios da aplicação.

Além disso, o total de **18** arquivos foi reduzido em **10**, economizando os **requests** da página e aumentando sua velocidade de carregamento. Isso tudo devido à concatenação de arquivos CSS e JS.

<br/>

## Solução para "primordials error"

Caso apareça o erro ***"ReferenceError: primordials is not defined"*** ao executar alguma **task**, realize os seguintes passos solucioná-lo:

- **Passo 1** - crie um arquivo json chamado npm-shrinkwrap (caso ele já exista, apague-o e crie outro);
- **Passo 2** - cole o seguinte código nele:

``` json
{
  "dependencies": {
    "graceful-fs": {
        "version": "4.2.2"
     }
  }
}
```

- **Passo 3** - execute `npm install` em seu terminal, e o erro sumirá.







## Desafio 01 - React JS

- [Visão geral](#visao-geral)
  - [O desafio](#o-desafio)
- [Meu processo](#meu-processo)
  - [Built with](#built-with)
  - [Oque eu aprendi](#oque-eu-aprendi)
  - [Desenvolvimento continuo](#desenvolvimento-continuo)
- [Author](#author)


## Visão geral
Esse é o primeiro desafio da semana 01 do Ignite, na trilha react JS da @rocketseat

### O desafio
O desafio era criar as funcionalidades do ToDo.
- Criar uma nova tarefa
- Criar um toggle para marcar a tarefa como completada
- Deletar uma tarefa em especifica

## Meu processo
Eu já tinha um prévio conhecimento, soube como começar e ir lendo o código para saber o que deveria ser feito e como ser feito, porém essa era a primeira vez com TS, deu para fazer algumas coisas, com o tempo vou me acostumando.

### Built with
- ReactJS
- TypeScript
- SASS

### Oque eu aprendi
Olha eu tive algumas partes que foram um desafio real, na parte 
```tsx
    setTasks(task => [...task, newTask])
```
Eu fiquei com dúvida sobre esse código e como estava funcionando, levei um tempo para estudar e entender.

```tsx
const completeTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      } else {
        return task
      }
    })
```
Já nessa parte, a minha dificuldade se da no 'isComplete: !task.isComplete' esse foi o maior desafio para mim. Estou estudando esse código e vou entender!

### Desenvolvimento continuo
Como eu disse acima, vou estudar essas linhas e bem como a aplicação inteira, quero realmente entender esse código, copiar e colar é coisa de bot.
Vou entrar mais afundo no ReactJS e fazer mais desafios/projetos. A prática leva a perfeição.

## Author
- Linkedin - [@Júlio-Henrique](https://www.linkedin.com/in/julio-h)

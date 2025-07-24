# Refrigerante Slider

Um slider interativo de refrigerantes com animações suaves usando GSAP, HTML, CSS e JavaScript.

## 🎯 Descrição

Este projeto é um carousel de refrigerantes que permite navegar entre diferentes sabores (Morango, Laranja e Abacate) com transições animadas e elegantes. Cada slide apresenta uma fruta e seu respectivo refrigerante com fundos coloridos correspondentes.

## 🚀 Funcionalidades

- ✅ Navegação por botões (anterior/próximo)
- ✅ Navegação por teclas de seta (← →)
- ✅ Navegação por scroll do mouse
- ✅ Animações suaves com GSAP
- ✅ Design responsivo
- ✅ Efeitos de hover nos botões
- ✅ Transições de cores de fundo

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** (Flexbox, Transições, Media Queries)
- **JavaScript** (ES6+)
- **GSAP** (GreenSock Animation Platform)
- **Responsive Design**

## 📁 Estrutura do Projeto

```
refrigerante-slider/
│
├── index.html
├── style.css
├── script.js
└── image/
    ├── Morango-refrigerante.png
    ├── Morango-refrigerante-foregroundBlur.png
    ├── Laranja-refrigerante.png
    ├── Laranja-refrigerante-foregroundBlur.png
    ├── Abacate-refrigerante.png
    └── Abacate-refrigerante-foregroundBlur.png
```

## 🎨 Características Visuais

- **Cores dos fundos:**
  - Morango: `#ea3d41` (vermelho)
  - Laranja: `#e7a043` (laranja)
  - Abacate: `#2d5643` (verde escuro)

- **Animações:**
  - Entrada de texto com delay
  - Efeito "bounce" para as frutas
  - Efeito "elastic" para os refrigerantes
  - Transições suaves de fundo

## 🎮 Controles

| Ação | Método |
|------|--------|
| Próximo slide | Botão "→" ou Tecla "→" ou Scroll para baixo |
| Slide anterior | Botão "←" ou Tecla "←" ou Scroll para cima |

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** (> 1200px): Imagens maiores
- **Tablet/Mobile** (< 720px): Imagens menores e fontes ajustadas

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar GSAP CDN)

## 🚀 Como Usar

1. **Clone o repositório:**
```bash
git clone https://github.com/Bernardo-git-dev/refri-slider-js.git
```

2. **Abra o arquivo `index.html`** em seu navegador

3. **Ou utilize um servidor local:**
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

## 🎯 Personalização

### Adicionar Novos Refrigerantes

1. **Adicione o HTML no `index.html`:**
```html
<div class="item" style="--background: #sua-cor">
    <h1 class="title">Nome</h1>
    <div class="image-container">
        <img src="image/Nome-refrigerante-foregroundBlur.png" alt="Imagem" class="fruit" />
        <img src="image/Nome-refrigerante.png" alt="Imagem" class="refri" />
    </div>
</div>
```

2. **Adicione as imagens na pasta `image/`**

3. **O JavaScript se adapta automaticamente!**

### Personalizar Cores

Modifique as variáveis de cor no atributo `style` de cada `.item`:
```html
<div class="item" style="--background: #sua-nova-cor">
```

## ⚙️ Configurações de Animação

As animações podem ser personalizadas no arquivo `script.js`:

- **Duração das animações:** Ajuste os valores `duration`
- **Efeitos:** Modifique os valores `ease`
- **Delays:** Ajuste os valores `delay`
- **Sequência:** Modifique a ordem das animações na timeline

## 🐛 Problemas Conhecidos

- **Imagens não carregando:** Verifique se os caminhos das imagens estão corretos
- **Animações travando:** Certifique-se de que o GSAP está sendo carregado
- **Botões não funcionando:** Verifique o console do navegador por erros

## 📞 Suporte

Para reportar bugs ou solicitar features:

1. Abra uma issue no repositório
2. Descreva o problema com detalhes
3. Inclua printscreens se possível

## 📄 Licença

Este projeto é de código aberto e pode ser modificado e distribuído livremente.

## 👨‍💻 Autor

Desenvolvido com ❤️ por Bernardo Tati

## 🙏 Agradecimentos

- [GSAP](https://greensock.com/gsap/) por fornecer uma biblioteca de animação incrível
- Todas as fontes e ícones utilizados

---

**💡 Dica:** Para melhor experiência, utilize em telas maiores e com boa conexão à internet para carregar as imagens de alta qualidade.

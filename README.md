# Dr. Paulo Condé — Site Institucional Pneumologista

Projeto front-end completo, moderno, responsivo e profissional para o médico pneumologista **Dr. Paulo Condé**.

## Objetivo

Transmitir confiança, autoridade, acolhimento e segurança para pacientes que buscam atendimento pneumológico. O site apresenta o médico, os principais tratamentos, sintomas que merecem avaliação, depoimentos, dúvidas frequentes e conduz o visitante para o agendamento pelo WhatsApp.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis personalizadas
- JavaScript puro (vanilla JS)
- [Lucide Icons](https://lucide.dev/) (CDN)
- Google Fonts: Playfair Display + Inter

Sem WordPress, sem frameworks, sem banco de dados, sem painel administrativo e sem backend.

## Estrutura de arquivos

```
index.html              # Página principal completa
css/
  └── style.css         # Estilos premium, responsivos e comentados
js/
  └── script.js         # Interatividade: menu, scroll, FAQ, carrossel, header
README.md               # Documentação do projeto
```

## Funcionalidades implementadas

1. **Cabeçalho fixo** com fundo branco translúcido e desfoque ao rolar; destaque no link ativo da seção visível.
2. **Menu mobile** hambúrguer com transição suave, overlay e fechamento ao clicar em link, no overlay ou pressionar `Esc`.
3. **Hero Section** em duas colunas: selo de credibilidade, título, texto, botões de ação, informações de CRM/RQE e cards flutuantes animados sobre a imagem.
4. **Faixa de credibilidade** com quatro diferenciais (atendimento particular, consultas presenciais, telemedicina, acompanhamento contínuo).
5. **Seção Sobre** com foto do médico, destaque de experiência, lista de diferenciais e botão de contato.
6. **Seção Tratamentos** com seis cards de especialidades (asma, DPOC, ronco/apneia, infecções, telemedicina, exames).
7. **Seção Sintomas** com oito cards indicando quando procurar um pneumologista.
8. **Seção Depoimentos** com carrossel responsivo, navegação por setas/dots e autoplay.
9. **Seção Dúvidas Frequentes** com acordeão interativo (apenas um item aberto por vez).
10. **Seção CTA** com fundo escuro e botão de WhatsApp destacado.
11. **Seção Contato** com endereço, telefone, horário e mapa integrado.
12. **Rodapé** completo com links, informações e aviso médico.
13. **Botão flutuante do WhatsApp** em todas as páginas.
14. **Animações de entrada** suaves ao rolar a página (Intersection Observer).
15. **Scroll suave** nos links internos, compensando a altura do header.
16. **Responsividade completa** para desktop, notebook, tablet e celular.
17. **Acessibilidade**: labels ARIA, foco visível, suporte a `prefers-reduced-motion`.

## Como visualizar

1. Abra o arquivo `index.html` diretamente em qualquer navegador moderno.
2. Para testar responsividade, use as ferramentas de desenvolvedor do navegador (Ctrl+Shift+M / Cmd+Shift+M).

## Personalização rápida

- **Cores**: edite as variáveis CSS no início de `css/style.css`.
- **Textos**: edite diretamente em `index.html`.
- **WhatsApp**: substitua `5534999999999` pelo número correto e ajuste a mensagem padrão nos links do arquivo `index.html`.
- **Imagens**: substitua as URLs do Unsplash por fotos reais do médico e consultório.
- **Logotipo**: troque o ícone de pulmões por uma imagem de logo dentro do `.logo-icon` ou ajuste o elemento `img`.
- **Mapa**: substitua o `src` do iframe do Google Maps pelo endereço real do consultório.
- **Depoimentos**: adicione/altere os cards dentro de `.testimonials-track`.
- **Dúvidas**: adicione/altere os itens `.faq-item`.

## Links e âncoras

- `#inicio` — Hero
- `#sobre` — Apresentação do médico
- `#tratamentos` — Tratamentos
- `#sintomas` — Sintomas
- `#depoimentos` — Depoimentos
- `#duvidas` — Dúvidas frequentes
- `#contato` — Contato e localização

## Próximos passos recomendados

- Substituir imagens de placeholder por fotos profissionais do Dr. Paulo Condé.
- Inserir número de WhatsApp, CRM e RQE reais.
- Configurar endereço e mapa do consultório.
- Adicionar formulário de contato (requer backend ou serviço de terceiros, como Formspree).
- Implementar blog ou área de artigos para SEO (pode ser feito com páginas HTML adicionais).
- Otimizar imagens para WebP e definir `srcset` para telas de alta densidade.
- Adicionar Schema.org/JSON-LD para médico local e SEO local.

## Notas importantes

- O site é informativo e não substitui a consulta médica. Inclua aviso/disclaimer conforme a legislação médica local.
- As imagens utilizadas são placeholders do Unsplash e devem ser trocadas antes da publicação oficial.
- O mapa exibido é ilustrativo; substitua pelo embed correto do Google Maps.

---

© 2026 Dr. Paulo Condé — Projeto front-end para médico pneumologista.

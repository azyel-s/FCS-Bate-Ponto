# FCS Bate Ponto - Spazio Ouro Verde

Sistema de registro de ponto com câmera para funcionários.

## Vercel Speed Insights

Este projeto está configurado com Vercel Speed Insights para monitoramento de performance.

### Como funciona

O Speed Insights foi adicionado ao arquivo HTML principal (`FCS Bate Ponto.html`) através de um script que:
1. Inicializa a fila de eventos do Speed Insights (`window.si`)
2. Carrega o script de rastreamento do Vercel quando implantado

### Para habilitar completamente

1. Faça deploy do projeto no Vercel
2. No dashboard do Vercel, vá até o seu projeto
3. Navegue até "Speed Insights" na barra lateral
4. Clique em "Enable" para ativar o monitoramento

Após a ativação, o Speed Insights começará a coletar dados de performance automaticamente.

### Dependências

O projeto inclui o pacote `@vercel/speed-insights` no `package.json` para referência e possíveis integrações futuras.

## Desenvolvimento Local

Para servir o arquivo HTML localmente, você pode usar qualquer servidor HTTP estático, por exemplo:

```bash
npx http-server
```

ou

```bash
python -m http.server 8000
```

Nota: O Speed Insights só coleta dados em produção (quando deployed no Vercel).
